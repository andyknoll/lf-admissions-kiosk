// Screen0.js

import React from 'react';
import SplitText from 'react-pose-text';
import Keypad from './Keypad';
import Pets from './Pets';
import { ScreenPoses, ParaPoses, TabletPoses, CharPoses, LogoPoses } from './Poses';

export const NO_SCREEN    = 0;
export const HELLO_SCREEN = 1;
export const NAME_SCREEN  = 2;
export const PET_SCREEN   = 3;
export const CONF_SCREEN  = 4;


// NO_SCREEN
export const Screen0 = (props) => {
  return <div></div>;
}


// WELCOME_SCREEN
export const Screen1 = (props) => {
  return (
    <ScreenPoses
      className = "screen"
      pose={props.currScreen === HELLO_SCREEN ? "poseVisible" : "poseHidden"}>    
      <h1 className="welcome"> 
        <SplitText charPoses={CharPoses} 
          pose={props.currScreen === HELLO_SCREEN ? "charsVisible" : "charsHidden"}>
          Welcome to Lollypop Farm
        </SplitText>
      </h1>
      <ParaPoses>    
        <br/>
        <h2>Thank you for visiting Lollypop Farm Admissions.</h2>
        <br/>
        <h2>We understand that this may be a difficult time<br/> for you and we are here to help.</h2>
        <br/>
        <h2>Please use this kiosk to sign in and help us<br/>with your admission process.</h2>
      </ParaPoses>
    </ScreenPoses>
  );
}


// NAME_SCREEN
export const Screen2 = (props) => {
  return (
    <ScreenPoses
      className = "screen"
      pose={props.currScreen === NAME_SCREEN ? "poseVisible" : "poseHidden"}>    
      <h1>Please enter your name</h1>
      <TabletPoses>    
        <Keypad onKeyMouseDown={props.onKeyMouseDown} appState={props.appState}></Keypad>
      </TabletPoses>
    </ScreenPoses>
  );
}


// PET_SCREEN
export const Screen3 = (props) => {
  return (
    <ScreenPoses
      className = "screen"
      pose={props.currScreen === PET_SCREEN ? "poseVisible" : "poseHidden"}> 
      <h1>Please select your pet type</h1>
      <Pets onPetMouseDown={props.onPetMouseDown} appState={props.appState}></Pets>
    </ScreenPoses>
  );
}


// CONF_SCREEN
export const Screen4 = (props) => {
  let fName = props.appState.person.firstName;
  let pet = props.appState.person.pet;
  let petName = pet.toLowerCase();
  // fix this so it does not depend on NAMES
  if (pet === "SMALL" || pet === "OTHER" || pet === "NONE") petName = "pet";

  return (
    <ScreenPoses
      className = "screen"
      pose={props.currScreen === CONF_SCREEN ? "poseVisible" : "poseHidden"}>    
      <h1>Thank you {fName}!</h1>
      <ParaPoses>    
        <h2>An Admissions staff member will be with you<br/> shortly to help you with your {petName}.</h2>
      </ParaPoses>
      <LogoPoses class="logo"></LogoPoses>
    </ScreenPoses>
  );
}


export const Screens = [ Screen0, Screen1, Screen2, Screen3, Screen4 ];
