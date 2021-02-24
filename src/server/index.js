const PORT = 46991;

const httpServer = require("http").createServer();
const io = require("socket.io")(httpServer, {
    cors: {
        origin: "*",
    },
});

io.on("connection", (socket) => {
    console.log(`${socket.id} connected`);
});

httpServer.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
