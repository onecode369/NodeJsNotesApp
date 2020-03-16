const fs = require('fs')
const chalk = require('chalk')
const yargs = require('yargs')

//Read a note
const readNote = (title) => {
    const notes = fetchNotes()
    let flag = true
    notes.find(note => {
        if(note.title === title){
            flag = false
            console.log("\n" + 
            chalk.bgBlue.white.bold(note.title) + "\n" +
            note.body + "\n")
            return true
        }
    })

    if(flag){
        console.log(chalk.bgRed.white.bold("No notes were found with that title."))
    }
}

// Add a note
const addNote = (title , body) => {
    let notes = fetchNotes()
    const duplicateNote = notes.find(note => {
        if(note.title === title){
            flag = false
            console.log(chalk.bgRed.white.bold("Note with that title already exist."))
            return true
        }
    })

    if(!duplicateNote){
        notes.push({
            title : title,
            body : body
        })
        console.log(chalk.bgGreen.white.bold("Note has been added successfully!"))
    }

    storeNotes(notes)
}

// Remove a note
const removeNote = (title) => {
    let notes = fetchNotes()
    let newNotes = []
    const duplicateNote = notes.find(note => {
        if(note.title === title){
            console.log(chalk.bgGreen.white.bold("Notes removed successfully!"))
            flag = false
            return true
        }else {
            newNotes.push(note)
        }
    })

    if(!duplicateNote){
        console.log(chalk.bgRed.white.bold(" No notes were found with that title."))
    }

    storeNotes(newNotes)
}

// List all notes
const listNotes = () => {
    console.log("\n" + chalk.bgGreen.white.bold("Your Notes") + "\n")
    const notes = fetchNotes()
    notes.forEach(note => {
        console.log("\n" +
        chalk.bgBlue.white.bold(note.title) + "\n" +
        note.body + "\n")
    })
}

const fetchNotes = () => {
    try {
        data = fs.readFileSync('notes.json' , 'utf-8')
        return JSON.parse(data)
    } catch(e){
        return []
    }
}

const storeNotes = (notes) => {
    fs.writeFileSync('notes.json' , JSON.stringify(notes))
}

module.exports = {
    readNote,
    addNote,
    listNotes,
    removeNote
}
