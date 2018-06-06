import { createStore, combineReducers,applyMiddleware } from 'redux';
import { reducer as formReducer } from 'redux-form';
import {reducer} from './game/reducer';
import {reducerLogin} from './login/reducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  reducer,
  reducerLogin,
  form: formReducer
});

export default createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
);
