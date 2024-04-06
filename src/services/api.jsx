import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const options = {
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOWNlOGVmNmVhNDY4NmRmZjUxMmQxZmVmNGFiZDkzYSIsInN1YiI6IjY2MGQ0MmY2ZGE5ZWYyMDE0YTU1Yjk5ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.i6O19HRiJr-W_nveHZAFhL2TfeA_iK51uOQw3Nn78Ng',
  },
};

export const requestTrendingMovies = async () => {
  const { data } = await axios.get(
    'trending/movie/day?language=en-US',
    options
  );
  return data;
};

export const requestMovie = async query => {
  const { data } = await axios.get('search/movie', {
    ...options,
    params: { query },
  });
  return data;
};

export const requestMovieDetails = async id => {
  const { data } = await axios.get(`movie/${id}`, options);
  return data;
};

export const requestMovieCast = async id => {
  const { data } = await axios.get(`movie/${id}/credits`, options);
  return data;
};

export const requestMovieReviews = async id => {
  const { data } = await axios.get(`movie/${id}/reviews`, options);
  return data;
};
