import React from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { Heart, Star } from 'phosphor-react';

export default function MovieCard({ movie }) {
  const {
    release_date: releaseDate,
    title,
    vote_average: voteAverage,
    poster_path: imagePath,
  } = movie;

  const formattedDate = format(
    new Date(releaseDate),
    'd\' de \'MMMM\', \'y',
    { locale: ptBR },
  );

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
        <div className="flex flex-col items-center gap-1 my-2">
          <span>{formattedDate}</span>
          <h1 className="text-center text-lg font-bold text-gray-800">{title}</h1>
          <div className="flex items-center gap-4">
            <div className="flex gap-1">
              <Star size={ 20 } weight="fill" className="text-gray-600" />
              <span className="font-bold text-gray-800">{voteAverage}</span>
            </div>
            <span>Gênero</span>
          </div>
          <span>R$ 79,99</span>
        </div>
      </div>
      <button
        onClick={ () => console.log('added to cart!') }
        type="button"
        className="bg-indigo-700 hover:bg-indigo-800 py-1 text-white font-semibold rounded transition-colors"
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
