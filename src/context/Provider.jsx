import React from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';
import useLocalStorage from '../helpers/useLocalStorage';

function Provider({ children }) {
  const [cart, setCart] = useLocalStorage('cart', null);

  const contextValue = {
    cart,
    setCart,
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
