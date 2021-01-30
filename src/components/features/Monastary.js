import React, { useState } from 'react';

const Monastary = () => {
    const [score, setScore] = useState(0)

    return (
        <div>
            <h1>Monastary</h1>
            <form>
                <label>Monastary Tiles</label>
                <input type="number" min="0" max="9" />
                <label>Vineyards</label>
                <input type="number" min="0" />
                <p>Total: {score}</p>
                <button>Add</button>
            </form>
        </div>
    )
}

export default Monastary