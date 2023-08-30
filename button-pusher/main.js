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
  subsequentClickCount =
    subsequentClickCount >= 4 ? 0 : subsequentClickCount + 1

  if (mainClickCount >= 20) {
    subsequentClickCount === 0 ? resetKaboom() : kaboom()
    // console.log(mainClickCount)
    // console.log('sub', subsequentClickCount)
  } else if (mainClickCount >= 15) {
    subsequentClickCount === 0 ? resetColorCubes() : colorCubes()
    // console.log(mainClickCount)
    // console.log('sub', subsequentClickCount)
  } else if (mainClickCount >= 10) {
    subsequentClickCount === 0 ? resetButtonMove() : buttonMove()
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
