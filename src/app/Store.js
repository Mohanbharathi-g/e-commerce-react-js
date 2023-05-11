import { configureStore } from '@reduxjs/toolkit';

// import { getDefaultMiddleware } from '@reduxjs/toolkit';
import CartSlice from './CartSlice';

const Store = configureStore({
  reducer: {
    cart: CartSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export default Store;
