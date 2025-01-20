import * as React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import HomeScreen from '../screens/home/HomeScreen';
import CartScreen from '../screens/cart/CartScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useSelector} from 'react-redux';
import {colors} from '../styles/theme';
import {iconCreditCard, iconHome, iconCart} from '../utils/staticData';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  const totalItemsCar = useSelector(state => state.car.totalItems);
  return (
    <Tab.Navigator
      backBehavior="initialRoute"
      initialRouteName="Home"
      screenOptions={({route}) => ({
        tabBarShowLabel: false,
        tabBarIcon: ({focused}) => {
          let iconName = selectIcon(route.name);
          return (
            <View style={styles.containerIcon}>
              {route.name === 'Cart' && totalItemsCar > 0 && !focused && (
                <Text style={styles.textNumberItems}>{totalItemsCar}</Text>
              )}
              <Image
                source={iconName}
                style={{
                  width: 30,
                  height: 30,
                }}
              />
            </View>
          );
        },
        tabBarStyle: styles.tabStyle,
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

const selectIcon = routeName => {
  if (routeName === 'Home') {
    return iconHome;
  } else if (routeName === 'Cart') {
    return iconCart;
  } else if (routeName === 'Credit Cards') {
    return iconCreditCard;
  }
};

const styles = StyleSheet.create({
  containerIcon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    bottom: 0,
    marginTop: 10,
    backgroundColor: 'transparent',
  },
  textNumberItems: {
    position: 'absolute',
    top: -12,
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
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    bottom: 15,
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
