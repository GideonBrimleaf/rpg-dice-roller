import React, {useState} from 'react';
import './App.css';

function App() {

  const [dice] = useState(["+","-"," "])
  let [dieValue, setDieValue] = useState(dice[Math.floor(Math.random() * dice.length)])

  function diceRoll() {
    setDieValue(dice[Math.floor(Math.random() * dice.length)])
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
      </main>
    </div>
  );
}

export default App;
