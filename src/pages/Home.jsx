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
    <div className="flex justify-center my-20">
      <InfiniteScroll
        className="grid grid-cols-4 gap-10"
        dataLength={ movies.length }
        next={ () => loadMovies() }
        hasMore
        loader={ <h4>Carregando...</h4> }
        endMessage={
          <p style={ { textAlign: 'center' } }>
            <b>Você chegou ao fim do catálogo!</b>
          </p>
        }
      >
        { movies.map((movie, index) => (
          <MovieCard movie={ movie } key={ `${movie.id}-${index}` } />))}
      </InfiniteScroll>
    </div>
  );
}
