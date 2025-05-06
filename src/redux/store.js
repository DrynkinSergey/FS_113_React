import { configureStore } from '@reduxjs/toolkit';
import { todosReducer } from './todosSlice';
import { filterReducer } from './filterSlice';
import { optionReducer } from './optionSlice';
import { authReducer } from './auth/slice';
// ('https://task-manager-api.goit.global');

export const store = configureStore({
  reducer: {
    todolist: todosReducer,
    filter: filterReducer,
    option: optionReducer,
    auth: authReducer,
  },
  devTools: import.meta.env.MODE === 'development',
});

// CRUD
// C - Create // post
// R - Read // get
// U - Update // patch/put
// D - Delete // delete
