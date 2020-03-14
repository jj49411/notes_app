const fs = require('fs')
const chalk = require('chalk')

const getNotes = function(){
  return 'Your notes...'
}

const addNote = function(title, body) {
  const notes = notesFile()
  const duplicateNotes = notes.filter(function(note) {
    return note.title === title
  })

  if(duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body
    })
    saveNotes(notes)
    console.log(chalk.green.bold('New note added!'))
  }else {
    console.log(duplicateNotes)
    console.log(chalk.red.bold('Title already exist!'))
  }
}

const removeNote = function(title) {
  const notes = notesFile()
  const notesToKeep = notes.filter(function(note) {
    return note.title !== title
  })

  if(notes.length > notesToKeep.length) {
    saveNotes(notesToKeep)
    console.log(chalk.green.bold('Note removed!'))
  }else {
    console.log(chalk.red.bold('Note not found!'))
  }
}

const saveNotes = function(notes) {
  const jsonObj = JSON.stringify(notes)
  fs.writeFileSync('notes.json', jsonObj)
}


const notesFile = function() {
  try{
    const dateBuffer = fs.readFileSync('notes.json')
    const dataJson = dateBuffer.toString()
    return JSON.parse(dataJson)
  } catch(e) {
    return []
  }
}
  
module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote
}
