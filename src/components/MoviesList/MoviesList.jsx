import { useLocation } from 'react-router-dom';
import {
  LinkItem,
  Image,
  ImgWrap,
  List,
  Rating,
  Title,
} from './MoviesList.styled';
import filmIcon from 'images/film_icon.png';

const MoviesList = ({ movies }) => {
  const location = useLocation();
  const POSTERS_URL = 'https://image.tmdb.org/t/p/';

  const dateOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  return (
    <List>
      {movies.map(movie => (
        <li key={movie.id}>
          <LinkItem
            to={
              location.pathname === '/' ? `movies/${movie.id}` : `${movie.id}`
            }
            state={{ from: location }}
          >
            <ImgWrap>
              <Image
                src={
                  movie.poster_path
                    ? `${POSTERS_URL}w200${movie.poster_path}`
                    : filmIcon
                }
                alt={movie.title}
              />
            </ImgWrap>
            <Title>{movie.title}</Title>
            <p>
              {movie.release_date
                ? new Date(movie.release_date).toLocaleDateString(
                    'en-US',
                    dateOptions
                  )
                : ''}
            </p>
            <Rating
              $color={ratingColorDetect(Math.round(movie.vote_average * 10))}
            >
              {movie.vote_average === 0
                ? 'NR'
                : `${Math.round(movie.vote_average * 10)}%`}
            </Rating>
          </LinkItem>
        </li>
      ))}
    </List>
  );
};

export default MoviesList;

function ratingColorDetect(number) {
  let color;
  if (!number) {
    color = 'grey';
  } else if (number < 50) {
    color = 'red';
  } else if (number < 70) {
    color = 'orange';
  } else if (number >= 70) {
    color = 'green';
  }
  return color;
}
