import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../styles/theme';

const Separator = ({ type = 'horizontal' }) => {
  return <View style={styles.separator} testID='separator'></View>;
};

export default Separator;

const styles = StyleSheet.create({
  separator: {
    width: '95%',
    height: 0.5,
    marginVertical: 10,
    borderRadius: 30,
    backgroundColor: colors.lightGrey,
  },
});
