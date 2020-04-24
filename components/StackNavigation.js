import * as React from 'react';
import { useState, useEffect } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { isAuthenticated } from '@okta/okta-react-native';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigation from '../components/TabNavigation';
import AnnouncementsScreen from '../screens/Announcements';
import LoginScreen from '../screens/LoginScreen';
import ProfileScreen from '../screens/ProfileScreen';
import Colors from '../layouts/Colors';
import { createConfig } from '@okta/okta-react-native';
import config from '../components/config';

const Stack = createStackNavigator();

export default function StackNavigation(){
  
  const [progress, setProgress] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  useEffect(()=>{
    
    const checkAuthStatus = async()=>{
      const authenticatedUser = await isAuthenticated().then(()=>{
        const cofiguration = createConfig({
          clientId: config.clientId,
          redirectUri: config.redirectUrl,
          endSessionRedirectUri: config.endSessionRedirectUri,
          discoveryUri: config.discoveryUri,
          scopes: config.scopes,
          requireHardwareBackedKeyStore: config.requireHardwareBackedKeyStore,
        });
        setAuthenticated(authenticatedUser);
        
        setProgress(true);
      }).catch(e=>{
        console.log(e.message);
      })      
    }
    setProgress(false);
    checkAuthStatus();
  })

  if (progress) {
    return (
      <SafeAreaView>
        <View>
          <Text>Loading...</Text>
        </View>
      </SafeAreaView>
    );
  }else{
    return(
    <Stack.Navigator initialRouteName={'Login'} headerMode="screen" mode="card">
          <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Login', headerLeft: null }}/>
          <Stack.Screen name="Profile" component={ProfileScreen}options={{ title: 'Login',}} />
          <Stack.Screen name="Home" options={{ title: 'React Native Shopping', headerStyle: { backgroundColor: Colors.HeaderBgColorLight }, headerTitleAlign:'center', }}  component={TabNavigation} />
          <Stack.Screen name="Announcements" options={{ headerTintColor: Colors.textColorLight, headerStyle: { backgroundColor: Colors.HeaderBgColorLight}, headerTitleAlign:'center' }} component={AnnouncementsScreen} />
        </Stack.Navigator>
        );
  }
    r
        
    
}