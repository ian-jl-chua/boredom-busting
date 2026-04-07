// Get DOM elements
const inputView = document.getElementById('inputView')
const resultView = document.getElementById('resultView')
const selectNumber = document.getElementById('selectNumber')
const readMindButton = document.getElementById('readMindButton')
const resetButton = document.getElementById('resetButton')
const resultSpan = document.getElementById('result')
const alertMessageDiv = document.getElementById('alertMessage')

let currentSelectedNumber = null

// Function to show the result view
function showResult(number) {
  resultSpan.textContent = number
  inputView.style.display = 'none'
  resultView.style.display = 'block'
}

// Function to show the input view
function clearInput() {
  inputView.style.display = 'block'
  resultView.style.display = 'none'
  selectNumber.value = '' // Reset the select dropdown
  alertMessageDiv.innerHTML = '' // Clear any error messages
  currentSelectedNumber = null
}

// Function to handle "Read my mind" button click
function readMind() {
  const selectedNumber = selectNumber.value

  if (!selectedNumber) {
    // Show error message
    alertMessageDiv.innerHTML = "<p>You didn't select a number...</p>"
    return
  }

  // Store the number and show result
  currentSelectedNumber = selectedNumber
  showResult(selectedNumber)
}

// Function to handle "Play again?" button click
function playAgain() {
  clearInput()
}

// Clear error message when user selects a number
selectNumber.addEventListener('change', () => {
  alertMessageDiv.innerHTML = ''
})

clearInput()
// Set up event listeners
readMindButton.addEventListener('click', readMind)
resetButton.addEventListener('click', playAgain)
