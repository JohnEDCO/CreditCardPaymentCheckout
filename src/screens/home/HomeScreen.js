import {StyleSheet, View, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../../styles/theme';
import {products} from '../../utils/staticData';
import ItemCard from './components/ItemCard';
import ModalDetailProduct from '../../components/modals/ModalDetailProduct';
const HomeScreen = () => {
  const [infoModal, setInfoModal] = useState({
    visible: false,
    product: {},
  });

  return (
    <ScrollView style={{flex: 1, height: '100%'}}>
      <View style={styles.container}>
        {products.map((product, index) => (
          <ItemCard product={product} key={index} setInfo={setInfoModal} />
        ))}
      </View>
      <ModalDetailProduct
        visible={infoModal.visible}
        setInfoModal={setInfoModal}
        product={infoModal.product}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    paddingBottom: 70,
    backgroundColor: colors.light,
  },
});

export default HomeScreen;
