//const fs = require("fs")
import fs from 'fs'
//const chalk = require("chalk")

import chalk from "chalk";
function getNotes(){
    return "Your notes...";
}

const addNote = function(title, body){
    const note = loadNotes()
    const duplicateNotes = note.filter(function(notes){
        return notes.title === title
    })  
    
    if(duplicateNotes.length === 0){
        note.push({
            title: title,
            body: body
        })
        saveNotes(note)
        console.log("new note added");
    }
    else{
        console.log("note title taken");
    }  
}

const removeNote = function(title){
    const note = loadNotes()
    const noteToKeep = note.filter(function(notes){
        return notes.title !== title
    })
    if(note.length > noteToKeep.length){
        console.log(chalk.green.inverse("note removed!"));
    }
    else{
        console.log(chalk.red.inverse("No note found"));
    }
    saveNotes(noteToKeep)
}

const saveNotes = function(note){
    const dataJSON = JSON.stringify(note)
    fs.writeFileSync("notes.json", dataJSON)
}
const loadNotes = function(){
    try{
        const dataBuffer = fs.readFileSync("notes.json")
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)
    }
    catch (e){
        return []
    }
    
}
module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
};

// export { 
//     getNotes as getNotes,
//     addNote as addNote,
//     removeNote as removeNote
// };