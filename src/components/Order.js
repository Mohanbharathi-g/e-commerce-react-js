import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  selectCartShipTotal,
  selectTotalAmount,
  setShipTotal,
} from '../app/CartSlice';

const Order = ({ cartItem }) => {
  const dispatch = useDispatch();

  const shipTotal = useSelector(selectCartShipTotal);
  const totalAmount = useSelector(selectTotalAmount);

  // const details = useSelector(selectDetails);

  // const item = useSelector(selectCartItem);

  useEffect(() => {
    dispatch(setShipTotal(totalAmount));
  }, []);

  // useEffect(() => {
  //   console.log('hiii');
  // }, [item, dispatch]);
  // console.log(item);
  // console.log(order);

  return (
    <>
      <div className='blur-effect-theme text-slate-900 flex flex-col gap-1 p-5  '>
        <h1 className='text-slate-900 pb-5 text-3xl'>Your oder details</h1>
        <div className='px-5 py-3 flex flex-col gap-3'>
          {cartItem.map((item, index) => {
            return (
              <div
                className={`bg-gradient-to-b ${item.color}${item.shadow} flex justify-between px-6 bottom-2 py-10 border-2 rounded-xl
                w-[650px]
               m-auto xsm:w-[200px] md:w-[300px]
                lg:w-[500px] xl:w-[600px]  `}
              >
                <div
                  key={index}
                  className={`bg-gradient-to-b ${item.color}${item.shadow}`}
                >
                  <img
                    src={item.img}
                    alt={item.id}
                    className={`  w-[100px] p-2`}
                  />
                </div>
                <div className='flex flex-col gap-2 pr-3'>
                  <p className={`font-extrabold   `}>{item.text}</p>
                  <p className='font-bold text-slate-900'>
                    <span className='text-red-500 font-bold'>price:</span>
                    {item.price}
                  </p>
                  <p className=' text-slate-900 font-bold '>
                    <span>Quantity:</span>
                    {item.cartQuantity}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        {totalAmount > 0 ? (
          <div className='text-lg px-2 text-slate-900'>
            <h1 className='text-slate-900 font-extrabold text-3xl pb-5'>
              Summary
            </h1>
            <hr />
            <div className='flex flex-col gap-3 py-2'>
              <div className='flex justify-between'>
                <p className=' font-semibold'>Subtotal:</p>
                <p>$ {totalAmount}</p>
              </div>
              <div className='flex justify-between'>
                <p className=' font-semibold'>Shipping:</p>
                <p>$50</p>
              </div>
              <hr />
              <div className='flex justify-between'>
                <p className=' font-semibold'> Total:</p>
                <p>${shipTotal}</p>
              </div>
            </div>
          </div>
        ) : (
          ''
        )}
      </div>
    </>
  );
};

export default Order;
