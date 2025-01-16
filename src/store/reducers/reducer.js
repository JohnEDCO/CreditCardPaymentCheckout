import { combineReducers } from 'redux';
import carReducer from './carReducer';

const rootReducer = combineReducers({
  car: carReducer
});

export default rootReducer;