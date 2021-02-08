import React, { useContext, useState } from 'react';
import { addPoints, saveGame } from '../../actions/actions';
import GameContext from '../../context/game-context'; 
import ModalContext from '../../context/modal-context';
import SharedFeatureModal from './SharedFeatureModal';

const Farm = ({ playerId, history, currentFeature }) => {
    const [isShared, setIsShared] = useState(false)
    const [hasPig, setHasPig] = useState(false)
    const [castlePoints, setCastlePoints] = useState(0)
    const [cityPoints, setCityPoints] = useState(0)

    const { dispatch } = useContext(GameContext)
    const { openModal } = useContext(ModalContext)



    const featureIsShared = () => {
        setIsShared(!isShared)
    }


    const addCastlePoints = (e) => {
        hasPig ? setCastlePoints(e.target.value * 5) : setCastlePoints(e.target.value * 4)
    }

    const addCityPoints = (e) => {
        hasPig ? setCityPoints(e.target.value * 4) : setCityPoints(e.target.value * 3)
    }

    const playerHasPig = (e) => {
        setHasPig(!hasPig)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        if (!isShared) {        
            const total = castlePoints + cityPoints
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
                <p>Total: {cityPoints + castlePoints}</p>
                <button>Add</button>
            </form>
            <SharedFeatureModal 
                playerId={playerId}
                history={history}
                featureName={currentFeature}
                score={(cityPoints + castlePoints)}
            />
        </div>
    )
}

export default Farm