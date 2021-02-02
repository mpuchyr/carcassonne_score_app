import React, { useContext } from 'react';
import { addPoints } from '../../actions/actions';
import GameContext from '../../context/game-context';

const SharedFeature = () => {
    const { game, dispatch} = useContext(GameContext)
    
    return (
        <div>
            <h1>Shared Feature Placeholder</h1>
        </div>
    )
}

export default SharedFeature