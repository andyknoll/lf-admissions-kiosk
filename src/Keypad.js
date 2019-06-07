// Keypad.js

import React from 'react';
import './css/Keypad.css';

import { KeysPoses, KeyPoses } from './Poses';

class Keypad extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      currKey: null,
      firstName: "",
      lastName: ""
    }

  }

  render() {
    return (
      <div className="keypad no-select">
        <KeysPoses pose="poseVisible" className="keys">    
          <div className="key-row">          
              <div id="spacer"></div>
          </div>
          <div className="key-row">          
              <Key id="Q" onKeyDown={this.props.onKeyMouseDown}></Key>
              <Key id="W" onKeyDown={this.props.onKeyMouseDown}></Key>
              <Key id="E" onKeyDown={this.props.onKeyMouseDown}></Key>
              <Key id="R" onKeyDown={this.props.onKeyMouseDown}></Key>
              <Key id="T" onKeyDown={this.props.onKeyMouseDown}></Key>
              <Key id="Y" onKeyDown={this.props.onKeyMouseDown}></Key>
              <Key id="U" onKeyDown={this.props.onKeyMouseDown}></Key>
              <Key id="I" onKeyDown={this.props.onKeyMouseDown}></Key>
              <Key id="O" onKeyDown={this.props.onKeyMouseDown}></Key>
              <Key id="P" onKeyDown={this.props.onKeyMouseDown}></Key>
          </div>
          <div className="key-row">          
              <Key id="A" onKeyDown={this.props.onKeyMouseDown}></Key>
              <Key id="S" onKeyDown={this.props.onKeyMouseDown}></Key>
              <Key id="D" onKeyDown={this.props.onKeyMouseDown}></Key>
              <Key id="F" onKeyDown={this.props.onKeyMouseDown}></Key>
              <Key id="G" onKeyDown={this.props.onKeyMouseDown}></Key>
              <Key id="H" onKeyDown={this.props.onKeyMouseDown}></Key>
              <Key id="J" onKeyDown={this.props.onKeyMouseDown}></Key>
              <Key id="K" onKeyDown={this.props.onKeyMouseDown}></Key>
              <Key id="L" onKeyDown={this.props.onKeyMouseDown}></Key>
          </div>
          <div className="key-row">          
              <Key id="Z" onKeyDown={this.props.onKeyMouseDown}></Key>
              <Key id="X" onKeyDown={this.props.onKeyMouseDown}></Key>
              <Key id="C" onKeyDown={this.props.onKeyMouseDown}></Key>
              <Key id="V" onKeyDown={this.props.onKeyMouseDown}></Key>
              <Key id="B" onKeyDown={this.props.onKeyMouseDown}></Key>
              <Key id="N" onKeyDown={this.props.onKeyMouseDown}></Key>
              <Key id="M" onKeyDown={this.props.onKeyMouseDown}></Key>
              <Key id="." onKeyDown={this.props.onKeyMouseDown}></Key>
          </div>
          <div className="key-row">
              <KeyHalf id="back"  onKeyDown={this.props.onKeyMouseDown}></KeyHalf>
              <KeyHalf id="space" onKeyDown={this.props.onKeyMouseDown}></KeyHalf>
              <KeyHalf id="clear" onKeyDown={this.props.onKeyMouseDown}></KeyHalf>
          </div>
        </KeysPoses>
      </div>
    );
  }

}


// MUST set onMouseDown to a function!
const Key = (props) => {
  return (
    <KeyPoses
      id={props.id}
      className="key"
      onMouseDown={() => props.onKeyDown(props.id)}>
      {props.id}
    </KeyPoses>      
  );
}

const KeyHalf = (props) => {
  return (
    <KeyPoses
      id={props.id}
      className="key key-half-height"
      onMouseDown={() => props.onKeyDown(props.id)}>
      {props.id}
    </KeyPoses>      
  );
}


export default Keypad;
