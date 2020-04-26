import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import Colors from '../layouts/Colors';
import ProductsList from '../data/ProductsList';
import { createFilter } from 'react-native-search-filter';
import Product from '../components/Product';

const Blink = (props) => {
    const [isShowingText, setIsShowingText] = useState(true);
    let color = 'red';
    useEffect(() => {
        const toggle = setInterval(() => {
            setIsShowingText(!isShowingText);
        }, 300);

        return () => clearInterval(toggle);
    })

    if (!isShowingText) {
        color = 'transparent';
    }

    return <Text style={{ color: color }}>{props.text}</Text>;
}


export default function Specialpromos() {

    const products = ProductsList.products;
    const filteredProduct = products.filter(createFilter('1', 'specialpromo'));
    const windowWidth = Dimensions.get('window').width;


    return (
        <View style={styles.container}>

            <Text style={styles.text}><Blink text='Limited Offers - Save Big!' /></Text>
            <Text style={{ fontStyle: 'italic' }}>Hurry Up! This offer is valid from June 08 to June 15, 2020 only.</Text>
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

    },
    link: {
        flexDirection: 'row-reverse',
        paddingLeft: 10,
    },
    buttonlink: {
        color: Colors.linkColor,
        fontWeight: 'bold'
    },
});


