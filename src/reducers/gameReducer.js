const gameReducer = (state, action) => {
    switch(action.type) {
        case 'INITIALIZE_GAME':
            return action.newGame
        case 'ADD_POINTS':
            const playersToChange = state.players.filter(player => action.playerId.includes(player.id))
            console.log(action)
            return (
                {
                    ...state,
                    history: 
                        [
                            ...playersToChange.map(player => {
                                if (playersToChange.length === 1) {
                                    return `${player.name} scored a ${action.featureName} for ${action.total} points`
                                } else {
                                    return `${player.name} scored a shared ${action.featureName} for ${action.total} points`
                                }
                            }),
                            ...state.history
                        ],
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

