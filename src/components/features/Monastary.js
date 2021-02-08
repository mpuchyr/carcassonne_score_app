import React, { useContext, useState } from 'react';
import { addPoints, saveGame } from '../../actions/actions';
import GameContext from '../../context/game-context'; 
import ModalContext from '../../context/modal-context';
import SharedFeatureModal from './SharedFeatureModal';

const Monastary = ({ playerId, history, currentFeature }) => {
    const [score, setScore] = useState(0)
    const [tiles, setTiles] = useState(0)
    const [vineyards, setVineyards] = useState(0)
    const [isShared, setIsShared] = useState(false)

    const { game, dispatch } = useContext(GameContext)
    const { openModal } = useContext(ModalContext)

    const featureIsShared = () => {
        setIsShared(!isShared)
    }

    const addMonastaryTiles = (e) => {
        setTiles(parseInt(e.target.value))
    }

    const addVineyards = (e) => {
        setVineyards(parseInt(e.target.value) * 3)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        if (!isShared) {
            const total = tiles + vineyards
            dispatch(addPoints(playerId, total, currentFeature))
            dispatch(saveGame())
            history.push('/')
        } else {
            openModal()
        }
    }

    return (
        <div>
            <h1>Monastary</h1>
            <form onSubmit={onSubmit}>
                <label>Monastary Tiles</label>
                <input type="number" min="0" max="9" onChange={addMonastaryTiles} />
                <label>Vineyards</label>
                <input type="number" min="0" onChange={addVineyards} />
                <input type="checkbox" onChange={featureIsShared}/>
                <label>Feature is shared</label>
                <p>Total: {tiles + vineyards}</p>
                <button>Add</button>
            </form>
            <SharedFeatureModal 
                playerId={playerId}
                history={history}
                featureName={currentFeature}
                score={(tiles + vineyards)}
            />
        </div>
    )
}

export default Monastary