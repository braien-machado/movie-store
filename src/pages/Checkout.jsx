import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import { getTotalPrice } from '../helpers/handlePrice';
import CheckoutForm from '../components/CheckoutForm';
import CheckoutTable from '../components/CheckoutTable';

export default function Checkout() {
  const { cart } = useContext(AppContext);

  return (
    <main className="flex flex-col gap-8 mx-[10%]">
      <h1 className="text-2xl text-center xl:text-left 2xl:text-center">Finalizar Compra</h1>
      <div className="flex gap-8 xl:gap-0 justify-between 2xl:justify-center 2xl:gap-[10%]">
        <CheckoutForm />
        <div className="flex flex-col justify-between gap-8 max-w-[500px]">
          <CheckoutTable />
          <div className="w-full flex flex-col gap-10">
            <div className="flex justify-between items-end">
              <span className="h-fit text-xl">Total:</span>
              <span
                className="text-2xl"
              >
                { !cart ? 'R$ 0,00' : getTotalPrice(cart) }
              </span>
            </div>
            <button
              type="button"
              to="/checkout"
              className={ `${!cart ? 'pointer-events-none bg-gray-400' : 'bg-indigo-700'}
              hover:bg-indigo-800 text-white text-center
              font-semibold rounded transition-colors w-full py-2` }
            >
              Finalizar
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
