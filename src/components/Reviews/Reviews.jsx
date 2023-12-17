import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchData } from 'services/themoviedb-api';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState('');
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) {
      return;
    }
    fetchData('reviews', movieId)
      .then(({ results }) => {
        if (!results.length) {
          setError('No reviews');
          return;
        }
        setReviews(results);
        setError('');
      })
      .catch(() => setError('Please, try again'));
  }, [movieId]);

  return (
    <div>
      {error === '' ? (
        <div>
          <ul>
            {reviews.map(review => (
              <li key={review.id}>
                <p>Author: {review.author}</p>
                <p>
                  {review.content.length < 500
                    ? review.content
                    : `${review.content.slice(0, 500)}...`}
                </p>
                {review.content.length > 500 && (
                  <a href={review.url} target="blank">
                    Read full review
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        error
      )}
    </div>
  );
};

export default Reviews;
