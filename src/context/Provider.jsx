import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';
import useLocalStorage from '../helpers/useLocalStorage';

function Provider({ children }) {
  const [cart, setCart] = useLocalStorage('cart', null);
  const [favorites, setFavorites] = useLocalStorage('favorites', []);
  const [searchText, setSearchText] = useState('');

  const contextValue = {
    cart,
    setCart,
    favorites,
    setFavorites,
    searchText,
    setSearchText,
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
