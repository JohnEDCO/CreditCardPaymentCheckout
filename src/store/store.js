import {createStore} from 'redux';
import rootReducer from './reducers/reducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';

const store = createStore(rootReducer);
const persistor = persistStore(store);

export { store, persistor };
