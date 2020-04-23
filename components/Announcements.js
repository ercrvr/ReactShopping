import * as React from 'react';
import { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';
import { SliderBox } from "react-native-image-slider-box";
import Colors from '../layouts/Colors';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();


export default function Announcements({ navigation }) {

    const width = Dimensions.get('window').width - 20;
    const [images, setImage] = useState([
        "https://source.unsplash.com/1024x768/?covid",
        "https://source.unsplash.com/1024x768/?water",
        "https://source.unsplash.com/1024x768/?girl",
        "https://source.unsplash.com/1024x768/?tree",
    ])
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Announcements</Text>
            <SliderBox parentWidth={width} imageLoadingColor={Colors.loadingColorLight} dotColor={Colors.dotColor} inactiveDotColor={Colors.disabledDotColor} autoplay circleLoop images={images} />
            <Button containerStyle={styles.link}
                type="clear"
                title='See all'
                onPress={() => navigation.navigate('Announcements')} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        paddingLeft: 10,
    },
    text: {
        paddingBottom: 10,
        fontSize: 23,
        fontWeight: 'bold'
    },
    link: {
        flexDirection: 'row-reverse',
        paddingLeft: 2,
    },
    buttonlink: {
        color: Colors.linkColor,
        fontWeight: 'bold',
    }
});


