import React from 'react';
import moment from 'moment';

const LoadGame = () => {
    const savedGames = JSON.parse(localStorage.getItem('savedGames'))

    const showSavedGames = () => {
        return savedGames.map(game => {
            return (
                <div key={game.id}>
                    <h2>{moment(game.gameDate).format('MMMM Do YYYY, h:mm a')}</h2>
                    <ul>
                        {game.players.map(player => {
                            return <li key={player.id}>{player.name}</li>
                        })}
                    </ul>
                    <button>Load</button>
                </div>
            )
        })
    }
    
    return (
        <div>
            <h1>Load Game Placeholder</h1>
            {showSavedGames()}
        </div>
    )
}

export default LoadGame