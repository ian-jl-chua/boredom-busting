// Messages to be displayed
const firstListMessages = [
  "Please don't touch the button.",
  'Wow really',
  "Don't you have anything else to do?",
  'You know that time is money right?',
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
let hasKaboomed = false
let hasSeizured = false

// 1st action
export function firstMessages() {
  secondChangeText.textContent = ''
  changeText.textContent = firstListMessages[firstMessageIndex]
  firstMessageIndex = (firstMessageIndex + 1) % firstListMessages.length
}
// 2nd action and reset 1st action
export function secondMessages() {
  changeText.textContent = ''
  secondChangeText.textContent = secondListMessages[secondMessageIndex]
  secondMessageIndex = (secondMessageIndex + 1) % secondListMessages.length
}
// 3rd action
export function buttonMove() {
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
export function resetButtonMove() {
  pushButton.style.gridArea = '4/5/5/6' // Reset button position
  changeText.textContent = 'Why are you even doing this?'

  const secondMsg = document.querySelector('.messageTwo')

  secondMsg.hidden = true
}
// 4th action
export function randomGlow() {
  changeText.textContent = 'It looks like you have broken something...'
  const existingGlowDivs = document.querySelectorAll('.glow')

  // Check the number of existing .glow divs
  if (existingGlowDivs.length < 5) {
    const glowDiv = document.createElement('div')
    glowDiv.classList.add('glow')

    // Generate a random grid location
    const excludeGridAreas = [
      [1, 5, 2, 6], // title
      [4, 5, 5, 6], // button
      [6, 4, 7, 7],
    ] // grids to be excluded

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

    glowDiv.style.gridArea = `${randomRowStart}/${randomColStart}/${randomRowEnd}/${randomColEnd}`

    if (explode && explode.parentElement) {
      explode.parentElement.insertBefore(glowDiv, explode)
    } else {
      console.log('There seems to be an error')
    }
  } else {
    console.log('There are already 5 or more .glow divs.')
  }
}
// Reset 4th action
export function resetRandomGlow() {
  changeText.textContent = "Don't you think it's time to leave?"
  secondChangeText.textContent = ''

  const elementsToRemove = document.querySelectorAll('.glow')

  elementsToRemove.forEach((element) => {
    element.remove()
  })
}
// 5th action
export function seizure() {
  if (!hasSeizured) {
    changeText.textContent = 'This will get rid of you for sure!!!!!!!!!!!!!'

    const maxDivs = 58 // Maximum number of divs to generate
    const intervalDuration = 40 // Interval duration in milliseconds

    const excludedAreas = [
      [1, 5, 2, 6], // title
      [4, 5, 5, 6], // button
      [6, 4, 7, 7],
    ] // Define the excluded grid areas

    const availableGridPositions = []
    for (let rowStart = 1; rowStart <= 7; rowStart++) {
      for (let colStart = 1; colStart <= 9; colStart++) {
        const isExcluded = excludedAreas.some(
          (area) =>
            area[0] <= rowStart &&
            area[1] <= colStart &&
            area[2] >= rowStart + 1 &&
            area[3] >= colStart + 1
        )
        if (!isExcluded) {
          availableGridPositions.push({
            rowStart,
            rowEnd: rowStart + 1,
            colStart,
            colEnd: colStart + 1,
          })
        }
      }
    }

    let divCounter = 0 // Counter to track the number of generated divs
    const intervalId = setInterval(() => {
      if (divCounter < maxDivs && availableGridPositions.length > 0) {
        const randomIndex = Math.floor(
          Math.random() * availableGridPositions.length
        )
        const randomPosition = availableGridPositions.splice(randomIndex, 1)[0]

        const seizureDiv = document.createElement('div')
        seizureDiv.classList.add('changeColor')

        seizureDiv.style.gridArea = `${randomPosition.rowStart}/${randomPosition.colStart}/${randomPosition.rowEnd}/${randomPosition.colEnd}`

        function generateRandomColor() {
          const r = Math.floor(Math.random() * 256)
          const g = Math.floor(Math.random() * 256)
          const b = Math.floor(Math.random() * 256)
          return `rgb(${r},${g},${b})`
        }

        const colors = Array.from({ length: 12 }, generateRandomColor) // Generate an array of random colors

        colors.forEach((color, index) => {
          seizureDiv.style.setProperty(`--color${index}`, color)
        })

        explode.parentElement.insertBefore(seizureDiv, explode)

        divCounter++ // Increment the counter

        if (divCounter === maxDivs) {
          clearInterval(intervalId) // Clear the interval once the desired count is reached
        }
      } else {
        clearInterval(intervalId) // Clear the interval if the desired count has already been reached
        changeText.textContent = ''
      }
    }, intervalDuration)

    hasSeizured = true
  }
}
// Reset 5th action
export function resetSeizure() {
  changeText.textContent = 'Still not leaving huh?'
  secondChangeText.textContent = ''

  const elementsToRemove = document.querySelectorAll('.changeColor')

  // Loop through the selected elements and remove them
  elementsToRemove.forEach((element) => {
    element.remove()
  })

  hasSeizured = false
  const secondMsg = document.querySelector('.messageTwo')
  secondMsg.hidden = false
}
// 6th action
export function kaboom() {
  if (!hasKaboomed) {
    secondChangeText.textContent = ''
    changeText.textContent = 'OMG what have you done...'
    explode.hidden = false

    const excludeGridAreas = [
      [1, 5, 2, 6], //title
      [6, 4, 7, 7],
      [4, 5, 5, 6],
    ] // grids to be excluded from explosion

    // setInterval handles the explosion effect to make it random and more natural
    setInterval(() => {
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

      explode.style.gridArea = `${randomRowStart}/${randomColStart}/${randomRowEnd}/${randomColEnd}`
    }, 500)

    hasKaboomed = true
  }
}
// Reset 6th action
export function resetKaboom() {
  hasKaboomed = false
  explode.hidden = true
  changeText.textContent = ''
}

// getting those elements by ID
const changeText = document.getElementById('changeText')
const pushButton = document.getElementById('pushableButton')
const secondChangeText = document.getElementById('secondChangeText')
const explode = document.getElementById('explode')
