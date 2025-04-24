import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from './counterSlice';
import { todosReducer } from './todosSlice';
import { filterReducer } from './filterSlice';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

console.log(import.meta.env);

const persistConfig = {
  key: 'todos',
  version: 1,
  storage,
};
const persistConfigFilter = {
  key: 'filter',
  version: 1,
  storage,
};

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todolist: persistReducer(persistConfig, todosReducer),
    filter: persistReducer(persistConfigFilter, filterReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: import.meta.env.MODE === 'development',
});
export let persistor = persistStore(store);
