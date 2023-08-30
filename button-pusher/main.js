import {
  firstMessages,
  secondMessages,
  buttonMove,
  resetButtonMove,
  colorCubes,
  resetColorCubes,
  kaboom,
  resetKaboom,
} from './components.js'

let subsequentClickCount = 0
let mainClickCount = 0

// ACTUAL BUTTON ACTIONS
function buttonClick() {
  if (mainClickCount >= 20) {
    if (subsequentClickCount >= 4) {
      resetKaboom()
      subsequentClickCount = 0
    } else {
      kaboom()
      subsequentClickCount++
    }
    // console.log(mainClickCount)
    // console.log('sub', subsequentClickCount)
  } else if (mainClickCount >= 15) {
    if (subsequentClickCount >= 4) {
      resetColorCubes()
      subsequentClickCount = 0
    } else {
      colorCubes()
      subsequentClickCount++
    }
    // console.log(mainClickCount)
    // console.log('sub', subsequentClickCount)
  } else if (mainClickCount >= 10) {
    if (subsequentClickCount >= 4) {
      resetButtonMove()
      subsequentClickCount = 0
    } else {
      buttonMove()
      subsequentClickCount++
    }
    // console.log(mainClickCount)
    // console.log('sub', subsequentClickCount)
  } else if (mainClickCount >= 5) {
    secondMessages()
    // console.log(mainClickCount)
  } else {
    firstMessages()
    // console.log(mainClickCount)
  }

  mainClickCount = (mainClickCount + 1) % 25
}

const pushButton = document.getElementById('pushableButton')

// Event listener for the click
pushButton.addEventListener('click', buttonClick)
