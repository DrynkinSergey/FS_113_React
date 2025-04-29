import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from './counterSlice';
import { todosReducer } from './todosSlice';
import { filterReducer } from './filterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todolist: todosReducer,
    filter: filterReducer,
  },
  devTools: import.meta.env.MODE === 'development',
});

// CRUD
// C - Create // post
// R - Read // get
// U - Update // patch/put
// D - Delete // delete
