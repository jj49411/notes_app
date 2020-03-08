const validator = require('validator')
const getNotes = require('./notes')

const print = getNotes()

console.log(print)
console.log(validator.isEmail('julie@example.com'))
