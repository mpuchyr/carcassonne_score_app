import React, { useState } from 'react';

const Barn = () => {
    const [score, setScore] = useState(0)
    const [shared, setShared] = useState(false)


    return (
        <div>
            <h1>Barn</h1>
            <form>
                <label>Cities: </label>
                <input type="number" min="0" />
                <label>Castles: </label>
                <input type="number" min="0" />
                <input type="checkbox" />
                <label>Feature is shared</label>
                <p>Total: {score}</p>
                <button>Add</button>
            </form>
        </div>
    )
}

export default Barn