import React from 'react';
import Order from '../Order';
import Address from '../Address';

import { selectCartItem } from '../../app/CartSlice';
import { useSelector } from 'react-redux';

const AddingDetails = () => {
  const cartItem = useSelector(selectCartItem);

  return (
    <>
      <Order cartItem={cartItem} />
      <Address />
    </>
  );
};

export default AddingDetails;
