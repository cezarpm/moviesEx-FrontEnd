import axios from 'axios';

const getMovies = axios.create({
  baseURL: 'http://localhost:8000',
});

export default getMovies;
