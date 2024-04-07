import { useState, useEffect } from 'react';
import { requestMovie } from '../services/api';
import MovieList from '../components/MovieList/MovieList';
import { useLocation, useSearchParams } from 'react-router-dom';
export default function MoviesPage() {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [value, setValue] = useState('');
  const paramQuery = searchParams.get('value');

  const handleSubmit = e => {
    e.preventDefault();
    const querySearch = e.target.elements.search.value.trim();
    setValue(querySearch);
    setSearchParams({ value: querySearch });
  };

  const [movies, setMovies] = useState([]);
  useEffect(() => {
    if (!value && !paramQuery) return;

    async function fetchMovie() {
      try {
        const data = await requestMovie(value || paramQuery);
        if (data.results.length > 0) setMovies(data.results);
      } catch (error) {
        console.log(error);
      }
    }
    fetchMovie();
  }, [value, paramQuery]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
          name="search"
        />
        <button type="submit">Search</button>
      </form>
      <MovieList movies={movies} from={location} defLocation="/movies" />
    </div>
  );
}
