import { useState } from 'react';
import Form from './components/Form';
import { nanoid } from 'nanoid';
import Items from './components/Items';
import { ToastContainer, toast } from 'react-toastify';

const setLocalStorage = (items) => {
  localStorage.setItem('list', JSON.stringify(items));
};

const getLocalStorage = () => {
  const list = JSON.parse(localStorage.getItem('list'));
  return list || [];
};

const App = () => {
  const [items, setItems] = useState(getLocalStorage);
  const addItem = (item) => {
    const newItem = {
      name: item,
      completed: false,
      id: nanoid(),
    };
    const updatedItems = [...items, newItem];
    setItems(updatedItems);
    setLocalStorage(updatedItems);
    toast.success('New item added!');
  };

  const removeItem = (itemId) => {
    const newItems = items.filter((item) => item.id !== itemId);
    setItems(newItems);
    setLocalStorage(newItems);
    toast.success('Item removed!');
  };

  const editItem = (itemId) => {
    const editedItems = items.map((item) => {
      if (item.id === itemId) {
        const newItem = { ...item, completed: !item.completed };
        return newItem;
      }
      return item;
    });
    setItems(editedItems);
    setLocalStorage(editedItems);
  };

  return (
    <section className='section-center'>
      <ToastContainer position='top-center' />
      <Form addItem={addItem} />
      <Items items={items} editItem={editItem} removeItem={removeItem} />
    </section>
  );
};

export default App;
