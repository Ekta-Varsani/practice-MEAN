const fs = require("fs")

// const book = {
//     title: "Ego is the enemy",
//     author: "Ryan Holiday"
// }

// const bookJSON = JSON.stringify(book)
// fs.writeFileSync("1-json.json", bookJSON)

// console.log(bookJSON);
// const parseData = JSON.parse(bookJSON);
// console.log(parseData.author);

// const dataBuffer = fs.readFileSync("1-json.json")
// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON)
// console.log(data.title);


// work with JSON and file system :
const dataBuffer = fs.readFileSync("1-json.json")
const dataJSON = dataBuffer.toString()
const parseData =JSON.parse(dataJSON)

parseData.name = "Ann"
parseData.age = 55

const parseDataJSON = JSON.stringify(parseData)
fs.writeFileSync("1-json.json", parseDataJSON)
