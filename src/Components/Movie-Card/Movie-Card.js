import React from 'react';
import './Movie-Card.css';

import { updateMovie } from '../../service/movieExApi';


function MovieCard(props) {
  const watched = () => {
    const title = props.title;
    const watched = props.watched

    
    
    updateMovie(title, watched);
  }

  return (
    <li className="movie-card">
      <div className="card-container"> 
        <h1 className="title">{props.name}</h1>
        <img className="card-img" src={props.img} alt="movie"></img>
        <p>#{props.rank}</p>
        <p>{props.score}</p>

        <div>
          <button onClick={watched}>Assistido</button>
          <button onClick={watched}>Não Assistido</button>
        </div>
      </div>
    </li>
  );
}

export default MovieCard;
