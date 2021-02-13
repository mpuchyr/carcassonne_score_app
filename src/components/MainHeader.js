import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';

const MainHeader = () => {
    const [menuIsOpen, setMenuIsOpen] = useState(false)

    const openMenu = () => {
        setMenuIsOpen(true)
    }

    const closeMenu = () => {
        setMenuIsOpen(false)
    }

    return (
        <div>
            <Menu isOpen={menuIsOpen} >
                <button onClick={closeMenu}><NavLink to="/newgame">New Game</NavLink></button>
                <button onClick={closeMenu}><NavLink to="/loadgame">Load Game</NavLink></button>
                <button onClick={closeMenu}><NavLink to="/savedplayers">All Saved Players</NavLink></button>
            </Menu>
            <h1>Carcassonne</h1>
        </div>
    )
}

export default MainHeader