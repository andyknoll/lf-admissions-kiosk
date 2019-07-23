/*
  App.js
  Andy Knoll
  June 2019

  Kiosk app for Lollypop Farm Admissions

  NOTES:

    pass down props (handlers) to components
    maintain state in the top level App
    define animations in Poses

  TO DO:
  
    NextButton and ParaPoses not working
    try hooks

  DONE:

    return to Welcome Screen after 30 secs
    animations tweaked OK
    NextButton component
    get KeyPad working
    add repo to Guthub
    pulled to PC-B1
    enable Next button - canAdvance() (started)
    Axios AJAX calls - wait for Promise?
    upload actual Customer object
    PHP/MySQL DB server
    use Config.js file

*/

import React from 'react';
//import { useState } from 'react';
import { ScreenManager, ScreenViewer, DebugViewer } from './ScreenViewer';
import { NO_SCREEN, HELLO_SCREEN, NAME_SCREEN, PET_SCREEN, CONFIRM_SCREEN } from './Screens'
import { PetNames, PET_NONE } from './Pets'
import { NextButton } from './NextButton'
import { AjaxObject } from '../utils/Ajax'
import { Config } from '../Config'

import '../css/App.css';

//const RESTART_TIME = 60000;   // 60 seconds per screen until restart


const INITIAL_STATE = {
  person: {
    firstName: "",
    lastName: "",
    pet: PetNames[PET_NONE]
  },
  currScreen: NO_SCREEN,
  ajaxMessage: ""
};


// CUSTOM HOOK! this is wrong though...
// errors when I try to call setScreenIsLocked()
// right now this is no different than a boolean function
export const useScreenIsLocked = (state) => {
  //const [screenIsLocked, setScreenIsLocked] = useState(false);

  switch (state.currScreen) {
    case HELLO_SCREEN : 
      return false;
    case NAME_SCREEN  : 
      return state.person.firstName === "" || state.person.lastName === "";
    case PET_SCREEN   : 
      return state.person.pet === PetNames[PET_NONE];
    case CONFIRM_SCREEN  : 
      return false;
    default :
      return false;
  }
}






class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = INITIAL_STATE;
    this.screenMgr = new ScreenManager();                         // contained object!  :-)
    this.intervalId = 0;

    this.onNextButtonClick = this.onNextButtonClick.bind(this);   // must bind!
    this.onPetMouseDown = this.onPetMouseDown.bind(this);         // must bind!
    this.onKeyMouseDown = this.onKeyMouseDown.bind(this);         // must bind!
  }

  // clear ENTIRE state here - person too!
  // note: could not pass in INITIAL_STATE here
  restartKiosk() {
    this.setState({
      person: {
        firstName: "",
        lastName: "",
        pet: PetNames[PET_NONE]
      },
      currScreen: HELLO_SCREEN,
      ajaxMessage: ""
    });
  }


  // auto advance to Screen1
  componentDidMount() {
    setTimeout(() => { 
      this.restartKiosk() 
    }, 500);
  }

  onNextButtonClick() {
    // static class methods work too!
    // let nextScreen = ScreenManager.determineNextScreen(this.state.currScreen);
    let nextScreen = this.screenMgr.determineNextScreen(this.state.currScreen);
    this.setState({currScreen: nextScreen}, () => this.screenHasChanged());
  }

  // called AFTER this.setState is completed above
  screenHasChanged() {
    // always return to HELLO_SCREEN after 60 secs - do not leave kiosk hanging
    clearInterval(this.intervalId);
    this.intervalId = setInterval(() => { this.restartKiosk() }, Config.RESTART_MSECS);

    switch (this.state.currScreen) {
      case HELLO_SCREEN :
        this.restartKiosk();    // clear state
        break;
      case NAME_SCREEN :
        //this.clearKeypadBuffers();    // no - use props!
        break;
      case PET_SCREEN :
        break;
      case CONFIRM_SCREEN :
        this.postCreateCustomerRequest();
        break;
      default :
        break;
    }
  }

  
  // make single Ajax call at Confirmation Screen only
  postCreateCustomerRequest() {
    AjaxObject.createCustomer(this);
  }

  // pass this all the way down to Pets screen!
  onPetMouseDown(petId) {
    let person = this.state.person;
    // object spread
    this.setState({person: {...person, pet: PetNames[petId]}});
  }

  // set first or last name depending on Keypad buffer
  onKeyMouseDown(keypadState) {
    let person = this.state.person;
    let currIdx = keypadState.currBufferIdx;
    let val = keypadState.buffers[currIdx];               // buffers [0] or [1]
    if (currIdx === 0) this.setState({person: {...person, firstName: val}});
    if (currIdx === 1) this.setState({person: {...person, lastName: val}});
  }


  render() {
    return (
      <div className="app">
        <ScreenViewer 
          appState={this.state}
          onPetMouseDown={this.onPetMouseDown}
          onKeyMouseDown={this.onKeyMouseDown}
          shouldClearKeypadBuffers={this.state.currScreen === NAME_SCREEN}>
        </ScreenViewer>
        <NextButton
          appState={this.state}
          onNextButtonClick={this.onNextButtonClick}>
        </NextButton>
        <DebugViewer 
          appState={this.state}>
        </DebugViewer>

      </div>
    );
  }

}

export default App;