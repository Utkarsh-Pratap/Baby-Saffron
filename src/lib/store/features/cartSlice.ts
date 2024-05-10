import { createSlice } from '@reduxjs/toolkit';

type CartState = {
  showCart: boolean;
  totalQuantity: number;
  totalPrice: number;
};

const initialState: CartState = {
  showCart: false,
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  initialState,
  name: 'cart',
  reducers: {
    openCart(state) {
      state.showCart = true;
    },
    closeCart(state) {
      state.showCart = false;
    },
  },
});

// Exporting Cart actions (for dipatching actions) and reducer (for use in configure store file)
export const { reducer: cartReducers, actions: cartActions } = cartSlice;
