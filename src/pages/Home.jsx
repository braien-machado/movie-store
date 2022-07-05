import React, { useEffect } from 'react';
import getMovies from '../helpers/api';

export default function Home() {
  useEffect(() => {
    async function fetchMovies() {
      const data = await getMovies();
      console.log(data);
    }

    fetchMovies();
  });

  return (
    <div>Home</div>
  );
}
