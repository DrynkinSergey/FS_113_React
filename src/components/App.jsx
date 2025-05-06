import { useDispatch } from 'react-redux';
import Header from './Header/Header';
import TodoList from './todoList/TodoList';
import { useEffect } from 'react';
import { fetchDataThunk } from '../redux/operations';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDataThunk());
  }, [dispatch]);
  return (
    <>
      <Header />
      <TodoList />
    </>
  );
};
export default App;
