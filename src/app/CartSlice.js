import { createSlice } from '@reduxjs/toolkit';

import { toast } from 'react-hot-toast';

const initialState = {
  cartState: false,
  cartItem: localStorage.getItem('cart')
    ? JSON.parse(localStorage.getItem('cart'))
    : [],
  cartTotalQuantity: 0,
  cartTotalPrice: 0,

  name: '',
  mail: '',
  number: '',
  address: '',
  imageAsset: null,
  user: null,
  userId: null,
  cartShipTotal: 0,
  cvv: null,
  year: null,
  cardNumber: null,
  lastName: '',
  city: '',
  postalCode: 0,
  phoneNumber: 0,
  details: localStorage.getItem('details')
    ? JSON.parse(localStorage.getItem('details'))
    : [],
  // orders: localStorage.getItem('orders')
  //   ? JSON.parse(localStorage.getItem('orders'))
  //   : [],

  orders: [],
  docId: null,
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
      // console.log(action.payload);
      const itemIndex = state.cartItem.findIndex(
        (Item) => Item.id === action.payload.id
      );

      // if index is not there it will return -1,else it will return 1

      if (itemIndex >= 0) {
        state.cartItem[itemIndex].cartQuantity += 1;
      } else {
        const temp = { ...action.payload, cartQuantity: 1 };

        state.cartItem.push(temp);
      }
      toast.success(`${action.payload.title} added in the cart`);
      localStorage.setItem('cart', JSON.stringify(state.cartItem));
    },

    setItemRemoveFromCart: (state, action) => {
      const removeItem = state.cartItem.filter((item) => {
        return item.id !== action.payload.id;
      });

      state.cartItem = removeItem;
      toast.success(`${action.payload.title} removed from the cart`);
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

      toast.success(`items are removed from the cart`);

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
    setName: (state, action) => {
      state.name = action.payload;
    },
    setMail: (state, action) => {
      state.mail = action.payload;
    },
    setNumber: (state, action) => {
      const inputValue = action.payload;
      if (inputValue.length > 0 && inputValue.length <= 10) {
        state.number = inputValue;
      } else {
        toast.error('invalid number');
      }
    },
    setAddress: (state, action) => {
      console.log(action.payload);
      state.address = action.payload;
    },

    setImageAsset: (state, action) => {
      state.imageAsset = action.payload;
    },
    setUser: (state, action) => {
      console.log(action.payload);
      state.user = action.payload;
    },
    setUserId: (state, action) => {
      console.log(action.payload);
      state.userId = action.payload;
    },
    setShipTotal: (state, action) => {
      state.cartShipTotal = action.payload + 50;
    },
    setLastName: (state, action) => {
      // console.log(action.payload);
      state.lastName = action.payload;
    },
    setCardNumber: (state, action) => {
      const inputValue = action.payload;
      if (inputValue.length > 16) {
        state.cardNumber = inputValue.slice(0, 16);
        toast.error('card number only 16 digits');
      } else {
        state.cardNumber = inputValue;
        // toast.success('card value is entered');
      }
    },
    setYear: (state, action) => {
      const inputValue = action.payload;
      if (inputValue.length > 4) {
        state.year = inputValue.slice(0, 4);
        toast.error('Must be 4 digits');
      } else {
        state.year = inputValue;
      }
    },

    setCvv: (state, action) => {
      const inputValue = action.payload;
      if (inputValue.length > 3) {
        state.cvv = inputValue.slice(0, 3);
        toast.error('must be 3 digits');
      } else {
        state.cvv = inputValue;
      }
    },
    setCity: (state, action) => {
      state.city = action.payload;
    },
    setPostalCode: (state, action) => {
      const inputValue = action.payload;

      if (inputValue.length < 6) {
        state.postalCode = inputValue.slice(0, 6);
      } else {
        state.postalCode = inputValue;
      }
    },
    setPhoneNumber: (state, action) => {
      state.phoneNumber = action.payload;
    },
    setDetails: (state, action) => {
      console.log('hiii');
      console.log(action.payload);
      const {
        name,
        mail,
        address,
        number,
        lastName,
        city,
        postalCode,
        cardNumber,
        year,
        cvv,
      } = action.payload;
      state.details = {
        name,
        mail,
        lastName,
        number,
        address,
        city,
        year,
        cvv,
        postalCode,
        cardNumber,
      };
      localStorage.setItem('details', JSON.stringify(state.details));
      toast.success('your orders is successfully added ');
    },

    // console.log(name, mail, lastName, number, address, city, year, cvv,postalCode,cardNumber);

    setOrders: (state, action) => {
      console.log(action.payload);
      const temp = action.payload;

      state.orders.push(...temp);
      localStorage.setItem('orders', JSON.stringify(state.orders));
    },
    setDocId: (state, action) => {
      state.docId = action.payload;
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
  setName,
  setMail,
  setAddress,
  setNumber,
  setImageAsset,
  setUser,
  setUserLog,
  setShipTotal,
  setCardNumber,
  setCity,
  setCvv,
  setLastName,
  setYear,
  setPostalCode,
  setPhoneNumber,
  setDetails,
  setOrders,
  setDocId,
  setUserId,
} = CartSlice.actions;

export const selectCartState = (state) => state.cart.cartState;

export const selectOrders = (state) => state.cart.orders;

export const selectCartItem = (state) => state.cart.cartItem;

export const selectTotalAmount = (state) => state.cart.cartTotalPrice;

export const selectTotalQuantity = (state) => state.cart.cartTotalQuantity;
export const selectName = (state) => state.cart.name;
export const selectMail = (state) => state.cart.mail;
export const selectNumber = (state) => state.cart.number;
export const selectAddress = (state) => state.cart.address;
export const selectImage = (state) => state.cart.imageAsset;
export const selectUser = (state) => state.cart.user;
export const selectUserId = (state) => state.cart.userId;
export const selectCartShipTotal = (state) => state.cart.cartShipTotal;

export const selectLastName = (state) => state.cart.lastName;

export const selectCardNumber = (state) => state.cart.cardNumber;

export const selectYear = (state) => state.cart.year;
export const selectCvv = (state) => state.cart.cvv;
export const selectCity = (state) => state.cart.city;
export const selectPostalCode = (state) => state.cart.postalCode;

export const selectPhoneNumber = (state) => state.cart.phoneNumber;
export const selectDetails = (state) => state.cart.details;

export default CartSlice.reducer;
