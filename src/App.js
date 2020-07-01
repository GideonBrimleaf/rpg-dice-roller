import React, {useState} from 'react';
import './App.css';

function App() {

  const [dice, setDice] = useState([1,2,3,4,5,6])
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
        <p>{dieValue}</p>
        <button onClick={diceRoll}>Roll the Dice</button>
      </main>
    </div>
  );
}

export default App;
