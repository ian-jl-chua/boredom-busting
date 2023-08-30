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

let subsequentClickCount = 0
let firstMessageIndex = 0
let secondMessageIndex = 0
let mainClickCount = 0
let hasKaboomed = false

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
    [1, 5, 2, 6], //title
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
// Reset 3rd action
function resetButtonPosition() {
  pushButton.style.gridArea = '4/5/5/6' // Reset button position
  subsequentClickCount = 0 // Reset the count for buttonMove
  const secondMsg = document.querySelector('.messageTwo')

  secondMsg.hidden = true
}
// Logic for 4th action
function colorCubes() {
  changeText.textContent = "It's SEIZURE TIME!!!!!!!!!!!!!"

  const seizureDiv = document.createElement('div')

  seizureDiv.classList.add('changeColor')

  explode.parentElement.insertBefore(seizureDiv, explode)

  // Generate a random RGB color
  function generateRandomColor() {
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
    return `rgb(${r},${g},${b})`
  }

  const colors = [
    generateRandomColor(),
    generateRandomColor(),
    generateRandomColor(),
    generateRandomColor(),
    generateRandomColor(),
    generateRandomColor(),
    generateRandomColor(),
    generateRandomColor(),
    generateRandomColor(),
    generateRandomColor(),
    generateRandomColor(),
  ]

  colors.forEach((color, index) => {
    seizureDiv.style.setProperty(`--color${index}`, color)
  })
}
// Reset 4th action
function resetColorCubes() {
  changeText.textContent = ''
  secondChangeText.textContent = ''
  const elementsToRemove = document.querySelectorAll('.changeColor')

  // Loop through the selected elements and remove them
  elementsToRemove.forEach((element) => {
    element.remove()
  })
  
  const secondMsg = document.querySelector('.messageTwo')
  
  secondMsg.hidden = false

  subsequentClickCount = 0
}

// // Logic for 5th action
// function kaboom() {
//   if (!hasKaboomed) {
//     secondChangeText.textContent = ''
//     changeText.textContent = 'OMG what have you done...'
//     explode.hidden = false

//     const excludeGridAreas = [
//       [1, 5, 2, 6], //title
//       [6, 4, 7, 7],
//       [4, 5, 5, 6],
//     ] // grids to be excluded from explosion

//     // setInterval handles the explosion effect to make it random and more natural
//     setInterval(() => {
//       let randomRowStart, randomRowEnd, randomColStart, randomColEnd

//       do {
//         randomRowStart = Math.floor(Math.random() * 7) + 1
//         randomRowEnd = randomRowStart + 1
//         randomColStart = Math.floor(Math.random() * 9) + 1
//         randomColEnd = randomColStart + 1
//       } while (
//         excludeGridAreas.some(
//           (area) => area[0] === randomRowStart && area[1] === randomColStart
//         )
//       )

//       explode.style.gridArea = `${randomRowStart}/${randomColStart}/${randomRowEnd}/${randomColEnd}`
//     }, 1500)

//     hasKaboomed = true
//   }
// }
// // Reset 5th action
// function resetKaboom() {
//   explode.hidden = true
//   changeText.textContent = ''
// }

// if (subsequentClickCount >= 10) {
//     resetKaboom() //resets kaboom once user presses button 10 times
//   } else {
//     kaboom()
//     subsequentClickCount++
//     console.log(subsequentClickCount)
//   }
// ACTUAL BUTTON ACTIONS
function buttonClick() {
  if (mainClickCount >= 26) {
    if (subsequentClickCount >= 58) {
      resetColorCubes()
    } else {
      colorCubes()
      subsequentClickCount++
    }
    // console.log('sub', subsequentClickCount)
    // console.log('mainclicks', mainClickCount)
  } else if (mainClickCount >= 15) {
    if (subsequentClickCount >= 10) {
      resetButtonPosition()
    } else {
      buttonMove() // does this function 10 times
      subsequentClickCount++
    }
    // console.log(mainClickCount)
    // console.log('sub', subsequentClickCount)
  } else if (mainClickCount >= 10) {
    secondMessages()
    // console.log(mainClickCount)
    // console.log('sub', subsequentClickCount)
  } else {
    firstMessages()
    // console.log(mainClickCount)
    // console.log('sub', subsequentClickCount)
  }

  mainClickCount = (mainClickCount + 1) % 85
}

// getting those elements by ID
const changeText = document.getElementById('changeText')
const pushButton = document.getElementById('pushableButton')
const secondChangeText = document.getElementById('secondChangeText')
const explode = document.getElementById('explode')

// Event listener for the click
pushButton.addEventListener('click', buttonClick)
