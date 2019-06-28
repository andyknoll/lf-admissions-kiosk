// ScreenViewer.js

import React from 'react';

import { Screen0, Screen1, Screen2, Screen3, Screen4 } from './Screens';
import { NO_SCREEN, HELLO_SCREEN, NAME_SCREEN, PET_SCREEN, CONF_SCREEN } from './Screens'


export class ScreenManager {

  // a more controlled way - no need for wrapping
  determineNextScreen(currScreen) {
    switch (currScreen) {
      case HELLO_SCREEN : return NAME_SCREEN;
      case NAME_SCREEN  : return PET_SCREEN;
      case PET_SCREEN   : return CONF_SCREEN;
      case CONF_SCREEN  : return HELLO_SCREEN;
    }
  }

}



export const ScreenViewer = (props) => {
  return (
    <div className="screen-viewer">
      <Screen0 currScreen={props.currScreen} appState={props.appState}></Screen0>
      <Screen1 currScreen={props.currScreen} appState={props.appState}></Screen1>
      <Screen2 currScreen={props.currScreen} appState={props.appState} onKeyMouseDown={props.onKeyMouseDown}></Screen2>
      <Screen3 currScreen={props.currScreen} appState={props.appState} onPetMouseDown={props.onPetMouseDown}></Screen3>
      <Screen4 currScreen={props.currScreen} appState={props.appState}></Screen4>
    </div>
  );
}
  
export const DebugViewer = (props) => {
  return (
    <div className="debug-viewer">
      currScreen: {props.appState.currScreen} <br/>
      firstName: {props.appState.person.firstName} <br/>
      lastName: {props.appState.person.lastName} <br/>
      pet: {props.appState.person.pet} <br/>
    </div>
  );
}
