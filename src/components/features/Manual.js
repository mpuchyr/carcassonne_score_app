import React, { useContext, useState } from 'react';
import Modal from 'react-modal';
import { addPoints, subtractPoints, saveGame } from '../../actions/actions';
import GameContext from '../../context/game-context';
import ModalContext from '../../context/modal-context';
import SharedFeatureModal from './SharedFeatureModal';

const Manual = ({ playerId, history, currentFeature }) => {
    const [score, setScore] = useState(0)
    const [isShared, setIsShared] = useState(false)
    const [modalIsOpen, setIsOpen] = useState(false)
    const [isSubtracted, setIsSubtracted] = useState(false)

    const { game, dispatch } = useContext(GameContext)
    const { openModal } = useContext(ModalContext)

    // const openModal = () => {
    //     setIsOpen(true)
    // }

    // const closeModal = () => {
    //     setIsOpen(false)
    // }

    const changeScore = (e) => {
        setScore(e.target.value)
    }

    const onAdd = () => {
        if (!isShared) {
            dispatch(addPoints(playerId, score, 'manual entry'))
            dispatch(saveGame())
            history.push('/')
        } else {
            openModal()
        }

    }

    const onSubtract = () => {
        setIsSubtracted(true)
        if (!isShared) {
            dispatch(subtractPoints(playerId, score))
            dispatch(saveGame())
            history.push('/')
        } else {            
            openModal()
        }

    }

    const featureIsShared = () => {
        setIsShared(!isShared)
    }

    return (
        <div>
            <h1>Manual Point Entry</h1>
            <div>
                <input type="number" min="0" onChange={changeScore}/>
                <input type="checkbox" onChange={featureIsShared}/>
                <label>This feature is shared</label>
                <p>Total: {score}</p>
                <button onClick={onAdd}>Add</button>
                <button onClick={onSubtract}>Subtract</button>
                <button onClick={() => console.log(game)}>Click Me</button>
                <button onClick={() => console.log(isShared)}>Check isShared</button>
                <SharedFeatureModal 
                    playerId={playerId}
                    featureName={currentFeature}
                    history={history}
                    score={score}
                    isSubtracted={isSubtracted}
                />
            </div>
        </div>
    )
}

export default Manual