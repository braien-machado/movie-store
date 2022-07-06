import React from 'react';

const INPUT_BASIC_STYLE = `border-2 bg-gray-100 border-gray-300 p-3 rounded
focus:outline-gray-500`;

export default function CheckoutForm() {
  return (
    <form action="" className="flex flex-col gap-8">
      <input
        className={ `${INPUT_BASIC_STYLE} w-[492px]` }
        type="text"
        placeholder="Nome Completo"
      />
      <div className="flex gap-8">
        <input className={ `${INPUT_BASIC_STYLE}` } type="text" placeholder="CPF" />
        <input className={ `${INPUT_BASIC_STYLE}` } type="text" placeholder="Celular" />
      </div>
      <input
        className={ `${INPUT_BASIC_STYLE} w-[492px]` }
        type="email"
        placeholder="E-mail"
      />
      <div className="flex gap-8">
        <input className={ `${INPUT_BASIC_STYLE}` } type="text" placeholder="CEP" />
        <input className={ `${INPUT_BASIC_STYLE}` } type="text" placeholder="Endereço" />
      </div>
      <div className="flex gap-8">
        <input className={ `${INPUT_BASIC_STYLE}` } type="text" placeholder="Cidade" />
        <input className={ `${INPUT_BASIC_STYLE}` } type="text" placeholder="Estado" />
      </div>
    </form>
  );
}
