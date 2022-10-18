import React from 'react';

import './scoreboard.styles.css';

export const Scoreboard = (props) => (
  <ul className="scoreboard board__scoreboard">
    {props.scores.length === 0 && (
      <li className="scoreboard__item">No scores yet</li>
    )}
    {props.scores.map((score) => (
      <li className="scoreboard__item" key={score.id}>
        <div classanme="username">{score.user}</div> <div classanme="score">{score.score}</div>
      </li>
    ))}
  </ul>
);
