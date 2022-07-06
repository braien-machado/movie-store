import React, { useContext, useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import getMovies, { getMoviesByQuery } from '../helpers/api';
import MovieCard from '../components/MovieCard';
import AppContext from '../context/AppContext';

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const { searchText } = useContext(AppContext);

  async function loadMovies() {
    let data;
    const nextPage = currentPage + 1;

    if (!searchText) {
      data = await getMovies(nextPage);
    } else {
      data = await getMoviesByQuery(searchText, nextPage);
    }

    if (!data) {
      return;
    }
    setMovies((old) => [...old, ...data.results]);
    setCurrentPage(nextPage);
  }

  useEffect(() => {
    async function fetchMovies() {
      let data;
      if (!searchText) {
        data = await getMovies();
      } else {
        data = await getMoviesByQuery(searchText);
      }

      if (!data) {
        return;
      }

      setMovies(data.results);
      setCurrentPage(1);
      window.scrollTo(0, 0);
    }

    fetchMovies();
  }, [searchText]);

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
