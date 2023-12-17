import { Suspense, useEffect, useState } from 'react';
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom';
import { fetchData } from 'services/themoviedb-api';
import { Loader } from 'components/Loader/Loader';
import MovieInfo from 'components/MovieInfo/MovieInfo';
import { NavLinkStyled } from './MovieDetails.styled';

const MovieDetails = () => {
  const { state } = useLocation();
  const { movieId } = useParams();
  const [movieData, setMovieData] = useState(null);
  const navigate = useNavigate();
  const [error, setError] = useState('');

  useEffect(() => {
    fetchData('movieId', Number(movieId))
      .then(results => {
        setMovieData(results);
        setError('');
      })
      .catch(() => {
        setError('An error has occurred. You are redirected to the home page.');
        setTimeout(() => {
          navigate('/');
        }, 2000);
      });
  }, [movieId, navigate]);

  return (
    <>
      <Link to={state?.from ?? '/'}>Go back</Link>

      {error === '' && movieData ? (
        <>
          <MovieInfo movieData={movieData} />

          <ul>
            <li>
              <NavLinkStyled to="cast" state={{ from: state?.from }}>
                Cast
              </NavLinkStyled>
            </li>
            <li>
              <NavLinkStyled to="reviews" state={{ from: state?.from }}>
                Reviews
              </NavLinkStyled>
            </li>
          </ul>

          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </>
      ) : (
        error
      )}
    </>
  );
};

export default MovieDetails;
