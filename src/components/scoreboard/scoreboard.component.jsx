import React from 'react';
import './scoreboard.styles.css';


export const Scoreboard = (props) => (
  <ul className="scoreboard board__scoreboard">
    {props.scores.length === 0 && (
      <li className="scoreboard__item">No scores yet</li>
    )}
    {props.scores.map((score) => (
      <li className="scoreboard__item" key={score.id}>
         <img src= {`${process.env.PUBLIC_URL}/${score.image}`} style={{width: 50, height: 50, borderRadius: 50/ 2}}  ></img> 
        <div classname="username">{score.user}</div> <div classname="score"> {score.score}</div>
      </li>
    ))}
  </ul>
  
);
