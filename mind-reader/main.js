// Obtaining and storing user input
document.addEventListener('DOMContentLoaded', () => {
  const readMindButton = document.getElementById('readMindButton');

  readMindButton.addEventListener('click', () => {
    const selectedNumber = document.getElementById('selectedNumber').value;

    // Store the selected number in Local Storage
    localStorage.setItem('selectedNumber', selectedNumber);

    // Redirect to the different HTML page
    window.location.href = 'result.html';
  });
});

 // Retrieve the stored number from Local Storage
 const storedNumber = localStorage.getItem('selectedNumber');

 // Display the stored number on the page
 const resultDiv = document.getElementById('result');
 resultDiv.textContent = `${storedNumber}`;


// MIGHT BE USEFUL LATER ON
 // document.addEventListener('DOMContentLoaded', () => {
//   const form = document.getElementById('mindReaderForm');

//   form.addEventListener('submit', (event) => {
//     event.preventDefault(); // Prevent page reload

//     const selectedNumber = document.getElementById('selectedNumber').value;

//     // Store the selected number in Local Storage
//     localStorage.setItem('selectedNumber', selectedNumber);

//     // Redirect to the different HTML page
//     window.location.href = 'result.html';
//   });
// });