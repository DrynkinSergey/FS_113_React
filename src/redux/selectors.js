import { createSelector } from '@reduxjs/toolkit';

export const selectTodos = state => state.todolist.todos;
export const selectFilter = state => state.filter.filter;
export const selectError = state => state.todolist.error;

export const selectIsLoading = state => state.todolist.isLoading;

export const selectOption = state => state.option.option;

export const selectFilteredTodosByOption = state => {
  const option = selectOption(state);
  const todos = selectTodos(state);
  console.log('FILTER LOG');

  switch (option) {
    case 'active':
      return todos.filter(item => !item.isCompleted);
    case 'completed':
      return todos.filter(item => item.isCompleted);
    default:
      return todos;
  }
};

export const selectFilteredTodosByOptionMemo = createSelector([selectOption, selectTodos], (option, todos) => {
  console.log('FILTER LOG');

  switch (option) {
    case 'active':
      return todos.filter(item => !item.isCompleted);
    case 'completed':
      return todos.filter(item => item.isCompleted);
    default:
      return todos;
  }
});

export const selectUncompletedTodosMemo = createSelector([selectTodos], todos => {
  console.log('UNCOMPLETED LOG');
  return todos.reduce((total, curr) => (curr.isCompleted ? total : total + 1), 0);
});

export const selectUncompletedTodos = state => {
  const todos = selectTodos(state);
  console.log('UNCOMPLETED LOG');
  return todos.reduce((total, curr) => (curr.isCompleted ? total : total + 1), 0);
};
