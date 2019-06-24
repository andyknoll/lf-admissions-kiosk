// Keypad.js

import React from 'react';
import './css/Keypad.css';
import { KeysPoses, KeyPoses } from './Poses';


class Keypad extends React.Component {

  constructor(props) {
    super(props);

    // must set in the constructor
    this.state = {
      keyId : "",
      buffers: ["", ""],    // lName, fName
      currBufferIdx: 0
    }

    this.onKeyMouseDown = this.onKeyMouseDown.bind(this);       // must bind!
    this.onFNameFocus   = this.onFNameFocus.bind(this);         // must bind!
    this.onLNameFocus   = this.onLNameFocus.bind(this);         // must bind!
  }


  // change buffers
  setCurrBufferIdx(val) {
    if (val < 0) val = 0;
    if (val > 1) val = 1;
    this.setState({currBufferIdx: val});
  }

  // intercept the keyDown then pass it up to parent Screen
  // fill the current buffer
  // keyId sent up from <Key>
  onKeyMouseDown(keyId) {
    //alert("Keypad.onKeyMouseDown: " + keyId);
    const newBuffers = this.state.buffers;
    let idx = this.state.currBufferIdx;
    let buffer = this.state.buffers[idx];
    let val = "";

    switch (keyId) {
      case "back" : 
        val = buffer.substring(0, buffer.length-1);
        break;
      case "space" : 
        val = buffer + " ";
        break;
      case "clear" : 
        val = ""; 
        break;
      default : 
        val = buffer + keyId;
    }

    newBuffers[idx] = val;    // swap entire array
    this.setState({buffers: newBuffers, keyId: keyId}, () => {this.stateHasChanged()});
  }

  stateHasChanged() {
    //alert("Keypad.stateHasChanged");
    console.log(this.state.keyId);
    this.props.onKeyMouseDown(this.state);    // call Screen's handler passing entire state
  }

  onFNameFocus = () => {
    //alert("onFNameFocus");
    this.setState({currBufferIdx: 0});
  }

  onLNameFocus = () => {
    //alert("onLNameFocus");
    this.setState({currBufferIdx: 1});
  }


  // clearBuffer(), etc...

  render() {
    let fName = this.props.appState.person.firstName;
    let lName = this.props.appState.person.lastName;

    return (
      <div className="keypad no-select">
        <KeysPoses pose="poseVisible" className="keys">    

          <div className="key-row">          
              <div id="spacer">
                <input
                  readOnly
                  type = "text"
                  id = "input-fname" 
                  className = "name-input"
                  placeholder = "First Name"
                  onClick = {this.onFNameFocus}
                  value = {fName} 
                />
                <input
                  readOnly
                  type = "text"
                  id = "input-lname" 
                  className = "name-input"
                  placeholder = "Last Name"
                  onClick = {this.onLNameFocus}
                  value = {lName} 
                />
              </div>
          </div>

          <div className="key-row">          
              <Key id="Q" onKeyDown={this.onKeyMouseDown}></Key>
              <Key id="W" onKeyDown={this.onKeyMouseDown}></Key>
              <Key id="E" onKeyDown={this.onKeyMouseDown}></Key>
              <Key id="R" onKeyDown={this.onKeyMouseDown}></Key>
              <Key id="T" onKeyDown={this.onKeyMouseDown}></Key>
              <Key id="Y" onKeyDown={this.onKeyMouseDown}></Key>
              <Key id="U" onKeyDown={this.onKeyMouseDown}></Key>
              <Key id="I" onKeyDown={this.onKeyMouseDown}></Key>
              <Key id="O" onKeyDown={this.onKeyMouseDown}></Key>
              <Key id="P" onKeyDown={this.onKeyMouseDown}></Key>
          </div>
          <div className="key-row">          
              <Key id="A" onKeyDown={this.onKeyMouseDown}></Key>
              <Key id="S" onKeyDown={this.onKeyMouseDown}></Key>
              <Key id="D" onKeyDown={this.onKeyMouseDown}></Key>
              <Key id="F" onKeyDown={this.onKeyMouseDown}></Key>
              <Key id="G" onKeyDown={this.onKeyMouseDown}></Key>
              <Key id="H" onKeyDown={this.onKeyMouseDown}></Key>
              <Key id="J" onKeyDown={this.onKeyMouseDown}></Key>
              <Key id="K" onKeyDown={this.onKeyMouseDown}></Key>
              <Key id="L" onKeyDown={this.onKeyMouseDown}></Key>
          </div>
          <div className="key-row">          
              <Key id="Z" onKeyDown={this.onKeyMouseDown}></Key>
              <Key id="X" onKeyDown={this.onKeyMouseDown}></Key>
              <Key id="C" onKeyDown={this.onKeyMouseDown}></Key>
              <Key id="V" onKeyDown={this.onKeyMouseDown}></Key>
              <Key id="B" onKeyDown={this.onKeyMouseDown}></Key>
              <Key id="N" onKeyDown={this.onKeyMouseDown}></Key>
              <Key id="M" onKeyDown={this.onKeyMouseDown}></Key>
              <Key id="." onKeyDown={this.onKeyMouseDown}></Key>
          </div>
          <div className="key-row">
              <KeyCtrl id="back"  onKeyDown={this.onKeyMouseDown}></KeyCtrl>
              <KeyCtrl id="space" onKeyDown={this.onKeyMouseDown}></KeyCtrl>
              <KeyCtrl id="clear" onKeyDown={this.onKeyMouseDown}></KeyCtrl>
          </div>
        </KeysPoses>
      </div>
    );
  }

}


// KeyPoses animation is not used currently
const Key = (props) => {
  return (
    <KeyPoses
      id={props.id}
      className="key"
      onMouseDown={() => {props.onKeyDown(props.id)}}
      onMouseUp={() => {}}>
      {props.id}
    </KeyPoses>      
  );
}

// these are special keys which control the Keypad buffer
const KeyCtrl = (props) => {
  return (
    <KeyPoses
      id={props.id}
      className="key key-half-height"
      onMouseDown={() => props.onKeyDown(props.id)}
      onMouseUp={() => {}}>
      {props.id}
    </KeyPoses>      
  );
}

export default Keypad;
