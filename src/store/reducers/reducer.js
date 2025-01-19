import { combineReducers } from 'redux';
import carReducer from './cart';
import appReducer from './app';

const rootReducer = combineReducers({
  car: carReducer,
  app: appReducer,
});

export default rootReducer;