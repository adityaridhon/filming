import axios from "axios";

const api_key = process.env.NEXT_PUBLIC_API_KEY;
const base_url = process.env.NEXT_PUBLIC_BASE_URL;

export const getPopularMovie = async () => {
  const response = await axios.get(
    `${base_url}/movie/popular?page=1&api_key=${api_key}`
  );

  return response.data.results;
};

export const getPlayingMovie = async () => {
  const response = await axios.get(
    `${base_url}/movie/now_playing?page=1&api_key=${api_key}`
  );

  return response.data.results;
};

export const getUpcomingMovie = async () => {
  const response = await axios.get(
    `${base_url}/movie/upcoming?page=1&api_key=${api_key}`
  );

  return response.data.results;
};

export const getTopRatedMovie = async () => {
  const response = await axios.get(
    `${base_url}/movie/top_rated?page=1&api_key=${api_key}`
  );

  return response.data.results;
};

export const getMoviedetail = async (movie_id) => {
  const response = await axios.get(
    `${base_url}/movie/${movie_id}?api_key=${api_key}`
  );

  return response.data;
};
