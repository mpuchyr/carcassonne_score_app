import React from 'react';
import { NavLink } from 'react-router-dom';

const MainHeader = () => {
    return (
        <div>
            <h1>Carcassonne</h1>
            <button>
                <NavLink to="/system">System</NavLink>
            </button>
        </div>
    )
}

export default MainHeader