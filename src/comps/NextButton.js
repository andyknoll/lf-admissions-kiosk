// NextButton.js

import React from 'react';
import { useScreenIsLocked } from './App';
import { NextButtonPoses } from '../utils/Poses';

import '../css/NextButton.css';

export const NextButton = (props) => {
    const isDisabled = useScreenIsLocked(props.appState);       // custom hook

    return (
        <NextButtonPoses pose="poseVisible">
            <button 
                className={isDisabled ? "next-button next-disabled" : "next-button"}
                disabled={isDisabled}
                onClick={props.onNextButtonClick}>
            </button>
        </NextButtonPoses>
    );
}
