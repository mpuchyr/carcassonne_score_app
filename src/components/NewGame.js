import React, { useContext, useState } from 'react';
import { v4 as uuid } from 'uuid';
import moment from 'moment';
import GameContext from '../context/game-context';
import { startNewGame } from '../actions/actions';

const NewGame = (props) => {
    const { dispatch } = useContext(GameContext)

    const savedPlayers = JSON.parse(
        localStorage.getItem('players')).sort((savedPlayer1, savedPlayer2) => {
            if (savedPlayer1.name < savedPlayer2.name ) {
                return -1
            } else if (savedPlayer1.name > savedPlayer2.name) {
                return 1
            } else {
                return 0
            }
        }) 
        || []


    const blankPlayerTemplate = {id: '', name: '', score: 0}
    const colors = ['black', 'blue', 'green', 'pink', 'red', 'yellow']
    
    const [currentGame, setCurrentGame] = useState({id: uuid(), players: [], history: [], gameDate: moment()})
    const [playerToAdd, setPlayerToAdd] = useState(blankPlayerTemplate)
    const [colorOptions, setColorOptions] = useState(colors)
    const [playerOptions, setPlayerOptions] = useState(savedPlayers)

    const onNameChange = (e) => {
        setPlayerToAdd({
            ...playerToAdd,
            id: uuid(),
            name: e.target.value
        })
    }

    const onPlayerChange = (e) => {
        if (!!e.target.value) {
            const playerInfo = JSON.parse(e.target.value)
            console.log(playerInfo)
            setPlayerToAdd({
                ...playerToAdd,
                id: playerInfo.id,
                name: playerInfo.name
            })
        }
    }

    const onColorChange = (e) => {
        setPlayerToAdd({
            ...playerToAdd,
            color: e.target.value
        })
    }

    const onAddPlayer = (e) => {
        e.preventDefault()
        if (!!playerToAdd.name && !!playerToAdd.color) {
            setCurrentGame({
                ...currentGame,
                players: [...currentGame.players, playerToAdd]
            })
            const playerToSave = { id: playerToAdd.id, name: playerToAdd.name}
            let playerFound = false
            for (let i = 0; i < savedPlayers.length; i++) {
                if (savedPlayers[i].id === playerToSave.id) {
                    console.log(savedPlayers[i].id)
                    playerFound = true
                    break
                }
            }
            console.log(playerFound)
            if ( playerFound === false ){
                const playersToSave = JSON.stringify([ ...savedPlayers, playerToSave])
                localStorage.setItem('players', playersToSave)
            }
            setPlayerOptions(playerOptions.filter(playerOption => playerOption.id !== playerToAdd.id))
            setColorOptions(colorOptions.filter(color => color !== playerToAdd.color))
            setPlayerToAdd(blankPlayerTemplate)
        } else {
            alert('Player must have both name and color!')
        }
    }

    const colorSelection = () => {
        return (
            colorOptions.map(color => <option key={color} value={color}>{color.charAt(0).toUpperCase() + color.slice(1)}</option>)
        )
    }

    const playerSelection = () => {
        return (
            playerOptions.map(playerOption => {
                console.log(playerOption)
                return (
                    <option key={playerOption.id} value={JSON.stringify(playerOption)}>{playerOption.name}</option>
                )
            })
        )
    }

    const showPlayersInGame = () => {
        return (<ul>
            {currentGame.players.map(player => 
                <li key={player.name}>
                    {player.name} {player.color}
                    <button onClick={() => removePlayer(player.id, player.color)}>Remove</button>
                </li>
            )}
        </ul>)
    }

    const removePlayer = (playerId, color) => {
        setCurrentGame({
            ...currentGame,
            players: currentGame.players.filter(player => player.id !== playerId)
        })
        const playerToAdd = savedPlayers.filter(savedPlayer => savedPlayer.id === playerId)[0]
        setPlayerOptions([...playerOptions, playerToAdd].sort((playerToAdd1, playerToAdd2) => {
            if (playerToAdd1.name < playerToAdd2.name) {
                return -1
            } else if (playerToAdd1.name > playerToAdd2.name) {
                return 1
            } else {
                return 0
            }
        }))
        setColorOptions([...colorOptions, color].sort())
    }

    const onDone = () => {
        dispatch(startNewGame(currentGame))
        props.history.push('/')
    }

    const goBack = () => {
        props.history.push('/')
    }

    return (
        <div>
            <h1>New Game</h1>
            <h2>Players</h2>
            {showPlayersInGame()}
            {currentGame.players.length < 6 && 
                <>
                <h2>Add Player</h2>
                <form onSubmit={onAddPlayer}>
                    <select onChange={onPlayerChange}>
                        <option value=''>Player</option>
                        {playerSelection()}
                    </select>
                    <input onChange={onNameChange} type="text" name="player_name" placeholder="Name" value={playerToAdd.name} />
                    <select onChange={onColorChange}>
                        <option value="" required>Color</option>
                        {colorSelection()}
                    </select>
                    <button>Add Player</button>
                </form>
                </>
            }
            <button onClick={onDone}>Start Game</button>
            <button onClick={goBack}>Back</button>
        </div>
    )
}

export default NewGame