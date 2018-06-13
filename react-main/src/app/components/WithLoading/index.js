import React, { Fragment } from 'react';
import { RingLoader } from 'react-spinners';
import styles from './styles.scss';

function WithLoading(WrappedComponent) {
  return function WihLoadingComponent({ isLoading, ...props }) {
    return (
      <Fragment>
        <WrappedComponent {...props} />
        <div className={styles.loading}>
          {isLoading &&
          <Fragment>
            <RingLoader />
            <p>Loading...</p>
          </Fragment>
          }
        </div>
      </Fragment>
    )
  }
}

export default WithLoading;
