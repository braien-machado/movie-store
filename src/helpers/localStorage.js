export const getCart = () => {
  const data = localStorage.getItem('cart');
  return data ? JSON.parse(data) : data;
};

export const addToCart = (
  product,
  updateCart,
  quantity = 1,
) => {
  const data = getCart();

  if (!data) {
    const cart = [{ ...product, quantity }];
    updateCart(cart);
  } else {
    const index = data.findIndex((item) => item.id === product.id);
    const NOT_FOUND = -1;

    if (index === NOT_FOUND) {
      data.push({ ...product, quantity });
      updateCart(data);
    } else {
      data[index] = { ...data[index], quantity: data[index].quantity + quantity };
      updateCart(data);
    }
  }
};
