import React, {useState} from 'react';
import './App.css';

function App() {

  const [diceValues] = useState(["+","-"," "])
  const [dieValue, setDieValue] = useState(diceValues[Math.floor(Math.random() * diceValues.length)])
  const [dice, setDice] = useState([
    {"currentValue" : diceValues[Math.floor(Math.random() * diceValues.length)]},
    {"currentValue" : diceValues[Math.floor(Math.random() * diceValues.length)]},
    {"currentValue" : diceValues[Math.floor(Math.random() * diceValues.length)]},
    {"currentValue" : diceValues[Math.floor(Math.random() * diceValues.length)]}
  ])

  function diceRoll() {
    setDieValue(diceValues[Math.floor(Math.random() * diceValues.length)])
  }

  function rollAllDice() {
    const newRoll = dice.map( 
      () => ({"currentValue" : diceValues[Math.floor(Math.random() * diceValues.length)]})
    )
    setDice(newRoll)
  }

  return (
    <div className="App">
      <main className="App-main">
        <p>
          I'm Mary Poppins Y'All!
        </p>
        <div className="Dice">
          <span className="Die-Value">{dieValue}</span>
        </div>
        <button className="Dice-Roller" onClick={diceRoll}>Roll the Dice</button>
        <button className="Dice-Roller" onClick={rollAllDice}>Roll all Dice</button>
      </main>
    </div>
  );
}

export default App;
