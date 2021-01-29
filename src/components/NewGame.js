import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

const NewGame = () => {
    const blankPlayerTemplate = {name: '', score: 0}
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
            {currentGame.players.map(player => <li key={player.name}>{player.name} {player.color}</li>)}
        </ul>)
    }

    return (
        <div>
            <h1>New Game Placeholder</h1>
            <p>{currentGame.id}</p>
            <h2>Add Player</h2>
            {showPlayersInGame()}
            <form onSubmit={onAddPlayer}>
                <input onChange={onNameChange} type="text" name="player_name" placeholder="Name" value={playerToAdd.name} />
                <select onChange={onColorChange}>
                    <option value="" required>Color</option>
                    {colorSelection()}
                </select>
                <button>Add Player</button>
            </form>
        </div>
    )
}

export default NewGame