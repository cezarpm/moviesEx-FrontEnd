import React from 'react';

function MovieCard(props) {
  return (
    <li>
      <img src={props.img} alt='movie'></img>

      <h1>{props.name}</h1>
      <p>{props.rank}</p>
      <p>{props.score}</p>

    </li>
  );
}

export default MovieCard;
