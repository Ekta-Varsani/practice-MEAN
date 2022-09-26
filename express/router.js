// var express = require('express');
// var app = express();

// app.get('/hello', function(req, res){
//    res.send("Hello router");
// });

// app.listen(3000)


//multiple different methods at the same route-----------//

// var express = require('express');
// var app = express();

// // app.get('/hello', function(req, res){
// //    res.send("Hello World!");
// // });

// // app.post('/hello', function(req, res){
// //    res.send("You just called the post method at '/hello'!\n");
// // });
// app.all('/test', function(req, res){
//     res.send("HTTP method doesn't have any effect on this route!");
//  });

// app.listen(3000);


//pattern matched router --------------------//

var express = require('express');
var app = express();

app.get('/things/:id([0-9]{5})', function(req, res){
   res.send('id: ' + req.params.id);
});

// if id is not matched then this will be displayed
app.get('*', function(req, res){
   res.send('Sorry, this is an invalid URL.');
});
app.listen(3000);