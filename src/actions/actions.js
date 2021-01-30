const startNewGame = (newGame) => {
    return {
        type: 'INITIALIZE_GAME',
        newGame
    }
}

const addPoints = (playerId, total) => {
    return {
        type: 'ADD_POINTS',
        playerId,
        total
    }
}

export { startNewGame, addPoints }