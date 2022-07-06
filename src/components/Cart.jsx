import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Trash } from 'phosphor-react';
import AppContext from '../context/AppContext';
import { removeFromCart } from '../helpers/localStorage';
import { getTotalPrice, priceToReal } from '../helpers/handlePrice';
import ListSection from './ListSection';
import CartCheckout from './CartCheckout';

export default function Cart() {
  const { cart, setCart } = useContext(AppContext);

  const clearCart = () => setCart(null);
  const removeProduct = (id) => removeFromCart(id, setCart);

  return (
    <div
      className={ `fixed top-16 right-0 z-10 h-[calc(100%-64px)] w-full
      sm:w-[500px] max-w-[500px] bg-gray-100 border-2 border-gray-400
      flex flex-col gap-8 px-4 pt-4` }
    >
      <ListSection clear={ clearCart } list={ cart } title="Meu Carrinho" />
      <div className="flex flex-col gap-2 h-[65%] overflow-y-auto no-scrollbar">
        {
          !cart
            ? <span className="text-center">Seu carrinho está vazio.</span>
            : (
              cart.map((product) => (
                <div
                  key={ product.id }
                  className="flex gap-4 h-8 justify-between items-center"
                >
                  <div className="flex items-center gap-2">
                    <img
                      alt={ product.title }
                      className="w-8 h-8 object-cover"
                      src={ product.image }
                    />
                    <span
                      className={ `whitespace-nowrap overflow-hidden w-[calc(30vw)]
                      vsm:w-64` }
                    >
                      { product.title }
                    </span>
                  </div>
                  <div className="flex items-center gap-12">
                    <span className="w-4 flex justify-end">{ product.quantity }</span>
                    <span
                      className="w-10 flex justify-end"
                    >
                      { priceToReal(product.price * product.quantity) }
                    </span>
                    <button
                      onClick={ () => removeProduct(product.id) }
                      type="button"
                      className="hover:text-gray-400 transition-colors"
                    >
                      <Trash size={ 20 } weight="fill" />
                    </button>
                  </div>
                </div>
              ))
            )
        }
      </div>
      <CartCheckout cart={ cart } />
    </div>
  );
}
