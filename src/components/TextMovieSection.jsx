import React from 'react';
import { Star } from 'phosphor-react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

export default function TextMovieSection(props) {
  const {
    releaseDate,
    voteAverage,
    title,
    price,
    genre,
  } = props;

  const formatDate = () => {
    try {
      return format(
        new Date(releaseDate),
        'd\' de \'MMMM\', \'y',
        { locale: ptBR },
      );
    } catch (error) {
      return '';
    }
  };

  return (
    <div className="h-36 flex flex-col justify-between items-center my-2 mx-1">
      <span>{formatDate()}</span>
      <h1 className="text-center font-bold text-gray-800">{title}</h1>
      <div className="flex flex-col items-center">
        <div className="flex items-center gap-4">
          <div className="flex gap-1 mx-2">
            <Star size={ 20 } weight="fill" className="text-gray-600" />
            <span className="font-bold text-gray-800">{voteAverage}</span>
          </div>
          <span className="text-center w-fit">{ genre }</span>
        </div>
        <span>{`R$ ${price.replace('.', ',')}`}</span>
      </div>
    </div>
  );
}

TextMovieSection.propTypes = {
  price: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  voteAverage: PropTypes.number.isRequired,
};
