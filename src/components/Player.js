import React from 'react';

const Player = (props) => {
    console.log(props.match.params.id)
    
    return (
        <h1>Player #{props.match.params.id} Placeholder</h1>
    )
}

export default Player