const chalk = require('chalk');
const yargs = require('yargs')

const getNotes = require('./notes')

const print = getNotes()

console.log(chalk.blue.bold('Success!'))
console.log(process.argv)
console.log(yargs.argv)


 