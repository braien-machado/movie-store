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
  } = props;

  const formattedDate = format(
    new Date(releaseDate),
    'd\' de \'MMMM\', \'y',
    { locale: ptBR },
  );
  // request first genre by id
  return (
    <div className="h-36 flex flex-col justify-between items-center my-2">
      <span>{formattedDate}</span>
      <h1 className="text-center font-bold text-gray-800">{title}</h1>
      <div className="flex flex-col items-center">
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
  );
}

TextMovieSection.propTypes = {
  title: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
  voteAverage: PropTypes.number.isRequired,
};
