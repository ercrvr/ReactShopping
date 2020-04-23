import React, { useState } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Colors from '../layouts/Colors';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import AnnouncementsScreen from '../screens/Announcements';

const Tab = createBottomTabNavigator();



export default function FooterFile() {
    const [isActive, setActive] = useState("home");
    return (
        <View >
            <NavigationContainer>
                <Tab.Navigator>
                    <Tab.Screen name="Home" component={HomeScreen} />
                    <Tab.Screen name="Announcements" component={AnnouncementsScreen} />
                </Tab.Navigator>
            </NavigationContainer>
        </View>
    );
}
const windowWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: windowWidth,
    }
});