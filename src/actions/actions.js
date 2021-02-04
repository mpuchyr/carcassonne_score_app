const startNewGame = (newGame) => {
    return {
        type: 'INITIALIZE_GAME',
        newGame
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

const subtractPoints = (playerId, total) => {
    return {
        type: 'SUBTRACT_POINTS',
        playerId,
        total,
    }
}

export { startNewGame, addPoints, subtractPoints }