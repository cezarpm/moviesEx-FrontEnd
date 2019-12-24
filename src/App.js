import React, { useState, useEffect } from 'react';
import MovieList from './Components/Movie-List/Movie-List';

import getMovies from './service/movieExApi';

function App() {
  const [movies, setmovies] = useState([]);

  useEffect(() => {
    async function loadMovies() {
      const response = await getMovies.get('/movies');
      console.log(response.data);
      
      setmovies(response.data);
    }

    loadMovies();
  }, []);
  return (
    <>
      <MovieList movies={movies} />
    </>
  );
}

export default App;
