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
  
    enable Next button - canAdvance()
    Axios AJAX calls - wait for Promise?
    upload actual Customer object
    PHP/MySQL DB server

  DONE:

    return to Welcome Screen after 30 secs
    animations tweaked OK
    NextButton component
    get KeyPad working

*/

import React from 'react';
import { ScreenManager, ScreenViewer, DebugViewer } from './ScreenViewer';
import { NO_SCREEN, HELLO_SCREEN, NAME_SCREEN, PET_SCREEN, CONF_SCREEN } from './Screens'
import { PetNames, PET_NONE } from './Pets'
import { NextButton } from './NextButton'
import { AjaxObject } from './Ajax'
import './css/App.css';

const RESTART_TIME = 1000000;   // 30 seconds per screen until restart

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      person: {
        firstName: "",
        lastName: "",
        pet: PetNames[PET_NONE]
      },
      currScreen: NO_SCREEN
    }

    //this.screenMgr = new ScreenManager();                 // contained object!  :-)
    this.intervalId = 0;

    this.onNextButtonClick = this.onNextButtonClick.bind(this);   // must bind!
    this.onPetMouseDown = this.onPetMouseDown.bind(this);         // must bind!
    this.onKeyMouseDown = this.onKeyMouseDown.bind(this);         // must bind!
  }

  // auto advance to Screen1
  componentDidMount() {
    setTimeout(() => { 
      this.setState({currScreen: HELLO_SCREEN}) 
    }, 500);
  }

  onNextButtonClick() {
    // static class methods work too!
    let nextScreen = ScreenManager.determineNextScreen(this.state.currScreen);
    //let nextScreen = this.screenMgr.determineNextScreen(this.state.currScreen);
    this.setState({currScreen: nextScreen}, () => {this.screenHasChanged()});
  }

  // called AFTER this.setState is completed
  screenHasChanged() {
    // always return to WELCOME SCREEN - do not leave kiosk hanging
    clearInterval(this.intervalId);
    this.intervalId = setInterval(() => { this.restartKiosk() }, RESTART_TIME);

    switch (this.state.currScreen) {
      case HELLO_SCREEN :
        this.restartKiosk();    // clear state
        break;
      case NAME_SCREEN :
        break;
      case PET_SCREEN :
        break;
      case CONF_SCREEN :
        // make Ajax call at Confirmation Screen
        AjaxObject.addCustomer(this.state.person);
        break;
      default :
        break;
    }
  }

  
  // clear ENTIRE state here - person too!
  restartKiosk() {
    this.setState({
      person: {
        firstName: "",
        lastName: "",
        pet: PetNames[PET_NONE]
      },
      currScreen: HELLO_SCREEN
    }) 
  }


  // pass this all the way down to Pets screen!
  onPetMouseDown(petId) {
    let person = this.state.person;
    // object spread
    this.setState({person: {...person, pet: PetNames[petId]}});
  }

  // this may not be needed up here - just the names
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
          currScreen={this.state.currScreen}
          appState={this.state}
          onPetMouseDown={this.onPetMouseDown}
          onKeyMouseDown={this.onKeyMouseDown}>
        </ScreenViewer>
        <NextButton
          onClickMe={this.onNextButtonClick}>
        </NextButton>
        <DebugViewer 
          appState={this.state}>
        </DebugViewer>
      </div>
    );
  }

}

export default App;
