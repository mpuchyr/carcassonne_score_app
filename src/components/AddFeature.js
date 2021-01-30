import React from 'react';
import Barn from './features/Barn';
import City from './features/City';
import Farm from './features/Farm';
import Manual from './features/Manual';
import Monastary from './features/Monastary';
import Road from './features/Road';

const AddFeature = (props) => {
    const currentFeature = props.match.params.featurename
    
    const featureToShow = (feature) => {
        switch(feature) {
            case 'barn':
                return <Barn />
            case 'city':
                return <City />
            case 'farm':
                return <Farm />
            case 'monastary':
                return <Monastary />
            case 'road':
                return <Road />
            default:
                return <Manual />
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