import React, { useContext, useState } from 'react';
import { addPoints } from '../../actions/actions';
import GameContext from '../../context/game-context';
import SharedFeatureModal from './SharedFeatureModal';

const City = ({ playerId, history }) => {
    const { dispatch } = useContext(GameContext)

    const [score, setScore] = useState(0)
    const [hasCathedral, setHasCathedral] = useState(false)
    const [endGame, setEndGame] = useState(false)
    const [isShared, setIsShared] = useState(false)

    const [modalIsOpen, setIsOpen] = useState(false)


    const openModal = () => {
        setIsOpen(true)
    }

    const closeModal = () => {
        setIsOpen(false)
    }

    const featureIsShared = () => {
        setIsShared(!isShared)
    }

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
        if (!isShared) {
            dispatch(addPoints(playerId, score))
            history.push('/')
        } else {
            openModal()
        }

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
                <input type="checkbox" onChange={featureIsShared}/>
                <label>Feature is shared</label>
                <p>Total: {score}</p>
                <button>Add</button>
            </form>
            <SharedFeatureModal 
                playerId={playerId}
                history={history}
                modalIsOpen={modalIsOpen}
                closeModal={closeModal}
                score={score}
            />
        </div>
    )
}

export default City