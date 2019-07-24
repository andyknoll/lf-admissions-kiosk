// ScreenViewer.js

import React from 'react';

import { ScreenNone, ScreenHello, ScreenName, ScreenPet, ScreenConf } from './Screens';
import { HELLO_SCREEN, NAME_SCREEN, PET_SCREEN, CONFIRM_SCREEN } from './Screens';   // int ids
import { Config } from '../Config';

import '../css/ScreenViewer.css';


// this is a class - not a component
// App creates with "new"
export class ScreenManager {

  // a more controlled way - no need for wrapping
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
  

// props passed down from App
export const ScreenViewer = (props) => {
  let state = props.appState;
  return (
    <div className="screen-viewer">
      <ScreenNone  currScreen={state.currScreen} appState={state}></ScreenNone>
      <ScreenHello currScreen={state.currScreen} appState={state}></ScreenHello>
      <ScreenName  
        currScreen={state.currScreen} 
        appState={state} 
        onKeyDown={props.onKeyDown}
        onFNameFocus={props.onFNameFocus}
        onLNameFocus={props.onLNameFocus}
      >
      </ScreenName>
      <ScreenPet   currScreen={state.currScreen} appState={state} onPetMouseDown={props.onPetMouseDown}></ScreenPet>
      <ScreenConf  currScreen={state.currScreen} appState={state}></ScreenConf>
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
