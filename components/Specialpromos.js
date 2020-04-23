import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import Colors from '../layouts/Colors';
import ProductsList from '../data/ProductsList';
import { createFilter } from 'react-native-search-filter';
import Product from '../components/Product';

export default function Specialpromos() {

    const products = ProductsList.products;
    const filteredProduct = products.filter(createFilter('1', 'specialpromo'));
    const windowWidth = Dimensions.get('window').width;

    

    
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Limited Offers</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} scrollEventThrottle={200} pagingEnabled decelerationRate="fast">
                {
                    filteredProduct.map((product, index) => {
                        return <View key={index} style={{ width: windowWidth / 2 }}>
                            <Product {...filteredProduct[index]} />
                        </View>
                    })
                }
            </ScrollView>
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
        fontWeight: 'bold',
        color: 'red'
    },
    link: {
        flexDirection: 'row-reverse',
        paddingLeft: 10,
    },
    buttonlink: {
        color: Colors.linkColor,
        fontWeight: 'bold'
    }
});


