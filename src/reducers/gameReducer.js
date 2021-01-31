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
        case 'SUBTRACT_POINTS':            
            return (
                {
                    ...state,
                    players: state.players.map(player => {
                        if (player.id === action.playerId) {
                            const newTotal = player.score -= parseInt(action.total)
                            return {
                                ...player,
                                score: newTotal >= 0 ? newTotal : 0
                            }
                        }
                    })
                }
            )
        default:
            return state
    }
}

export { gameReducer }

