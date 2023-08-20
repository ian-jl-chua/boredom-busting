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

function firstMessage() {
  secondChangeText.textContent = ''
  changeText.textContent = firstListMessages[firstMessageIndex]
  firstMessageIndex = (firstMessageIndex + 1) % firstListMessages.length
}

function secondMessage() {
  changeText.textContent = ''
  secondChangeText.textContent = secondListMessages[secondMessageIndex]
  secondMessageIndex = (secondMessageIndex + 1) % secondListMessages.length
}

function buttonMove() {
  pushButton.style.gridArea = '3/3/4/4'
}

function buttonClick() {
  if (clickCount >= 15) {
    buttonMove()
  } else if (clickCount >= 10) {
    secondMessage()
  } else {
    firstMessage()
  }

  clickCount = (clickCount + 1) % 16
}

// getting those elements by ID
const changeText = document.getElementById('changeText')
const pushButton = document.getElementById('pushableButton')
const secondChangeText = document.getElementById('secondChangeText')

// Event listener for the click
pushButton.addEventListener('click', buttonClick)
