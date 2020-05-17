import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoadingScreen from '../screens/LoadingScreen';
import LoginScreen from '../screens/LoginScreen';
import StackNavigation from './StackNavigation'
import Colors from '../layouts/Colors';
const LoginStack = createStackNavigator();

export default function LoginNavigation() {


  return (
    <LoginStack.Navigator initialRouteName={'Loading'} screenOptions={{ gestureEnabled: false, cardOverlayEnabled: true }} gestureEnabled="false" headerMode="none" mode="card">
      <LoginStack.Screen name="Loading" options={{headerLeft: null }}  component={LoadingScreen} />  
      <LoginStack.Screen name="Login" options={{ title: 'React Native Shopping', headerStyle: { backgroundColor: Colors.HeaderBgColorLight }, headerTitleAlign: 'center', headerLeft: null }} component={LoginScreen} />
      <LoginStack.Screen name="Home" options={{ headerTintColor: Colors.textColorLight, headerStyle: { backgroundColor: Colors.HeaderBgColorLight }, headerTitleAlign: 'center', headerLeft: null }} component={StackNavigation} />
    </LoginStack.Navigator>
  );


}