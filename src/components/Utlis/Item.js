import React from 'react';
import { StarIcon, ShoppingBagIcon } from '@heroicons/react/24/solid';
import { useDispatch } from 'react-redux';
import { setAddItemToCart, setOpenCart } from '../../app/CartSlice';

const Item = ({
  btn,
  color,
  id,
  img,
  price,
  rating,
  shadow,
  text,
  title,
  ifExists,
}) => {
  const dispatch = useDispatch();

  const addItemToCart = () => {
    const item = { color, id, img, price, rating, shadow, text, title };
    dispatch(setAddItemToCart(item));
  };

  const isCartOpen = () => {
    dispatch(
      setOpenCart({
        cartState: true,
      })
    );
  };

  return (
    <>
      <div
        className={`relative bg-gradient-to-b ${color}${shadow} grid items-center border-2 ${
          ifExists ? 'justify-items-start' : 'justify-items-center'
        } rounded-xl py-4 px-5  transition-all duration-700 ease-in-out w-full h-full hover:scale-105 `}
      >
        <div
          className={`grid items-center ${
            ifExists ? 'justify-items-start' : 'justify-items-center'
          } `}
        >
          <h1 className='text-slate-200 text-xl lg:text-lg md:text-base font-medium filter drop-shadow'>
            {title}
          </h1>
          <p className='text-slate-200 filter drop-shadow text-base md:text-sm font-normal'>
            {text}
          </p>
          <div className='flex items-center justify-between w-28 my-2'>
            <div className='flex items-center bg-white/80 px-1 blur-effect-theme '>
              <h1 className='text-black text-sm font-medium'>{price}</h1>
            </div>
            <div className='flex items-center gap-1'>
              <StarIcon className='icon-style w-5 h-5 md:w-4 md:h-4' />
              <p className='md:text-sm font-normal text-slate-100'>{rating}</p>
            </div>
          </div>
          <div className='flex items-center gap-3'>
            <button
              type='button'
              className='bg-white/80 p-0.5 button-theme shadow shadow-sky-200'
            >
              {' '}
              <ShoppingBagIcon
                className='icon-style text-slate-900'
                onClick={() => {
                  addItemToCart();
                }}
              />
            </button>
            <button
              type='button'
              onClick={() => {
                addItemToCart();
                isCartOpen();
              }}
              className='bg-white/80 px-2 py-1 text-sm button-theme shadow shadow-sky-200'
            >
              {btn}
            </button>
          </div>
        </div>
        <div
          className={`flex items-center ${
            ifExists ? 'absolute top-5 right-1' : 'justify-center'
          }`}
        >
          <img
            src={img}
            alt={id}
            className={`transition-theme duration-700 hover:-rotate-12 ${
              ifExists
                ? 'h-auto w-64 lg:w-56 md:w-48 -rotate-[35deg]'
                : 'h-36 w-64'
            }`}
          />
        </div>
      </div>
    </>
  );
};

export default Item;
