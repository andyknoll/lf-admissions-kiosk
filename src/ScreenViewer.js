// ScreenViewer.js

import React from 'react';

import { Screen0, Screen1, Screen2, Screen3, Screen4 } from './Screens';
import { HELLO_SCREEN, NAME_SCREEN, PET_SCREEN, CONF_SCREEN } from './Screens';   // int ids
import { PetNames, PET_NONE } from './Pets'


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

}




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
