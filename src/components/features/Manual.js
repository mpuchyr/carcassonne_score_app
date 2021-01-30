import React, { useState } from 'react';

const Manual = () => {
    const [score, setScore] = useState(0)

    return (
        <div>
            <h1>Manual Point Entry</h1>
            <form>
                <input type="number" min="0" />
                <input type="checkbox" />
                <label>This feature is shared</label>
                <button>Add</button>
                <button>Subtract</button>
            </form>
        </div>
    )
}

export default Manual