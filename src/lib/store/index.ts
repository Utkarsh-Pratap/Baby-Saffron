import { configureStore } from '@reduxjs/toolkit';
import { cartReducers } from './features/cartSlice';
import { authReducers } from './features/authSlice';

/* In Next.JS App router instead of creating a global store variable we are creating a function that will create the store per request. 
For More Info refer: https://redux.js.org/usage/nextjs
*/
export const createStore = () => {
  return configureStore({
    reducer: {
      cart: cartReducers,
      auth: authReducers,
    },
  });
};

// Types for better auto completion and strong type checking
export type ReduxStore = ReturnType<typeof createStore>;
export type ReduxState = ReturnType<ReduxStore['getState']>;
export type ReduxDispatch = ReduxStore['dispatch'];
