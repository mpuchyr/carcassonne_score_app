import React, { useContext, useState } from 'react';
import { addPoints } from '../../actions/actions';
import GameContext from '../../context/game-context'; 

const Road = ({ playerId, history }) => {
    const [score, setScore] = useState(0)
    const [hasInn, setHasInn] = useState(false)

    const { game, dispatch} = useContext(GameContext)

    const addRoads = (e) => {
        hasInn ? setScore(parseInt(e.target.value) * 2) : setScore(parseInt(e.target.value))
    }

    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(addPoints(playerId, score))
        history.push('/')
    }
    return (
        <div>
            <h1>Road Score Placeholder</h1>
            <form onSubmit={onSubmit}>
                <label>Number of Road Tiles: </label>
                <input type="number" min="0" onChange={addRoads}/>
                <input type="checkbox" />
                <label>Road has an Inn</label>
                <input type="checkbox" />
                <label>This feature is shared</label>
                <p>Total: {score}</p>
                <button>Add</button>
            </form>
        </div>
    )
}

export default Road