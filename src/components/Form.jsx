import { useState } from 'react';
import { toast } from 'react-toastify';

const Form = ({ addItem }) => {
  const [item, setItem] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!item) {
      toast.error('Add an item!');
      return;
    }
    addItem(item);
    setItem('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <h4>To Dos</h4>
      <div className='form-control'>
        <input
          className='form-input'
          type='text'
          name='item'
          id='item'
          value={item}
          onChange={(e) => setItem(e.target.value)}
          placeholder={`Add an item eg. 'Buy oranges' `}
        />
        <button className='btn' type='submit'>
          Add item
        </button>
      </div>
    </form>
  );
};

export default Form;
