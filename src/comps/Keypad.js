// Keypad.js

// BUG - MUST CLEAR BUFFERS EACH CYCLE!!!!

import React from 'react';
import { KeysPoses, KeyPoses } from '../utils/Poses';

import '../css/Keypad.css';

export const Keypad = (props) => {

  // pass the Key mousedown events back up to the App
  const firstName = props.appState.person.firstName;
  const lastName  = props.appState.person.lastName;

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
                onClick = {props.onFNameFocus}
                value = {firstName} 
              />
              <input
                readOnly
                type = "text"
                id = "input-lname" 
                className = "name-input"
                placeholder = "Last Name"
                onClick = {props.onLNameFocus}
                value = {lastName} 
              />
            </div>
        </div>

        <div className="key-row">          
            <Key id="Q" onKeyDown={props.onKeyDown}></Key>
            <Key id="W" onKeyDown={props.onKeyDown}></Key>
            <Key id="E" onKeyDown={props.onKeyDown}></Key>
            <Key id="R" onKeyDown={props.onKeyDown}></Key>
            <Key id="T" onKeyDown={props.onKeyDown}></Key>
            <Key id="Y" onKeyDown={props.onKeyDown}></Key>
            <Key id="U" onKeyDown={props.onKeyDown}></Key>
            <Key id="I" onKeyDown={props.onKeyDown}></Key>
            <Key id="O" onKeyDown={props.onKeyDown}></Key>
            <Key id="P" onKeyDown={props.onKeyDown}></Key>
        </div>
        <div className="key-row">          
            <Key id="A" onKeyDown={props.onKeyDown}></Key>
            <Key id="S" onKeyDown={props.onKeyDown}></Key>
            <Key id="D" onKeyDown={props.onKeyDown}></Key>
            <Key id="F" onKeyDown={props.onKeyDown}></Key>
            <Key id="G" onKeyDown={props.onKeyDown}></Key>
            <Key id="H" onKeyDown={props.onKeyDown}></Key>
            <Key id="J" onKeyDown={props.onKeyDown}></Key>
            <Key id="K" onKeyDown={props.onKeyDown}></Key>
            <Key id="L" onKeyDown={props.onKeyDown}></Key>
        </div>
        <div className="key-row">          
            <Key id="Z" onKeyDown={props.onKeyDown}></Key>
            <Key id="X" onKeyDown={props.onKeyDown}></Key>
            <Key id="C" onKeyDown={props.onKeyDown}></Key>
            <Key id="V" onKeyDown={props.onKeyDown}></Key>
            <Key id="B" onKeyDown={props.onKeyDown}></Key>
            <Key id="N" onKeyDown={props.onKeyDown}></Key>
            <Key id="M" onKeyDown={props.onKeyDown}></Key>
            <Key id="." onKeyDown={props.onKeyDown}></Key>
        </div>
        <div className="key-row">
            <KeyCtrl id="back"  onKeyDown={props.onKeyDown}></KeyCtrl>
            <KeyCtrl id="space" onKeyDown={props.onKeyDown}></KeyCtrl>
            <KeyCtrl id="clear" onKeyDown={props.onKeyDown}></KeyCtrl>
        </div>
      </KeysPoses>
    </div>
  );
}


// KeyPoses animation is not used currently
const Key = (props) => {
  return (
    <KeyPoses
      id={props.id}
      className="key"
      onMouseDown={() => {props.onKeyDown(props.id)}}
    >
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
    >
      {props.id}
    </KeyPoses>      
  );
}

