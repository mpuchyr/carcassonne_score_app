const startNewGame = (newGame) => {
    return {
        type: 'INITIALIZE_GAME',
        newGame
    }
}

const addPoints = (playerId, total) => {
    return {
        type: 'ADD',
        playerId,
        total
    }
}

export { startNewGame, addPoints }