const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => {
  return 'Your notes...'
}

const addNote = (title, body) => {
  const notes = notesFile()
  const duplicateNotes = notes.filter((note) => note.title === title)

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

const removeNote = (title) => {
  const notes = notesFile()
  const notesToKeep = notes.filter((note) => note.title !== title)

  if(notes.length > notesToKeep.length) {
    saveNotes(notesToKeep)
    console.log(chalk.green.bold('Note removed!'))
  }else {
    console.log(chalk.red.bold('Note not found!'))
  }
}

const saveNotes = (notes) => {
  const jsonObj = JSON.stringify(notes)
  fs.writeFileSync('notes.json', jsonObj)
}


const notesFile = () => {
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
