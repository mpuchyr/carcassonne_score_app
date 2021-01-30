import React from 'react';
import Barn from './features/Barn';
import City from './features/City';
import Farm from './features/Farm';
import Manual from './features/Manual';
import Monastary from './features/Monastary';
import Road from './features/Road';

const AddFeature = (props) => {
    const currentFeature = props.match.params.featurename
    const playerId = props.match.params.id
    const history = props.history
    
    const featureToShow = (feature) => {
        switch(feature) {
            case 'barn':
                return <Barn playerId={playerId} history={history}/>
            case 'city':
                return <City playerId={playerId} history={history}/>
            case 'farm':
                return <Farm playerId={playerId} history={history}/>
            case 'monastary':
                return <Monastary playerId={playerId} history={history}/>
            case 'road':
                return <Road playerId={playerId} history={history}/>
            default:
                return <Manual playerId={playerId} history={history}/>
        }
    }
    
    return(
        <div>
            <h1>Add Feature Placeholder</h1>
            <p>{currentFeature}</p>
            {featureToShow(currentFeature)}
        </div>
    )
}

export default AddFeature