// NextButton.js

import React from 'react';
import './css/App.css';

export const NextButton = (props) => {
    return (
        <button 
            className={props.cssClass}
            onClick={props.onClickMe}
            disabled={props.isDisabled}
        >
        </button>
    );
}
