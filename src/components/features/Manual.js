import React, { useState } from 'react';

const Manual = ({ playerId }) => {
    const [score, setScore] = useState(0)

    const changeScore = (e) => {
        setScore(e.target.value)
    }

    return (
        <div>
            <h1>Manual Point Entry</h1>
            <form>
                <input type="number" min="0" onChange={changeScore}/>
                <input type="checkbox" />
                <label>This feature is shared</label>
                <p>Total: {score}</p>
                <button>Add</button>
                <button>Subtract</button>
            </form>
        </div>
    )
}

export default Manual