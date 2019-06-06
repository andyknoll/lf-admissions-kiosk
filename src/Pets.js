// Pets.js

import React from 'react';
import { PetIn, PetsIn } from './Poses';
import './css/Pets.css';

export const PetNames = ["NONE", "DOG", "CAT", "RABBIT", "BIRD", "SMALL", "OTHER"];
export const PET_NONE   = 0;
export const PET_DOG    = 1;
export const PET_CAT    = 2;
export const PET_RABBIT = 3;
export const PET_BIRD   = 4;
export const PET_SMALL  = 5;
export const PET_OTHER  = 6;

class Pets extends React.Component {

  constructor(props) {
    super(props);
    //this.state = { currPet: PET_NONE }
    //this.onPetMouseDown = this.onPetMouseDown.bind(this);   // must bind!
  }

  /*
  // pass this up to Viewer and App?
  onPetMouseDown(petId) {
    this.setState({currPet: petId}, () => {this.stateHasChanged()});
  }

  stateHasChanged() {
    //alert("stateHasChanged: " + PetNames[this.state.currPet])
  }
  */

  render() {
    return (
      <PetsIn>
        < div className="pets">
          <div className="pet-row">          
            <Pet id={PET_DOG}    onMouseDown={this.props.onPetMouseDown} appState={this.props.appState}></Pet>
            <Pet id={PET_CAT}    onMouseDown={this.props.onPetMouseDown} appState={this.props.appState}></Pet>
            <Pet id={PET_RABBIT} onMouseDown={this.props.onPetMouseDown} appState={this.props.appState}></Pet>
          </div>
          <div className="pet-row">          
            <Pet id={PET_BIRD}   onMouseDown={this.props.onPetMouseDown} appState={this.props.appState}></Pet>
            <Pet id={PET_SMALL}  onMouseDown={this.props.onPetMouseDown} appState={this.props.appState}></Pet>
            <Pet id={PET_OTHER}  onMouseDown={this.props.onPetMouseDown} appState={this.props.appState}></Pet>
          </div>
        </div>
      </PetsIn>
    );
  }

}


// MUST set onMouseDown to a function!
// props.id - 1, 2, 3 etc
// pet.id   - "pet-1" etc.
const Pet = (props) => {
  let currPet = props.appState.person.pet;
  return (
    <PetIn 
      className={currPet === PetNames[props.id] ? "pet-card-current" : "pet-card"}
      id={"pet-" + props.id}
      onMouseDown={() => props.onMouseDown(props.id)}>
      <div className="pet-label">{PetNames[props.id]}</div>
    </PetIn>      
  );
}

export default Pets;

