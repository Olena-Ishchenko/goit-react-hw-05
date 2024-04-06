import { useState, useEffect } from 'react';
import { requestMovie } from '../services/api';
import MovieList from '../components/MovieList/MovieList';

export default function MoviesPage() {
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const querySearch = e.target.elements.search.value.trim();
    setValue(querySearch);
  };

  const [movies, setMovies] = useState([]);
  useEffect(() => {
    if (value === '') return;

    async function fetchMovie() {
      try {
        const data = await requestMovie(value);
        if (data.results.length > 0) setMovies(data.results);
      } catch (error) {
        console.log(error);
      }
    }
    fetchMovie();
  }, [value]);

  //   console.log(movies);
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
      <MovieList movies={movies} />
    </div>
  );
}
