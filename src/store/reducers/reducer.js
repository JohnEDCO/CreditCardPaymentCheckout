import { combineReducers } from 'redux';
import carReducer from './cart';
import appReducer from './app';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer } from 'redux-persist';

const persistConfig = {
  key: 'car',
  storage: AsyncStorage, // Usamos AsyncStorage para persistir el estado
};

const persistedReducer = persistReducer(persistConfig, carReducer);

const rootReducer = combineReducers({
  car: persistedReducer,
  app: appReducer,
});

export default rootReducer;