import { Container, Information, Span } from './MovieInfo.styled';
import filmIcon from 'images/film_icon.png';

const POSTER = 'https://image.tmdb.org/t/p/';

const dateOptions = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};

const MovieInfo = ({ movieData }) => {
  return (
    <Container>
      <img
        src={
          movieData.poster_path
            ? `${POSTER}w500${movieData.poster_path}`
            : filmIcon
        }
        alt={movieData.title}
      />
      <Information>
        <h1>{`${movieData.title} (${
          movieData.release_date
            ? new Date(movieData.release_date).getFullYear()
            : 'No information'
        })`}</h1>
        <p>
          <Span>Release date:</Span>{' '}
          {new Date(movieData.release_date).toLocaleDateString(
            'en-US',
            dateOptions
          )}
        </p>
        <p>
          <Span>Rating: </Span>
          {movieData.vote_average === 0
            ? 'No rated'
            : `${Math.round(movieData.vote_average * 10)}%`}
        </p>
        <p>
          <Span>Genres:</Span>{' '}
          {movieData.genres.map(({ name }) => name).join(', ') || 'None'}
        </p>
        <p>
          <Span>Promo:</Span> {movieData.tagline || 'None'}
        </p>
        <p>
          <Span>Overview:</Span> {movieData.overview || 'None'}
        </p>
      </Information>
    </Container>
  );
};
export default MovieInfo;
