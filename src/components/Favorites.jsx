import React, { useContext } from 'react';
import { ShoppingCart, Trash } from 'phosphor-react';
import AppContext from '../context/AppContext';
import { addToCart, removeFromFavorites } from '../helpers/localStorage';
import { priceToReal } from '../helpers/handlePrice';

export default function Favorites() {
  const { favorites, setFavorites, setCart } = useContext(AppContext);

  const clearFavorites = () => setFavorites(null);
  const removeProduct = (id) => removeFromFavorites(id, setFavorites);

  return (
    <div
      className={ `fixed top-16 right-0 z-10 h-[calc(100%-64px)] w-full
      sm:w-[500px] max-w-[500px] bg-gray-100 border-2 border-gray-400
      flex flex-col gap-8 px-4 pt-4` }
    >
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-semibold">Meus Favoritos</h1>
        { favorites && (
          <button
            className={ `text-indigo-600 hover:text-indigo-400 
            transition-colors underline underline-offset-2 ` }
            type="button"
            onClick={ clearFavorites }
          >
            Esvaziar
          </button>
        )}
      </div>
      <div className="flex flex-col gap-2 h-[65%] overflow-y-auto no-scrollbar">
        {
          !favorites
            ? <span className="text-center">Nenhum favorito.</span>
            : (
              favorites.map((product) => (
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
                  <div className="flex items-center justify-end gap-4">
                    <span className="w-4 flex justify-end">{ product.quantity }</span>
                    <span
                      className="w-10 flex justify-end"
                    >
                      { priceToReal(Number(product.price)) }
                    </span>
                    <button
                      onClick={ () => addToCart(product, setCart) }
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
