import React from 'react'
import '../App.css';

function Dice(props) {
  return (
    <li className="Dice">
      <span className="Die-Value">{props.currentValue}</span>
    </li>
  )
}

export default Dice
