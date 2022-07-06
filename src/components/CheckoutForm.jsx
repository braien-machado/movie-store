import React from 'react';

const INPUT_BASIC_STYLE = `border-2 bg-gray-100 border-gray-300 p-3 rounded
focus:outline-gray-500`;

export default function CheckoutForm() {
  return (
    <form className="flex flex-col gap-8 w-[90%] max-w-[492px] md:w-[300px] xl:w-[492px]">
      <input
        className={ `${INPUT_BASIC_STYLE}` }
        type="text"
        placeholder="Nome Completo"
      />
      <div className="flex gap-8 flex-col sm:flex-row md:flex-col xl:flex-row">
        <input className={ `${INPUT_BASIC_STYLE}` } type="text" placeholder="CPF" />
        <input className={ `${INPUT_BASIC_STYLE}` } type="text" placeholder="Celular" />
      </div>
      <input
        className={ `${INPUT_BASIC_STYLE}` }
        type="email"
        placeholder="E-mail"
      />
      <div className="flex gap-8 flex-col sm:flex-row md:flex-col xl:flex-row">
        <input className={ `${INPUT_BASIC_STYLE}` } type="text" placeholder="CEP" />
        <input className={ `${INPUT_BASIC_STYLE}` } type="text" placeholder="Endereço" />
      </div>
      <div className="flex gap-8 flex-col sm:flex-row md:flex-col xl:flex-row">
        <input className={ `${INPUT_BASIC_STYLE}` } type="text" placeholder="Cidade" />
        <input className={ `${INPUT_BASIC_STYLE}` } type="text" placeholder="Estado" />
      </div>
    </form>
  );
}
