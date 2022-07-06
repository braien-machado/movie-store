export const getData = (key) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : data;
};

const NOT_FOUND = -1;

export const addToCart = (
  product,
  updateCart,
  quantity = 1,
) => {
  const data = getData('cart');

  if (!data) {
    const cart = [{ ...product, quantity }];
    updateCart(cart);
  } else {
    const index = data.findIndex((item) => item.id === product.id);

    if (index === NOT_FOUND) {
      data.push({ ...product, quantity });
      updateCart(data);
    } else {
      data[index] = { ...data[index], quantity: data[index].quantity + quantity };
      updateCart(data);
    }
  }
};

export const removeFromCart = (id, updateCart) => {
  const data = getData('cart');

  const newCart = data.filter((product) => product.id !== id);

  return newCart.length === 0 ? updateCart(null) : updateCart(newCart);
};

export const removeFromFavorites = (id, setFavorites) => {
  const data = getData('favorites');

  const newFavorites = data.filter((product) => product.id !== id);

  return newFavorites.length === 0 ? setFavorites(null) : setFavorites(newFavorites);
};

export const updateFavorite = (
  product,
  setFavorites,
) => {
  const data = getData('favorites');

  if (!data) {
    const favorites = [product];
    setFavorites(favorites);
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
