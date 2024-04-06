import { useState, useEffect } from 'react';
import { requestMovieReviews } from '../../services/api';
import { useParams } from 'react-router-dom';
import css from './MovieReviews.module.css';

function MovieReviews() {
  const { movieId } = useParams();

  const [MovieReviews, setMovieReviews] = useState(null);

  useEffect(() => {
    async function fetchMovieReviews() {
      try {
        const data = await requestMovieReviews(movieId);

        setMovieReviews(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchMovieReviews();
  }, [movieId]);

  return (
    <>
      {MovieReviews && (
        <ul className={css.list}>
          {MovieReviews.results.map(review => {
            return (
              <li key={review.id}>
                <h3>Author: {review.author}</h3>
                <p>{review.content}</p>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}

export default MovieReviews;
