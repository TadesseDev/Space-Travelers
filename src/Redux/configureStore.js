import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import missionsReducer from './Missions/Mission';
import rocketReducer from './Rockets/Rocket';

const rootReducer = combineReducers({
  Rockets: rocketReducer,
  Missions: missionsReducer,
});

const store = createStore(
  rootReducer, applyMiddleware(thunk, logger),
);

export default store;
