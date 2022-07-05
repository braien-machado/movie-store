import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import getMovies from '../helpers/api';
import MovieCard from '../components/MovieCard';

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  async function loadMovies() {
    const nextPage = currentPage + 1;
    const data = await getMovies(nextPage);

    if (!data) {
      return;
    }
    setMovies((old) => [...old, ...data.results]);
    setCurrentPage(nextPage);
  }

  useEffect(() => {
    async function fetchMovies() {
      const data = await getMovies();

      if (!data) {
        return;
      }
      setMovies(data.results);
    }

    fetchMovies();
  }, []);

  return (
    <main className="flex justify-center">
      <InfiniteScroll
        className={ `grid grid-cols-1 sm:grid-cols-2 sm:gap-4 gap-10 
        md:grid-cols-4 md:gap-4 lg:gap-20 ` }
        dataLength={ movies.length }
        next={ () => loadMovies() }
        hasMore
        loader={ <h4 className="absolute text-center">Carregando...</h4> }
        endMessage={
          <p className="absolute text-center">
            <b>Você chegou ao fim do catálogo!</b>
          </p>
        }
      >
        { movies.map((movie, index) => (
          <MovieCard movie={ movie } key={ `${movie.id}-${index}` } />))}
      </InfiniteScroll>
    </main>
  );
}
