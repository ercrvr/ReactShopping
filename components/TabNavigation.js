import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import PromotionsScreen from '../screens/Promotions';
import ProductsScreen from '../screens/Products';
import ShoppingCart from '../screens/ShoppingCart';
import Colors from '../layouts/Colors';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
    return (
      <Tab.Navigator  screenOptions={({ navigation, route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? 'home'
              : 'home';
          } else if (route.name === 'Announcements') {
            iconName = focused ? 'list' : 'list';
          } else if (route.name === 'Promotions') {
            iconName = focused ? 'tag' : 'tag';
          } else if (route.name === 'Products') {
            iconName = focused ? 'shop' : 'shop';
          } else if (route.name === 'Others') {
            iconName = focused ? 'tag' : 'tag';
          } else if (route.name === 'Cart') {
            iconName = focused ? 'shopping-cart' : 'shopping-cart';
          }
          
          // You can return any component that you like here!
          if (route.name === 'Products') {
            return <Entypo name={iconName} size={size} color={color} />;
          } else {
            return <Feather name={iconName} size={size} color={color} />;
          }
        },
      })}
      
        tabBarOptions={{
          activeTintColor: Colors.tabIconDefault,
          inactiveTintColor: Colors.tintColor,
          tabStyle: styles.tabNavigator,
          style: { backgroundColor: Colors.HeaderBgColorLight, paddingTop: 8}
          
        }}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Promotions" component={PromotionsScreen} />
        <Tab.Screen name="Products" component={ProductsScreen} />
        <Tab.Screen name="Cart" component={ShoppingCart} />
        <Tab.Screen name="Others" component={ProductsScreen} />
      </Tab.Navigator>
    );
  }

  const styles = StyleSheet.create({
    tabNavigator: {
      backgroundColor: Colors.HeaderBgColorLight,
    },
  });