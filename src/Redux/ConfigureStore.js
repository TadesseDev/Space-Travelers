import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import missions from './Missions/Mission';

const rootReducer = combineReducers({
  missions,
});

const middleware = applyMiddleware(thunk, logger);
const store = createStore(rootReducer, middleware);

export default store;