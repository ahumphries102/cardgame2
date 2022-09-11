const app = require("express")()
const http = require("http").createServer(app)
require("dotenv").config()
const PORT = process.env.SERVER_PORT
const io = require("socket.io")(http, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
})

http.listen(PORT, () => {
  console.log(`listening on *:${PORT}`)
})

let playersJoined = 0

io.on("connection", (socket) => {
  /* socket object may be used to send specific messages to the new connected client */
  console.log("new client connected", playersJoined)
  socket.emit("connection", null)
  socket.on('playerJoined', (msg) => {
    playersJoined++
    console.log('player joined', playersJoined)
    socket.emit('increasePlayerCount', playersJoined)
  });
  socket.on('disconnect', () => {
    if(playersJoined >= 1) {
        playersJoined--
        socket.emit('increasePlayerCount', playersJoined)
        console.log('user disconnected', playersJoined);
    }
  });
})
