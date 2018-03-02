import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => {
    let mainContainerStyles = {
        overflow: 'hidden',
        width: '85%',
        margin: 'auto',
        marginBottom: '50px'
    };

    let backButtonStyles = {
        color: 'white',
        border: 'none',
        fontSize: '1.7em',
        padding: '5px 20px',
        borderRadius: '5px',
        float: 'left'
    };

    let nextButtonStyles = {
        color: 'white',
        border: 'none',
        fontSize: '1.7em',
        padding: '5px 20px',
        borderRadius: '5px',
        float: 'right'
    };

    return(
        <div id="progress-buttons" style={mainContainerStyles}>
            <Link to={props.backRoute}><button style={backButtonStyles} type="button">Back</button></Link>
            <Link to={props.nextRoute}><button style={nextButtonStyles} type="button">Next</button></Link>
        </div>
    );
};
