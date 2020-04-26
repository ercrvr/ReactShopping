import React from 'react';
import { useState, useEffect } from 'react';
import {SafeAreaView,Button,StyleSheet,Text,View,StatusBar,TextInput, BackHandler} from 'react-native';

import Spinner from 'react-native-loading-spinner-overlay';

import { useNavigation } from '@react-navigation/native';


export default function LoginScreen() {
    const navigation = useNavigation();
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [progress, setProgress] = useState(false);
    BackHandler.addEventListener('hardwareBackPress', function() {return true});
    return (
        <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={styles.container}>
          <Spinner
            visible={progress}
            textContent={'Loading...'}
            textStyle={styles.spinnerTextStyle}
          />
          <Text style={styles.title}>Native Sign-In</Text>
        
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <TextInput
                style={styles.textInput}
                placeholder="User Name"
                onChangeText={username => setUserName(username)}
              />
              <TextInput
                style={styles.textInput}
                placeholder="Password"
                secureTextEntry={true}
                onChangeText={password => setPassword(password)}
              
              />
              <View style={{marginTop: 40, height: 40}}>
                <Button
                  testID="loginButton"
                  onPress={()=>{navigation.navigate('Home')}}
                  title="Login"
                />
              </View>
            </View>
          </View>
        </SafeAreaView>
      </>
    );
}
const styles = StyleSheet.create({
    spinnerTextStyle: {
      color: '#FFF'
    },
    textInput: {
      marginTop: 10,
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
    },
    buttonContainer: {
      flexDirection: 'column',
      justifyContent: 'space-between',
      marginTop: 10,
    },
    button: {
      borderRadius: 40,
      width: 200,
      height: 40,
      marginTop: 40,
      marginBottom: 10,
      marginHorizontal: 10,
    },
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#FFFFFF',
      alignItems: 'center',
    },
    title: {
      fontSize: 30,
      fontWeight: 'bold',
      color: '#0066cc',
      paddingTop: 40,
      textAlign: 'center',
    }
  });
