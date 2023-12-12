import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';

const API_KEY = '52fe94b8e19a93eac61192960d23427b';

export async function fetchMoviesData(type, id, query) {
  const endpoints = {
    trending: '/trending/movie/day',
    movieById: `/movie/${id}`,
    searchByQuery: '/search/movie',
    cast: `/movie/${id}/credits`,
    reviews: `/movie/${id}/reviews`,
  };

  const searchParams = new URLSearchParams({
    query: query,
    include_adult: true,
  });

  const response = await axios.get(
    `${BASE_URL}${endpoints[type]}?api_key=${API_KEY}&${
      type === 'searchByQuery' ? searchParams : ''
    }`
  );
  return response.data;
}
