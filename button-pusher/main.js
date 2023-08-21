// Messages to be displayed
const firstListMessages = [
  "Please don't touch the button.",
  'Are you for real...',
  'Wow really',
  "Don't you have anything else to do?",
  'You know that time is money right?',
  'You are throwing away money by pressing this.',
  "Ok, you're gonna just do it anyway...",
  "You can't be serious...",
  'Why are you still doing this?',
  '*sigh*',
]

const secondListMessages = [
  'omgggggg',
  "You're STILL pressing it...",
  'Goodness me',
  'Do you really have nothing better to do?',
  "Alright, let's see how long you can keep this up",
]

let firstMessageIndex = 0
let secondMessageIndex = 0
let clickCount = 0

// Logic for first set of messages
function firstMessages() {
  secondChangeText.textContent = ''
  changeText.textContent = firstListMessages[firstMessageIndex]
  firstMessageIndex = (firstMessageIndex + 1) % firstListMessages.length
}
// Logic for second set of messages
function secondMessages() {
  changeText.textContent = ''
  secondChangeText.textContent = secondListMessages[secondMessageIndex]
  secondMessageIndex = (secondMessageIndex + 1) % secondListMessages.length
}
// Logic for third action
function buttonMove() {

  let randomRowStart, randomRowEnd, randomColStart, randomColEnd

  do {
    randomRowStart = Math.floor(Math.random() * 7) + 1
    randomRowEnd = randomRowStart + 1
    randomColStart = Math.floor(Math.random() * 9) + 1
    randomColEnd = randomColStart + 1
  } while (
    (randomRowStart === 1 && randomColStart === 5) ||
    (randomRowStart === 3 && randomColStart === 4) ||
    (randomRowStart === 3 && randomColStart === 5) ||
    (randomRowStart === 3 && randomColStart === 6)
  )

  pushButton.style.gridArea = `${randomRowStart}/${randomColStart}/${randomRowEnd}/${randomColEnd}`
}

// ACTUAL BUTTON ACTIONS
function buttonClick() {
  if (clickCount >= 15) {
    // moving the button 10 times
    buttonMove()
    console.log(clickCount)
  } else if (clickCount >= 10) {
    secondMessages()
  } else {
    firstMessages()
  }

  clickCount = (clickCount + 1) % 26
}

// getting those elements by ID
const changeText = document.getElementById('changeText')
const pushButton = document.getElementById('pushableButton')
const secondChangeText = document.getElementById('secondChangeText')

// Event listener for the click
pushButton.addEventListener('click', buttonClick)
