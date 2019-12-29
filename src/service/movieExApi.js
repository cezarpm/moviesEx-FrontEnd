import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:9000'
});

const getMovies = () => {
  return axiosInstance.get('/movies')
    .then(res => {
      return res
    })
    .catch(err => {
      if (err) console.log(err);
    });
};

export default getMovies;
