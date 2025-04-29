import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { addTodoThunk, deleteTodoThunk, editTodo, fetchDataThunk } from './operations';
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

      .addCase(deleteTodoThunk.fulfilled, (state, action) => {
        state.todos = state.todos.filter(item => item.id !== action.payload);
      })
      .addCase(addTodoThunk.fulfilled, (state, action) => {
        state.todos.push(action.payload);
      })
      .addCase(fetchDataThunk.fulfilled, (state, action) => {
        state.todos = action.payload;
      })
      .addCase(editTodo.fulfilled, (state, action) => {
        state.todos = state.todos.map(item => (item.id === action.payload.id ? action.payload : item));
      })
      .addMatcher(isAnyOf(editTodo.rejected, addTodoThunk.rejected, deleteTodoThunk.rejected, fetchDataThunk.rejected), (state, action) => {
        state.error = action.payload;
      })
      .addMatcher(isAnyOf(editTodo.pending, addTodoThunk.pending, deleteTodoThunk.pending, fetchDataThunk.pending), (state, action) => {
        state.error = null;
        state.isLoading = true;
      })
      .addMatcher(isAnyOf(editTodo.fulfilled, addTodoThunk.fulfilled, deleteTodoThunk.fulfilled, fetchDataThunk.fulfilled), (state, action) => {
        state.isLoading = false;
      });
  },
});

export const todosReducer = slice.reducer;
export const { addTodo, deleteTodo, changeTitle, dataFulfilledOperation, setLoading, setError } = slice.actions;
