import React from 'react';
import emptybag from '../../../assets/emptybag.png';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

const CartEmpty = ({ isCartOpen }) => {
  return (
    <>
      <div className='flex flex-col items-center justify-center h-screen px-11 gap-7'>
        <img
          src={emptybag}
          alt={'imag'}
          className='w-40 lg:w-36 sm:w-28 object-fill transition-all duration-300 hover:scale-110'
        />
        <button
          type='button'
          className='flex items-center gap-1 button-theme bg-gradient-to-b from-amber-500 to-orange-500 shadow-lg font-semibold text-sm shadow-orange-500 py-2 px-8'
          onClick={isCartOpen}
        >
          <ArrowLeftIcon className='w-5 h-5 text-slate-900' />
          <span>Back To Nike Store</span>
        </button>
      </div>
    </>
  );
};

export default CartEmpty;
