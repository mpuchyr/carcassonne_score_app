import React, { useContext } from 'react';
import { addPoints } from '../../actions/actions';
import GameContext from '../../context/game-context';

const SharedFeature = ({ playerId }) => {
    const { game, dispatch} = useContext(GameContext)

    const players = game.players.filter(player => player.id !== playerId).sort()

    const displayPlayers = () => {
        return players.map(player => {
            return (
                <>
                    <label key={player.id}>{player.name}</label>
                    <input type="checkbox" />
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
            <button onClick={() => console.log(players)}>Log Players</button>
        </div>
    )
}

export default SharedFeature