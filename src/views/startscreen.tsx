import React, { useState, useEffect, CSSProperties } from "react"
import { io } from "socket.io-client"
import { Grid } from "@mui/material"
import { Link } from "react-router-dom";

import Box from "@mui/material/Box"
const socket = io("http://localhost:5000")

const startScreenStyle: CSSProperties = {
  backgroundColor: "pink",
  textAlign: "center",
  listStyle: "none",
}

export default function StartScreen() {
  const [test, setTest] = useState(1)

  useEffect(() => {
    socket.emit("playerJoined")
    socket.on("increasePlayerCount", (msg) => {
      setTest(msg)
    })
  }, [])
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <h1 style={startScreenStyle}>Autacon City</h1>
          </Grid>
          <Grid item xs={12}>
            <ul style={startScreenStyle}>
              <li>
                <Link to="/taco">
                  <button>Start</button>
                </Link>
              </li>
              <li>
                <button>Credits</button>
              </li>
            </ul>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}
