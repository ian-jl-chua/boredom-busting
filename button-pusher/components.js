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


let firstMessageIndex = 0
let secondMessageIndex = 0
let hasKaboomed = false
let haveSeizure = false


// Logic for 1st set of messages
export function firstMessages() {
  secondChangeText.textContent = ''
  changeText.textContent = firstListMessages[firstMessageIndex]
  firstMessageIndex = (firstMessageIndex + 1) % firstListMessages.length
}
// Logic for 2nd set of messages
export function secondMessages() {
  changeText.textContent = ''
  secondChangeText.textContent = secondListMessages[secondMessageIndex]
  secondMessageIndex = (secondMessageIndex + 1) % secondListMessages.length
}
// Logic for 3rd action
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

  const secondMsg = document.querySelector('.messageTwo')

  secondMsg.hidden = true
}
// Logic for 4th action
export function colorCubes() {
  if (!haveSeizure) {
    changeText.textContent = "It's SEIZURE TIME!!!!!!!!!!!!!"

    let divCounter = 0 // Counter to track the number of generated divs
    const maxDivs = 58 // Maximum number of divs to generate
    const intervalDuration = 50 // Interval duration in milliseconds

    const intervalId = setInterval(() => {
      if (divCounter < maxDivs) {
        const seizureDiv = document.createElement('div')
        seizureDiv.classList.add('changeColor')
        explode.parentElement.insertBefore(seizureDiv, explode)

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

        divCounter++ // Increment the counter

        if (divCounter === maxDivs) {
          clearInterval(intervalId) // Clear the interval once the desired count is reached
        }
      } else {
        clearInterval(intervalId) // Clear the interval if the desired count has already been reached
      }
    }, intervalDuration)

    haveSeizure = true
  }
}
// Reset 4th action
export function resetColorCubes() {
  changeText.textContent = ''
  secondChangeText.textContent = ''

  const elementsToRemove = document.querySelectorAll('.changeColor')

  // Loop through the selected elements and remove them
  elementsToRemove.forEach((element) => {
    element.remove()
  })

  const secondMsg = document.querySelector('.messageTwo')
  secondMsg.hidden = false
}
// Logic for 5th action
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
// Reset 5th action
export function resetKaboom() {
  explode.hidden = true
  changeText.textContent = ''
}

// getting those elements by ID
const changeText = document.getElementById('changeText')
const pushButton = document.getElementById('pushableButton')
const secondChangeText = document.getElementById('secondChangeText')
const explode = document.getElementById('explode')
