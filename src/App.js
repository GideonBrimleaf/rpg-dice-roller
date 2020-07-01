import React, {useState} from 'react';
import './App.css';

function App() {

  const [diceValues] = useState(["+","-"," "])
  const [dice, setDice] = useState([
    {"currentValue" : diceValues[Math.floor(Math.random() * diceValues.length)]},
    {"currentValue" : diceValues[Math.floor(Math.random() * diceValues.length)]},
    {"currentValue" : diceValues[Math.floor(Math.random() * diceValues.length)]},
    {"currentValue" : diceValues[Math.floor(Math.random() * diceValues.length)]}
  ])


  const rollAllDice = () => {
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
          <span className="Die-Value">{dice[0].currentValue}</span>
        </div>
        <button className="Dice-Roller" onClick={rollAllDice}>Roll all Dice</button>
      </main>
    </div>
  );
}

export default App;
