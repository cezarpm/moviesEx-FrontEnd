import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:9000',
  headers: {
    'Content-Type': 'application/json; charset=UTF-8'
  }
});

const getMovies = () => {
  return axiosInstance
    .get('/movies')
    .then(res => {
      return res;
    })
    .catch(err => {
      if (err) console.log(err);
    });
};

const updateMovie = (title, watched) => {
  axiosInstance
    .put('/movies', {
      title,
      watched
    })
    .then(res => console.log(res))
    .catch(err => console.log(err));
};

export { getMovies, updateMovie };
