import React from 'react';

const SavedPlayers = ({ history }) => {
    return (
        <div>
            <button onClick={() => history.goBack()}>Back</button>
        </div>
    )
}

export default SavedPlayers