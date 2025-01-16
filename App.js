/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Provider} from 'react-redux';
import store from './src/store/store';
import Navigator from './src/navigation/Navigator';

function App() {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
}

export default App;
