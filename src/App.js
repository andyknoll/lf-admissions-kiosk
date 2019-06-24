/*
  App.js
  Andy Knoll
  June 2019

  Kiosk app for Lollypop Farm Admissions

  NOTES:

    pass down props to components
    maintain state in the top level App
    define animations in Poses

  TO DO:
  
    NextButton component
    enable Next button - canAdvance()
    get KeyPad working
    Axios AJAX calls - wait for Promise?
    upload actual Customer object
    PHP/MySQL DB server

  DONE:

    return to Welcome Screen after 30 secs
    animations tweaked OK

*/

import React from 'react';
import { ScreenViewer, DebugViewer } from './ScreenViewer';
import { NO_SCREEN, HELLO_SCREEN, NAME_SCREEN, PET_SCREEN, CONF_SCREEN } from './Screens'
import { PetNames, PET_NONE } from './Pets'

//import { getFakeCustomers } from  './Ajax'
//import { ajaxObject } from  './Ajax'

import './css/App.css';

const RESTART_TIME = 1000000;   // 30 seconds per screen until restart

class App extends React.Component {

  constructor(props) {
    super(props);

    this.intervalId = 0;

    this.state = {
      person: {
        firstName: "",
        lastName: "",
        pet: PetNames[PET_NONE]
      },
      currScreen: NO_SCREEN
    }

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
    this.advanceScreen();
  }

  advanceScreen() {
    let nextScreen = this.state.currScreen + 1;
    if (nextScreen > CONF_SCREEN) nextScreen = HELLO_SCREEN;   // wrap around to 1
    this.setState({currScreen: nextScreen}, () => {this.screenHasChanged()});
  }

  // called AFTER setState is completed
  screenHasChanged() {
    // always return to WELCOME SCREEN - do not leave kiosk hanging
    clearInterval(this.intervalId);
    this.intervalId = setInterval(() => { this.restartKiosk() }, RESTART_TIME);

    if (this.state.currScreen === HELLO_SCREEN) this.restartKiosk();    // clear state

    // fake Customer for now - until Keypad works
    if (this.state.currScreen === NAME_SCREEN) {
      //ajaxObject.getFakeCustomerName(this);   // updates App state - is this legal?
    }

    if (this.state.currScreen === PET_SCREEN) {
    }

    // make Ajax call at Confirmation Screen
    if (this.state.currScreen === CONF_SCREEN) {
      //ajaxObject.getFakeCustomers(this.ajaxSuccess, this.ajaxError);
    }
  }

  ajaxSuccess(obj) {
    alert("APP - AJAX SUCCESS: " + obj);
  }

  ajaxError(error) {
    alert("APP - AJAX ERROR: " + error);
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
    //alert("App.onPetMouseDown: " + petId);
    let person = this.state.person;
    // object spread
    // this.setState({person: {...person, pet: PetNames[petId]}}, () => {this.stateHasChanged()});
    this.setState({person: {...person, pet: PetNames[petId]}});
  }

  // this may not be needed up here - just the names
  onKeyMouseDown(keypadState) {
    let person = this.state.person;
    let currIdx = keypadState.currBufferIdx;
    let val = keypadState.buffers[currIdx];               // buffers [0] or [1]
    if (currIdx === 0) this.setState({person: {...person, firstName: val}});
    if (currIdx === 1) this.setState({person: {...person, lastName: val}});
    //alert("App.onKeyMouseDown: " + val);
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
        <div 
          className="next-button" 
          onClick={this.onNextButtonClick}>
        </div>
        <DebugViewer 
          appState={this.state}>
        </DebugViewer>
      </div>
    );
  }

}

export default App;
