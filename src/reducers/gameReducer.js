const gameReducer = (state, action) => {
    switch(action.type) {
        case 'INITIALIZE_GAME':
            return action.newGame
        default:
            return state
    }
}

export { gameReducer }

