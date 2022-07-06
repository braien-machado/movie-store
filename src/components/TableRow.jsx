import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Trash } from 'phosphor-react';
import AppContext from '../context/AppContext';
import { priceToReal } from '../helpers/handlePrice';

export default function TableRow({ product }) {
  const { removeFromLocalStorage, setCart } = useContext(AppContext);
  const removeProduct = (id) => removeFromLocalStorage(id, 'cart', setCart);

  return (
    <tr>
      <td className="border-b border-gray-500 py-2">
        <img
          className="w-20 h-20 object-cover"
          src={ product.image }
          alt={ product.title }
        />
      </td>
      <td className="border-b border-gray-500 px-4">{ product.title }</td>
      <td className="text-center border-b border-gray-500">{ product.quantity }</td>
      <td
        className="border-b border-gray-500 px-4"
      >
        { priceToReal(product.price * product.quantity) }
      </td>
      <td className="border-b border-gray-500">
        <div className="flex">
          <button
            type="button"
            className="hover:text-gray-400 transition-colors"
            onClick={ () => removeProduct(product.id) }
          >
            <Trash size={ 24 } weight="fill" />
          </button>
        </div>
      </td>
    </tr>
  );
}

TableRow.propTypes = {
  product: PropTypes.shape({
    price: PropTypes.string,
    title: PropTypes.string,
    image: PropTypes.string,
    id: PropTypes.number,
    quantity: PropTypes.number,
  }).isRequired,
};
