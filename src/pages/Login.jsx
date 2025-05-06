import { useSelector } from 'react-redux';
import LoginForm from '../components/LoginForm';
import { selectIsLoggedIn } from '../redux/auth/selectors';
import { Navigate } from 'react-router-dom';

const Login = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  if (isLoggedIn) {
    return <Navigate to='/' />;
  }
  return (
    <div>
      <LoginForm />
    </div>
  );
};
export default Login;
