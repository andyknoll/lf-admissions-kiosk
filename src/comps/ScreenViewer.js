// ScreenViewer.js

import React from 'react';

import { Screen0, Screen1, Screen2, Screen3, Screen4 } from './Screens';
import { HELLO_SCREEN, NAME_SCREEN, PET_SCREEN, CONFIRM_SCREEN } from './Screens';   // int ids
import { Config } from '../Config';

import '../css/ScreenViewer.css';


// this is a class - not a component
export class ScreenManager {

  // a more controlled way - no need for wrapping
  // DO NOT USE static IF INSTANCE METHODS!
  // static determineNextScreen(currScreen) {
  determineNextScreen(currScreen) {
    switch (currScreen) {
      case HELLO_SCREEN : 
        return NAME_SCREEN;
      case NAME_SCREEN : 
        return PET_SCREEN;
      case PET_SCREEN : 
        return CONFIRM_SCREEN;
      case CONFIRM_SCREEN : 
        return HELLO_SCREEN;
      default : 
        return HELLO_SCREEN;
    }
  }
}
  






// we only want to render the current screen!
export const ScreenViewer = (props) => {
  let state = props.appState;
  return (
    <div className="screen-viewer">
      <Screen0 currScreen={state.currScreen} appState={state}></Screen0>
      <Screen1 currScreen={state.currScreen} appState={state}></Screen1>
      <Screen2 currScreen={state.currScreen} appState={state} onKeyMouseDown={props.onKeyMouseDown}></Screen2>
      <Screen3 currScreen={state.currScreen} appState={state} onPetMouseDown={props.onPetMouseDown}></Screen3>
      <Screen4 currScreen={state.currScreen} appState={state}></Screen4>
    </div>
  );
}
  
// top left corner - make invisible
export const DebugViewer = (props) => {
  if (!Config.SHOW_DEBUG) return null;
  return (
    <div className="debug-viewer">
      currScreen: {props.appState.currScreen} <br/>
      firstName: {props.appState.person.firstName} <br/>
      lastName: {props.appState.person.lastName} <br/>
      pet: {props.appState.person.pet} <br/>
    </div>
  );
}
