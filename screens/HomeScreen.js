import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import AnnouncementsSlider from '../components/Announcements';
import BestsellersSlider from '../components/Bestsellers';
import SpecialpromosSlider from '../components/Specialpromos';
import { useNavigation } from '@react-navigation/native';


export default function HomeScreen() {
    const navigation = useNavigation();
    return (
        <ScrollView style={{backgroundColor:'#fff'}}>
            <AnnouncementsSlider navigation={navigation} />
            <BestsellersSlider />
            <SpecialpromosSlider />
        </ScrollView>
    );
}