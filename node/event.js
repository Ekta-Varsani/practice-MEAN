var fs = require('fs');
var rs = fs.createReadStream('./ekta.txt');
rs.on('open', function () {
  console.log('The file is open');
});

//-----------------------------------------------------//

var events = require('events');
var eventEmitter = new events.EventEmitter();

//Create an event handler:
var myEventHandler = function () {
  console.log('I hear a scream!');
}

//Assign the event handler to an event:
eventEmitter.on('scream', myEventHandler);

//Fire the 'scream' event:
eventEmitter.emit('scream');

//-----------------------------------------------------//

// Importing events
const EventEmitter = require('events');
   
// Initializing event emitter instances 
var eventEmitter = new EventEmitter();
  
// Registering to myEvent 
eventEmitter.on('myEvent', (msg) => {
   console.log(msg);
});
  
// Triggering myEvent
eventEmitter.emit('myEvent', "First event");
