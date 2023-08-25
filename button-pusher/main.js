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

let buttonMoveCount = 0
let firstMessageIndex = 0
let secondMessageIndex = 0
let clickCount = 0

// Logic for 1st set of messages
function firstMessages() {
  secondChangeText.textContent = ''
  changeText.textContent = firstListMessages[firstMessageIndex]
  firstMessageIndex = (firstMessageIndex + 1) % firstListMessages.length
}
// Logic for 2nd set of messages
function secondMessages() {
  changeText.textContent = ''
  secondChangeText.textContent = secondListMessages[secondMessageIndex]
  secondMessageIndex = (secondMessageIndex + 1) % secondListMessages.length
}
// Logic for 3rd action
function buttonMove() {
  secondChangeText.textContent = "Look, it's over there!"

  const excludeGridAreas = [
    [1, 5, 2, 6],
    [3, 4, 4, 7],
    [3, 5, 4, 6],
    [3, 6, 4, 7],
  ] // grids to be excluded from button placement

  let randomRowStart, randomRowEnd, randomColStart, randomColEnd

  do {
    randomRowStart = Math.floor(Math.random() * 7) + 1
    randomRowEnd = randomRowStart + 1
    randomColStart = Math.floor(Math.random() * 9) + 1
    randomColEnd = randomColStart + 1
  } while (
    excludeGridAreas.some(
      (area) => area[0] === randomRowStart && area[1] === randomColStart
    )
  )

  pushButton.style.gridArea = `${randomRowStart}/${randomColStart}/${randomRowEnd}/${randomColEnd}`
}

function resetButtonPosition() {
  pushButton.style.gridArea = '4/5/5/6' // Reset button position
  buttonMoveCount = 0 // Reset the count for buttonMove
}

// Logic for 4th action
function kaboom() {
  secondChangeText.textContent = ''
  changeText.textContent = 'OMG what have you done...'
  explode.hidden = false
}

// ACTUAL BUTTON ACTIONS
function buttonClick() {
  if (clickCount >= 26) {
    kaboom()
  } else if (clickCount >= 15) {
    if (buttonMoveCount >= 10) {
      resetButtonPosition()
    } else {
      buttonMove() // does this function 10 times
      buttonMoveCount++
    }
    console.log(clickCount)
  } else if (clickCount >= 10) {
    secondMessages()
  } else {
    firstMessages()
  }

  clickCount = (clickCount + 1) % 27
}

// getting those elements by ID
const changeText = document.getElementById('changeText')
const pushButton = document.getElementById('pushableButton')
const secondChangeText = document.getElementById('secondChangeText')
const explode = document.getElementById('explode')

// Event listener for the click
pushButton.addEventListener('click', buttonClick)
