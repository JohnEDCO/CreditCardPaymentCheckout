import {StyleSheet, View, ScrollView} from 'react-native';
import React from 'react';
import {colors} from '../../styles/theme';
import {products} from '../../utils/staticData';
import ItemCard from './components/ItemCard';

const HomeScreen = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        {products.map((product, index) => (
          <ItemCard product={product} key={index} />
        ))}
      </View>
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
    marginBottom: 70,
    backgroundColor: colors.light,
  },
});

export default HomeScreen;
