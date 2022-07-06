import React from 'react';
import CheckoutForm from '../components/CheckoutForm';
import CheckoutTable from '../components/CheckoutTable';
import CheckoutSubmit from '../components/CheckoutSubmit';

export default function Checkout() {
  return (
    <main className="flex flex-col gap-8 items-center sm:items:start sm:mx-[10%]">
      <h1
        className="text-2xl text-center xl:text-left 2xl:text-center"
      >
        Finalizar Compra
      </h1>
      <div
        className="flex flex-col w-full items-center md:items-start md:flex-row gap-8 xl:gap-0 md:justify-between 2xl:justify-center 2xl:gap-[10%]"
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
