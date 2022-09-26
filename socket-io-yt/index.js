const express = require("express")
const app = express()
const server = require("http").createServer(app)
const io = require("socket.io")(server,{cors: {origin: '*'}})
const port = 3000

app.set("view engine", "ejs")

app.get("/home", (req, res) => {
    res.render("home")
})

io.on("connection", (socket) => {
    console.log("user connected");
})

app.listen(port, () => {
    console.log(`server created at port no: ${port}`);
})

