async function getMovies() {
  const data = await fetch(`https://api.themoviedb.org/3/movie/550?api_key=${environment.API_KEY}`)
    .then((result) => result.json());

  return data;
}

export default getMovies;
