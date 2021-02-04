const startNewGame = (newGame) => {
    return {
        type: 'INITIALIZE_GAME',
        newGame
    }
}

const addPoints = (playerId, total, featureForHistory) => {
    return {
        type: 'ADD_POINTS',
        playerId,
        total,
        featureForHistory
    }
}

const subtractPoints = (playerId, total, featureForHistory) => {
    return {
        type: 'SUBTRACT_POINTS',
        playerId,
        total,
        featureForHistory
    }
}

export { startNewGame, addPoints, subtractPoints }