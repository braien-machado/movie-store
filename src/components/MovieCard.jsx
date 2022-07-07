import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Heart } from 'phosphor-react';
import AppContext from '../context/AppContext';
import TextMovieSection from './TextMovieSection';

export default function MovieCard({ movie }) {
  const {
    favorites,
    addToCart,
    updateFavorite,
  } = useContext(AppContext);

  const {
    id,
    release_date: releaseDate,
    title,
    vote_average: voteAverage,
    poster_path: imagePath,
    genres,
  } = movie;

  const price = '9.99';
  const imageUrl = `https://image.tmdb.org/t/p/original/${imagePath}`;
  const isFavorite = () => favorites.some((favorite) => favorite.id === id);
  const toggleFavorite = () => updateFavorite({ id, title, image: imageUrl, price });

  return (
    <div
      className="w-full sm:w-72 md:w-44 h-fit flex flex-col flex-wrap gap-2"
    >
      <div className="border hover:border-gray-400 shadow-md transition-colors rounded-b">
        <div className="relative">
          <button
            onClick={ toggleFavorite }
            type="button"
            className="absolute right-2 top-2"
          >
            <Heart
              size={ 32 }
              weight="fill"
              className={ favorites && isFavorite() ? 'text-red-500' : 'text-gray-600' }
            />
          </button>
          <img
            className={ `w-full h-64 md:w-44 md:h-44 object-top 
            md:object-center object-cover` }
            src={ imageUrl }
            alt={ `${title} poster` }
          />
        </div>
        <TextMovieSection
          title={ title }
          releaseDate={ releaseDate }
          voteAverage={ voteAverage }
          price={ price }
          genre={ genres[0] || '' }
        />
      </div>
      <button
        onClick={ () => addToCart({ id, title, image: imageUrl, price }) }
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
    id: PropTypes.number.isRequired,
    poster_path: PropTypes.string,
    title: PropTypes.string,
    release_date: PropTypes.string,
    vote_average: PropTypes.number,
    genres: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};
