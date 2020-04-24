import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import TabNavigation from '../components/TabNavigation';
import AnnouncementsScreen from '../screens/Announcements';
import Colors from '../layouts/Colors';

const Stack = createStackNavigator();

export default function StackNavigation(){
    return(
        <Stack.Navigator headerMode="screen" mode="card">
          <Stack.Screen name="Home" options={{ title: 'React Native Shopping', headerStyle: { backgroundColor: Colors.HeaderBgColorLight }, headerTitleAlign:'center', }}  component={TabNavigation} />
          <Stack.Screen name="Announcements" options={{ headerTintColor: Colors.textColorLight, headerStyle: { backgroundColor: Colors.HeaderBgColorLight}, headerTitleAlign:'center' }} component={AnnouncementsScreen} />
        </Stack.Navigator>
    );
}