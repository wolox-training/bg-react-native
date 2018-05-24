import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';

function Square({ onClick, value }) {
  return (
    <button className={styles.square} onClick={onClick}>
      {value}
    </button>
  );
}

Square.PropTypes = {
  onClick: PropTypes.element,
  value: PropTypes.oneOf(['G', 'O'])
};

export default Square;
