import React, { useState } from 'react';

const Barn = () => {
    const [score, setScore] = useState(0)
    const [shared, setShared] = useState(false)
    const [castlePoints, setCastlePoints] = useState(0)
    const [cityPoints, setCityPoints] = useState(0)

    const addCastlePoints = (e) => {
        setCastlePoints(e.target.value * 5)
    }

    const addCityPoints = (e) => {
        setCityPoints(e.target.value * 4)
    }


    return (
        <div>
            <h1>Barn</h1>
            <form>
                <label>Cities: </label>
                <input type="number" min="0" onChange={addCityPoints}/>
                <label>Castles: </label>
                <input type="number" min="0" onChange={addCastlePoints} />
                <input type="checkbox" />
                <label>Feature is shared</label>
                <p>Total: {cityPoints + castlePoints}</p>
                <button>Add</button>
            </form>
        </div>
    )
}

export default Barn