import React, {useState} from 'react';
import './App.css';

function App() {

  const [stately, setStately] = useState(25)

  function handleStateClick() {
    setStately(30)
  }

  return (
    <div className="App">
      <main className="App-main">
        <p>
          I'm Mary Poppins Y'All!
        </p>
        <p>{stately}</p>
        <button onClick={handleStateClick}>Change to 30</button>
      </main>
    </div>
  );
}

export default App;
