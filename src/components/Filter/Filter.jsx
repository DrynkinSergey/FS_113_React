import { useDispatch } from 'react-redux';
import { changeOption } from '../../redux/optionSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const handleChangeOption = variant => {
    dispatch(changeOption(variant));
  };
  return (
    <div>
      <button onClick={() => handleChangeOption('all')}>All</button>
      <button onClick={() => handleChangeOption('active')}>Active</button>
      <button onClick={() => handleChangeOption('completed')}>Completed</button>
    </div>
  );
};
export default Filter;
