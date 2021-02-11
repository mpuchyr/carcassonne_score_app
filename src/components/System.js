import React, { useContext } from 'react';
import GameContext from '../context/game-context';
import { saveGame } from '../actions/actions';


const System = ({ history }) => {
    const { dispatch } = useContext(GameContext)

    const onGameSave = () => {
        dispatch(saveGame())
        alert('Game Saved')
    }

    return (
        <div>
            <h1>System Placeholder</h1>
            <button onClick={() => history.push('/newgame')}>New Game</button>
            <button onClick={onGameSave}>Save Game</button>
            <button onClick={() => history.push('/loadgame')}>Load Game</button>
            <button onClick={() => history.push('/savedplayers')}>All Saved Players</button>
            <button onClick={() => history.goBack()}>Back</button>
        </div>
    )
}

export default System