// Reading the user input and storing the data in local storage, then redirect user to result page
function storeDataAndRedirect() {
  const selectedNumber = document.getElementById('selectedNumber').value

  // handling if user doesn't select a number
  if (!selectedNumber | null) {
    const alertMessage = document.querySelector('#alertMessage')
    alertMessage.innerHTML = "<p> You didn't select a number... </p> <br/>"
  } else {
    localStorage.setItem('selectedNumber', selectedNumber)

    window.location.href = 'result.html'
  }
}
// Event listener for read mind button
document.addEventListener('DOMContentLoaded', () => {
  const readMind = document.getElementById('readMindButton')

  readMind.addEventListener('click', storeDataAndRedirect)
})

// Retrieve the stored number from Local Storage
// Display the stored number on the page
const storedNumber = localStorage.getItem('selectedNumber')

const resultDiv = document.getElementById('result')
resultDiv.textContent = `${storedNumber}`

// Clears local storage and redirects user back to home page
function resetAndRedirect() {
  localStorage.clear()

  window.location.href = 'index.html'
}

// Event listener for the play again button
document.addEventListener('DOMContentLoaded', () => {
  const playAgain = document.getElementById('resultButton')

  playAgain.addEventListener('click', resetAndRedirect)
})
