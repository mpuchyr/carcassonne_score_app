import React, { useContext, useState } from 'react';
import { addPoints } from '../../actions/actions';
import GameContext from '../../context/game-context';

const SharedFeature = ({ playerId, score }) => {
    const { game, dispatch} = useContext(GameContext)
    const [playersToShare, setPlayersToShare] = useState([playerId])

    const players = game.players.filter(player => player.id !== playerId).sort()

    const onChange = (e) => {
        const id = e.target.value
        if (playersToShare.includes(e.target.value)) {
            setPlayersToShare(playersToShare.filter(playerId => playerId !== id))
        } else {
            setPlayersToShare([...playersToShare, id])
        }
    }

    const displayPlayers = () => {
        return players.map(player => {
            return (
                <>
                    <label key={player.id}>{player.name}</label>
                    <input type="checkbox" value={player.id} onChange={onChange}/>
                </ >
            )
        })
    }

    
    return (
        <div>
            <h1>Shared Feature Placeholder</h1>
            <form>
                {displayPlayers()}
            </form>
            <button onClick={() => console.log(game)}>Click Me</button>
            <button onClick={() => console.log(playerId)}>Player Id</button>
            <button onClick={() => console.log(players, score)}>Log Players</button>
            <button onClick={() => console.log(playersToShare)}>Show Players to Share</button>
        </div>
    )
}

export default SharedFeature