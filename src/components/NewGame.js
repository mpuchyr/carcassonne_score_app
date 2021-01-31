import React, { useContext, useState } from 'react';
import { v4 as uuid } from 'uuid';
import GameContext from '../context/game-context';
import { startNewGame } from '../actions/actions';

const NewGame = (props) => {
    const { dispatch } = useContext(GameContext)

    const blankPlayerTemplate = {id: uuid(), name: '', score: 0}
    const colors = ['black', 'blue', 'green', 'pink', 'red', 'yellow']
    
    const [currentGame, setCurrentGame] = useState({id: uuid(), players: []})
    const [playerToAdd, setPlayerToAdd] = useState(blankPlayerTemplate)
    const [colorOptions, setColorOptions] = useState(colors)

    const onNameChange = (e) => {
        setPlayerToAdd({
            ...playerToAdd,
            name: e.target.value
        })
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
        setColorOptions([...colorOptions, color].sort())
    }

    const onDone = () => {
        dispatch(startNewGame(currentGame))
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
        </div>
    )
}

export default NewGame