import React from 'react';

const SavedPlayers = ({ history }) => {
    const allSavedPlayers = JSON.parse(localStorage.getItem('players'))

    const showAllSavedPlayers = () => {
        if (allSavedPlayers.length > 0) {
            return allSavedPlayers.map(player => {
                return (
                    <li key={player.id}>
                        {player.name}
                        <button>X</button>
                    </li>)
            })
        }
    }

    return (
        <div>
            <ul>
                {showAllSavedPlayers()}
            </ul>
            <button onClick={() => history.goBack()}>Back</button>
        </div>
    )
}

export default SavedPlayers