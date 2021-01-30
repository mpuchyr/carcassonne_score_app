import React from 'react';

const AddFeature = (props) => {
    console.log(props.match.params.featurename)
    return(
        <div>
            <h1>Add Feature Placeholder</h1>
            <p>{props.match.params.featurename}</p>
        </div>
    )
}

export default AddFeature