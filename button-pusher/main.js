// Messages to be displayed
const messages = [
  "Please don't push the button.",
  'Are you for real....',
  'Wow really',
  "Don't you have anything else to do?",
  'You know  that time is money right?',
  "Ok, you're gonna just do it anyway",
  "You can't be serious...",
]

// getting those elements by ID
const changeText = document.getElementById('changeText');
const pushButton = document.getElementById('pushableButton');

let currentMessageIndex = 0;

pushButton.addEventListener('click', () => {
  changeText.textContent = messages[currentMessageIndex];
  currentMessageIndex = (currentMessageIndex + 1) % messages.length;
});
