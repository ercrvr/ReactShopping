import React, { useState } from 'react';

import { StyleSheet, Text, ScrollView, View, Dimensions, SectionList, Item } from 'react-native';
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
    
    
    function searchIt(text) {
        setTextSearch(text);
    }

    return (

        <View>
            <Searchbar onChangeText={text => searchIt(text)} value={searchText} placeholder="Search for a product or a category" style={styles.searchInput} />
            <ScrollView contentContainerStyle={styles.grid}>
            

                {
                    
                    filteredProduct.map((product, index) => {
                        
                        return <View key={index} style={{ width: windowWidth/2 }}>
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
        padding: 3,
        borderColor: '#CCC',
        borderWidth: 1
    },
    grid:{
        
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingBottom: 70,
        backgroundColor:'#fff'
    }
});