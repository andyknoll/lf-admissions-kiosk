// Screen0.js

import React from 'react';
import SplitText from 'react-pose-text';
import Keypad from './Keypad';
import Pets from './Pets';
import { ScreenPoses, Pose2, TabletIn, charPoses } from './Poses';


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
        <SplitText charPoses={charPoses} 
          pose={props.currScreen === HELLO_SCREEN ? "enter" : "exit"}
          initialPose='exit'>
          Welcome to Lollypop Farm
        </SplitText>
      </h1>
      <Pose2
        pose = "poseVisible">    
        <h2>Thank you for choosing Lollypop Farm Admissions.</h2>
        <h2>Please use this kiosk to sign in and help the<br/>admission process run smoothly.</h2>
      </Pose2>
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
      <TabletIn
        pose = "poseVisible">    
        <Keypad></Keypad>
      </TabletIn>
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
      <Pose2
        pose = "poseVisible">    
        <Pets onPetMouseDown={props.onPetMouseDown} appState={props.appState}></Pets>
      </Pose2>
    </ScreenPoses>
  );
}


// CONF_SCREEN
export const Screen4 = (props) => {
  let fName = props.appState.person.firstName;
  let pet = props.appState.person.pet;
  let petName = pet.toLowerCase();
  // fix this so it does not depend on NAMES
  if (pet === "SMALL" || pet === "OTHER") petName = "pet";
  return (
    <ScreenPoses
      className = "screen"
      pose={props.currScreen === CONF_SCREEN ? "poseVisible" : "poseHidden"}>    
      <h1>Thank you {fName}!</h1>
      <Pose2
        pose = "poseVisible">    
        <h2>An Admissions staff member will<br/> be with you shortly to help you with your {petName}.</h2>
      </Pose2>
    </ScreenPoses>
  );
}


