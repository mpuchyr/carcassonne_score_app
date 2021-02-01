import React, { useState } from 'react';

const Road = () => {
    const [score, setScore] = useState(0)
    const [hasInn, setHasInn] = useState(false)

    return (
        <div>
            <h1>Road Score Placeholder</h1>
            <form>
                <label>Number of Road Tiles: </label>
                <input type="number" min="0" />
                <input type="checkbox" />
                <label>Road has an Inn</label>
                <input type="checkbox" />
                <label>This feature is shared</label>
            </form>
        </div>
    )
}

export default Road