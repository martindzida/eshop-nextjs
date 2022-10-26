import React from 'react';
import useGetTotalPrice from '../utils/useGetTotalPrice';

const CartTotalPricePanel = () => {
  const totalPrice = useGetTotalPrice();

  return (
    <section className='flex justify-center'>
      <div className='w-2/3 text-right text-white font-semibold text-xl rounded-lg bg-emerald-300 p-8 my-4'>
        Total price: <span className='text-2xl px-10'>{totalPrice} €</span>
      </div>
    </section>
  );
};

export default CartTotalPricePanel;

