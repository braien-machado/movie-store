import React, { useContext } from 'react';
import { ShoppingCart, Trash } from 'phosphor-react';
import AppContext from '../context/AppContext';
import { priceToReal } from '../helpers/handlePrice';
import ListHeader from './ListHeader';
import ListItemCoreInfo from './ListItemCoreInfo';

export default function Favorites() {
  const {
    favorites,
    setFavorites,
    addToCart,
    removeFromLocalStorage,
  } = useContext(AppContext);

  const clearFavorites = () => setFavorites(null);
  const removeProduct = (id) => removeFromLocalStorage(id, 'favorites', setFavorites);

  return (
    <div
      className={ `fixed top-16 right-0 z-10 h-[calc(100%-64px)] w-full
      sm:w-[500px] max-w-[500px] bg-gray-100 border-2 border-gray-400
      flex flex-col gap-8 p-4 overflow-y-auto no-scrollbar` }
    >
      <ListHeader clear={ clearFavorites } list={ favorites } title="Meus Favoritos" />
      <div className="flex flex-col gap-2">
        {
          !favorites
            ? <span className="text-center">Nenhum favorito.</span>
            : (
              favorites.map((product) => (
                <div
                  key={ product.id }
                  className="flex gap-4 h-8 justify-between items-center"
                >
                  <ListItemCoreInfo title={ product.title } image={ product.image } />
                  <div className="flex items-center justify-end gap-4">
                    <span className="w-4 flex justify-end">{ product.quantity }</span>
                    <span
                      className="w-10 flex justify-end"
                    >
                      { priceToReal(Number(product.price)) }
                    </span>
                    <button
                      onClick={ () => addToCart(product) }
                      type="button"
                      className="text-teal-600 hover:text-teal-400 transition-colors"
                    >
                      <ShoppingCart size={ 20 } weight="fill" />
                    </button>
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
  );
}
