import { createSlice } from '@reduxjs/toolkit';

// 1. Даємо рамки в яких працює слайс. Тільки цей стан!
const initialState = {
  counter: 1,
  step: 1,
};

// 2. Викликаємо createSlice функцію, котру треба налаштувати. Вона поверне нам обʼєкт з екшенами та редьюсером
const slice = createSlice({
  // 3. Імʼя слайсу (потрібно для девтулз)
  name: 'counter',
  // 4. Передаємо початковий стан (можна описати прям тут)
  initialState,
  // 5. Створюємо редьюсери (міні функції, котрі працюють з станом. ). В редьюсерах будуть описані екшени.
  reducers: {
    increment: (state, action) => {
      // state.counter = state.counter + state.step;
      state.counter += state.step;
    },
    decrement: (state, action) => {
      state.counter -= state.step;
    },
    reset: () => initialState,
    changeStep: (state, action) => {
      state.step = action.payload;
    },
  },
});

// 5. Експортуємо всі екшени (функції з редьюсера) до зовнішнього світу
export const { increment, decrement, reset, changeStep } = slice.actions;
// 6. Повертаємо для стору редьюсер з слайсу.
export const counterReducer = slice.reducer;
