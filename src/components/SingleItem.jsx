const SingleItem = ({ item, editItem, removeItem }) => {
  const { name, completed, id } = item;
  return (
    <article className='single-item'>
      <input
        type='checkbox'
        checked={completed}
        onChange={() => {
          console.log('in here');
          editItem(id);
        }}
      />
      <p
        style={{
          textTransform: 'capitalize',
          textDecoration: completed && 'line-through',
        }}
      >
        {name}
      </p>
      <button
        className='btn remove-btn'
        type='submit'
        onClick={() => removeItem(id)}
      >
        Delete
      </button>
    </article>
  );
};

export default SingleItem;
