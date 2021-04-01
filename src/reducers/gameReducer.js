const gameReducer = (state, action) => {
    switch(action.type) {
        case 'INITIALIZE_GAME':
            return action.newGame
        case 'SAVE_GAME':
            const savedGames = JSON.parse(localStorage.getItem('savedGames')) || []
            const otherGames = savedGames.filter(game => game.id !== state.id)
            const gamesToSave = JSON.stringify([...otherGames, state])
            localStorage.setItem('savedGames', gamesToSave)
            return state
        case 'LOAD_GAME':
            return action.game
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
            const playersToSubtract = state.players.filter(player => action.playerId.includes(player.id))
            return (
                {
                    ...state,
                    history: 
                        [
                            ...playersToSubtract.map(player => {
                                return `${player.name} removed ${action.total} points`
                            }),
                            ...state.history
                        ],
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

