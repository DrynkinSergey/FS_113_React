import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from './counterSlice';

console.log(import.meta.env);

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  devTools: import.meta.env.MODE === 'development',
});
