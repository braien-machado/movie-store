import React from 'react';
import CartCheckout from '../components/CartCheckout';
import CheckoutForm from '../components/CheckoutForm';
import CheckoutTable from '../components/CheckoutTable';

export default function Checkout() {
  return (
    <main className="flex justify-center gap-40">
      <div className="flex flex-col gap-8">
        <h1 className="text-2xl">Finalizar Compra</h1>
        <CheckoutForm />
      </div>
      <div>
        <CheckoutTable />
        <CartCheckout />
      </div>
    </main>
  );
}
