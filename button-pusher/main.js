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

let currentMessageIndex = 0

function buttonClick() {
  changeText.textContent = messages[currentMessageIndex] //changing text context of the paragraph element

  currentMessageIndex = (currentMessageIndex + 1) % messages.length
}

// getting those elements by ID
const changeText = document.getElementById('changeText')
const pushButton = document.getElementById('pushableButton')

// Event listener for the click
pushButton.addEventListener('click', buttonClick)
