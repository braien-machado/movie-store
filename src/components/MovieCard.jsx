import React from 'react';
import PropTypes from 'prop-types';
import { Heart } from 'phosphor-react';
import TextMovieSection from './TextMovieSection';

export default function MovieCard({ movie }) {
  const {
    release_date: releaseDate,
    title,
    vote_average: voteAverage,
    poster_path: imagePath,
  } = movie;

  // turn div into Link to details page
  return (
    <div
      className="w-44 h-fit flex flex-col flex-wrap gap-2"
    >
      <div className="border hover:border-gray-400 shadow-md transition-colors rounded-b">
        <div className="relative">
          <button type="button" className="absolute right-2 top-2">
            <Heart size={ 32 } weight="fill" className="text-red-500" />
          </button>
          <img
            className="w-44 h-44 object-cover"
            src={ `https://image.tmdb.org/t/p/original/${imagePath}` }
            alt={ `${title} poster` }
          />
        </div>
        <TextMovieSection
          title={ title }
          releaseDate={ releaseDate }
          voteAverage={ voteAverage }
        />
      </div>
      <button
        onClick={ () => console.log('added to cart!') }
        type="button"
        className={ `bg-indigo-700 hover:bg-indigo-800 py-1 text-white 
        font-semibold rounded transition-colors` }
      >
        Adicionar
      </button>
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
