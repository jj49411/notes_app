const fs = require('fs')

const getNotes = function(){
  return 'Your notes...'
}

const addNotes = function(title, body) {
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
    console.log('New note added!')
  }else {
    console.log(duplicateNotes)
    console.log('Title already exist!') 
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
  addNotes: addNotes
}
