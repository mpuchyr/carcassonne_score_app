import React from 'react';
import { slide as Menu } from 'react-burger-menu';

const MainHeader = () => {

    return (
        <div>
            <Menu >
                <a className="menu-item" href="/"><button>Home</button></a>
                <a className="menu-item" href="/newgame"><button>New Game</button></a>
                <a className="menu-item" href="/loadgame"><button>Load Game</button></a>
                <a className="menu-item" href="/savedplayers"><button>All Saved Players</button></a>
            </Menu>
            <h1>Carcassonne</h1>
        </div>
    )
}

export default MainHeader