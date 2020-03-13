const chalk = require('chalk');
const yargs = require('yargs')

const notes = require('./notes')
// const print = getNotes()

console.log(chalk.blue.bold('Success!'))
// console.log(process.argv)


//add, remove, read, list
 
//create add command
yargs.command({
  command: 'add',
  description: 'Add a new note',
  builder: {
    title: {
      description: 'Note Title',
      demandOption: true,
      type: 'string'
    },
    body: {
      description: 'Note Body',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function(argv) {
    notes.addNotes(argv.title, argv.body)
  }
})
//create remove command
yargs.command({
  command: 'remove',
  description: 'Remove a note',
  handler: function() {
    console.log('removed!')
  }
})

//create read command
yargs.command({
  command: 'read',
  description: 'Read a note',
  handler: function() {
    console.log('read!')
  }
})

//create list command
yargs.command({
  command: 'list',
  description: 'List the note',
  handler: function() {
    console.log('listed!')
  }
})

yargs.parse()