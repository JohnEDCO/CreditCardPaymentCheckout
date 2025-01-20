import React from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import {colors, sizes} from '../../styles/theme';
import Separator from '../separators/Separator';
import {formatCurrency} from '../../utils/utils';
import {iconCart} from '../../utils/staticData';
import useCart from '../../store/actions/cart';

const ModalDetailProduct = ({
  visible,
  product = {},
  setInfoModal,
  contentStyle = {},
  animationType = 'fade',
}) => {
  const {addItemToCart} = useCart();
  return (
    <Modal visible={visible} transparent animationType={animationType}>
      <View style={styles.overlay}>
        <View style={[styles.modal, contentStyle]}>
          <ScrollView
            style={{
              width: '100%',
              height: 'auto',
              backgroundColor: 'transparent',
              padding: 2,
            }}>
            <View style={styles.containerImage}>
              <Image source={product.image} style={styles.image} />
            </View>
            <View style={styles.containerPrice}>
              <TouchableOpacity
                style={styles.buttonCart}
                onPress={() => {
                  addItemToCart(product);
                }}>
                <Image
                  source={iconCart}
                  style={{
                    width: 25,
                    height: 25,
                  }}
                  resizeMode="contain"
                />
              </TouchableOpacity>

              <Text style={styles.price}>{formatCurrency(product.price)}</Text>
            </View>
            <View style={styles.containerIncludes}>
              <Text style={styles.title}>{product.name}</Text>
              <Separator />
              <Text style={styles.textDescription}>{product.description}</Text>
            </View>
            <View style={styles.containerIncludes}>
              <Text style={styles.title}>What's included</Text>
              <Separator />
              {Object.keys(product).length > 0 &&
                product.includesDescription.map((item, index) => (
                  <Text key={index} style={styles.textDescription}>
                    {index + 1}. {item}
                  </Text>
                ))}
            </View>
            <TouchableOpacity
              onPress={() => setInfoModal({visible: false, product: {}})}
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
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modal: {
    flex: 1,
    width: '95%',
    maxHeight: '95%',
    padding: 10,
    borderRadius: 7,
    backgroundColor: colors.light,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    marginBottom: 15,
    color: colors.dark,
    textAlign: 'left',
    fontSize: sizes.medium,
    fontWeight: 'bold',
  },
  content: {
    color: colors.dark,
    textAlign: 'center',
    fontSize: sizes.small,
    fontWeight: '400',
  },
  closeButton: {
    alignItems: 'center',
    alignSelf: 'center',
    width: 100,
    padding: 7,
    marginTop: 15,
    marginBottom: 15,
    backgroundColor: colors.dark,
    borderRadius: 17,
  },
  closeText: {
    color: colors.secondary,
    fontWeight: 'condensed',
  },
  containerImage: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    height: 210,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  containerPrice: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  price: {
    marginRight: 5,
    paddingHorizontal: 9,
    paddingVertical: 5,
    backgroundColor: colors.secondary,
    borderRadius: 12,
    fontSize: sizes.medium,
    color: colors.dark,
    textAlign: 'right',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  containerIncludes: {
    width: '100%',
    padding: 10,
    marginTop: 10,
    backgroundColor: 'white',
  },
  textDescription: {
    fontSize: sizes.small + 1,
    color: colors.dark,
    fontWeight: '300',
  },
  buttonCart: {
    backgroundColor: colors.primary,
    marginRight: 5,
    paddingHorizontal: 10,
    paddingVertical: 2.5,
    borderRadius: 12,
  },
});

export default ModalDetailProduct;
