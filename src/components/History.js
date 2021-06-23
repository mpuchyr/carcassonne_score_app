import React, {useContext} from 'react';
import GameContext from '../context/game-context';

const History = ({ history }) => {
    const { game } = useContext(GameContext)

    const showScoreHistory = () => {
        if (game.history && game.history.length > 0) {
            return game.history.map((item, index) => {
                return (
                    <li key={index}>{item}</li>
                )
            })
        } else {
            return <h2>No history to show yet</h2>
        }

    }

    const goBack = () => {
        history.goBack()
    }

    return (
        <div>
            <h1>History Placeholder</h1>
            <ul>
                {showScoreHistory()}
            </ul>
            <button onClick={goBack}>Back</button>
        </div>
    )
}

export default History