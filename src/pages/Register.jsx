import { useSelector } from 'react-redux';
import RegisterForm from '../components/RegisterForm';
import { selectIsLoggedIn } from '../redux/auth/selectors';
import { Navigate } from 'react-router-dom';

const Register = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  if (isLoggedIn) {
    return <Navigate to='/' />;
  }
  return (
    <div>
      <RegisterForm />
    </div>
  );
};
export default Register;
