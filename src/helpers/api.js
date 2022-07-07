const API_KEY = 'ddbcbe0588b781fba568d59761e0c9fd';

async function getGenres() {
  const data = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=pt`)
    .then((result) => result.json());

  return !data.errors ? data.genres : undefined;
}

function getNamesByIds(genresIds, genres) {
  const MAX_LENGTH = 9;
  return genres.filter((genre) => genresIds.some((id) => id === genre.id))
    .map((genre) => genre.name.split(' ')[0].substring(0, MAX_LENGTH));
}

async function getGenresNames(movies) {
  const genres = await getGenres();

  const moviesWithGenres = await Promise.all(movies
    .map(async (movie) => {
      const genresNames = await getNamesByIds(movie.genre_ids, genres);
      return { ...movie, genres: genresNames };
    }));
  return moviesWithGenres;
}

async function getMovies(page = 1) {
  const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=pt&page=${page}`)
    .then((result) => result.json());

  if (!data.errors) {
    data.results = await getGenresNames(data.results);
    return data;
  }
}

export default getMovies;

export async function getMoviesByQuery(query, page = 1) {
  const data = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=pt&query=${query}&page=${page}&include_adult=false`)
    .then((result) => result.json());

  if (!data.errors) {
    data.results = await getGenresNames(data.results);
    return data;
  }
}
