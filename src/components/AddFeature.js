import React from 'react';
import Barn from './features/Barn';
import City from './features/City';
import Farm from './features/Farm';
import Manual from './features/Manual';
import Monastary from './features/Monastary';
import Road from './features/Road';
import TestFeature from './features/TestFeature';

const AddFeature = (props) => {
    const currentFeature = props.match.params.featurename
    const playerId = props.match.params.id
    const history = props.history
    
    const featureToShow = (feature) => {
        switch(feature) {
            case 'barn':
                return <Barn playerId={playerId} history={history} currentFeature={currentFeature}/>
            case 'city':
                return <City playerId={playerId} history={history} currentFeature={currentFeature}/>
            case 'farm':
                return <Farm playerId={playerId} history={history} currentFeature={currentFeature}/>
            case 'monastary':
                return <Monastary playerId={playerId} history={history} currentFeature={currentFeature}/>
            case 'road':
                return <Road playerId={playerId} history={history} currentFeature={currentFeature}/>
            case 'test':
                return <TestFeature playerId={playerId} history={history} currentFeature={currentFeature} />
            default:
                return <Manual playerId={playerId} history={history} currentFeature={currentFeature}/>
        }
    }
    
    return(
        <div>
            {featureToShow(currentFeature)}
            <button onClick={() => history.goBack()}>Back</button>
        </div>
    )
}

export default AddFeature