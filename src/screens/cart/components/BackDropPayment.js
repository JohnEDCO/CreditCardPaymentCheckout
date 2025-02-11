import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {colors, sizes, Y} from '../../../styles/theme';
import RBSheet from 'react-native-raw-bottom-sheet';
import Separator from '../../../components/separators/Separator';
import InputDefault from '../../../components/inputs/InputDefault';
import {formatCurrency} from '../../../utils/utils';
import ButtonDefault from '../../../components/buttons/ButtonDefault';
import {paymentService} from '../../../services/paymentService';
import useApp from '../../../store/actions/app';
import userCart from '../../../store/actions/cart';
import usePayment from '../../../store/actions/payment';
import {useNavigation} from '@react-navigation/native';
import {encryptData} from '../../../utils/utils';
import usePaymentForm from '../hooks/usePaymentForm';

const BackDropPayment = ({refRBSheet, totalAmount, totalItems, items}) => {
  const navigation = useNavigation();
  const {showLoading, hideLoading, showModalInfo, resetIconCard} = useApp();
  const {addTransaction} = usePayment();
  const {cleanCar} = userCart();
  const {iconCard} = useSelector(state => state.app);
  const {form, cleanForm, handleChangeText, isValidForm} = usePaymentForm();

  const makePayment = async () => {
    showLoading();    
    await paymentService(form)
      .then(async response => {
        await addTransaction(
          encryptData(
            JSON.stringify({
              ...form,
              status: true,
              totalAmount: totalAmount,
              totalItems: totalItems,
              items: items
            }),
          ),
        );
        showModalInfo({
          title: 'Summary',
          visible: 'receipt',
        });
        cleanForm();
        resetIconCard();
        cleanCar();
        refRBSheet.current.close();
        navigation.navigate('Home');
      })
      .catch(error => {
        showModalInfo({
          title: 'Something went wrong',
          content: error.data.message,
          visible: 'default',
        });
      });
    hideLoading();
  };
  return (
    <RBSheet
      ref={refRBSheet}
      height={Y * 0.9}
      onClose={cleanForm}
      onOpen={cleanForm}
      closeOnPressBack={true}
      draggable
      customStyles={{
        wrapper: {backgroundColor: 'transparent'},
        draggableIcon: {backgroundColor: colors.primary},
        container: styles.containerBackDrop,
      }}
      customModalProps={{animationType: 'slide', statusBarTranslucent: true}}
      customAvoidingViewProps={{enabled: false}}>
      <ScrollView style={styles.containerScrollView}>
        <Text style={styles.textTitle}>Payment method</Text>
        <View style={styles.contentForm}>
          <View style={styles.headerForm}>
            <Text style={styles.titleHeaderForm}>Credit Card</Text>
            <View style={styles.containerImage}>
              <Image style={styles.image} source={iconCard.icon} />
            </View>
          </View>
          <Separator />
          <View style={styles.containerInputs}>
            <InputDefault
              type="card"
              placeholder="Card Number"
              keyboardType="numeric"
              value={form.cardNumber}
              onChangeText={text => {
                handleChangeText('cardNumber', text);
              }}
              maxLength={19}
            />
            <InputDefault
              type="dateCard"
              placeholder="Expiration Date (MM/YY)"
              keyboardType="numeric"
              value={form.expirationDate}
              onChangeText={text => {
                handleChangeText('expirationDate', text);
              }}
              maxLength={5}
            />
            <InputDefault
              placeholder="CVC/CVV"
              keyboardType="numeric"
              value={form.cvc}
              onChangeText={text => {
                handleChangeText('cvc', text);
              }}
              maxLength={3}
            />
            <InputDefault
              placeholder="Card Name"
              keyboardType="default"
              value={form.cardName}
              onChangeText={text => {
                handleChangeText('cardName', text);
              }}
            />
            <InputDefault
              placeholder="Identification Number"
              keyboardType="numeric"
              value={form.identificationNumber}
              onChangeText={text => {
                handleChangeText('identificationNumber', text);
              }}
              maxLength={11}
            />
          </View>
        </View>
        <View style={styles.containerButton}>
          <Separator />
          <View style={styles.infoPayment}>
            <Text>Items</Text>
            <Text>{totalItems}</Text>
          </View>
          <View style={styles.infoPayment}>
            <Text>Total</Text>
            <Text>{formatCurrency(totalAmount)}</Text>
          </View>
          <ButtonDefault
            disabled={!isValidForm()}
            title="Pay"
            onPress={makePayment}
            style={{width: '60%', marginTop: 20}}
            textStyle={{fontSize: sizes.medium}}
          />
        </View>
      </ScrollView>
    </RBSheet>
  );
};

const styles = StyleSheet.create({
  containerBackDrop: {
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 17,
  },
  containerScrollView: {
    flex: 1,
    marginTop: 10,
    padding: 15,
    paddingBottom: 160,
    backgroundColor: 'white',
  },
  textTitle: {
    fontSize: sizes.small + 1,
    color: colors.lightGrey,
  },
  contentForm: {
    flexDirection: 'colum',
    alignItems: 'center',
    marginTop: 10,
    borderRadius: 7,
    backgroundColor: colors.light,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  headerForm: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    width: '100%',
    marginTop: 7,
  },
  titleHeaderForm: {
    fontSize: sizes.small + 1,
    color: colors.dark,
  },
  containerImage: {
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: 40,
    backgroundColor: 'white',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  containerInputs: {
    width: '95%',
    marginTop: 7,
    marginBottom: 7,
    backgroundColor: 'white',
  },
  containerButton: {
    flexDirection: 'column',
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingBottom: 20,
    marginTop: 10,
    backgroundColor: 'transparent',
  },
  infoPayment: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginTop: 10,
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
});

export default BackDropPayment;
