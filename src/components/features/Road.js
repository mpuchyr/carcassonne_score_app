import React, { useContext, useEffect, useState } from 'react';
import { addPoints, saveGame } from '../../actions/actions';
import GameContext from '../../context/game-context'; 
import ModalContext from '../../context/modal-context';
import SharedFeatureModal from './SharedFeatureModal';

const Road = ({ playerId, history, currentFeature }) => {
    const [hasInn, setHasInn] = useState(false)
    const [isShared, setIsShared] = useState(false)
    const [points, setPoints] = useState(0)
    const [total, setTotal] = useState(0)

    const { game, dispatch} = useContext(GameContext)
    const { openModal } = useContext(ModalContext)

    useEffect(() => {
        changeTotal()
    })

    const changeTotal = () => {
        if (hasInn) {
            setTotal(points * 2)
        } else {
            setTotal(points)
        }
    }

    const featureIsShared = () => {
        setIsShared(!isShared)
    }

    const addRoads = (e) => {
        setPoints(e.target.value)
    }

    const roadHasAnInn = () => {
        setHasInn(!hasInn)
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
            <h1>Road Score Placeholder</h1>
            <form onSubmit={onSubmit}>
                <label>Number of Road Tiles: </label>
                <input type="number" min="0" onChange={addRoads}/>
                <input type="checkbox" onChange={roadHasAnInn}/>
                <label>Road has an Inn</label>
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

export default Road