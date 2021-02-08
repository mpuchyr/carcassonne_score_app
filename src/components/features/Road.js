import React, { useContext, useState } from 'react';
import { addPoints, saveGame } from '../../actions/actions';
import GameContext from '../../context/game-context'; 
import ModalContext from '../../context/modal-context';
import SharedFeatureModal from './SharedFeatureModal';

const Road = ({ playerId, history, currentFeature }) => {
    const [score, setScore] = useState(0)
    const [hasInn, setHasInn] = useState(false)
    const [isShared, setIsShared] = useState(false)

    const { game, dispatch} = useContext(GameContext)
    const { openModal } = useContext(ModalContext)

    const featureIsShared = () => {
        setIsShared(!isShared)
    }

    const addRoads = (e) => {
        hasInn ? setScore(parseInt(e.target.value) * 2) : setScore(parseInt(e.target.value))
    }

    const roadHasAnInn = () => {
        setHasInn(!hasInn)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        if (!isShared) {
            dispatch(addPoints(playerId, score, currentFeature))
            dispatch(saveGame())
            history.push('/')
        } else {
            openModal()
        }
    }
    return (
        <div>
            <h1>Road Score Placeholder</h1>
            <form onSubmit={onSubmit}>
                <label>Number of Road Tiles: </label>
                <input type="number" min="0" onChange={addRoads}/>
                <input type="checkbox" onChange={roadHasAnInn}/>
                <label>Road has an Inn</label>
                <input type="checkbox" onChange={featureIsShared}/>
                <label>Feature is shared</label>
                <p>Total: {score}</p>
                <button>Add</button>
            </form>
            <SharedFeatureModal 
                playerId={playerId}
                history={history}
                featureName={currentFeature}
                score={score}
            />
        </div>
    )
}

export default Road