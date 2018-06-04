import React from 'react';
import ReactDOM from 'react-dom';

import App from 'app/components/App/index';
import { Provider } from 'react-redux';
import store from './redux/store';

import styles from './scss/index.scss';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={store}>
        <App className={styles} />
    </Provider>, document.getElementById('root'));
registerServiceWorker();
