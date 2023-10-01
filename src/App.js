import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [numberToGuess, setNumberToGuess] = useState(null);
  const [guess, setGuess] = useState('');
  const [guessesRemaining, setGuessesRemaining] = useState(10);
  const [guessResult, setGuessResult] = useState('');
  const [gameInProgress, setGameInProgress] = useState(false);

  const getNewNumber = () => {
    const number = Number(Math.floor(Math.random() * 100));
    console.log(number)
    setNumberToGuess(number);
    setGameInProgress(true);
  }

  useEffect(() => {
    getNewNumber()
  }, []);

  const restartGame = () => {
    setGuess('');
    setGuessesRemaining(10);
    setGuessResult('');
    getNewNumber()
  }

  const handleGuessChange = (event) => {
    setGuess(Number(event.target.value));
  };

  useEffect(() => {
    if (guessesRemaining <= 0) {
      setGuessResult('You lost!');
      setGameInProgress(false);
    }
  }, [guessesRemaining]);

  const checkNumber = () => {
    if (!guess) {
      setGuessResult('No Number Selected');
      return;
    }

    if (guess > 100 || guess < 0) {
      setGuessResult('Number must be between 0 and 100');
      return;
    }

    if (guess === numberToGuess) {
      setGuessResult('You guessed correctly!');
      setGameInProgress(false);
    } else if (guess > numberToGuess) {
      setGuessResult('Too high');
    } else {
      setGuessResult('Too low');
    }
    setGuessesRemaining(guessesRemaining - 1);
  }


  return (
    <div className="App">
      <div className="card">
        <h1 className="gameTitle">Guess the number</h1>
        <h2 className="gameSubTitle">Guess a number between 0 and 100</h2>
        {gameInProgress && <p className="guessesRemaining">Guesses remaining: {guessesRemaining}</p>}
        <span className="guessResult">{guessResult}</span>
        {gameInProgress && (
          <>
            <input
              type="number"
              id="numberInput"
              value={guess}
              onChange={handleGuessChange}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  checkNumber();
                }
              }}
            />
            <button onClick={checkNumber}>Check</button>
          </>
        )}
        {!gameInProgress && (
          <>
            <button onClick={restartGame}>Play again</button>
          </>
        )}
      </div>
    </div >
  );
}

export default App;
