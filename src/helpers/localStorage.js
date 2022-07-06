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

export const updateFavorite = (id, updateFavorites) => {
  const data = getData('favorites');

  if (!data) return updateFavorites([id]);

  if (data.findIndex((favoriteId) => favoriteId === id) === NOT_FOUND) {
    data.push(id);
    updateFavorites(data);
  } else {
    const newArray = data.filter((favoriteId) => favoriteId !== id);
    updateFavorites(newArray);
  }
};
