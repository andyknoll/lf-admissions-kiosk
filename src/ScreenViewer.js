// ScreenViewer.js

import React from 'react';

import { Screen0, Screen1, Screen2, Screen3, Screen4 } from './Screens';

export const ScreenViewer = (props) => {
  return (
    <div className="screen-viewer">
      <Screen0 currScreen={props.currScreen} appState={props.appState}></Screen0>
      <Screen1 currScreen={props.currScreen} appState={props.appState}></Screen1>
      <Screen2 currScreen={props.currScreen} appState={props.appState}></Screen2>
      <Screen3 currScreen={props.currScreen} appState={props.appState} onPetMouseDown={props.onPetMouseDown}></Screen3>
      <Screen4 currScreen={props.currScreen} appState={props.appState}></Screen4>
    </div>
  );
}
  
