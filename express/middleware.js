// var express = require('express');
// var app = express();

// //Simple request time logger
// app.use(function(req, res, next){
//    console.log("A new request received at " + Date.now());
   
//    //This function call is very important. It tells that more processing is
//    //required for the current request and is in the next middleware
// //    function route handler.
//    next();
// });

// app.listen(3000)


//--------------------------------//
// var express = require('express');
// var app = express();

// //Middleware function to log request protocol
// app.use('/things', function(req, res, next){
//    console.log("A request for things received at " + Date());
//    next();
// });

// // Route handler that sends the response
// app.get('/things', function(req, res){
//    res.send('Things');
// });

// app.listen(3000);


//flow of middelware------------------------//

var express = require('express');
var app = express();

//First middleware before response is sent
app.use(function(req, res, next){
   console.log("Start");
   next();
});

//Route handler
app.get('/', function(req, res, next){
   res.send("Middle");
   next();
});

app.use('/', function(req, res){
   console.log('End');
});

app.listen(3000);