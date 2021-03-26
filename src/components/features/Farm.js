import React, { useContext, useEffect, useState } from 'react';
import { addPoints, saveGame } from '../../actions/actions';
import GameContext from '../../context/game-context'; 
import ModalContext from '../../context/modal-context';
import SharedFeatureModal from './SharedFeatureModal';

const Farm = ({ playerId, history, currentFeature }) => {
    const [isShared, setIsShared] = useState(false)
    const [hasPig, setHasPig] = useState(false)
    const [castlePoints, setCastlePoints] = useState(0)
    const [cityPoints, setCityPoints] = useState(0)
    const [total, setTotal] = useState(0)

    const { dispatch } = useContext(GameContext)
    const { openModal } = useContext(ModalContext)

    useEffect(() => {
        changeTotal()
    })

    const changeTotal = () => {
        let totalPoints = 0
        if (hasPig) {
            totalPoints = (cityPoints * 4) + (castlePoints * 5)
            setTotal(totalPoints)
        } else {
            totalPoints = (cityPoints * 3) + (castlePoints * 4)
            setTotal(totalPoints)
        }
    }


    const featureIsShared = () => {
        setIsShared(!isShared)
    }


    const addCastlePoints = (e) => {
        setCastlePoints(e.target.value)
    }

    const addCityPoints = (e) => {
        setCityPoints(e.target.value)
    }

    const playerHasPig = (e) => {
        setHasPig(!hasPig)
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
            <h1>Farm</h1>
            <form onSubmit={onSubmit}>
                <label>Cities: </label>
                <input type="number" min="0" onChange={addCityPoints}/>
                <label>Castles: </label>
                <input type="number" min="0" onChange={addCastlePoints}/>
                <input type="checkbox" onChange={playerHasPig}/>
                <label>Has Pig</label>
                <input type="checkbox" onChange={featureIsShared} />
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

export default Farm