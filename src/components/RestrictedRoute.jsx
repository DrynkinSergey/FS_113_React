import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../redux/auth/selectors';
import { Navigate } from 'react-router-dom';

const RestrictedRoute = ({ component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  if (isLoggedIn) {
    // toast.error('You already logged in, but this info is not for you!');
    return <Navigate to={redirectTo} />;
  }
  return component;
};
export default RestrictedRoute;
