import React, { useContext } from 'react';
import moment from 'moment';
import GameContext from '../context/game-context';

const Main = (props) => {
    const { game, dispatch } = useContext(GameContext)


    const showAllPlayers = () => {
        return (
            game.players.map(player => {
                return (
                    <p id={`player-${player.color}`}
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
            {game.players.length === 0 && <button onClick={() => props.history.push('/newgame')}>New Game</button>}
            <button onClick={() => props.history.push('/history')}>History</button>
            <button onClick={() => console.log(game)}>Click Me</button>

        </div>
    )
}

export default Main