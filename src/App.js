import React, {useState} from 'react';
import './App.css';

function App() {

  const stately = useState(25)

  return (
    <div className="App">
      <main className="App-main">
        <p>
          I'm Mary Poppins Y'All!
        </p>
        <p>{stately}</p>
      </main>
    </div>
  );
}

export default App;
