import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [],
};

const slice = createSlice({
  name: 'todolist',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter(item => item.id !== action.payload);
    },
    changeTitle: (state, action) => {
      state.todos = state.todos.map(item => (item.id === action.payload.id ? action.payload : item));
    },
  },
});

export const todosReducer = slice.reducer;
export const { addTodo, deleteTodo, changeTitle } = slice.actions;
