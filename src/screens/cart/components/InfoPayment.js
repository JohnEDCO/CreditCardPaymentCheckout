import {StyleSheet, Text, View} from 'react-native';
import React, {useRef} from 'react';
import ButtonDefault from '../../../components/buttons/ButtonDefault';
import {colors, sizes, Y} from '../../../styles/theme';
import {formatCurrency} from '../../../utils/utils';
import useApp from '../../../store/actions/app';
import BackDropPayment from './BackDropPayment';

const InfoPayment = ({totalAmount, totalItems}) => {
  const {showLoading, hideLoading} = useApp();
  const refRBSheet = useRef();
  return (
    <View style={styles.containerPayment}>
      <View style={styles.contentInfoPayment}>
        <Text style={styles.textInfo1}>Items: </Text>
        <Text style={styles.textInfo2}>{totalItems}</Text>
      </View>
      <View style={styles.contentInfoPayment}>
        <Text style={styles.textInfo1}>Total: </Text>
        <Text style={styles.textInfo2}>{formatCurrency(totalAmount)}</Text>
      </View>
      <ButtonDefault
        disabled={totalItems === 0}
        title="Pay Now"
        onPress={() => refRBSheet.current.open()}
        style={styles.buttonPayment}
        textStyle={styles.textButtonPayment}
      />
      <BackDropPayment refRBSheet={refRBSheet} totalAmount={totalAmount} totalItems={totalItems} />
    </View>
  );
};

const styles = StyleSheet.create({
  containerPayment: {
    position: 'absolute',
    flexDirection: 'column',
    alignItems: 'center',
    bottom: 0,
    width: '100%',
    height: 185,
    borderTopEndRadius: 7,
    borderTopStartRadius: 7,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 17,
    overflow: 'hidden',
  },
  contentInfoPayment: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginTop: 10,
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
  textInfo1: {
    marginBottom: 2,
    fontSize: sizes.medium,
  },
  textInfo2: {
    marginBottom: 2,
    fontWeight: '500',
    fontSize: sizes.medium,
  },
  buttonPayment: {
    width: '50%',
    marginTop: 7,
    backgroundColor: colors.dark,
    borderColor: colors.dark,
  },
  textButtonPayment: {
    color: colors.secondary,
    fontSize: sizes.medium,
  },
});

export default InfoPayment;
