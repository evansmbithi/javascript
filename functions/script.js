/**
 * A standard function
 * @link https://developer.mozilla.org/en-US/docs/Glossary/Function
 */

const greenPack = {
  name: 'Frog Pack',
  color: 'green',
  volume: 8,
  pocketNum: 3,
}

// Traditional function expression
const addPack = function (currentPack) {
  const newArticle = document.createElement('article')
  newArticle.innerHTML = `
    <h1>${currentPack.name}</h1>
    <ul>
      <li>Volume: ${currentPack.volume}</li>
      <li>Color: ${currentPack.color}</li>
      <li>Number of pockets: ${currentPack.pocketNum}</li>
    </ul>
  `
  return newArticle
}

// Arrow function
const addPack2 = (currentPack) => {
  const newArticle = document.createElement('article')
  newArticle.innerHTML = `
    <h1>${currentPack.name}</h1>
    <ul>
      <li>Volume: ${currentPack.volume}</li>
      <li>Color: ${currentPack.color}</li>
      <li>Number of pockets: ${currentPack.pocketNum}</li>
    </ul>
  `
  return newArticle
}

const main = document.querySelector('main')
main.append(addPack(greenPack))

// Define a default volume for the window (the entire DOM):
window.volume = 20

const greenPack2 = {
  name: 'Frog Pack',
  color: 'green',
  volume: 8,
  pocketNum: 3,
  newVolume: function (volume) {
    console.log('this.volume in the method:', this.volume)
    this.volume = volume
    console.log('this.volume after update:', this.volume)
    // IIFE ()()
    ;(function () {
      // function declaration - hoisted to the global scope
      console.log('this.volume in nested function:', this.volume)
    })() // 20 from window object
    ;(() => {
      // arrow function resolves to the closest available scope
      console.log('this.volume in nested function:', this.volume) // 5
    })()
  },
}

console.log(greenPack2.newVolume(5))

// exercise
// function decalaration
function addClass(newClass) {
  return main.classList.add(newClass)
}

function getClassesFor(element) {
  const classes = document.querySelector(element).className
  return classes
}

addClass('txt-color')
console.log(getClassesFor('article'))

// function expression
const addClass2 = function (newClass) {
  return main.classList.add(newClass)
}

addClass2('bg-color')

// arrow function
const addClass3 = (newClass) => main.classList.add(newClass)

addClass3('center-align')

// IIFE
;(function () {
  main.classList.add('space-around')
})()

// IIFE (arrow) inside console.log
console.log(
  (() => {
    const classes = document.querySelector('article').className
    return classes
  })(),
)
