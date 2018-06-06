import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import store from './redux/store';
import Game from 'app/components/Game/index';
import Login from 'app/components/Login/index';
import { syncHistoryWithStore } from 'react-router-redux'
import createHistory from "history/createBrowserHistory"

export const browserHistory = createHistory()

const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Fragment>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/game" component={Game}/>
          <Redirect from='/' to='/game'/>
        </Switch>
      </Fragment>
    </Router>
  </Provider>, document.getElementById('root'));

registerServiceWorker();
