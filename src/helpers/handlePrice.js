export const priceToReal = (number) => number
  .toLocaleString('pt-BR', {
    currency: 'BRL',
    minimumFractionDigits: 2,
    style: 'currency',
  });

export const getTotalPrice = (cart) => {
  const totalPrice = cart.reduce((acc, cur) => acc + (cur.quantity * cur.price), 0);

  return priceToReal(totalPrice);
};
