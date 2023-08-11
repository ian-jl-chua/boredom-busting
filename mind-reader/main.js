// Reading the user input and storing the data in local storage, then redirect user to result page
function storeDataAndRedirect() {
  const selectedNumber = document.getElementById('selectedNumber').value

  // handling if user doesn't select a number
  if (!selectedNumber | null) {
    const alertMessage = document.querySelector('#alertMessage')

    const previousSibling = alertMessage.previousElementSibling;
    if (previousSibling) {
      previousSibling.remove(); // Removing the <br/> before the div
    }

    alertMessage.innerHTML = "<p> You didn't select a number... </p> <br/>"
  } else {
    localStorage.setItem('selectedNumber', selectedNumber)

    window.location.href = 'result.html'
  }
}

// Event listener for read mind button
document.addEventListener('DOMContentLoaded', () => {
  if (window.location.href.includes('index.html')) {
    const readMind = document.getElementById('readMindButton')

    readMind.addEventListener('click', storeDataAndRedirect)
  }
})

// Retrieve the stored number from Local Storage
const storedNumber = localStorage.getItem('selectedNumber')

// Clears local storage and redirects user back to home page
function resetAndRedirect() {
  localStorage.clear()

  window.location.href = 'index.html'
}

// Event listener for the play again button
// Display the stored number on the page
document.addEventListener('DOMContentLoaded', () => {
  if (window.location.href.includes('result.html')) {
    const resultDiv = document.getElementById('result')
    resultDiv.textContent = `${storedNumber}`

    const playAgain = document.getElementById('resultButton')

    playAgain.addEventListener('click', resetAndRedirect)
  }
})
