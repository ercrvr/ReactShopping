import * as React from 'react';
import { useState, useEffect } from 'react';
import { View, Text, SafeAreaView } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import TabNavigation from '../components/TabNavigation';
import AnnouncementsScreen from '../screens/Announcements';
import LoginScreen from '../screens/LoginScreen';
import ProfileScreen from '../screens/ProfileScreen';
import Colors from '../layouts/Colors';

import config from '../components/config';


const Stack = createStackNavigator();

export default function StackNavigation(){
  
  
    return(
    <Stack.Navigator initialRouteName={'Login'} headerMode="screen" mode="card">
          <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Login', headerLeft: null }}/>
          <Stack.Screen name="Profile" component={ProfileScreen}options={{ title: 'Login', headerLeft: null}} />
          <Stack.Screen name="Home" options={{ title: 'React Native Shopping', headerStyle: { backgroundColor: Colors.HeaderBgColorLight }, headerTitleAlign:'center', headerLeft: null }}  component={TabNavigation} />
          <Stack.Screen name="Announcements" options={{ headerTintColor: Colors.textColorLight, headerStyle: { backgroundColor: Colors.HeaderBgColorLight}, headerTitleAlign:'center', headerLeft: null }} component={AnnouncementsScreen} />
        </Stack.Navigator>
        );
        
    
}