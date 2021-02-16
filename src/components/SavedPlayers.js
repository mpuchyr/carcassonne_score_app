import React, { useState } from 'react';

const SavedPlayers = ({ history }) => {
    const playersInMemory = JSON.parse(localStorage.getItem('players'))
    const [allSavedPlayers, setAllSavedPlayers] = useState(playersInMemory)

    const showAllSavedPlayers = () => {
        if (allSavedPlayers.length > 0) {
            return allSavedPlayers.map(player => {
                return (
                    <li key={player.id}>
                        {player.name}
                        <button onClick={() => deletePlayer(player.id)}>X</button>
                    </li>)
            })
        }
    }

    const deletePlayer = (playerId) => {
        const modifiedPlayers = allSavedPlayers.filter(player => player.id !== playerId)
        console.log(modifiedPlayers)
        // setAllSavedPlayers(modifiedPlayers)
        // localStorage.setItem('players', JSON.stringify(modifiedPlayers))
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