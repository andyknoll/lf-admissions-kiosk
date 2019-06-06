// Keypad.js

import React from 'react';
import './css/Keypad.css';

import { KeysIn } from './Poses';

class Keypad extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      currKey: null
    }

  }

  componentDidMount() {
  }

  /*
  onNextButtonClick() {
    let nextScreen = this.state.currScreen + 1;
    if (nextScreen > CONF_SCREEN) nextScreen = HELLO_SCREEN;   // Rrap around to 1
    this.setState({currScreen: nextScreen}, () => {this.stateHasChanged()});
  }

  // called AFTER setState is completed
  stateHasChanged() {
    //alert(this.state.currScreen)
  }
  */

  render() {
    return (
        < div className="keypad">
            <KeysIn
                pose = "poseVisible"
                initialPose = "poseHidden">    
                <div className="keys">          
                    <div className="key-row">          
                        <div id="spacer"></div>
                    </div>
                    <div className="key-row">          
                        <div className="key">Q</div>
                        <div className="key">W</div>
                        <div className="key">E</div>
                        <div className="key">R</div>
                        <div className="key">T</div>
                        <div className="key">Y</div>
                        <div className="key">U</div>
                        <div className="key">I</div>
                        <div className="key">O</div>
                        <div className="key">P</div>
                    </div>
                    <div className="key-row">          
                        <div className="key">A</div>
                        <div className="key">S</div>
                        <div className="key">D</div>
                        <div className="key">F</div>
                        <div className="key">G</div>
                        <div className="key">H</div>
                        <div className="key">J</div>
                        <div className="key">K</div>
                        <div className="key">L</div>
                    </div>
                    <div className="key-row">          
                        <div className="key">Z</div>
                        <div className="key">X</div>
                        <div className="key">C</div>
                        <div className="key">V</div>
                        <div className="key">B</div>
                        <div className="key">N</div>
                        <div className="key">M</div>
                        <div className="key">N</div>
                    </div>
                    <div className="key-row">
                        <div className="key half-ht">back</div>
                        <div className="key half-ht" id="space-bar">&nbsp;</div>
                        <div className="key half-ht">.</div>
                    </div>
                
                </div>
            </KeysIn>
        </div>
    );
  }

}

export default Keypad;
