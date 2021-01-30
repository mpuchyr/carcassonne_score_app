import React from 'react';
import Barn from './features/Barn';
import City from './features/City';
import Farm from './features/City';
import Manual from './features/Manual';
import Monastary from './features/Monastary';
import Road from './features/Road';

const AddFeature = (props) => {
    console.log(props.match.params.featurename)
    
    const featureToShow = () => {
        switch(props.match.params.featurename) {
            case 'barn':
                return <Barn />
            case 'city':
                return <City />
            case 'farm':
                return <Farm />
            case 'Monastary':
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
            <p>{props.match.params.featurename}</p>
            {featureToShow()}
        </div>
    )
}

export default AddFeature