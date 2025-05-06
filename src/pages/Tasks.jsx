import { useDispatch } from 'react-redux';
import TodoList from '../components/todoList/TodoList';
import { useEffect } from 'react';
import { fetchDataThunk } from '../redux/operations';

const Tasks = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDataThunk());
  }, [dispatch]);
  return (
    <div>
      <TodoList />
    </div>
  );
};
export default Tasks;
