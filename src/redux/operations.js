import axios from 'axios';
import { dataFulfilledOperation, setError, setLoading } from './todosSlice';
import { createAsyncThunk } from '@reduxjs/toolkit';
axios.defaults.baseURL = 'https://6811025927f2fdac2413a9fb.mockapi.io';

// export const fetchDataThunk = () => async dispatch => {
//   try {
//     dispatch(setLoading(true));
//     const response = await axios.get('/tasks');
//     dispatch(dataFulfilledOperation(response.data));
//     dispatch(setLoading(false));
//   } catch (error) {
//     dispatch(setError(error));
//   }
// };

export const fetchDataThunk = createAsyncThunk('fetchTodos', async (_, thunkAPI) => {
  try {
    const response = await axios.get(`/tasks`);
    return response.data;
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue(error.message);
    // return error.message;
  }
});

export const deleteTodoThunk = createAsyncThunk('deleteTodo', async (id, thunkAPI) => {
  try {
    await axios.delete(`/tasks/${id}`);
    return id;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const addTodoThunk = createAsyncThunk('addTodo', async (body, thunkAPI) => {
  try {
    const response = await axios.post(`/tasks`, body);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const editTodo = createAsyncThunk('editTodo', async (body, { rejectWithValue }) => {
  try {
    const response = await axios.put(`/tasks/${body.id}`, body);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

// put patch
