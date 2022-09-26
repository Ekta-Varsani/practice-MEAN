const exp = require("constants")
const express = require("express")
const http = require("http")
const socketio = require("socket.io")
const path = require("path")

const app = express()
const server = http.createServer(app)
const io = socketio(server)

const publicDirectoryPath = path.join(__dirname, '../public/')
const port = 3000

app.use(express.static(publicDirectoryPath))

let count = 0

io.on("connection", (socket) => {
    console.log("socket io is connected");
    socket.emit("countUpdated", count)
})

server.listen(port, ()=> {
    console.log(`server created at port ${port}`);
})