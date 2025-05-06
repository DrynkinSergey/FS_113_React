import clsx from 'clsx';
import { NavLink } from 'react-router-dom';

const setActiveClass = ({ isActive }) => {
  return clsx(isActive && 'text-red-500');
};

const Header = () => {
  return (
    <header className='flex justify-between p-[20px] bg-slate-700 text-white font-bold text-3xl'>
      <h2>Auth</h2>
      <nav className='flex gap-2'>
        <NavLink className={setActiveClass} to='/'>
          Home
        </NavLink>
        <NavLink className={setActiveClass} to='/tasks'>
          Tasks
        </NavLink>
        <NavLink className={setActiveClass} to='/login'>
          Login
        </NavLink>
        <NavLink className={setActiveClass} to='/register'>
          Register
        </NavLink>
      </nav>
    </header>
  );
};
export default Header;
