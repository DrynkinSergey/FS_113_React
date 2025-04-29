import { useSelector } from 'react-redux';

const Header = () => {
  const name = useSelector(state => state.counter.name);
  return (
    <header>
      <h2>Redux Async</h2>
      <h2>Name: {name}</h2>
    </header>
  );
};
export default Header;
