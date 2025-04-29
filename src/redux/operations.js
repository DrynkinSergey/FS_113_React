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

export const fetchDataThunk = createAsyncThunk('fetchTodos', async (body, thunkAPI) => {
  try {
    const response = await axios.get('/tasks');
    return response.data;
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue(error.message);
    // return error.message;
  }
});
