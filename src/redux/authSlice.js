import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  isAuthenticated: false,
  user: null,
  loading: false,
  error: null,
  token: null
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    loginSuccess: (state, action) => {
      state.isAuthenticated = true;
      state.token = action.payload;
      state.loading = false;
      state.error = null;
    },
    loginFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logout } = authSlice.actions;

export const loginAsync = (username, password) => async (dispatch) => {
  dispatch(loginStart());
  try {

    const response = await axios.post('https://api.abysscheats.net/reseller/login', { username, password });

    dispatch(loginSuccess(response.data));

  } catch (error) {
    dispatch(loginFailure(error.message));
  }
};

export const selectAuth = (state) => state.auth;

export default authSlice.reducer;
