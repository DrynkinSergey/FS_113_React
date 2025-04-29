import { useDispatch, useSelector } from 'react-redux';
import AddForm from './AddForm';
import { addTodo, changeTitle, deleteTodo } from '../../redux/todosSlice';
import { nanoid } from '@reduxjs/toolkit';
import SearchBar from '../SearchBar/SearchBar';
import { changeFilter } from '../../redux/filterSlice';
import { deleteTodoThunk } from '../../redux/operations';

const TodoList = () => {
  const todos = useSelector(state => state.todolist.todos);
  const filter = useSelector(state => state.filter.filter);
  const error = useSelector(state => state.todolist.error);
  const dispatch = useDispatch();
  const handleAddTodo = data => {
    const newtodo = {
      id: nanoid(),
      todo: data.todo,
    };
    dispatch(addTodo(newtodo));
  };

  const handleChangeQuery = query => {
    dispatch(changeFilter(query));
  };

  const filteredData = todos.filter(item => item.todo.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div>
      <AddForm handleAddTodo={handleAddTodo} />
      {/* <SearchBar handleChangeQuery={handleChangeQuery} /> */}
      <input type='text' placeholder='Query for search' onChange={e => handleChangeQuery(e.target.value)} />
      <ul>
        {filteredData.map(item => (
          <li key={item.id}>
            <h2>{item.todo}</h2>
            <button onClick={() => dispatch(changeTitle({ ...item, todo: 'REDUX THE BEST TECHNOLOGY' }))}>Edit title</button>
            <button onClick={() => dispatch(deleteTodoThunk(item.id))}>Delete</button>
          </li>
        ))}
      </ul>
      {error && <h2>Server is dead...</h2>}
    </div>
  );
};
export default TodoList;
