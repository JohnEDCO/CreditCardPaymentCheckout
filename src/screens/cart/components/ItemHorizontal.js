import React from 'react';
import {StyleSheet, Text, View, Image, Button} from 'react-native';
import {formatCurrency} from '../../../utils/utils';
import {colors, sizes} from '../../../styles/theme';
import ButtonDefault from '../../../components/buttons/ButtonDefault';
import useHome from '../../../store/actions/home';

const ItemHorizontal = ({product}) => {
  const {addItemToCart, removeItemFromCart, removeAllItemFromCart} = useHome();
  return (
    <View style={styles.container}>
      <View style={styles.containerImage}>
        <Image source={product.image} style={styles.image} />
      </View>
      <View style={styles.contentInfoItem}>
        <Text style={styles.textInfo1}>{product.name}</Text>
        <Text style={styles.textInfo1}>{formatCurrency(product.price)}</Text>
        <View style={styles.containerButtons}>
          <ButtonDefault
            title="-"
            variant="tertiary"
            onPress={() => {
              removeItemFromCart(product);
            }}
            style={styles.buttonMinusMore}
            textStyle={styles.textButtonMinusMore}
          />
          <Text style={styles.textInfo2}>{product.units}</Text>
          <ButtonDefault
            title="+"
            variant="tertiary"
            onPress={() => {
              addItemToCart(product);
            }}
            style={styles.buttonMinusMore}
            textStyle={styles.textButtonMinusMore}
          />
        </View>
        <ButtonDefault
          title="delete"
          onPress={() => {
            removeAllItemFromCart(product);
          }}
          style={styles.buttonRemove}
          textStyle={styles.textButtonRemove}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '95%',
    flexDirection: 'row',
    borderRadius: 7,
    padding: 5,
    backgroundColor: colors.light,
    margin: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  contentInfoItem: {
    flex: 1,
    flexDirection: 'column',
    width: 'auto',
    backgroundColor: colors.light,
    marginLeft: 5,
  },
  containerImage: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 90,
    width: 90,
    backgroundColor: 'transparent',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  textInfo1: {
    paddingVertical: 2,
    fontSize: sizes.small,
  },
  textInfo2: {
    fontSize: sizes.small,
    paddingHorizontal: 8,
    marginHorizontal: 5,
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
  buttonMinusMore: {
    borderRadius: 5,
    height: 'auto',
    padding: 2,
    paddingHorizontal: 7,
  },
  textButtonMinusMore: {
    fontSize: sizes.medium,
    fontWeight: 'bold',
  },
  containerButtons: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonRemove: {
    alignSelf: 'flex-end',
    height: 25,
    width: 80,
    marginTop: 5,
    paddingHorizontal: 0,
    backgroundColor: colors.secondary,
  },
  textButtonRemove: {
    color: colors.dark,
    fontSize: sizes.small - 2,
    fontWeight: 'bold',
  }
});

export default ItemHorizontal;
