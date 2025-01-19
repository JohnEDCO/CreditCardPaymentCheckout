import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BottomTab from './BottomTab';
import {useSelector} from 'react-redux';
import ModalLoading from '../components/modals/ModalLoading';
import ModalDefault from '../components/modals/ModalDefault';
const Navigator = () => {
  const {loading, modalInfo} = useSelector(state => state.app);
  return (
    <NavigationContainer>
      <BottomTab />
      <ModalLoading visible={loading} />
      <ModalDefault
        title={modalInfo.title}
        visible={modalInfo.visible}
        animationType="slide"
        content={modalInfo.content}
      />
    </NavigationContainer>
  );
};

export default Navigator;
