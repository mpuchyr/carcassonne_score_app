import React, { useContext, useState } from 'react';
import { addPoints } from '../../actions/actions';
import GameContext from '../../context/game-context';

const Manual = ({ playerId, history }) => {
    const [score, setScore] = useState(0)

    const { game, dispatch } = useContext(GameContext)

    const changeScore = (e) => {
        setScore(e.target.value)
    }

    const onAdd = () => {
        dispatch(addPoints(playerId, score))
        history.push('/')
    }

    return (
        <div>
            <h1>Manual Point Entry</h1>
            <div>
                <input type="number" min="0" onChange={changeScore}/>
                <input type="checkbox" />
                <label>This feature is shared</label>
                <p>Total: {score}</p>
                <button onClick={onAdd}>Add</button>
                <button>Subtract</button>
                <button onClick={() => console.log(game)}>Click Me</button>
            </div>
        </div>
    )
}

export default Manual