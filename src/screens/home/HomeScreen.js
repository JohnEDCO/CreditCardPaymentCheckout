import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import CustomButton from '../../components/buttons/ButtonDefault';
import {colors, sizes, X} from '../../styles/theme';
import {products} from '../../utils/staticData';
import {formatCurrency} from '../../utils/utils';
import ItemCard from './components/ItemCard';

const HomeScreen = () => {  
  return (
    <ScrollView>
      <View style={styles.container}>
        {products.map((product, index) => (
          <ItemCard product={product} key={index}/>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    marginBottom: 70,
    backgroundColor: colors.light,
  },
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
});

export default HomeScreen;
