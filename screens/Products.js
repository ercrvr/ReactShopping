import React, { useState } from 'react';
import { StyleSheet, Text, ScrollView, View, Dimensions } from 'react-native';

import Product from '../components/Product';

import { Searchbar } from 'react-native-paper';

import { createFilter } from 'react-native-search-filter';
import ProductsList from '../data/ProductsList';

export default function Products() {

    const windowWidth = Dimensions.get('window').width;
    const [searchText, setTextSearch] = useState('');
    const keys = ['category', 'name'];
    const products = ProductsList.products;
    const filteredProduct = products.filter(createFilter(searchText, keys));
    const [width, setWidth] = useState(windowWidth)
    const [scrollType, setScrollType] = useState(false);

    function searchIt(text) {
        setTextSearch(text);
        if (text === '') {
            setScrollType(false);
            setWidth(windowWidth);
        } else {
            setScrollType(true);
            setWidth(windowWidth / 2);
        }

    }

    return (

        <View>
            <Searchbar onChangeText={text => searchIt(text)} value={searchText} placeholder="Search for a product or a category" style={styles.searchInput} />
            <ScrollView horizontal={scrollType} showsHorizontalScrollIndicator={false} scrollEventThrottle={200} >
                {
                    filteredProduct.map((product, index) => {
                        return <View key={index} style={{ width: width }}>
                            <Product {...filteredProduct[index]} />
                        </View>
                    })
                }

            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    searchInput: {
        padding: 10,
        borderColor: '#CCC',
        borderWidth: 1
    }
});