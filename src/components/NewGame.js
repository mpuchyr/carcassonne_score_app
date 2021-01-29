import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

const NewGame = () => {
    const [currentGame, setCurrentGame] = useState({id: uuid(), players: []})
    const [playerToAdd, setPlayerToAdd] = useState({name: '', score: 0})
    
    const onNameChange = (e) => {
        setPlayerToAdd({
            ...playerToAdd,
            name: e.target.value
        })
    }

    return (
        <div>
            <h1>New Game Placeholder</h1>
            <p>{currentGame.id}</p>
            <h2>Add Player</h2>
            <form>
                <input onChange={onNameChange} type="text" name="player_name" placeholder="Name" value={playerToAdd.name} />
            </form>
        </div>
    )
}

export default NewGame