import React, { useContext, useState } from 'react';
import Modal from 'react-modal';
import { addPoints, subtractPoints } from '../../actions/actions';
import GameContext from '../../context/game-context';
import SharedFeature from './SharedFeature';

const Manual = ({ playerId, history }) => {
    const [score, setScore] = useState(0)
    const [isShared, setIsShared] = useState(false)
    const [modalIsOpen, setIsOpen] = useState(false)

    const { game, dispatch } = useContext(GameContext)

    const openModal = () => {
        setIsOpen(true)
    }

    const closeModal = () => {
        setIsOpen(false)
    }

    const changeScore = (e) => {
        setScore(e.target.value)
    }

    const onAdd = () => {
        if (!isShared) {
            dispatch(addPoints(playerId, score))
            history.push('/')
        } else {
            openModal()
        }

    }

    const onSubtract = () => {
        dispatch(subtractPoints(playerId, score))
        history.push('/')
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
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    contentLabel="Shared Feature"
                >
                    <SharedFeature />
                </Modal>
            </div>
        </div>
    )
}

export default Manual