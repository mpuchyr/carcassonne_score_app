const gameReducer = (state, action) => {
    switch(action.type) {
        case 'INITIALIZE_GAME':
            return action.newGame
        case 'ADD_POINTS':
            const playerName = state.players.filter(player => player.id === action.playerId)[0].name
            return (
                {
                    ...state,
                    history: [...state.history, `${playerName} scored a ${action.featureName} for ${action.total} points`],
                    players: state.players.map(player => {
                        if (action.playerId.includes(player.id)) {
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
                    history: [...state.history, `Removed ${action.toal} points`],
                    players: state.players.map(player => {
                        if (action.playerId.includes(player.id)) {
                            const newTotal = player.score -= parseInt(action.total)
                            return {
                                ...player,
                                score: newTotal >= 0 ? newTotal : 0
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

