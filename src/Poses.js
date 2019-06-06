// Poses.js

import posed from 'react-pose';

const durIn  = 500;
const durOut = 250;

export const charPoses = {
  exit: { 
    opacity: 0,
    x: 0,
    scaleX: 2,
    scaleY: 2,
    //rotateZ: -45,
    transition: {duration: 100, delay: 200} 
  },
  enter: { 
    opacity: 1,
    x: 0,
    scaleX: 1,
    scaleY: 1,
    //rotateZ: 0,
    delay: ({ charIndex }) => charIndex * 50,
    //transition: {duration: 500} 
  }
};



export const ScreenPoses = posed.div({
  poseHidden: { 
    //visibility: "visible",
    opacity: 0,
    x: 0,
    y: 10,
    scaleX: 0,
    scaleY: 0,
    delay: 0,
    transition: { 
      scaleX: { ease: 'easeIn', duration: 300, delay: 500 },
      scaleY: { ease: 'easeIn', duration: 300, delay: 500 },
      default: { ease: 'easeIn', duration: durOut }
    } 
  },
  poseVisible: { 
    //visibility: "visible",
    opacity: 1,
    x: 0,
    y: 0,
    scaleX: 1,
    scaleY: 1,
    delay: 50,
    transition: { 
      scaleX: { ease: 'easeIn', duration: 300, delay: 0 },
      scaleY: { ease: 'easeIn', duration: 300, delay: 0 },
      default: { ease: 'easeIn', duration: durIn }
    } 
  },
  initialPose: "poseHidden"
});

export const Pose2 = posed.div({
  poseHidden: { 
    opacity: 0,
    y: 10,
    transition: { ease: 'easeIn', duration: durOut } 
  },
  poseVisible: { 
    opacity: 1,
    y: 0,
    delay: durIn,
    transition: { ease: 'easeOut', duration: durIn } 
  },
  initialPose: "poseHidden"
});

export const TabletIn = posed.div({
  poseHidden: { 
    opacity: 0,
    rotateX: 0,
    rotateY: -20,
    delay: durOut,
    transition: { ease: 'easeIn', duration: durOut } 
  },
  poseVisible: { 
    opacity: 1,
    rotateX: 0,
    rotateY: 0,
    delay: durIn,
    transition: { ease: 'easeOut', duration: 1000 } 
    //transition: { type: "spring", stiffness: 80, mass: 3 } 
  },
  initialPose: "poseHidden"
});


export const KeysIn = posed.div({
  poseHidden: { 
    opacity: 0,
    //y: -500,
    delay: 500,
    transition: { ease: 'easeIn', duration: durOut } 
  },
  poseVisible: { 
    opacity: 1,
    //y: 0,
    delay: 1000,
    transition: { ease: 'easeIn', duration: 500 } 
  },
  initialPose: "poseHidden"
});


export const PetsIn = posed.div({
  poseHidden: { 
  },
  poseVisible: { 
      delayChildren: 50,
      staggerChildren: 150
  },
  initialPose: "poseHidden",
});

export const PetIn = posed.div({
  /*
  hoverable: true,
  init: {
    border: "2px solid #006156"   // LF teal
  },
  hover: {
    border: "2px solid #E8E5DA"   // LF wheat
  },
  */
  poseHidden: { 
    scale: 0,
    delay: 250,
    transition: { type: "spring", stiffness: 50, damping: 10 } 
  },
  poseVisible: { 
    scale: 1,
    delay: 250,
    transition: { type: "spring", stiffness: 100, damping: 50 } 
  },
  initialPose: "poseHidden"
});

