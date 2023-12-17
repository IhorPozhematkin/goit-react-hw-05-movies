import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchData } from 'services/themoviedb-api';
import MoviesList from 'components/MoviesList/MoviesList';
import { Searchbar } from 'components/Searchbar/Searchbar';

const Movies = () => {
  const [searchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const query = searchParams.get('query');
    if (!query) return;

    fetchData('search', 0, query)
      .then(({ results }) => {
        if (!results.length) {
          setError(`No movie with title ${query.toUpperCase()}`);
          return;
        }
        setMovies(results);
        setError('');
      })
      .catch(() => setError('Please, try again'));
  }, [searchParams]);

  return (
    <div>
      <Searchbar />
      {error === '' ? <MoviesList movies={movies} /> : error}
    </div>
  );
};

export default Movies;
