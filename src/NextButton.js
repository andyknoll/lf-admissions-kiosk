// NextButton.js

import React from 'react';
import './css/App.css';

export const NextButton = (props) => {
    return (
        <div 
            className="next-button"
            onClick = {props.onClickMe}
        >
        </div>
    );
}
