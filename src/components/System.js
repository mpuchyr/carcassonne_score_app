import React from 'react';

const System = ({ history }) => {
    return (
        <div>
            <h1>System Placeholder</h1>
            <button onClick={() => history.push('/')}>Back</button>
        </div>
    )
}

export default System