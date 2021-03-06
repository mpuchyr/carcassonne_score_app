const startNewGame = (newGame) => {
    return {
        type: 'INITIALIZE_GAME',
        newGame
    }
}

const saveGame = () => {
    return {
        type: 'SAVE_GAME',
    }
}

const loadGame = (game) => {
    return {
        type: 'LOAD_GAME',
        game
    }
}

const addPoints = (playerId, total, featureName) => {
    return {
        type: 'ADD_POINTS',
        playerId,
        total,
        featureName
    }
}

const subtractPoints = (playerId, total, featureName) => {
    return {
        type: 'SUBTRACT_POINTS',
        playerId,
        total,
        featureName
    }
}

export { startNewGame, addPoints, subtractPoints, saveGame, loadGame }