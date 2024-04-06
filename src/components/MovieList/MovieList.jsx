import { Link } from 'react-router-dom';
import css from './MovieList.module.css';

function MovieList({ movies }) {
  return (
    <div className={css.container}>
      <ul className={css.list}>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MovieList;
