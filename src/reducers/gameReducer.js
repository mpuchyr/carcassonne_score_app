const gameReducer = (state, action) => {
    switch(action.type) {
        case 'INITIALIZE_GAME':
            return action.newGame
        case 'ADD_POINTS':
            return (
                {
                    ...state,
                    players: state.players.map(player => {
                        if (player.id === action.playerId) {
                            return {
                                ...player,
                                score: player.score += parseInt(action.total)
                            }
                        } else {
                            return player
                        }
                    })
                }
            )
        default:
            return state
    }
}

export { gameReducer }

