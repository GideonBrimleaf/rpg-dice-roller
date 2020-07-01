import React, {useState} from 'react';
import './App.css';
import './components/Dice'
import Dice from './components/Dice';

function App() {

  const [diceValues] = useState(["+","-"," "])
  const [dice, setDice] = useState([
    {"id": 1, "currentValue" : diceValues[Math.floor(Math.random() * diceValues.length)]},
    {"id": 2, "currentValue" : diceValues[Math.floor(Math.random() * diceValues.length)]},
    {"id": 3, "currentValue" : diceValues[Math.floor(Math.random() * diceValues.length)]},
    {"id": 4, "currentValue" : diceValues[Math.floor(Math.random() * diceValues.length)]}
  ])


  const rollAllDice = () => {
    const newRoll = dice.map( 
      (dice) => ({"id": dice.id, "currentValue" : diceValues[Math.floor(Math.random() * diceValues.length)]})
    )
    setDice(newRoll)
  }

  const diceResults = dice.map( dice => {
    return (<Dice key={dice.id} currentValue={dice.currentValue} />)
  }
  )

  return (
    <div className="App-main">
      <header>
        Welcome to the Fate Dice Roller!
      </header>
      <main>
        <button className="Dice-Roller" onClick={rollAllDice}>Roll all Dice</button>
        <ul>
          {diceResults}
        </ul>
      </main>
    </div>
  );
}

export default App;
