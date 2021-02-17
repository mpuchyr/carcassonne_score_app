import React, { useState } from 'react';

const MainHeader = () => {
    const [menuIsVisible, setMenuIsVisible] = useState(false)
    
    return (
        <div>
            <button onClick={() => setMenuIsVisible(!menuIsVisible)}>Menu</button>
            <h1 className="main-header-title">Carcassonne</h1> 
            <div id={menuIsVisible ? "menu-visible" : "menu-invisible"}>
                <a href="/"><button>Home</button></a>
                <a href="/newgame"><button>New Game</button></a>
                <a href="/loadgame"><button>Load Game</button></a>
                <a href="/savedplayers"><button>All Saved Players</button></a>
            </div>
        </div>
    )
}

export default MainHeader