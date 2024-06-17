import React, { useState } from 'react';
import Dice from './Dice';
import ScoreBoard from './Scoreboard';
import '../style.css/game.css'


const Game = () => {
  const [scores, setScores] = useState([]);
  const [currentScore, setCurrentScore] = useState({ player1: 0, player2: 0 });

  const rollDice = () => {
    const player1 = Math.floor(Math.random() * 6) + 1;
    const player2 = Math.floor(Math.random() * 6) + 1;
    setCurrentScore({ player1, player2 });
  };

  const endGame = () => {
    const newScores = [...scores, currentScore];
    setScores(newScores);
    setCurrentScore({ player1: 0, player2: 0 });
  };

  const getSessionWinner = () => {
    if (scores.length === 0) return '';
    let player1Total = 0;
    let player2Total = 0;
    scores.forEach(score => {
      player1Total += score.player1;
      player2Total += score.player2;
    });
    const player1Average = player1Total / scores.length;
    const player2Average = player2Total / scores.length;
    return player1Average > player2Average ? 'Player 1' : 'Player 2';
  };

  return (
    <div className="container">
      <h1>Jeu de lancé de dés</h1>
      <div className="dice-container">
        <Dice value={currentScore.player1} />
        <Dice value={currentScore.player2} />
      </div>
      <button className="button" onClick={rollDice}>Lancer les dés</button>
      <button className="button" onClick={endGame}>Terminer la partie</button>
      <ScoreBoard scores={scores} sessionWinner={getSessionWinner()} />
    </div>
  );
};

export default Game;
