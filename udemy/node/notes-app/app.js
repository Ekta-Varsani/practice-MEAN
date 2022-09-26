const chalk = require('chalk')
// import chalk from "chalk"
// import yargs from "yargs";
// import * as notes from "./notes.js"
// import  demandOption  from "yargs";

const { demandOption } = require("yargs");
const yargs = require("yargs")
const notes = require("./notes.js");

// const add = require("./utils.js")
// const sum = add(4, -2)
// console.log(sum);

// const msg = chalk.bold.red.inverse("success")
// console.log(msg);

// var validator = require("validator")
// const getNotes = require("./notes.js");
// const data = getNotes();
// console.log(data);
// console.log(validator.isURL("https://mead.io"))
yargs.version("1.0.0")

 //create add command

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
    title: {
    describe: 'Note title',
    demandOption: true,
    type: 'string'
    },
    body: {
    describe: 'Note body',
    demandOption: true,
    type: 'string'
    }
    },
    handler: function (argv) {
        notes.addNote(argv.title, argv.body)
    }
})

// create remove command

yargs.command({
    command: 'remove',
    describe: 'remove a new note',
    builder: {
        title: {
            describe: "note title",
            demandOption: true,
            type : "string"
        }
    },
    handler: function (argv) {
    notes.removeNote(argv.title)
    }
})

//create list command

yargs.command({
    command: "list",
    describe: "List your notes",
    handler: function(){
        console.log("Listing out all node");
    }
})

//create read command

yargs.command({
    command: "read",
    describe: "read a node",
    handler: function(){
        console.log("Reading a node");
    }
})

yargs.parse()
//console.log(process.argv);
//console.log(yargs.argv);