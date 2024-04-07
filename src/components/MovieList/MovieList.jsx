import { Link } from 'react-router-dom';
import css from './MovieList.module.css';

function MovieList({ movies, from, defLocation }) {
  return (
    <div className={css.container}>
      <ul className={css.list}>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from, defLocation }}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MovieList;
