import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BottomTab from './BottomTab';
import {useSelector} from 'react-redux';
import ModalLoading from '../components/modals/ModalLoading';
import ModalDefault from '../components/modals/ModalDefault';
import ModalReceipt
 from '../components/modals/ModalReceipt';
const Navigator = () => {
  const {loading, modalInfo} = useSelector(state => state.app);
  return (
    <NavigationContainer>
      <BottomTab />
      <ModalLoading visible={loading} />
      <ModalDefault
        visible={modalInfo.visible=='default'}
        title={modalInfo.title}
        animationType="slide"
        content={modalInfo.content}
      />
      <ModalReceipt
        visible={modalInfo.visible=='receipt'}
        title={modalInfo.title}
        content={modalInfo.content}
        data={modalInfo.data}
      />
    </NavigationContainer>
  );
};

export default Navigator;
