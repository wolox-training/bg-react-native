import React from 'react';
import ReactDOM from 'react-dom';

import Game from 'app/components/Game/index';
import { Provider } from 'react-redux';
import store from './redux/store';

import styles from './scss/index.scss';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
  <Game className={styles} />
  </Provider>, document.getElementById('root'));
registerServiceWorker();
