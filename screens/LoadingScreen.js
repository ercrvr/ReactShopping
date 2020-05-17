import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator, StyleSheet, Text, Image, BackHandler } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import Colors from '../layouts/Colors';


export default function LoadingScreen() {

    const navigation = useNavigation();
    const [isLogged, setIsLogged] = useState(false);
    const [text, setText] = useState('');

    
    function redirectUser(screen){
        setTimeout(() => {
            navigation.navigate(screen);
        }, 3000)
    }
    
        if (!isLogged) {
            redirectUser('Login');
            
        } else {
            redirectUser('Home');
            
        }


    return (
        <View style={styles.container}>
            <View style={styles.img}>
                <Image source={require('../assets/bg.jpg')} resizeMode='center' />
            </View>
            <View style={styles.textContainer}>
                <Text>{text}Please wait</Text>
            </View>
            <ActivityIndicator size="large" color={Colors.dotColor} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#fff',
        
    },
    textContainer: {
        flexDirection: "row",
        justifyContent: 'center',
        
    },
    img:{
        flex: 0.3,
        alignItems: 'center',
        justifyContent:'center'
    }
});
