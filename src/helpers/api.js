const API_KEY = 'ddbcbe0588b781fba568d59761e0c9fd';

async function getMovies(page = 1) {
  const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=pt&page=${page}`)
    .then((result) => result.json());

  return data.errors !== undefined ? undefined : data;
}

export default getMovies;
