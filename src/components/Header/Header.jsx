import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn, selectUser } from '../../redux/auth/selectors';
import { logoutThunk } from '../../redux/auth/operations';

const setActiveClass = ({ isActive }) => {
  return clsx(isActive && 'text-red-500');
};

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <header className='flex justify-between p-[20px] bg-slate-700 text-white font-bold text-3xl'>
      <h2>Auth</h2>
      {isLoggedIn && <h2>{user.name}</h2>}
      <nav className='flex gap-3'>
        <NavLink className={setActiveClass} to='/'>
          Home
        </NavLink>
        <NavLink className={setActiveClass} to='/tasks'>
          Tasks
        </NavLink>
        {!isLoggedIn ? (
          <>
            <NavLink className={setActiveClass} to='/login'>
              Login
            </NavLink>
            <NavLink className={setActiveClass} to='/register'>
              Register
            </NavLink>
          </>
        ) : (
          <button onClick={() => dispatch(logoutThunk())} className='btn btn-secondary'>
            Logout
          </button>
        )}
      </nav>
    </header>
  );
};
export default Header;
