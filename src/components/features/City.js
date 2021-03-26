import React, { useContext, useEffect, useState } from 'react';
import { addPoints, saveGame } from '../../actions/actions';
import GameContext from '../../context/game-context';
import ModalContext from '../../context/modal-context';
import SharedFeatureModal from './SharedFeatureModal';

const City = ({ playerId, history, currentFeature }) => {
    const { dispatch } = useContext(GameContext)
    const { openModal } = useContext(ModalContext)

    const [points, setPoints] = useState(0)
    const [total, setTotal] = useState(0)

    const [hasCathedral, setHasCathedral] = useState(false)
    const [endGame, setEndGame] = useState(false)
    const [isShared, setIsShared] = useState(false)


    useEffect(() => {
        changeTotal()
    })

    const featureIsShared = () => {
        setIsShared(!isShared)
    }

    const isEndGame = () => {
        setEndGame(!endGame)
    }

    const cityHasCathedral = () => {
        setHasCathedral(!hasCathedral)
    }

    const changeTotal = () => {
        if (hasCathedral && endGame) {
            setTotal(points * 0)
        } else if (hasCathedral) {
            setTotal(points * 3)
        } else if (endGame) {
            setTotal(points)
        } else {
            setTotal(points * 2)
        }
    }

    const onChange = (e) => {
        setPoints(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        if (!isShared) {
            dispatch(addPoints(playerId, total, currentFeature))
            dispatch(saveGame())
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
                <p>Total: {total}</p>
                <button>Add</button>
            </form>
            <SharedFeatureModal 
                playerId={playerId}
                history={history}
                featureName={currentFeature}
                score={total}
            />
        </div>
    )
}

export default City