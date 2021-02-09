import React, { useContext } from 'react';
import moment from 'moment';
import { loadGame } from '../actions/actions';
import GameContext from '../context/game-context';

const LoadGame = ({ history }) => {
    const { dispatch } = useContext(GameContext)
    let savedGames = JSON.parse(localStorage.getItem('savedGames'))
    



    const onGameLoad = (game) => {
        dispatch(loadGame(game))
        history.push('/')
    }

    const onGameDelete = (game) => {
        const newSavedGames = JSON.stringify(savedGames.filter(savedGame => savedGame.id !== game.id))
        localStorage.setItem('savedGames', newSavedGames)
        window.location.reload(false)
    }

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
                    <button onClick={() => onGameLoad(game)}>Load</button>
                    <button onClick={() => onGameDelete(game)}>Delete</button>
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