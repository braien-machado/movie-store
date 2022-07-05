import React, { useContext } from 'react';
import { Trash } from 'phosphor-react';
import AppContext from '../context/AppContext';
import { removeFromCart } from '../helpers/localStorage';

export default function Cart() {
  const { cart, setCart } = useContext(AppContext);

  const clearCart = () => setCart(null);
  const removeProduct = (id) => removeFromCart(id, setCart);

  return (
    <div
      className={ `fixed top-16 right-0 z-10 h-[calc(100%-64px)] w-[500px] max-w-[500px]
      bg-gray-100 border-2 border-gray-400 flex flex-col gap-8 px-4 pt-4` }
    >
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-semibold">Meu Carrinho</h1>
        { cart && (
          <button
            className="text-indigo-600 underline underline-offset-2"
            type="button"
            onClick={ clearCart }
          >
            Esvaziar
          </button>
        )}
      </div>
      <div className="flex flex-col gap-2 h-[70%] overflow-y-auto no-scrollbar">
        {
          !cart
            ? <span className="text-center">Seu carrinho está vazio.</span>
            : (
              cart.map((product) => (
                <div key={ product.id } className="flex gap-10 h-8 items-center">
                  <div className="flex items-center gap-2">
                    <img
                      alt={ product.title }
                      className="w-8 h-8 object-cover"
                      src={ product.image }
                    />
                    <span
                      className="whitespace-nowrap overflow-hidden w-64"
                    >
                      { product.title }
                    </span>
                  </div>
                  <span className="w-4 flex justify-center">{ product.quantity }</span>
                  <span
                    className="w-10 flex justify-end"
                  >
                    { product.price * product.quantity }
                  </span>
                  <button
                    onClick={ () => removeProduct(product.id) }
                    type="button"
                    className="hover:text-gray-400 transition-colors"
                  >
                    <Trash size={ 20 } weight="fill" />
                  </button>
                </div>
              ))
            )
        }
      </div>
      <div className="">
        <div>
          <span>Total</span>
          <span>R$ 19,98</span>
        </div>
        <button type="button">Finalizar compra</button>
      </div>
    </div>
  );
}
