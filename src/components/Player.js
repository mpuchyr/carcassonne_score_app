import React, { useContext } from 'react';
import GameContext from '../context/game-context';
import { NavLink } from 'react-router-dom';

const Player = (props) => {
    console.log(props.match.params.id)
    const { game } = useContext(GameContext)
    console.log(game)

    const destination = `/players/${props.match.params.id}/manual`
    
    return (
        <div>
            <h1>Player #{props.match.params.id} Placeholder</h1>
            <NavLink to={destination}>Manual Point Entry</NavLink>
        </div>

    )
}

export default Player