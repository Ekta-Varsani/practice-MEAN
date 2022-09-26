const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();

var port = 3000;

//view engine setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname));

//bodyparser middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())

app.get("/", (req, res) => {
    res.render("sampleForm");
});

app.post("/saveData", (req, res) => {
    data = {
        email: req.body.email,
        name: req.body.name
    };
    console.log(JSON.stringify(data));
    // console.log("Using body-parser: ", req.body.email);
    // console.log("Using body-parser: ", req.body.name);
});

app.listen(port, () => {
    console.log(`server cerated at port no: ${port}`);
})