import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Game from '../Game/index';
import Login from '../Login/index';

const App = () => (
    <Router>
        <Fragment>
            <Route exact path="/" component={Login} />
            <Route path="/game" component={Game} />
        </Fragment>
    </Router>
)

export default App