import React from 'react';

import './Movie-Card.css';

function MovieCard(props) {
  return (
    <li className="movie-card">
      <div className="card-container"> 
        <h1 className="title">{props.name}</h1>
        <img className="card-img" src={props.img} alt="movie"></img>
        <p>#{props.rank}</p>
        <p>{props.score}</p>

        <div>
          <button>Assistido</button>
          <button>Não Assistido</button>
        </div>
      </div>
    </li>
  );
}

export default MovieCard;
