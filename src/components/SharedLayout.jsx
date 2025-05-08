import { Outlet } from 'react-router-dom';
import Header from './Header/Header';

const SharedLayout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      {/* <Outlet /> */}
    </div>
  );
};
export default SharedLayout;
