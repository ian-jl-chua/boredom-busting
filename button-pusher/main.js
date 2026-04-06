import { phases, MAX_PRESS_COUNT } from './phases.js';
import * as actions from './components.js';

let subsequentClickCount = 0;
let mainClickCount = 0;

function buttonClick() {
  // 4-press cycle logic to control phases
  subsequentClickCount = subsequentClickCount >= 4 ? 0 : subsequentClickCount + 1;
  
  // Find the highest threshold that matches
  const phase = phases.find(p => mainClickCount >= p.threshold);
  
  if (phase) {
    const shouldReset = subsequentClickCount === 0 && phase.reset;
    
    if (shouldReset) {
      actions[phase.reset]();
    } else {
      actions[phase.action]();
    }
  }
  
  mainClickCount = (mainClickCount + 1) % MAX_PRESS_COUNT;
}

document.getElementById('pushableButton').addEventListener('click', buttonClick);

// import {
//   firstMessages,
//   secondMessages,
//   buttonMove,
//   resetButtonMove,
//   randomGlow,
//   resetRandomGlow,
//   seizure,
//   resetSeizure,
//   kaboom,
//   resetKaboom,
// } from './components.js'

// let subsequentClickCount = 0
// let mainClickCount = 0

// // ACTUAL BUTTON ACTIONS
// function buttonClick() {
//   subsequentClickCount =
//     subsequentClickCount >= 4 ? 0 : subsequentClickCount + 1

//   if (mainClickCount >= 25) {
//     subsequentClickCount === 0 ? resetKaboom() : kaboom()
//     // console.log(mainClickCount)
//     // console.log('sub', subsequentClickCount)
//   } else if (mainClickCount >= 20) {
//     subsequentClickCount === 0 ? resetSeizure() : seizure()
//     // console.log(mainClickCount)
//     // console.log('sub', subsequentClickCount)
//   } else if (mainClickCount >= 15) {
//     subsequentClickCount === 0 ? resetRandomGlow() : randomGlow()
//     // console.log(mainClickCount)
//     // console.log('sub', subsequentClickCount)
//   } else if (mainClickCount >= 10) {
//     subsequentClickCount === 0 ? resetButtonMove() : buttonMove()
//     // console.log(mainClickCount)
//     // console.log('sub', subsequentClickCount)
//   } else if (mainClickCount >= 5) {
//     secondMessages()
//     // console.log(mainClickCount)
//   } else {
//     firstMessages()
//     // console.log(mainClickCount)
//   }

//   mainClickCount = (mainClickCount + 1) % 30
// }

// const pushButton = document.getElementById('pushableButton')

// // Event listener for the click
// pushButton.addEventListener('click', buttonClick)
