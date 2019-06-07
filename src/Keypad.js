// Keypad.js

import React from 'react';
import './css/Keypad.css';
import { KeysPoses, KeyPoses } from './Poses';


class Keypad extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      currKey: null,
      fNameBuffer: "",
      lNameBuffer: ""
    }

    this.onKeyMouseDown = this.onKeyMouseDown.bind(this);         // must bind!
  }


  // intercept the keyDown then pass it up to parent Screen
  onKeyMouseDown(keyId) {
    //alert("Keypad.onKeyMouseDown: " + keyId);
    this.setState({currKey: keyId}, () => {this.stateHasChanged()});
    this.props.onKeyMouseDown(keyId);    // call Screen's
  }

  stateHasChanged() {
    //alert("Keypad.stateHasChanged");
    console.log(this.state.currKey);
    this.props.onKeyMouseDown(this.state.currKey);    // call Screen's
  }


  // clearBuffer(), etc...

  render() {
    return (
      <div className="keypad no-select">
        <KeysPoses pose="poseVisible" className="keys">    
          <div className="key-row">          
              <div id="spacer">
              <input id="inputFName" placeholder="First Name"></input>
              <input id="inputLName" placeholder="Last Name"></input>
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
