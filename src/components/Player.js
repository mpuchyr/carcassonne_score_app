import React, { useContext } from 'react';
import GameContext from '../context/game-context';
import { NavLink } from 'react-router-dom';

const Player = (props) => {
    const { game } = useContext(GameContext)

    const destination = `/players/${props.match.params.id}/manual`
    
    return (
        <div>
            <h1>Player #{props.match.params.id} Placeholder</h1>
            <NavLink to={destination}>Manual Point Entry</NavLink>
            <button onClick={() => console.log(game)}>Click Me</button>
        </div>

    )
}

export default Player