import React from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {colors, sizes} from '../../styles/theme';
import useApp from '../../store/actions/app';
import {decryptData} from '../../utils/utils';
import {useSelector} from 'react-redux';
import {formatCurrency} from '../../utils/utils';
import Separator from '../separators/Separator';
const ModalReceipt = ({
  visible,
  title,
  contentStyle = {},
  animationType = 'none',
}) => {
  const {hideModalInfo} = useApp();
  const {transactions} = useSelector(state => state.payment);
  const dataLastTransaction =
    transactions.length > 0
      ? JSON.parse(decryptData(transactions.at(-1)))
      : null;

  return (
    <Modal visible={visible} transparent animationType={animationType}>
      <View style={styles.overlay}>
        <View style={[styles.modal, contentStyle]}>
          <ScrollView style={{width: '100%', height:'auto'}}>
            {title && <Text style={styles.title}>{title}</Text>}
            <Separator />
            {dataLastTransaction !== null &&
              dataLastTransaction.items.map((item, index) => (
                <View key={index} style={styles.contentItem}>
                  <Text style={{backgroundColor: 'white'}}>{item.name}</Text>
                  <Text style={{backgroundColor: 'white'}}>{item.units}</Text>
                  <Text style={styles.textItem}>
                    {formatCurrency(item.price)}
                  </Text>
                </View>
              ))}
            <Separator />

            {dataLastTransaction !== null && (
              <View style={styles.containerTotalTransaction}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '100%',
                  }}>
                  <Text style={{backgroundColor: 'white', fontWeight: 'bold'}}>
                    Total
                  </Text>
                  <Text style={styles.textItem}>
                    {dataLastTransaction.totalItems}
                  </Text>
                  <Text style={styles.textItem}>
                    {formatCurrency(dataLastTransaction.totalAmount)}
                  </Text>
                </View>
                <Text
                  style={{width: '100%', marginTop: 10, fontWeight: 'bold'}}>
                  Status Transaction: {dataLastTransaction.status ? 'Success' : 'Not Success'}
                </Text>
              </View>
            )}
            <TouchableOpacity
              onPress={hideModalInfo}
              style={styles.closeButton}>
              <Text style={styles.closeText}>Close</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '95%',
    maxHeight: '95%',
    padding: 20,
    backgroundColor: colors.light,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    marginBottom: 15,
    color: colors.dark,
    textAlign: 'centelr',
    fontSize: sizes.medium,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
  },
  content: {
    color: colors.dark,
    textAlign: 'center',
    fontSize: sizes.small,
    fontWeight: '400',
  },
  closeButton: {
    alignItems: 'center',
    alignSelf: 'flex-end',
    width: 100,
    padding: 7,
    marginTop: 15,
    backgroundColor: colors.dark,
    borderRadius: 17,
  },
  closeText: {
    color: colors.secondary,
    fontWeight: 'condensed',
  },
  contentItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: 10,
    backgroundColor: 'white',
  },
  textItem: {
    fontSize: sizes.small,
    color: colors.dark,
  },
  containerTotalTransaction: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: 10,
  },
});

export default ModalReceipt;
