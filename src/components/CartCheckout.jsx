import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getTotalPrice } from '../helpers/handlePrice';

export default function CartCheckout({ cart }) {
  return (
    <div className="w-full flex flex-col mb-4 gap-2">
      <div className="flex justify-between items-end">
        <span className="h-fit">Total:</span>
        <span
          className="text-2xl font-bold"
        >
          { !cart ? 'R$ 0,00' : getTotalPrice(cart) }
        </span>
      </div>
      <Link
        to="/checkout"
        className={ `${!cart ? 'pointer-events-none bg-gray-400' : ''}
        bg-indigo-700 hover:bg-indigo-800 text-white text-center
        font-semibold rounded transition-colors w-full py-2` }
      >
        Finalizar compra
      </Link>
    </div>
  );
}

CartCheckout.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      price: PropTypes.string,
      quantity: PropTypes.number,
    }),
  ),
};

CartCheckout.defaultProps = {
  cart: null,
};
