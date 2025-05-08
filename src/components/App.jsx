import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Tasks from '../pages/Tasks';
import NotFound from '../pages/NotFound';
import SharedLayout from './SharedLayout';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { refreshThunk } from '../redux/auth/operations';
import { selectIsRefreshing } from '../redux/auth/selectors';
import PrivateRoute from './PrivateRoute';
import RestrictedRoute from './RestrictedRoute';

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);
  return isRefreshing ? null : (
    <>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<RestrictedRoute component={<Home />} redirectTo='/tasks' />} />
          <Route
            path='tasks'
            element={
              <PrivateRoute>
                <Tasks />
              </PrivateRoute>
            }
          />
        </Route>
        <Route path='*' element={<NotFound />} />
        <Route path='/login' element={<RestrictedRoute component={<Login />} redirectTo='/tasks' />} />

        <Route path='/register' element={<Register />} />
      </Routes>
    </>
  );
};
export default App;
