import * as React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import HomeScreen from '../screens/home/HomeScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useSelector} from 'react-redux';
import {colors} from '../styles/theme';
import {iconCreditCard, iconHome, iconCart} from '../utils/staticData';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  const totalItemsCar = useSelector(state => state.car.totalItems);
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        tabBarShowLabel: false,
        tabBarIcon: () => {
          let iconName = selectIcon(route.name);
          return (
            <View style={styles.containerIcon}>
              {route.name === 'Car' && totalItemsCar > 0 && (
                <Text style={styles.textNumberItems}>{totalItemsCar}</Text>
              )}
              <Image source={iconName} style={{width: 30, height: 30}} />
            </View>
          );
        },
        tabBarStyle: styles.tabStyle,
      })}>
      <Tab.Screen name="Credit Cards" component={HomeScreen} />
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Car" component={HomeScreen} />
    </Tab.Navigator>
  );
};

const selectIcon = routeName => {
  if (routeName === 'Home') {
    return iconHome;
  } else if (routeName === 'Car') {
    return iconCart;
  } else if (routeName === 'Credit Cards') {
    return iconCreditCard;
  }
};

const styles = StyleSheet.create({
  containerIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    marginTop: 18,
    backgroundColor: 'transparent',
  },
  textNumberItems: {
    position: 'absolute',
    top: -8,
    right: -8,
    padding: 2,
    width: 'auto',
    minWidth: 17,
    backgroundColor: colors.dark,
    fontSize: 10,
    fontWeight: 'bold',
    borderRadius: 10,
    textAlign: 'center',
    color: colors.secondary,
    zIndex: 10,
  },
  tabStyle: {
    position: 'absolute',
    bottom: 15,
    height: 55,
    left: 14,
    right: 14,
    marginRight: 10,
    marginLeft: 10,
    backgroundColor: colors.primary,
    borderColor: colors.primary,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
export default BottomTab;
