import React, { useContext } from 'react';
import moment from 'moment';
import GameContext from '../context/game-context';

const Main = (props) => {
    const { game, dispatch } = useContext(GameContext)


    const showAllPlayers = () => {
        return (
            <ul>
                {game.players.map(player => {
                    return (
                        <li 
                            id={`player-${player.color}`}
                            className="player-score"
                            key={player.id}
                            onClick={() => props.history.push(`/players/${player.id}`)}
                        >
                            <h2 className="player-name-display">{player.name}</h2> 
                            <h2 className="player-score-display">{player.score}</h2>
                        </li>
                    )
                })}
            </ul>
        )
    }


    
    return (
        <div className="main-container">
            <h1>{moment(game.gameDate).format('MMMM Do YYYY, h:mm a')}</h1>
            {game.players && showAllPlayers()}
            {game.players.length === 0 && <button onClick={() => props.history.push('/newgame')}>New Game</button>}
            <button onClick={() => props.history.push('/history')}>History</button>

        </div>
    )
}

export default Main