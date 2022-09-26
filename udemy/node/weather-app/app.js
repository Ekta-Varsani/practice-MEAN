const request = require('request')
//import request from "request";


const url = 'https://api.darksky.net/forecast/9d1465c6f3bb7a6c71944bdd8548d026/37.8267,-122.4233'

request({ url: url, json: true }, (error, response) => {
    console.log( ' It is currently ' + response.body.currently.temperature + ' degress out. There is a ' + response.body.currently.precipProbability + '% chance of rain.')
})






// console.log("starting");

// setTimeout(() => {
//     console.log("2 second timer!!");
// }, 2000)

// setTimeout( () => {
//     console.log("0 second timer!!");
// }, 0)

// console.log("stopping");