import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  user: {
    email: null,
    name: null,
  },
  token: null,
  isLoggedIn: false,
};

const slice = createSlice({
  name: 'auth',
  initialState,
});

export const authReducer = slice.reducer;
