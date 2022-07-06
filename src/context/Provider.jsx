import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';
import useLocalStorage from '../helpers/useLocalStorage';

function Provider({ children }) {
  const [cart, setCart] = useLocalStorage('cart', null);
  const [favorites, setFavorites] = useLocalStorage('favorites', []);
  const [searchText, setSearchText] = useState('');

  const NOT_FOUND = -1;

  const getData = (key) => {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : data;
  };

  const addToCart = (product, quantity = 1) => {
    let data = getData('cart');

    if (!data) {
      data = [{ ...product, quantity }];
      setCart(data);
    } else {
      const index = data.findIndex((item) => item.id === product.id);

      if (index === NOT_FOUND) {
        data.push({ ...product, quantity });
        setCart(data);
      } else {
        data[index] = { ...data[index], quantity: data[index].quantity + quantity };
        setCart(data);
      }
    }
  };

  const removeFromLocalStorage = (id, key, updateState) => {
    const data = getData(key);

    const newArray = data.filter((product) => product.id !== id);

    return newArray.length === 0 ? updateState(null) : updateState(newArray);
  };

  const updateFavorite = (product) => {
    const data = getData('favorites');

    if (!data) {
      setFavorites([product]);
    } else {
      const index = data.findIndex((item) => item.id === product.id);

      if (index === NOT_FOUND) {
        data.push(product);
        setFavorites(data);
      } else {
        const newArray = data.filter((favorite) => favorite.id !== product.id);
        setFavorites(newArray);
      }
    }
  };

  const contextValue = {
    cart,
    setCart,
    favorites,
    setFavorites,
    searchText,
    setSearchText,
    addToCart,
    removeFromLocalStorage,
    updateFavorite,
  };

  return (
    <AppContext.Provider value={ contextValue }>
      { children }
    </AppContext.Provider>
  );
}

export default Provider;

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
