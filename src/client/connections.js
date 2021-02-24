const socket = io.connect("http://localhost:46991");

socket.emit("ready");
