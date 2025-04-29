import { createSlice } from '@reduxjs/toolkit';
import { fetchDataThunk } from './operations';
//https://6811025927f2fdac2413a9fb.mockapi.io/tasks
const initialState = {
  todos: [],
  isLoading: false,
  error: null,
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
    dataFulfilledOperation: (state, action) => {
      state.todos = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchDataThunk.fulfilled, (state, action) => {
        state.todos = action.payload;
      })
      .addCase(fetchDataThunk.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const todosReducer = slice.reducer;
export const { addTodo, deleteTodo, changeTitle, dataFulfilledOperation, setLoading, setError } = slice.actions;
