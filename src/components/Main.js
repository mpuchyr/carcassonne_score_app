import React, { useContext } from 'react';
import moment from 'moment';
import GameContext from '../context/game-context';

const Main = (props) => {
    const { game } = useContext(GameContext)


    const showAllPlayers = () => {
        return (
            game.players.map(player => {
                return (
                    <p 
                        key={player.id}
                        onClick={() => props.history.push(`/players/${player.id}`)}
                    >
                        {player.name} {player.color} {player.score}
                    </p>
                )
            })
        )
    }
    
    return (
        <div>
            <h1>{moment(game.gameDate).format('MMMM Do YYYY, h:mm:ss a')}</h1>
            {game.players && showAllPlayers()}
            <button onClick={() => props.history.push('/newgame')}>New Game</button>
            <button onClick={() => props.history.push('/history')}>History</button>
            <button onClick={() => console.log(game)}>Click Me</button>
        </div>
    )
}

export default Main