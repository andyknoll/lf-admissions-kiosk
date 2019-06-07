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
    Axios AJAX calls
    PHP/MySQL DB server

  DONE:

    return to Welcome Screen after 10 secs
    animations tweaked OK

*/

import React from 'react';
import { ScreenViewer } from './ScreenViewer';
import { NO_SCREEN, HELLO_SCREEN, CONF_SCREEN } from './Screens'
import { PetNames, PET_NONE } from './Pets'

import './css/App.css';


class App extends React.Component {

  constructor(props) {
    super(props);

    this.intervalId = 0;

    this.state = {
      person: {
        firstName: "Andy",
        lastName: "Knoll",
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

    /*
    */
  }

  onNextButtonClick() {
    let nextScreen = this.state.currScreen + 1;
    if (nextScreen > CONF_SCREEN) nextScreen = HELLO_SCREEN;   // wrap around to 1
    this.setState({currScreen: nextScreen}, () => {this.nextButtonClicked()});
  }

  // called AFTER setState is completed
  nextButtonClicked() {
    //alert("App.stateHasChanged");
    console.log(this.state);

    // always return to WELCOME SCREEN - do not leave kiosk hanging
    clearInterval(this.intervalId);

    // should clear ENTIRE state here - person too!
    this.intervalId = setInterval(() => { 
      this.setState({currScreen: HELLO_SCREEN}) 
    }, 5000);
  }

  // pass this all the way down to Pets screen!
  onPetMouseDown(petId) {
    //alert("App.onPetMouseDown: " + petId);
    let aPerson = this.state.person;
    // object spread
    this.setState({person: {...aPerson, pet: PetNames[petId]}}, () => {this.stateHasChanged()});
  }

  // this may not be needed up here - just the names
  onKeyMouseDown(keyId) {
    //alert("App.onKeyMouseDown: " + petId);
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
        <button 
          className="next-button" 
          onClick={this.onNextButtonClick}>
          Next
        </button>
      </div>
    );
  }

}

export default App;
