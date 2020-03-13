const fs = require('fs')

const getNotes = function(){
  return 'Your notes...'
}

const addNotes = function(title, body) {
  const notes = notesFile()

  notes.push({
    title: title,
    body: body
  })
  saveNotes(notes)
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
