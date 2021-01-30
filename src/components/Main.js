import React, { useContext } from 'react';
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
            <h1>Main Screen Placeholder</h1>
            {game.players && showAllPlayers()}
        </div>
    )
}

export default Main