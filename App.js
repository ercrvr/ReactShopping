import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import ErrorBoundary from 'react-native-error-boundary'

import HomeScreen from './screens/HomeScreen';
import AnnouncementsScreen from './screens/Announcements';
import PromotionsScreen from './screens/Promotions';
import ProductsScreen from './screens/Products';

import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import Colors from './layouts/Colors';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


function tabNavigation() {
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
        } else if (route.name === 'Filler') {
          iconName = focused ? 'tag' : 'tag';
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
      <Tab.Screen name="Filler" component={ProductsScreen} />
      <Tab.Screen name="Others" component={ProductsScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <NavigationContainer>
        <Stack.Navigator headerMode="screen" mode="card">
          <Stack.Screen name="Home" options={{ title: 'React Native Shopping', headerStyle: { backgroundColor: Colors.HeaderBgColorLight }, headerTitleAlign:'center', }}  component={tabNavigation} />
          <Stack.Screen name="Announcements" options={{ headerTintColor: Colors.textColorLight, headerStyle: { backgroundColor: Colors.HeaderBgColorLight}, headerTitleAlign:'center' }} component={AnnouncementsScreen} />
        </Stack.Navigator>
      </NavigationContainer >
    </ErrorBoundary >
  );
}

const styles = StyleSheet.create({
  tabNavigator: {
    backgroundColor: Colors.HeaderBgColorLight,
  },
});