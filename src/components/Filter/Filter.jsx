import { useDispatch } from 'react-redux';
import { changeOption } from '../../redux/optionSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const handleChangeOption = variant => {
    dispatch(changeOption(variant));
  };
  return (
    <div className='flex justify-center gap-4 my-2'>
      <button className='btn btn-secondary' onClick={() => handleChangeOption('all')}>
        All
      </button>
      <button className='btn btn-secondary' onClick={() => handleChangeOption('active')}>
        Active
      </button>
      <button className='btn btn-secondary' onClick={() => handleChangeOption('completed')}>
        Completed
      </button>
    </div>
  );
};
export default Filter;
