import React, { useState, useEffect } from "react"
import { io } from "socket.io-client"
const socket = io("http://localhost:5000")

function App() {
  const [test, setTest] = useState(1)

  useEffect(() => {
    socket.emit("playerJoined")
    socket.on('increasePlayerCount', (msg) => {
      setTest(msg)
    })
  }, [])
  return (
    <>
      <div style={{ background: test < 2 ? "red" : "blue" }}>hi</div>
    </>
  )
}

export default App
