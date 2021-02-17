import React, { useState } from 'react';

const MainHeader = () => {
    const [menuIsVisible, setMenuIsVisible] = useState(false)

    const menu = document.querySelector('#menu')
    console.log(menu)
    
    return (
        <div>
            <button onClick={() => setMenuIsVisible(!menuIsVisible)}>Menu</button>
            <h1 className="main-header-title">Carcassonne</h1>
            {menuIsVisible && 
                <div id="menu">
                    <a href="/"><button>Home</button></a>
                    <a href="/newgame"><button>New Game</button></a>
                    <a href="/loadgame"><button>Load Game</button></a>
                    <a href="/savedplayers"><button>All Saved Players</button></a>
                </div>
            }
        </div>
    )
}

export default MainHeader