const PORT = 95311;

const express = require("express");
const app = express();
const socket = require("socket.io");

const server = app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});

const io = socket(server);

io.on("connection", (socket) => {
    console.log(`${socket.id} connected`);
});
