const fs = require('fs');
const chalk = require('chalk')

const notes = "This is notes file";
const getNotes = function () {
    return notes;
}

const addNotes = function (title, body) {
    const notes = loadNotes()
    // const duplicateNotes = notes.filter(note => note.title === title)
    const duplicateNote = notes.find( (note) => note.title === title)
    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log('New note added')
    } else {
        console.log('Note title taken')
    }
}


const removeNote = function (title) {
    const notes = loadNotes()
    const notesToKeep = notes.filter(function (note) {
        return note.title !== title
    })
    if (notes.length > notesToKeep.length) {
        console.log(chalk.green.inverse("Note removed!"))
        saveNotes(notesToKeep)
    } else {
        console.log(chalk.red.inverse('No notes found!'))
    }
    // console.log(notesToKeep)
}

const listNotes = () => {
    const notes = loadNotes()

    console.log(chalk.inverse('Your notes !'))
    notes.forEach(note => {
        console.log(note)
    });
}


const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find( (note) => note.title == title)
    if(note){
        console.log(chalk.inverse(note.title))
        console.log(note.body)
    }else{
        console.log(chalk.red.inverse("Note not found!"))
    }
}

const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        // console.log("Load Notes", JSON.parse(dataJSON))
        return JSON.parse(dataJSON)
    } catch (error) {
        // console.log("error load notes",error)
        return []
    }
}

module.exports = { getNotes, addNotes, removeNote, listNotes, readNote };