import { useSelector } from 'react-redux';

const Header = () => {
  const name = useSelector(state => state.counter.name);
  return (
    <header className='flex justify-between p-[20px] bg-slate-700 text-white font-bold text-3xl'>
      <h2>Redux Async</h2>
      <h2>Name: {name}</h2>
    </header>
  );
};
export default Header;
