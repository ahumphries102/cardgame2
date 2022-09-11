import React from "react"
import Deck from '../components/deck'

const top = {
    height: '20vh', 
    background: 'brown' 
}

const middle = {
    height: '60vh', 
    background: 'purple' 
}

const bottom = {
    height: '20vh', 
    background: 'orange' 
}

export default function TheBoard() {
  Deck()
  return (
    <>
    <div>
        <div id="player2" style={top}>

        </div>
        <div style={middle}>

        </div>
        <div id="player1" style={bottom}>

        </div>
      </div>
    </>
  )
}
