import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartState: false,
  cartItem: localStorage.getItem('cart')
    ? JSON.parse(localStorage.getItem('cart'))
    : [],
  cartTotalQuantity: 0,
  cartTotalPrice: 0,
};

const CartSlice = createSlice({
  initialState,
  name: 'cart',
  reducers: {
    setOpenCart: (state, action) => {
      state.cartState = action.payload.cartState;
    },
    setCloseCart: (state, action) => {
      state.cartState = action.payload.cartState;
    },
    setAddItemToCart: (state, action) => {
      const itemIndex = state.cartItem.findIndex(
        (Item) => Item.id === action.payload.id
      );

      // if index is not there it will return -1,else it will return 1

      if (itemIndex >= 0) {
        state.cartItem[itemIndex].cartQuantity += 1;
      } else {
        console.log('false');
        const temp = { ...action.payload, cartQuantity: 1 };
        state.cartItem.push(temp);
      }
      localStorage.setItem('cart', JSON.stringify(state.cartItem));
    },

    setItemRemoveFromCart: (state, action) => {
      const removeItem = state.cartItem.filter((item) => {
        return item.id !== action.payload.id;
      });

      state.cartItem = removeItem;
      localStorage.setItem('cart', JSON.stringify(state.cartItem));
    },
    setIncreaseQty: (state, action) => {
      const itemIndex = state.cartItem.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        state.cartItem[itemIndex].cartQuantity += 1;
      }
      localStorage.setItem('cart', JSON.stringify(state.cartItem));
    },
    setDecreaseQty: (state, action) => {
      const itemIndex = state.cartItem.findIndex(
        (item) => item.id === action.payload.id
      );

      if (state.cartItem[itemIndex].cartQuantity > 1) {
        state.cartItem[itemIndex].cartQuantity -= 1;
      }
      localStorage.setItem('cart', JSON.stringify(state.cartItem));
    },

    setClearCartItems: (state) => {
      state.cartItem = [];

      localStorage.setItem('cart', JSON.stringify(state.cartItem));
    },

    getTotalFromCart: (state) => {
      let { totalAmount, totalQty } = state.cartItem.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const totalPrice = price * cartQuantity;
          cartTotal.totalAmount += totalPrice;
          cartTotal.totalQty += cartQuantity;

          return cartTotal;
        },
        {
          totalAmount: 0,
          totalQty: 0,
        }
      );
      state.cartTotalPrice = totalAmount;
      state.cartTotalQuantity = totalQty;
    },
  },
});

export const {
  setCloseCart,
  setOpenCart,
  setAddItemToCart,
  setItemRemoveFromCart,
  setIncreaseQty,
  setDecreaseQty,
  setClearCartItems,
  getTotalFromCart,
} = CartSlice.actions;

export const selectCartState = (state) => state.cart.cartState;

export const selectCartItem = (state) => state.cart.cartItem;

export const selectTotalAmount = (state) => state.cart.cartTotalPrice;

export const selectTotalQuantity = (state) => state.cart.cartTotalQuantity;

export default CartSlice.reducer;
