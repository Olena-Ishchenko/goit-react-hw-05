import { useState, useEffect } from 'react';
import { requestTrendingMovies } from '../services/api';
import MovieList from '../components/MovieList/MovieList';

export default function HomePage() {
  const [trendMovies, setTrendMovies] = useState([]);

  useEffect(() => {
    async function fetchTrendMovies() {
      try {
        const data = await requestTrendingMovies();

        if (data.results.length > 0) setTrendMovies(data.results);
      } catch (error) {
        console.log(error);
      }
    }
    fetchTrendMovies();
  }, []);

  return (
    <main>
      <h1>Trending today</h1>
      <MovieList movies={trendMovies} />
    </main>
  );
}
