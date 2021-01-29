import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

const NewGame = () => {
    const blankPlayerTemplate = {name: '', score: 0}
    const [currentGame, setCurrentGame] = useState({id: uuid(), players: []})
    const [playerToAdd, setPlayerToAdd] = useState(blankPlayerTemplate)
    
    const onNameChange = (e) => {
        setPlayerToAdd({
            ...playerToAdd,
            name: e.target.value
        })
    }

    const onAddPlayer = (e) => {
        e.preventDefault()
        setCurrentGame({
            ...currentGame,
            players: [...currentGame.players, playerToAdd]
        })
        setPlayerToAdd(blankPlayerTemplate)
    }

    return (
        <div>
            <h1>New Game Placeholder</h1>
            <p>{currentGame.id}</p>
            <h2>Add Player</h2>
            <form onSubmit={onAddPlayer}>
                <input onChange={onNameChange} type="text" name="player_name" placeholder="Name" value={playerToAdd.name} />
                <button>Add Player</button>
            </form>
        </div>
    )
}

export default NewGame