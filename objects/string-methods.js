let name = 'Sergio' 

// console.log(name.length)
// console.log(name.toUpperCase())
// console.log(name.toLowerCase())

let password = '1234abcd1234'
let password2 = '3423password231'
let password3 = '123'
// console.log(password.includes('2'))

let isValidPassword = function (password) {
    if (password.length > 8 && !password.includes('password')) {
        return true
    } else {
        return false
    }
}

let isValidPasswordReturn = function (password) {
    return password.length > 8 && !password.includes('password')
}

console.log(isValidPassword(password))
console.log(isValidPassword(password2))
console.log(isValidPassword(password3))

