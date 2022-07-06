import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Modal({ name, isLoading }) {
  return (
    <div
      className={ `z-50 bg-transparent fixed top-0 bottom-0 left-0 
      right-0 flex justify-center items-center` }
    >
      <div
        className={ `max-w-[400px] w-[80%] border-2 
        border-gray-300 bg-gray-100 p-4 flex flex-col items-center gap-5 text-center` }
      >
        {
          isLoading ? (
            <>
              <p>Aguarde alguns instantes...</p>
              <div className="lds-dual-ring" />
            </>
          )
            : (
              <>
                <h1 className="text-2xl">{ `Obrigado ${name}!` }</h1>
                <p>Sua compra foi realizada com sucesso!</p>
                <Link
                  to="/"
                  className={ `bg-indigo-700 hover:bg-indigo-800 
                  text-white text-center rounded transition-colors w-full py-2` }
                >
                  Ir para loja
                </Link>
              </>
            )
        }
      </div>
    </div>
  );
}

Modal.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
};
