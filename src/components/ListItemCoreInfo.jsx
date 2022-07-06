import React from 'react';
import PropTypes from 'prop-types';

export default function ListItemCoreInfo(props) {
  const { title, image } = props;

  return (
    <div className="flex items-center gap-2">
      <img
        alt={ title }
        className="w-8 h-8 object-cover"
        src={ image }
      />
      <span
        className={ `whitespace-nowrap overflow-hidden w-[calc(30vw)]
        vsm:w-64` }
      >
        { title }
      </span>
    </div>
  );
}

ListItemCoreInfo.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
