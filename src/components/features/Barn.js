import React, { useContext, useState } from 'react';
import Modal from 'react-modal';
import { addPoints } from '../../actions/actions';
import GameContext from '../../context/game-context'; 
import SharedFeature from './SharedFeature';
import SharedFeatureModal from './SharedFeatureModal';

const Barn = ({ playerId, history }) => {
    const [isShared, setIsShared] = useState(false)
    const [castlePoints, setCastlePoints] = useState(0)
    const [cityPoints, setCityPoints] = useState(0)
    const [modalIsOpen, setIsOpen] = useState(false)

    const { game, dispatch } = useContext(GameContext)

    const openModal = () => {
        setIsOpen(true)
    }

    const closeModal = () => {
        setIsOpen(false)
    }

    const featureIsShared = () => {
        setIsShared(!isShared)
    }

    const addCastlePoints = (e) => {
        setCastlePoints(e.target.value * 5)
    }

    const addCityPoints = (e) => {
        setCityPoints(e.target.value * 4)
    }


    const onSubmit = (e) => {
        e.preventDefault()
        if (!isShared) {            
            const total = castlePoints + cityPoints
            dispatch(addPoints(playerId, total))
            history.push('/')
        } else {
            openModal()
        }

    }

    return (
        <div>
            <h1>Barn</h1>
            <form onSubmit={onSubmit}>
                <label>Cities: </label>
                <input type="number" min="0" onChange={addCityPoints}/>
                <label>Castles: </label>
                <input type="number" min="0" onChange={addCastlePoints} />
                <input type="checkbox" onChange={featureIsShared}/>
                <label>Feature is shared</label>
                <p>Total: {cityPoints + castlePoints}</p>
                <button>Add</button>
            </form>
            <button onClick={() => console.log(game)}>Click Me</button>
            <SharedFeatureModal 
                playerId={playerId}
                history={history}
                modalIsOpen={modalIsOpen}
                closeModal={closeModal}
                score={(cityPoints + castlePoints)}
            />
            </div>
    )
}

export default Barn