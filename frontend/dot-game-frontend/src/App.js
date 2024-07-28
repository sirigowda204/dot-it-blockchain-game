import React, { useState, useEffect } from 'react';
import { web3Accounts, web3Enable } from '@polkadot/extension-dapp';
import { ApiPromise, WsProvider } from '@polkadot/api';
import './App.css';

const generateDots = () => {
  const dots = [];
  for (let i = 0; i < 10; i++) {
    dots.push({
      id: i,
      size: Math.random() * 20 + 10,
      x: Math.random() * 100,
      y: Math.random() * 100,
    });
  }
  return dots;
};

const App = () => {
  const [dots, setDots] = useState(generateDots());
  const [points, setPoints] = useState(1000);
  const [highScores, setHighScores] = useState([]);

  useEffect(() => {
    const initPolkadot = async () => {
      await web3Enable('dot-game');
      const allAccounts = await web3Accounts();
      console.log(allAccounts);
    };

    const fetchHighScores = async () => {
      const wsProvider = new WsProvider('wss://your-polkadot-node');
      const api = await ApiPromise.create({ provider: wsProvider });
      const scores = await api.query.dotGame.highScores.entries();
      setHighScores(scores.map(([key, value]) => ({ account: key.toHuman(), score: value.toHuman() })));
    };

    initPolkadot();
    fetchHighScores();
  }, []);

  const handleDotClick = (dot) => {
    const smallestDot = dots.reduce((min, current) => (current.size < min.size ? current : min), dots[0]);
    if (dot.id === smallestDot.id) {
      setDots(generateDots());
    } else {
      setPoints(points - dot.size);
      if (points - dot.size <= 0) {
        alert('Game Over');
      } else {
        setDots(generateDots());
      }
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setPoints(points - 10);
      if (points - 10 <= 0) {
        alert('Game Over');
      } else {
        setDots(generateDots());
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, [dots]);

  return (
      <div className="App">
        <h1>Dot Game</h1>
        <div className="scoreboard">
          <h2>Points: {points}</h2>
        </div>
        <div className="game-area">
          {dots.map((dot) => (
              <div
                  key={dot.id}
                  className="dot"
                  style={{
                    width: dot.size,
                    height: dot.size,
                    top: `${dot.y}%`,
                    left: `${dot.x}%`,
                  }}
                  onClick={() => handleDotClick(dot)}
              ></div>
          ))}
        </div>
        <div className="high-scores">
          <h2>High Scores</h2>
          <ul>
            {highScores.map((score, index) => (
                <li key={index}>
                  {score.account}: {score.score}
                </li>
            ))}
          </ul>
        </div>
      </div>
  );
};

export default App;
