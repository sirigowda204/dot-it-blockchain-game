import React from 'react';

function HighScores({ scores }) {
  return (
      <div>
        <h2>High Scores</h2>
        <ul>
          {scores.map(([player, score], idx) => (
              <li key={idx}>{player.toString()}: {score}</li>
          ))}
        </ul>
      </div>
  );
}

export default HighScores;
