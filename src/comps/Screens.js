// Screen0.js

import React from 'react';
import SplitText from 'react-pose-text';
import Keypad from './Keypad';
import Pets from './Pets';
import { ScreenPoses, ParaPoses, TabletPoses, CharPoses, LogoPoses } from '../utils/Poses';

import '../css/Screens.css';

export const NO_SCREEN      = 0;
export const HELLO_SCREEN   = 1;
export const NAME_SCREEN    = 2;
export const PET_SCREEN     = 3;
export const CONFIRM_SCREEN = 4;




// NO_SCREEN
export const ScreenNone = (props) => {
  return <div></div>;
}


// HELLO_SCREEN
export const ScreenHello = (props) => {
  // use a custom hook here
  // const canAdvance = useCanAdvance(props.currScreen);

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


// NAME_SCREEN - uses Keypad
// props.onKeyMouseDown is passed down from App
// MAY HAVE TO CHANGE THIS TO A COMPONENT AND USE REF
/*
export const ScreenName = (props) => {
  return (
    <ScreenPoses
      className = "screen"
      pose={props.currScreen === NAME_SCREEN ? "poseVisible" : "poseHidden"}>    
      <h1>Please enter your name</h1>
      <TabletPoses>    
        <Keypad 
          onKeyMouseDown={props.onKeyMouseDown} 
          appState={props.appState}
          shouldClearBuffers = {props.shouldClearKeypadBuffers}>
        </Keypad>
      </TabletPoses>
    </ScreenPoses>
  );
}
*/

export class ScreenName extends React.Component {
  constructor(props) {
    super(props);
    this.keypad = React.createRef();
  }

  clearKeypadBuffers() {
    this.keypad.current.clearBuffers()
  }

  render() {
    return (
      <ScreenPoses
        className = "screen"
        pose={this.props.currScreen === NAME_SCREEN ? "poseVisible" : "poseHidden"}>    
        <h1>Please enter your name</h1>
        <TabletPoses>    
          <Keypad 
            ref={this.keypad} 
            onKeyMouseDown={this.props.onKeyMouseDown} 
            appState={this.props.appState}>
          </Keypad>
        </TabletPoses>
      </ScreenPoses>
    );
  }

}

// PET_SCREEN
export const ScreenPet = (props) => {
  let fName = formatName(props.appState.person.firstName);
  return (
    <ScreenPoses
      className = "screen"
      pose={props.currScreen === PET_SCREEN ? "poseVisible" : "poseHidden"}> 
      <h1>Please select your pet type {fName}</h1>
      <Pets onPetMouseDown={props.onPetMouseDown} appState={props.appState}></Pets>
    </ScreenPoses>
  );
}


// CONFIRM_SCREEN
export const ScreenConf = (props) => {
  let fName = formatName(props.appState.person.firstName);
  let thanks = "Thank You " + fName;    // re-renders!
  let pet = props.appState.person.pet;
  let petName = pet.toLowerCase();

  // fix this so it does not depend on NAMES
  if (pet === "SMALL" || pet === "OTHER" || pet === "NONE") petName = "pet";

  return (
    <ScreenPoses
      className = "screen"
      pose={props.currScreen === CONFIRM_SCREEN ? "poseVisible" : "poseHidden"}>    
      <h1>{thanks}</h1>
      <ParaPoses>    
        <h2>An Admissions staff member will be with you<br/> shortly to help you with your {petName}.</h2>
      </ParaPoses>
      <LogoPoses className="logo"></LogoPoses>
      <div className="message-area">{props.appState.ajaxMessage}</div>
    </ScreenPoses>
  );
}

// PUT THESE IN utils.js!

// capitalize first letter - could be Mary Beth, etc.
const formatName = (name) => {
  let parts = name.toLowerCase().split(" ");
  let newName = "";
  for (let i = 0; i < parts.length; i++) {
    newName += capitalize(parts[i]) + " ";
  }
  return newName.trim();
}

const capitalize = (s) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}