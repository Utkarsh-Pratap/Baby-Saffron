import { createSlice } from '@reduxjs/toolkit';

type AuthState = {
  isLoggedIn: boolean;
  showLoginScreen: boolean;
};

const initialState: AuthState = {
  isLoggedIn: false,
  showLoginScreen: false,
};

const authSlice = createSlice({
  initialState,
  name: 'auth',
  reducers: {
    login(state) {
      state.isLoggedIn = true;
    },
    logout(state) {
      state.isLoggedIn = false;
    },
    openLoginModal(state) {
      state.showLoginScreen = true;
    },
    closeLoginModal(state) {
      state.showLoginScreen = false;
    },
  },
});

// Exporting Auth actions (for dipatching actions) and reducer (for use in configure store file)
export const { reducer: authReducers, actions: authActions } = authSlice;
