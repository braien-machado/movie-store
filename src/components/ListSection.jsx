import React from 'react';
import PropTypes from 'prop-types';

export default function ListSection(props) {
  const { title, list, clear } = props;
  return (
    <div className="flex justify-between items-center">
      <h1 className="text-xl font-semibold">{ title }</h1>
      { list && (
        <button
          className={ `text-indigo-600 hover:text-indigo-400 
          transition-colors underline underline-offset-2 ` }
          type="button"
          onClick={ clear }
        >
          Esvaziar
        </button>
      )}
    </div>
  );
}

ListSection.propTypes = {
  title: PropTypes.string.isRequired,
  clear: PropTypes.func.isRequired,
  list: PropTypes.arrayOf(
    PropTypes.shape({
      price: PropTypes.string,
      title: PropTypes.string,
      imageUrl: PropTypes.string,
      id: PropTypes.number,
    }),
  ),
};

ListSection.defaultProps = {
  list: null,
};
