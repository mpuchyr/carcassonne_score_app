import React, { useContext, useState } from 'react';
import { addPoints } from '../../actions/actions';
import GameContext from '../../context/game-context'; 

const Monastary = ({ playerId, history }) => {
    const [score, setScore] = useState(0)
    const [tiles, setTiles] = useState(0)
    const [vineyards, setVineyards] = useState(0)

    const { game, dispatch } = useContext(GameContext)

    const addMonastaryTiles = (e) => {
        setTiles(parseInt(e.target.value))
    }

    const addVineyards = (e) => {
        setVineyards(parseInt(e.target.value) * 3)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        const total = tiles + vineyards
        dispatch(addPoints(playerId, total))
        history.push('/')
    }

    return (
        <div>
            <h1>Monastary</h1>
            <form onSubmit={onSubmit}>
                <label>Monastary Tiles</label>
                <input type="number" min="0" max="9" onChange={addMonastaryTiles} />
                <label>Vineyards</label>
                <input type="number" min="0" onChange={addVineyards} />
                <p>Total: {tiles + vineyards}</p>
                <button>Add</button>
            </form>
        </div>
    )
}

export default Monastary