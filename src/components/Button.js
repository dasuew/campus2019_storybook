import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

const Button = ({ children, onClick }) => (
  <button onClick={onClick} className={styles.button} type="button">
    {children}
  </button>
);

Button.displayName = 'Button';
Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};
Button.defaultProps = {
  onClick: () => {},
};

export default Button;
