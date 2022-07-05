import React, { useEffect, useRef, useState } from 'react';
import getMovies from '../helpers/api';
import MovieCard from '../components/MovieCard';

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const loaderRef = useRef(null);

  // Infinite scroll implementation
  useEffect(() => {
    const options = {
      root: null,
      // rootMargin: '20px',
      threshold: 1.0,
    };

    console.log('aqui');

    const observer = new IntersectionObserver((entities) => {
      const target = entities[0];

      if (target.isIntersecting) {
        setCurrentPage((old) => old + 1);
      }
    }, options);

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }
  }, []);

  useEffect(() => {
    async function fetchMovies() {
      const data = await getMovies(currentPage);
      console.log(data);

      if (!data) {
        return;
      }
      setMovies((old) => [...old, ...data.results]);
    }

    fetchMovies();
  }, [currentPage]);

  return (
    <div>
      <div className="grid grid-cols-4">
        { movies.map((movie, index) => (
          <MovieCard movie={ movie } key={ `${movie.id}-${index}` } />))}
      </div>
      {
        movies.length > 0
        && (
          <p
            className="py-4"
            ref={ loaderRef }
          >
            Carregando mais episodios...
          </p>)
      }
    </div>
  );
}
