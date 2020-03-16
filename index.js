const fs = require('fs')
const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes')

// Create a note
yargs.command({
    command: 'add',
    describe: 'Add a note',
    builder: {
        title: {
            describe : 'Note title',
            demandOption : true,
            type: 'string'
        },
        body: {
            describe: 'Note Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title,argv.body)
    }
})

// Read a note
yargs.command ({
    command : 'read',
    describe: 'Read a note',
    builder : {
        title : {
            describe : 'Note title',
            demandOption : true,
            type: 'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title)
    }
})

// Remove a note
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder : {
        title : {
            describe : 'Note title',
            demandOption : true,
            type : 'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})

// List all notes
yargs.command({
    command: 'list',
    describe: 'List all notes',
    handler() {
        notes.listNotes()
    }
})

console.log(yargs.argv)