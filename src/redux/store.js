import { configureStore } from '@reduxjs/toolkit';
import { todosReducer } from './todosSlice';
import { filterReducer } from './filterSlice';
import { optionReducer } from './optionSlice';
// ('https://task-manager-api.goit.global');

export const store = configureStore({
  reducer: {
    todolist: todosReducer,
    filter: filterReducer,
    option: optionReducer,
  },
  devTools: import.meta.env.MODE === 'development',
});

// CRUD
// C - Create // post
// R - Read // get
// U - Update // patch/put
// D - Delete // delete
