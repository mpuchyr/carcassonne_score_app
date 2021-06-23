import React, { useEffect, useState } from 'react';

const MainHeader = () => {
    const [menuIsVisible, setMenuIsVisible] = useState(false)

    const reference = React.createRef()

    const handleClickOutside = e => {
        if (reference.current && !reference.current.contains(e.target)) {
            console.log('this is outside the area')
            setMenuIsVisible(false)
        }
    }

    const handleMenuClick = () => {
        setMenuIsVisible(!menuIsVisible)
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside)

        return (() => document.removeEventListener('mousedown', handleClickOutside))
    })
    
    return (
        <div>
            <button onClick={handleMenuClick}>Menu</button>
            <h1 className="main-header-title">Carcassonne</h1> 
            {menuIsVisible && <div className="dropdown" ref={reference}>
                <a href="/"><button>Home</button></a>
                <a href="/newgame"><button>New Game</button></a>
                <a href="/loadgame"><button>Load Game</button></a>
                <a href="/savedplayers"><button>All Saved Players</button></a>
            </div>}
        </div>
    )
}

export default MainHeader