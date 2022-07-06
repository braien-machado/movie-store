import React, { useContext } from 'react';
import { Trash } from 'phosphor-react';
import AppContext from '../context/AppContext';
import { priceToReal } from '../helpers/handlePrice';
import ListHeader from './ListHeader';
import CartCheckout from './CartCheckout';
import ListItemCoreInfo from './ListItemCoreInfo';

export default function Cart() {
  const {
    cart,
    setCart,
    removeFromLocalStorage,
  } = useContext(AppContext);

  const clearCart = () => setCart(null);
  const removeProduct = (id) => removeFromLocalStorage(id, 'cart', setCart);

  return (
    <div
      className={ `fixed top-16 right-0 z-10 h-[calc(100%-64px)] w-full
      sm:w-[500px] max-w-[500px] bg-gray-100 border-2 border-gray-400
      flex flex-col justify-between px-4 pt-4 gap-8 overflow-y-auto no-scrollbar` }
    >
      <div className="flex flex-col gap-8 max-h-fit">
        <ListHeader clear={ clearCart } list={ cart } title="Meu Carrinho" />
        <div className="flex flex-col gap-2">
          {
            !cart
              ? <span className="text-center">Seu carrinho está vazio.</span>
              : (
                cart.map((product) => (
                  <div
                    key={ product.id }
                    className="flex gap-4 h-8 justify-between items-center"
                  >
                    <ListItemCoreInfo title={ product.title } image={ product.image } />
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
      </div>
      <CartCheckout cart={ cart } />
    </div>
  );
}
