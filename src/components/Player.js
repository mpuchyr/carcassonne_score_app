import React, { useContext } from 'react';
import GameContext from '../context/game-context';

const Player = (props) => {
    console.log(props.match.params.id)
    const { game } = useContext(GameContext)
    console.log(game)
    
    return (
        <h1>Player #{props.match.params.id} Placeholder</h1>
    )
}

export default Player