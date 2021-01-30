const gameReducer = (state, action) => {
    switch(action.type) {
        case 'INITIALIZE_GAME':
            return action.newGame
        case 'ADD_POINTS':
            return (
                {
                    ...state,
                    players: state.players.forEach(player => {
                        if (player.id === action.playerId) {
                            player.score += parseInt(action.total)
                        }
                    })
                }
            )
        default:
            return state
    }
}

export { gameReducer }

