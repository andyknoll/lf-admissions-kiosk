// ScreenViewer.js

import React, { useState } from 'react';

import { Screen0, Screen1, Screen2, Screen3, Screen4 } from './Screens';
import { HELLO_SCREEN, NAME_SCREEN, PET_SCREEN, CONF_SCREEN } from './Screens';   // int ids
import { PetNames, PET_NONE } from './Pets'

/*
// CUSTOM HOOK!
export const useCanAdvance = (state) => {
  const [canAdvance, setCanAdvance] = useState(false);

  switch (state.currScreen) {
    case HELLO_SCREEN : 
      setCanAdvance(true);
      break;
    case NAME_SCREEN  : 
      setCanAdvance(state.person.firstName !== "" && state.person.lastName !== "");
      break;
    case PET_SCREEN   : 
      setCanAdvance(state.person.pet !== PetNames[PET_NONE]);
      break;
    case CONF_SCREEN  : 
      setCanAdvance(true);
      break;
    default :
      setCanAdvance(true);
      break;
  }

  return canAdvance;
}
*/


export class ScreenManager {

  constructor() {
    this.screens = [Screen0, Screen1, Screen2, Screen3, Screen4];
  }

  // a more controlled way - no need for wrapping
  // DO NOT USE static IF INSTANCE METHODS!
  // static determineNextScreen(currScreen) {
  determineNextScreen(currScreen) {
    switch (currScreen) {
      case HELLO_SCREEN : return NAME_SCREEN;
      case NAME_SCREEN  : return PET_SCREEN;
      case PET_SCREEN   : return CONF_SCREEN;
      case CONF_SCREEN  : return HELLO_SCREEN;
      default  : return HELLO_SCREEN;
    }
  }

  getScreen(idx) {
    if (idx < 0) idx = 0;
    if (idx > this.screens.length-1) idx = this.screens.length-1;
    return this.screens[idx];
  }

  
  // determine here or move to each screen's canAdvance()
  // need to use app state's .pet property
  screenCanAdvance(appState) {
    //return this.getScreen(currScreen).canAdvance();
    switch (appState.currScreen) {
      //case HELLO_SCREEN : return this.getScreen(currScreen).canAdvance();
      case HELLO_SCREEN : 
        //return this.screens[HELLO_SCREEN].canAdvance();
        return true;
      case NAME_SCREEN  : 
        return appState.person.firstName !== "" && appState.person.lastName !== "";
      case PET_SCREEN   : 
        return appState.person.pet !== PetNames[PET_NONE];
      case CONF_SCREEN  : 
        return true;
      default : return true;
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
