// Messages to be displayed
const messages = [
  "Please don't touch the button.",
  'Are you for real...',
  'Wow really',
  "Don't you have anything else to do?",
  'You know that time is money right?',
  'You are throwing away money by pressing this.',
  "Ok, you're gonna just do it anyway...",
  "You can't be serious...",
  '*sigh*',
]

const second = [
  'omgggggg',
  "You're STILL pressing it...",
  'Goodness me',
  'Do you really have nothing better to do?',
]

let currentMessageIndex = 0
let secondMessageIndex = 0
let clickCount = 0

function firstMessage() {
  secondChangeText.textContent = ''
  changeText.textContent = messages[currentMessageIndex]
  currentMessageIndex = (currentMessageIndex + 1) % messages.length
}

function secondMessage() {
  changeText.textContent = ''
  secondChangeText.textContent = second[secondMessageIndex]
  secondMessageIndex = (secondMessageIndex + 1) % second.length
}

function move(){
  
}

function buttonClick() {
  if (clickCount >= 9) {
    secondMessage()
  } else {
    firstMessage()
  }
  // if (clickCount < 9) {
  //   changeText.textContent = messages[currentMessageIndex]
  //   currentMessageIndex = (currentMessageIndex + 1) % messages.length
  // } else if (clickCount > 9 && clickCount < 11) {
  //   // look at creating a p element
  //   secondChangeText.textContent = second[secondMessageIndex]

  //   secondMessageIndex = (secondMessageIndex + 1) % second.length

  // } else if (clickCount === 11) {
  //   changeText.textContent = messages[0]
  //   currentMessageIndex = 1
  // }

  clickCount = (clickCount + 1) % 13
  // clickCount = (clickCount + 1) % 10
  // changeText.textContent = messages[currentMessageIndex] //changing text context of the paragraph element

  // currentMessageIndex = (currentMessageIndex + 1) % messages.length
}

// getting those elements by ID
const changeText = document.getElementById('changeText')
const pushButton = document.getElementById('pushableButton')
const secondChangeText = document.getElementById('secondChangeText')

// Event listener for the click
pushButton.addEventListener('click', buttonClick)
