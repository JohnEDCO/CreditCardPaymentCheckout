import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BottomTab from './BottomTab';

const Navigator = () => {
  return (
    <NavigationContainer>
      <BottomTab />
    </NavigationContainer>
  );
};

export default Navigator;