const fs = require('fs')
const chalk = require('chalk')

const addNote = (title, body) => {
  const notes = notesFile()
  const duplicateNote = notes.find((note) => note.title === title)

  if(!duplicateNote) {
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

const listNotes = () => {
  const notes = notesFile()
  console.log(chalk.blue.bold('Your notes: '))
  notes.forEach((note) => console.log(note.title))
}

const readNote = (title) => {
  const notes = notesFile()
  const noteToRead = notes.find((note) => note.title === title)
  if(noteToRead) {
    console.log(chalk.blue.inverse(noteToRead.title), '- ', noteToRead.body)
  }else {
    console.log(chalk.white.inverse('Note not found!'))
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
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote
}
