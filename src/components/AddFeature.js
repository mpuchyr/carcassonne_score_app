import React from 'react';
import Manual from './features/Manual';
import Road from './features/Road';

const AddFeature = (props) => {
    console.log(props.match.params.featurename)
    
    const featureToShow = () => {
        switch(props.match.params.featurename) {
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