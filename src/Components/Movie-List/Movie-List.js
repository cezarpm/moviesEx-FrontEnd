import React from 'react';
import MovieCard from '../Movie-Card/Movie-Card';

function MovieList(props) {
  return (
    <ul>
      {props.movies.map(movie => (
      <MovieCard key={movie._id} title={movie.title} watched={movie.watched} rank={movie.rank} score={movie.score} img={movie.img}/>
      ))}
    </ul>
  );
}

export default MovieList;
