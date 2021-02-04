import React, { useContext, useState } from 'react';
import { addPoints } from '../../actions/actions';
import GameContext from '../../context/game-context';
import ModalContext from '../../context/modal-context';
import SharedFeatureModal from './SharedFeatureModal';

const Barn = ({ playerId, history }) => {
    const [isShared, setIsShared] = useState(false)
    const [castlePoints, setCastlePoints] = useState(0)
    const [cityPoints, setCityPoints] = useState(0)

    const { game, dispatch } = useContext(GameContext)
    const { openModal } = useContext(ModalContext)


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
            dispatch(addPoints(playerId, total, 'barn'))
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
                score={(cityPoints + castlePoints)}
            />
            </div>
    )
}

export default Barn