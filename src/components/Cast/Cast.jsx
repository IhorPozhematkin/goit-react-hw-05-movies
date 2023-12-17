import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchData } from 'services/themoviedb-api';
import { Info, Item, List, Name, Photo, PhotoWrap } from './Cast.styled';
import imgActor from 'images/actor.png';

const POSTER = 'https://image.tmdb.org/t/p/';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const [error, setError] = useState('');
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) {
      return;
    }
    fetchData('cast', movieId)
      .then(({ cast }) => {
        if (!cast.length) {
          setError('No cast');
          return;
        }
        setCast(cast);
        setError('');
      })
      .catch(() => setError('Please, try again'));
  }, [movieId]);

  return (
    <div>
      {error === '' ? (
        <div>
          <List>
            {cast.map(actor => (
              <Item key={actor.id}>
                <PhotoWrap>
                  <Photo
                    src={
                      actor.profile_path
                        ? `${POSTER}w500${actor.profile_path}`
                        : imgActor
                    }
                    alt={actor.name}
                  />
                </PhotoWrap>
                <Name>{actor.name}</Name>
                <Info>as {actor.character}</Info>
              </Item>
            ))}
          </List>
        </div>
      ) : (
        error
      )}
    </div>
  );
};

export default Cast;
