import React, {useContext} from 'react';
import GameContext from '../context/game-context';

const History = () => {
    const { game } = useContext(GameContext)

    const showScoreHistory = () => {
        return game.history.map((item, index) => {
            return (
                <li key={index}>{item}</li>
            )
        })
    }

    return (
        <div>
            <h1>History Placeholder</h1>
            <ul>
                {showScoreHistory()}
            </ul>
            <button onClick={() => console.log(game)}>Click Me</button>
        </div>
    )
}

export default History