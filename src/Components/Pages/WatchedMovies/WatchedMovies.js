import React, { useState, useEffect } from 'react';

import MovieList from '../../Movie-List/Movie-List';
import Header from '../../Header/Header';
import './WatchedMovies.css';

import getMovies from '../../../service/movieExApi';

function Home() {
  const [movies, setmovies] = useState([]);

  useEffect(() => {
    async function loadMovies() {
      const response = await getMovies();

      setmovies(response.data.moviesWatched[0]);
    }

    loadMovies();
  }, []);
  return (
    <>
      <Header />
      <div className="container">
        <MovieList classeName="container" movies={movies} />
      </div>
    </>
  );
}

export default Home;
