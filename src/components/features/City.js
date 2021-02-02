import React, { useContext, useState } from 'react';
import { addPoints } from '../../actions/actions';
import GameContext from '../../context/game-context';

const City = ({ playerId, history }) => {
    const { dispatch } = useContext(GameContext)

    const [score, setScore] = useState(0)
    const [hasCathedral, setHasCathedral] = useState(false)
    const [endGame, setEndGame] = useState(false)

    const isEndGame = () => {
        setEndGame(!endGame)
    }

    const cityHasCathedral = () => {
        setHasCathedral(!hasCathedral)
    }

    const onChange = (e) => {
        if (hasCathedral && endGame) {
            setScore(0)
        } else if (hasCathedral) {
            setScore(e.target.value * 3)
        } else if (endGame) {
            setScore(e.target.value)
        } else {
            setScore(e.target.value * 2)
        }
    }

    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(addPoints(playerId, score))
        history.push('/')
    }
    
    return (
        <div>
            <h1>City</h1>
            <form onSubmit={onSubmit}>
                <label>Number of City Tiles, including Shields: </label>
                <input type="number" min="0" onChange={onChange}/>
                <input type="checkbox" onChange={cityHasCathedral}/>
                <label>City has a cathedral</label>
                <input type="checkbox" onChange={isEndGame}/>
                <label>This is the end game</label>
                <input type="checkbox" />
                <label>Feature is shared</label>
                <p>Total: {score}</p>
                <button>Add</button>
            </form>
        </div>
    )
}

export default City