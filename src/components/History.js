import React, {useContext} from 'react';
import GameContext from '../context/game-context';

const History = () => {
    const { game } = useContext(GameContext)
    return (
        <div>
            <h1>History Placeholder</h1>
            <button onClick={() => console.log(game)}>Click Me</button>
        </div>
    )
}

export default History