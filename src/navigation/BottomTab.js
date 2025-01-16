import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarShowLabel: false,
        tabBarIcon: ({focused}) => {
          let iconName;          
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Car') {
            iconName = focused ? 'cart' : 'cart-outline';
          } else if (route.name === 'CreditCards') {
            iconName = focused ? 'card' : 'card-outline';
          }

          return (
            <View style={styles.containerIcon}>
              {route.name === 'Car' && (
                <Text style={styles.textNumberItems}>0</Text>
              )}
              <Icon name={iconName} size={27.} color={'white'} />
            </View>
          );
        },
        tabBarStyle: styles.tabStyle,
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: 'bold',
        },
      })}>
      <Tab.Screen name="CreditCards" component={HomeScreen} />
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Car" component={HomeScreen} />
    </Tab.Navigator>
  );
};
const styles = StyleSheet.create({
  containerIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    marginTop: '50%',
    backgroundColor: 'transparent',
  },
  textNumberItems: {
    position: 'absolute',
    top: 8,
    right: -8,
    padding: 2,
    width: 'auto',
    minWidth: 17,
    backgroundColor: 'black',
    fontSize: 10,
    fontWeight: 'bold',
    borderRadius: 10,
    textAlign: 'center',
    color: '#afdc15',
    zIndex: 10,
  },
  tabStyle: {
    position: 'absolute',
    bottom: 15,
    height: 55,
    left: 14,
    right: 14,
    marginRight: 9,
    marginLeft: 9,
    backgroundColor: '#68D391',
    borderColor: '#68D391',
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
