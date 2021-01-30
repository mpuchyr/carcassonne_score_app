import React, { useState } from 'react';

const Farm = () => {
    const [score, setScore] = useState(0)
    
    return (
        <div>
            <h1>Farm</h1>
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

export default Farm