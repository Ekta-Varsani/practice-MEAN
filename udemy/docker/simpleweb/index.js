const express = require("express")
const app = express()

app.get("/", (req, res) => {
    res.send("heyy there!!")
})

app.listen(8080, () => {
    console.log("server created at port no 8080");
})