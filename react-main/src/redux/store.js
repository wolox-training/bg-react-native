import { createStore, combineReducers,applyMiddleware } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { reducer } from './game/reducer';
import { reducerLogin } from './login/reducer';
import thunk from 'redux-thunk';
import createHistory from "history/createBrowserHistory";
import { routerMiddleware } from 'react-router-redux';

export const history = createHistory();

const middleware = routerMiddleware(history);

const rootReducer = combineReducers({
  login: reducerLogin,
  game: reducer,
  form: formReducer
});

export default createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk, middleware)
);
