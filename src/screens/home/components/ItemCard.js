import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import CustomButton from '../../../components/buttons/ButtonDefault';
import {colors, sizes, X} from '../../../styles/theme';
import {formatCurrency} from '../../../utils/utils';
import useHome from '../../../store/actions/home';

const ItemCard = ({product}) => {
  const { addItemToCart, removeItemFromCart } = useHome();

  const addItemToCart1 = () => {
    addItemToCart(product);
  };
  return (
    <TouchableOpacity activeOpacity={1} style={styles.containerProduct}>
      <View style={styles.containerImage}>
        <Image source={product.image} style={styles.image} />
      </View>
      <Text
        numberOfLines={1}
        ellipsizeMode="tail"
        style={styles.textNameProduct}>
        {product.name}
      </Text>
      <Text style={styles.textPriceProduct}>
        {formatCurrency(product.price)}
      </Text>
      <Text
        numberOfLines={2}
        ellipsizeMode="tail"
        style={styles.textDescription}>
        {product.description}
      </Text>
      <CustomButton
        title="Add to Car"
        onPress={()=> {addItemToCart1(product)}}
        style={styles.buttonCard}
        textStyle={styles.textButtonCard}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  containerProduct: {
    justifyContent: 'space-evenly',
    width: X * 0.45,
    height: 280,
    margin: 5,
    padding: 5,
    backgroundColor: colors.light,
    borderRadius: 7,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    overflow: 'hidden',
  },
  containerImage: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    height: 150,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  textNameProduct: {
    fontWeight: 'semibold',
    paddingHorizontal: 7,
  },
  textPriceProduct: {
    paddingHorizontal: 7,
    fontSize: sizes.small + 1,
    fontWeight: '500',
    color: colors.dark,
    borderRadius: 12,
  },
  textDescription: {
    color: colors.lightGrey,
    paddingHorizontal: 7,
  },
  buttonCard: {
    width: 120,
    height: 27,
    alignSelf: 'center',
    backgroundColor: colors.secondary,
    color: colors.dark,
  },
  textButtonCard: {
    color: colors.dark,
    fontWeight: '300',
    fontSize: sizes.small + 1,
    textAlign: 'center',
  },
});
export default ItemCard;
