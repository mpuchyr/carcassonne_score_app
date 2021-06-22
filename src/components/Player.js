import React, { useContext } from 'react';
import GameContext from '../context/game-context';
import { NavLink } from 'react-router-dom';

const Player = (props) => {
    const { game } = useContext(GameContext)

    const id = props.match.params.id
    const player = game.players.filter(player => player.id === id)[0]

    const showLinks = () => {
        const locationPartial = `/players/${id}`
        const linkNameArray = ['barn', 'city', 'farm', 'monastary', 'road', 'manual', 'test']
        return (
            linkNameArray.map(lnk => {
                const page = `${locationPartial}/${lnk}`
                return (
                    <button><NavLink to={page}>{lnk}</NavLink></button>
                )
            })
        )
    }

    const goBack = () => {
        props.history.goBack()
    }
    
    return (
        <div>
            <h1>{player.name}</h1>
            <h1>Player #{props.match.params.id} Placeholder</h1>
            {showLinks()}
            <button onClick={() => console.log(game)}>Click Me</button>
            <button onClick={goBack}>Back</button>
        </div>

    )
}

export default Player