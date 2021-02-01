import React, { useContext } from 'react';
import GameContext from '../context/game-context';
import { NavLink } from 'react-router-dom';

const Player = (props) => {
    const { game } = useContext(GameContext)

    const id = props.match.params.id
    const locationPartial = `/players/${id}`

    const player = game.players.filter(player => player.id === id)[0]

    const toBarn = `${locationPartial}/barn`
    const toCity = `${locationPartial}/city`
    const toFarm = `${locationPartial}/farm`
    const toMonastary = `${locationPartial}/monastary`
    const toRoad = `${locationPartial}/road`
    const destination = `${locationPartial}/manual`
    
    return (
        <div>
            <h1>{player.name}</h1>
            <h1>Player #{props.match.params.id} Placeholder</h1>
            <NavLink to={toBarn}>Barn</NavLink>
            <NavLink to={toCity}>City</NavLink>
            <NavLink to={toFarm}>Farm</NavLink>
            <NavLink to={toMonastary}>Monastary</NavLink>
            <NavLink to={toRoad}>Road</NavLink>
            <NavLink to={destination}>Manual Point Entry</NavLink>
            <button onClick={() => console.log(game)}>Click Me</button>
        </div>

    )
}

export default Player