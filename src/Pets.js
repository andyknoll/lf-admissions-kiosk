// Pets.js

import React from 'react';
import { PetsPoses, PetPoses } from './Poses';
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

  render() {
    return (
      <PetsPoses>
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
      </PetsPoses>
    );
  }

}


// MUST set onMouseDown to a function!
const Pet = (props) => {
  let currPet = props.appState.person.pet;
  return (
    <PetPoses
      className={currPet === PetNames[props.id] ? "pet-card-current" : "pet-card"}
      id={"pet-" + props.id}
      onMouseDown={() => props.onMouseDown(props.id)}>
      <div className="pet-label">{PetNames[props.id]}</div>
    </PetPoses>      
  );
}

export default Pets;

