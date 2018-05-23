import React from 'react';

import styles from './styles.scss';

function Square({onClick, value}) {
  return (
    <button className={styles.square} onClick={onClick}>
      {value}
    </button>
  );
}

export default Square;
