import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import logo from '../assets/logo.png';
import {
  HeartIcon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
} from '@heroicons/react/24/outline';

import { selectTotalQuantity, setOpenCart } from '../app/CartSlice';

const Navbar = () => {
  const [navState, setNavState] = useState(false);

  const dispatch = useDispatch();

  const totalQty = useSelector(selectTotalQuantity);

  // function for cart open

  const isCartOpen = () => {
    dispatch(
      setOpenCart({
        cartState: true,
      })
    );
  };

  // this function for  making of fixed navbar while screen scrolling
  const navScroll = () => {
    // if window scroll is greater then 30 fixed navbar exist
    if (window.scrollY > 30) {
      setNavState(true);
    } else {
      setNavState(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', navScroll);

    return () => {
      window.removeEventListener('scroll', navScroll);
    };
  }, []);
  return (
    <>
      <header
        className={` ${
          !navState
            ? 'absolute top-7 left-0 right-0 opacity-100 z-50'
            : 'fixed top-0 left-0 right-0 h-[9vh] items-center justify-center opacity-100 z-[100] blur-effect-theme'
        }`}
      >
        <nav
          className={`flex justify-between items-center  nike-container h-[9vh] `}
        >
          <div className=''>
            <img
              src={logo}
              alt={logo}
              className={`w-18 h-6 ${navState && 'filler brightness-0'} `}
            />
          </div>
          <ul className='flex justify-center items-center gap-3'>
            <li className='grid items-center'>
              {' '}
              <MagnifyingGlassIcon
                className={`icon-style ${navState && 'filter brightness-0'}`}
              />
            </li>
            <li className='grid items-center'>
              <HeartIcon
                className={`icon-style ${navState && 'filter brightness-0'}`}
              />
            </li>
            <li className='grid items-center'>
              <button type='button' className='relative'>
                <ShoppingBagIcon
                  className={`icon-style ${navState && 'filter brightness-0'}`}
                  onClick={isCartOpen}
                />
                <div
                  className={`absolute top-4 right-0 shadow w-4 h-4 leading-tight font-medium rounded-full flex justify-center cursor-pointer
                  hover:scale-110 transition-all duration-300  
                  ${
                    navState
                      ? 'bg-slate-900 text-slate-50 shadow-slate-900'
                      : 'bg-slate-100 text-slate-900 shadow-slate-100'
                  }  `}
                >
                  {totalQty}
                </div>
              </button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
