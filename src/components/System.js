import React from 'react';


const System = ({ history }) => {
    return (
        <div>
            <h1>System Placeholder</h1>
            <button onClick={() => history.push('/newgame')}>New Game</button>
            <button onClick={() => history.push('/loadgame')}>Load Game</button>
            <button onClick={() => history.goBack()}>Back</button>
        </div>
    )
}

export default System