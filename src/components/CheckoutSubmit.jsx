import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import AppContext from '../context/AppContext';
import { getTotalPrice } from '../helpers/handlePrice';
import validateFields from '../helpers/validation';

export default function CheckoutSubmit({ values, handleSubmit }) {
  const [isDisabled, setIsDisabled] = useState(true);
  const { cart } = useContext(AppContext);

  useEffect(() => {
    if (validateFields(values)) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [values]);

  return (
    <div className="w-full flex flex-col gap-10">
      <div className="flex justify-between items-end">
        <span className="h-fit text-xl">Total:</span>
        <span
          className="text-2xl"
        >
          { !cart ? 'R$ 0,00' : getTotalPrice(cart) }
        </span>
      </div>
      <button
        type="button"
        to="/checkout"
        className={ `${!cart || isDisabled
          ? 'pointer-events-none bg-gray-400' : 'bg-indigo-700'}
        hover:bg-indigo-800 text-white text-center
        font-semibold rounded transition-colors w-full py-2` }
        onClick={ handleSubmit }
      >
        Finalizar
      </button>
    </div>
  );
}

CheckoutSubmit.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  values: PropTypes.shape({
    name: PropTypes.string,
    cpf: PropTypes.string,
    cel: PropTypes.string,
    email: PropTypes.string,
    cep: PropTypes.string,
    address: PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.string,
  }).isRequired,
};
