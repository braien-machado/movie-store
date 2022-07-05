import React from 'react';
import PropTypes from 'prop-types';
import { Heart } from 'phosphor-react';

export default function MovieCard({ movie }) {
  const {
    release_date: releaseDate,
    title,
    vote_average: voteAverage,
    poster_path: imagePath,
  } = movie;

  return (
    <div className="w-64">
      <Heart size={ 32 } weight="fill" className="text-red-500" />
      <img
        className=""
        src={ `https://image.tmdb.org/t/p/original/${imagePath}` }
        alt={ `${title} backdrop` }
      />
      <span>{releaseDate}</span>
      <h1>{title}</h1>
      <span>{voteAverage}</span>
      <span>R$ 79,99</span>
      <button type="button">Adicionar</button>
    </div>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string,
    title: PropTypes.string,
    release_date: PropTypes.string,
    vote_average: PropTypes.number,
  }).isRequired,
};
