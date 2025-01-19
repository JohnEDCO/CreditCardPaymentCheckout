import { combineReducers } from 'redux';
import carReducer from './carReducer';
import appReducer from './app';

const rootReducer = combineReducers({
  car: carReducer,
  app: appReducer,
});

export default rootReducer;