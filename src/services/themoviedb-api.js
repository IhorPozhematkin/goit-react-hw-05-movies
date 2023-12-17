import axios from 'axios';

const URL = 'https://api.themoviedb.org/3';
const KEY = '52fe94b8e19a93eac61192960d23427b';

export async function fetchData(type, id, query) {
  const endpoint = {
    movieId: `/movie/${id}`,
    cast: `/movie/${id}/credits`,
    reviews: `/movie/${id}/reviews`,
    search: '/search/movie',
    trending: '/trending/movie/day',
  };

  const searchParams = new URLSearchParams({
    query: query,
    include_adult: false,
  });

  const request = await axios.get(
    `${URL}${endpoint[type]}?api_key=${KEY}&${
      type === 'search' ? searchParams : ''
    }`
  );
  return request.data;
}
