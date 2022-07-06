import React from 'react';
import { Trash } from 'phosphor-react';

export default function CheckoutTable() {
  return (
    <table>
      <thead>
        <tr>
          <th>Imagem</th>
          <th>Nome</th>
          <th>Qtd</th>
          <th>Preço</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>imagem</td>
          <td>Nome do filme</td>
          <td>1</td>
          <td>R$ 9,99</td>
          <td><Trash /></td>
        </tr>
      </tbody>
    </table>
  );
}
