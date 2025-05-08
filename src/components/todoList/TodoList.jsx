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
      text: data.text,
    };
    dispatch(addTodoThunk(newtodo));
  };

  const handleChangeQuery = query => {
    dispatch(changeFilter(query));
  };

  // const items = getFilteredDataByOption();
  // const filteredData = items.filter(item => item.todo.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div className='relative'>
      <AddForm handleAddTodo={handleAddTodo} />
      {/* <SearchBar handleChangeQuery={handleChangeQuery} /> */}
      <div className='flex justify-center items-center'>
        <input className='input input-primary  ' type='text' placeholder='Query for search' onChange={e => handleChangeQuery(e.target.value)} />
      </div>
      <Filter />
      <h2 className='text-2xl  font-bold text-center underline'>Your uncompleted tasks: {uncompletedTodos}</h2>
      <ul className='grid grid-cols-3 gap-5'>
        {todos.map((item, idx) => (
          <li key={item.id}>
            <div className='card bg-base  w-full shadow-xl '>
              <div className='card-body'>
                <div className='card-title flex gap-2'>
                  <input
                    className='checkbox checkbox-primary'
                    onChange={() => dispatch(editTodo({ ...item, isCompleted: !item.isCompleted }))}
                    type='checkbox'
                    checked={item.isCompleted}
                  />
                  <h2> {item.text}</h2>
                </div>
                <div className='card-actions justify-end flex gap-2'>
                  <button className='btn btn-ghost' onClick={() => dispatch(editTodo({ ...item, text: 'REDUX THE BEST TECHNOLOGY' }))}>
                    Edit title
                  </button>
                  <button className='btn btn-secondary' onClick={() => dispatch(deleteTodoThunk(item.id))}>
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
      {loading && <span className='loading loading-dots loading-xl absolute right-2 top-2'></span>}
      {error && <h2>Server is dead...</h2>}
    </div>
  );
};
export default TodoList;
