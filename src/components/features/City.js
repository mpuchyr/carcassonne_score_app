import React, { useState } from 'react';

const City = () => {
    const [score, setScore] = useState(0)
    
    return (
        <div>
            <h1>City</h1>
            <form>
                <label>Number of City Tiles: </label>
                <input type="number" min="0" />
                <input type="checkbox" />
                <label>City has a cathedral</label>
                <input type="checkbox" />
                <label>This is the end game</label>
                <input type="checkbox" />
                <label>Feature is shared</label>
                <button>Add</button>
            </form>
        </div>
    )
}

export default City