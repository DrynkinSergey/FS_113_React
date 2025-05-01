import { useDispatch, useSelector } from 'react-redux';
import AddForm from './AddForm';
import { addTodo, changeTitle, deleteTodo } from '../../redux/todosSlice';
import { nanoid } from '@reduxjs/toolkit';
import SearchBar from '../SearchBar/SearchBar';
import { changeFilter } from '../../redux/filterSlice';
import { addTodoThunk, deleteTodoThunk, editTodo } from '../../redux/operations';
import {
  selectError,
  selectFilter,
  selectFilteredTodosByOption,
  selectFilteredTodosByOptionMemo,
  selectIsLoading,
  selectOption,
  selectTodos,
  selectUncompletedTodos,
  selectUncompletedTodosMemo,
} from '../../redux/selectors';
import Filter from '../Filter/Filter';

const TodoList = () => {
  const todos = useSelector(selectFilteredTodosByOptionMemo);
  const filter = useSelector(selectFilter);
  const error = useSelector(selectError);
  const loading = useSelector(selectIsLoading);
  const uncompletedTodos = useSelector(selectUncompletedTodosMemo);
  const dispatch = useDispatch();
  const handleAddTodo = data => {
    const newtodo = {
      id: nanoid(),
      todo: data.todo,
    };
    dispatch(addTodoThunk(newtodo));
  };

  const handleChangeQuery = query => {
    dispatch(changeFilter(query));
  };

  // const items = getFilteredDataByOption();
  // const filteredData = items.filter(item => item.todo.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div>
      <AddForm handleAddTodo={handleAddTodo} />
      {/* <SearchBar handleChangeQuery={handleChangeQuery} /> */}
      <input type='text' placeholder='Query for search' onChange={e => handleChangeQuery(e.target.value)} />
      <Filter />
      <h2>Your uncompleted tasks: {uncompletedTodos}</h2>
      <ul>
        {todos.map((item, idx) => (
          <li key={item.id}>
            <input onChange={() => dispatch(editTodo({ ...item, isCompleted: !item.isCompleted }))} type='checkbox' checked={item.isCompleted} />
            <h2>
              {idx + 1}.{item.todo}
            </h2>
            <button onClick={() => dispatch(editTodo({ ...item, todo: 'REDUX THE BEST TECHNOLOGY' }))}>Edit title</button>
            <button onClick={() => dispatch(deleteTodoThunk(item.id))}>Delete</button>
          </li>
        ))}
      </ul>
      {loading && <h2>loading...</h2>}
      {error && <h2>Server is dead...</h2>}
    </div>
  );
};
export default TodoList;
