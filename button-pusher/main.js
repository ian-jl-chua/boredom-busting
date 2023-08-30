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
  if (mainClickCount >= 37) {
    if (subsequentClickCount >= 10) {
      resetKaboom() 
      subsequentClickCount = 0
    } else {
      kaboom()
      subsequentClickCount++
    }
    // console.log(mainClickCount)
    // console.log('sub', subsequentClickCount)
  } else if (mainClickCount >= 26) {
    if (subsequentClickCount >= 10) {
      resetColorCubes()
      subsequentClickCount = 0
    } else {
      colorCubes()
      subsequentClickCount++
    }
    // console.log(mainClickCount)
    // console.log('sub', subsequentClickCount)
  } else if (mainClickCount >= 15) {
    if (subsequentClickCount >= 10) {
      resetButtonMove()
      subsequentClickCount = 0
    } else {
      buttonMove() // does this function 10 times
      subsequentClickCount++
    }
    // console.log(mainClickCount)
    // console.log('sub', subsequentClickCount)
  } else if (mainClickCount >= 10) {
    secondMessages()
    // console.log(mainClickCount)
    // console.log('sub', subsequentClickCount)
  } else {
    firstMessages()
    // console.log(mainClickCount)
    // console.log('sub', subsequentClickCount)
  }

  mainClickCount = (mainClickCount + 1) % 49
}

const pushButton = document.getElementById('pushableButton')

// Event listener for the click
pushButton.addEventListener('click', buttonClick)
