require('dotenv').config()
const express = require("express");
const app = express()
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors")

app.use(cors())

const port = process.env.PORT || 7000
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
require("./index")
app.use("/api", require("./index"))


mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, () => {
    console.log("connected to db");
})

app.listen(port, () => {
    console.log(`servere created at port: ${port}`);
})