import SingleItem from './SingleItem';

const Items = ({ items, editItem, removeItem }) => {
  return (
    <section className='items'>
      {items.map((item) => {
        return (
          <SingleItem
            key={item.id}
            item={item}
            editItem={editItem}
            removeItem={removeItem}
          />
        );
      })}
    </section>
  );
};

export default Items;
