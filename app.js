const chalk = require('chalk');
const yargs = require('yargs')

const notes = require('./notes')

//add, remove, read, list
 
//create add command
yargs.command({
  command: 'add',
  description: 'Add a new note',
  builder: {
    title: {
      description: 'Note title',
      demandOption: true,
      type: 'string'
    },
    body: {
      description: 'Note body',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body)
  }
})
//create remove command
yargs.command({
  command: 'remove',
  description: 'Remove a note',
  builder: {
    title: {
      description:'Note title to remove',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    notes.removeNote(argv.title)
  }
})

//create list command
yargs.command({
  command: 'list',
  description: 'List out all the notes',
  handler() {
    notes.listNotes()
  }
})

//create read command
yargs.command({
  command: 'read',
  description: 'Read a note',
  handler() {
    console.log('read!')
  }
})


yargs.parse()
