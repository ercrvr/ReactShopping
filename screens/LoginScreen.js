import React from 'react';
import { useState, useEffect } from 'react';
import {StyleSheet,Text,View, TouchableOpacity,TextInput, BackHandler} from 'react-native';
import { Button } from 'react-native-elements';
import Colors from '../layouts/Colors';
import { useNavigation } from '@react-navigation/native';


import { updateEmail, updatePassword, login } from '../actions/user'
import { useSelector, useDispatch } from 'react-redux';


export default function LoginScreen() {

    const navigation = useNavigation();
    const dispatch = useDispatch();
    const email = useSelector(state=>state.user.email);
    const password = useSelector(state=>state.user.password);
    BackHandler.addEventListener('hardwareBackPress', function() {return true});
    const handleLogin=()=>{
      dispatch(login());
    }
    return (
      <View style={styles.container}>
      <TextInput
          style={styles.inputBox}
          value={email}
          onChangeText={email =>dispatch(updateEmail(email))}
          placeholder='Email'
          autoCapitalize='none'
      />
      <TextInput
          style={styles.inputBox}
          value={password}
          onChangeText={password => dispatch(updatePassword(password))}
          placeholder='Password'
          secureTextEntry={true}
      />
      <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText} onPress={()=>handleLogin()}>Login</Text>
      </TouchableOpacity>
      <Button type="clear" onPress={()=>navigation.navigate('Signup')} title="Don't have an account yet? Sign up" />
  </View>
    );
}
const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center'
  },
  inputBox: {
      width: '85%',
      margin: 10,
      padding: 15,
      fontSize: 16,
      borderColor: '#d3d3d3',
      borderBottomWidth: 1,
      textAlign: 'center'
  },
  button: {
      marginTop: 30,
      marginBottom: 20,
      paddingVertical: 5,
      alignItems: 'center',
      backgroundColor: Colors.HeaderBgColorLight,
      borderColor: Colors.HeaderBgColorLight,
      borderWidth: 1,
      borderRadius: 5,
      width: 200
  },
  buttonText: {
      fontSize: 20,
      color: '#fff'
  },
  buttonSignup: {
      fontSize: 12
  },

})