import { createStore, applyMiddleware, compose } from 'redux';
import combineReducer from './reducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const middleware = [thunk, logger];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combineReducer,
  composeEnhancers(applyMiddleware(...middleware))
);

export default store;
