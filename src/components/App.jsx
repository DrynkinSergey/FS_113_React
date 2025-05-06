import { useDispatch } from 'react-redux';
import Header from './Header/Header';
import TodoList from './todoList/TodoList';
import { useEffect } from 'react';
import { fetchDataThunk } from '../redux/operations';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Tasks from '../pages/Tasks';
import NotFound from '../pages/NotFound';
import SharedLayout from './SharedLayout';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDataThunk());
  }, [dispatch]);
  return (
    <>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path='tasks' element={<Tasks />} />
        </Route>
        <Route path='*' element={<NotFound />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </>
  );
};
export default App;
