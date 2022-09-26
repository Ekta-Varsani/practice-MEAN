var socket = io();

socket.on("countUpdated", (count) => {
    console.log("count is updated", count);
})