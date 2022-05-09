import rocketReducer from '../Redux/Rockets/Rocket';
import { createStore, applyMiddleware } from 'redux';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk'
import logger from 'redux-logger';

const rootReducer = combineReducers({
  Rockets: rocketReducer,
});

const store = createStore(
  rootReducer, applyMiddleware(thunk, logger)
);

export default store;