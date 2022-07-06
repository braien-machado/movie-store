import React from 'react';
import CheckoutForm from '../components/CheckoutForm';
import CheckoutTable from '../components/CheckoutTable';
import CheckoutSubmit from '../components/CheckoutSubmit';

const BASIC_STYLE = 'flex flex-col w-full items-center gap-8';
const MEDIUM_STYLE = ' md:items-start md:flex-row md:justify-between';
const LARGE_STYLE = ' xl:gap-0 2xl:justify-center 2xl:gap-[10%]';
const COMPLETE_STYLE = BASIC_STYLE + MEDIUM_STYLE + LARGE_STYLE;

export default function Checkout() {
  return (
    <main className="flex flex-col gap-8 items-center sm:items:start sm:mx-[10%]">
      <h1
        className="text-2xl text-center xl:text-left 2xl:text-center"
      >
        Finalizar Compra
      </h1>
      <div
        className={ COMPLETE_STYLE }
      >
        <CheckoutForm />
        <div className="flex flex-col justify-between gap-8 max-w-[500px]">
          <CheckoutTable />
          <CheckoutSubmit />
        </div>
      </div>
    </main>
  );
}
