import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, StatusBar,Button} from 'react-native';
import { useState, useEffect } from 'react';

import Spinner from 'react-native-loading-spinner-overlay';
import Error from '../components/Error';
import { useNavigation } from '@react-navigation/native';

export default function ProfileScreen(){
    const navigation = useNavigation();
    const [accessToken, setAccessToken] = useState(null);
    const [user, setUser] = useState(null);
    const [progress, setProgress] = useState('');
    const [error, setError] = useState('');

   
    return(
        <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={styles.container}>
          <Spinner
            visible={progress}
            textContent={'Loading...'}
            textStyle={styles.spinnerTextStyle}
          />
          <Error error={error} />
          { user && (
            <View style={{ paddingLeft: 20, paddingTop: 20 }}>
              <Text style={styles.titleHello}>Hello {user.name}</Text>
              <View style={{ flexDirection: 'row' }}>
                <Text>Name: </Text>
                <Text>{user.name}</Text>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <Text>Locale: </Text>
                <Text>{user.locale}</Text>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <Text>Zone Info: </Text>
                <Text>{user.zoneinfo}</Text>
              </View>
            </View>
          )}
          <View style={{ flexDirection: 'column', marginTop: 20, paddingLeft: 20, width: 300 }}>
            <Button style={{ marginTop:40 }} title="Get access token" onPress={()=>{getaccessToken}} />
            { accessToken &&
              <View style={styles.tokenContainer}>
                <Text style={styles.tokenTitle}>Access Token:</Text>
                <Text style={{ marginTop: 20 }} numberOfLines={5}>{accessToken}</Text>
              </View>
            }
          </View>
        </SafeAreaView>
      </>
    );
}

const styles = StyleSheet.create({
    spinnerTextStyle: {
      color: '#FFF',
    },
    button: {
      borderRadius: 40,
      width: 200,
      height: 40,
      marginTop: 40,
      marginBottom: 10,
      marginHorizontal: 10,
    },
    logoutButton: {
      paddingLeft: 10,
      fontSize: 16,
      color: '#0066cc'
    },
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#FFFFFF',
    },
    titleHello: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#0066cc',
      paddingTop: 40
    },
    titleDetails: {
      fontSize: 15,
      fontWeight: 'bold',
      paddingTop: 15,
      textAlign: 'center',
    },
    tokenContainer: {
      marginTop: 20
    },
    tokenTitle: {
      fontSize: 16,
      fontWeight: 'bold'
    }
  });