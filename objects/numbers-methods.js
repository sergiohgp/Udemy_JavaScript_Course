let number = 103.932

console.log(number.toFixed(2))

// round the number
Math.round(number)

// Force round down
Math.floor(number)

// Force round up
Math.ceil(number)

// Random 0 - 0.99999999
let randomNumber = Math.random()

let min = 10, max = 20

let randomNumber2 = Math.floor(Math.random()*(max - min + 1) + min)

console.log(randomNumber2)