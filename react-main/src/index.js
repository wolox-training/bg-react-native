import React from 'react';
import ReactDOM from 'react-dom';

import styles from './scss/index.scss';
import registerServiceWorker from './registerServiceWorker';

import Game from '~components/Game';

import { Provider } from 'react-redux'
import configureStore from '/redux/toDraw/store';


const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <Game className={styles} />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
