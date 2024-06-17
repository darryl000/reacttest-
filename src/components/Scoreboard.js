import React from 'react';

const ScoreBoard = ({ scores, sessionWinner }) => {
  return (
    <div className="scoreboard">
      <h2>Score Board</h2>
      <ul>
        {scores.map((score, index) => (
          <li key={index} className={score.winner ? 'winner' : ''}>
            Partie {index + 1}: {score.player1} - {score.player2}
          </li>
        ))}
      </ul>
      <h3>Vainqueur de la session: {sessionWinner}</h3>
    </div>
  );
};

export default ScoreBoard;
