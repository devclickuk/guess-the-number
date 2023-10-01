import React, { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
  const [numberToGuess, setNumberToGuess] = useState(null);
  const [guess, setGuess] = useState(null);

  useEffect(() => {
    const number = Math.floor(Math.random() * 100);
    setNumberToGuess(number);
  }, []);

  const handleGuessChange = (event) => {
    setGuess(Number(event.target.value));
  };

  const checkNumber = () => {
    console.log(guess)
    if (!guess) {
      alert('No Number Selected');
      return;
    }
    if (guess === numberToGuess) {
      alert('You won!');
    } else if (guess > numberToGuess) {
      alert('Too high');
    } else {
      alert('Too low');
    }
  }


  return (
    <div className="App">
      <h1>Guess the number</h1>
      <input
        type="number"
        id="numberInput"
        value={guess}
        onChange={handleGuessChange}
      />
      <button onClick={checkNumber}>Check</button>
    </div>
  );
}

export default App;
