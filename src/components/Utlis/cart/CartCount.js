import React from 'react';
import { ChevronDoubleLeftIcon, XMarkIcon } from '@heroicons/react/24/solid';

const CartCount = ({ isCartOpen, clearCart, totalQty }) => {
  return (
    <>
      <div className='flex items-center justify-between bg-slate-100 py-5 px-5'>
        <div className='flex gap-3'>
          <div className='grid items-center cursor-pointer'>
            <ChevronDoubleLeftIcon
              className='w-5 h-5 text-slate-900 hover:text-orange-500'
              onClick={isCartOpen}
            />
          </div>
          <div className='grid items-center'>
            <h1 className='text-base font-normal'>
              your cart{' '}
              <span className='bg-theme-cart text-slate-100 px-2 py-1 rounded-md'>
                {totalQty}
              </span>
            </h1>
          </div>
        </div>
        <div className='flex items-center'>
          <button
            type='button'
            onClick={clearCart}
            className='rounded bg-theme-cart active:scale-90 p-1'
          >
            <XMarkIcon className='w-5 h-5 text-slate-100 stroke-[2]' />
          </button>
        </div>
      </div>
    </>
  );
};

export default CartCount;
