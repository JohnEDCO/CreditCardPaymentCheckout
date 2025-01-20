import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {colors, sizes} from '../../styles/theme';
import ItemHorizontal from './components/ItemHorizontal';
import InfoPayment from './components/InfoPayment';

const CartScreen = () => {
  const {totalAmount, totalItems, items} = useSelector(state => state.car);  
  return (
    <View style={styles.container}>
      <ScrollView style={{width: '100%', minHeight: '100%'}}>
        <View style={styles.contentTitle}>
          <Text style={styles.textTitle}>Your Items</Text>
        </View>
        <View style={styles.containerItems}>
          {items.length > 0 ? (
            items.map((product, index) => (
              <ItemHorizontal product={product} key={index} />
            ))
          ) : (
            <View style={styles.contentEmptyCart}>
              <Text style={styles.textEmptyCart}>The Cart is Empty</Text>
            </View>
          )}
        </View>
      </ScrollView>
      <InfoPayment items={items} totalAmount={totalAmount} totalItems={totalItems} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: '100%',
    backgroundColor: colors.light,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerItems: {
    alignItems: 'center',
    width: '100%',
    minHeight: '100%',
    paddingBottom: 190,
    backgroundColor: colors.light,
  },
  contentTitle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    padding: 5,
    borderBottomEndRadius: 17,
    borderBottomStartRadius: 17,
    backgroundColor: colors.primary,
  },
  textTitle: {
    marginTop: 5,
    fontSize: sizes.large + 1,
    color: colors.light,
  },
  contentEmptyCart: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textEmptyCart: {
    fontSize: sizes.medium,
    color: colors.lightGrey,
  },
});

export default CartScreen;
