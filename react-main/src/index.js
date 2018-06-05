import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import store from './redux/store';
import Game from 'app/components/Game/index';
import Login from 'app/components/Login/index';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Fragment>
        <Route exact path="/" component={Login} />
        <Route path="/game" component={Game}/>
      </Fragment>
    </Router>
  </Provider>, document.getElementById('root'));

registerServiceWorker();
