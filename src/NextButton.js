// NextButton.js

import React from 'react';
import { useScreenIsLocked } from './App';
import { NextButtonPoses } from './Poses';

import './css/App.css';

export const NextButton = (props) => {
    const isDisabled = useScreenIsLocked(props.appState);       // custom hook

    return (
        <NextButtonPoses pose="poseVisible">
            <button 
                className={isDisabled ? "next-button next-disabled" : "next-button"}
                disabled={isDisabled}
                onClick={props.onClickMe}>
            </button>
        </NextButtonPoses>
    );
}
