import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import TableRow from './TableRow';

export default function CheckoutTable() {
  const { cart } = useContext(AppContext);

  return (
    <table>
      <thead>
        <tr className="text-lg text-left">
          <th className="font-normal pb-4">Imagem</th>
          <th className="font-normal pb-4 px-4">Nome</th>
          <th className="font-normal pb-4">Qtd</th>
          <th className="font-normal pb-4 px-4">Preço</th>
        </tr>
      </thead>
      <tbody>
        {
          cart && cart.map((product) => (
            <TableRow key={ product.id } product={ product } />))
        }
      </tbody>
    </table>
  );
}
