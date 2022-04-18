// module 4 class 1

// console.log("Hello");
// console.log(process.argv[2]);

const chalk = require('chalk');
const { argv } = require('yargs');
const yargs = require('yargs');
const { getNotes, addNotes, removeNote, listNotes, readNote } = require('./notes');

yargs.version('1.1.0');

// create add command
yargs.command({
    command: 'add',
    describe: 'add a new note',
    builder: {
        title: {
            describe: 'note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        addNotes(argv.title, argv.body)
        // console.log('TITLE: ' + argv.title);
        // console.log('BODY: ' + argv.body);
        // console.log('adding a new note ! ',argv);
    }
})

// create remove command
yargs.command({
    command: 'remove',
    describe: 'remove a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: "string"
        }
    },
    handler: function () {
        removeNote(argv.title)
    }
})

// create read command

yargs.command({
    command: 'read',
    describe: 'read a note',
    builder: {
        title:{
            description: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        readNote(argv.title)
    }
})

// create list command
yargs.command({
    command: 'list',
    describe: 'list your note',
    handler: function () {
       listNotes()
    }
})

// add, remove, read, list

yargs.parse()
    // console.log(yargs.argv);
