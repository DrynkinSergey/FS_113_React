import { Outlet } from 'react-router-dom';
import Header from './Header/Header';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
export default SharedLayout;
