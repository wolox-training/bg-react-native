import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import store from './redux/store';
import AppRoutes from './config/routes'

ReactDOM.render(
  <Provider store={store}>
      <AppRoutes/>
  </Provider>, document.getElementById('root'));

registerServiceWorker();
