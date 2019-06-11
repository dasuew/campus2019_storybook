import React, { useState } from 'react';
import PropTypes from 'prop-types';

import styles from './List.module.css';

const List = ({ content, title, initialItems, onClick }) => {
  const [value, setValue] = useState('');
  const [items, setItems] = useState(initialItems);

  const handleChange = event => {
    setValue(event.target.value);
  };

  const handleSubmit = event => {
    if (value) {
      setItems(items.concat(value));
    }

    setValue('');

    event.preventDefault();
  };

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      {items.map(item => <div>{item}</div>)}
      <form onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={handleChange} />
        <button type="submit">Add</button>
      </form>
    </section>
  );
};

List.defaultProps = {};

List.propTypes = {
  /** The title of a card */
  title: PropTypes.string,
  /** The content of a card */
  content: PropTypes.string,
};

export default List;
