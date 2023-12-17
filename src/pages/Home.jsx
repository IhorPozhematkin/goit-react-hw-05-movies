import { useEffect, useState } from 'react';
import { fetchData } from 'services/themoviedb-api';
import MoviesList from 'components/MoviesList/MoviesList';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchData('trending')
      .then(({ results }) => {
        if (!results.length) {
          setError('Please, try again');
          return;
        }
        setMovies(results);
        setError('');
      })
      .catch(() => setError('Please, try again'));
  }, []);

  return <div>{error === '' ? <MoviesList movies={movies} /> : error}</div>;
};

export default Home;
