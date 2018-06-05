import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import {reducer} from './game/reducer';
import {reducerLogin} from './login/reducer';

const rootReducer = combineReducers({
  reducer,
  reducerLogin,
  form: formReducer
})

export default createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
