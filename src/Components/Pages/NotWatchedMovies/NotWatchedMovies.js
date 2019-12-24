import React, { useState, useEffect } from 'react';

import MovieList from '../../Movie-List/Movie-List';
import Header from '../../Header/Header';

import getMovies from '../../../service/movieExApi';

function Home() {
  const [movies, setmovies] = useState([]);

  useEffect(() => {
    async function loadMovies() {
      const response = await getMovies.get('/movies/notwatched');
      
      
      setmovies(response.data);
    }

    loadMovies();
  }, []);
  return (
    <>
      <Header />
      <div className="container">
        <MovieList movies={movies} />
      </div>
    </>
  );
}

export default Home;
