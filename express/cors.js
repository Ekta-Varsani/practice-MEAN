const express = require("express");
const app = express();
const cors = require("cors");
const port = 8080;

app.use(cors());

// //enable all cors request
// app.get("/", function(req, res, next){
//     res.json({msg: "This is CORS enable"});
// })

// app.listen(port, () => {
//     console.log(`server created at port no: ${port}`);
// })

// //enable cors for single rout
// app.get("/",cors(), function(req, res, next){
//     res.json({msg: "This is CORS enable"});
// })

// app.listen(port, () => {
//     console.log(`server created at port no: ${port}`);
// })

//configuration cors
var corsOptions = {
  origin: "http://example.com",
  optionSuccessStatus: 200,
};

app.get("/", cors(corsOptions), function (req, res, next) {
  res.json({ msg: "This is CORS enable" });
});

app.listen(port, () => {
  console.log(`server created at port no: ${port}`);
});
