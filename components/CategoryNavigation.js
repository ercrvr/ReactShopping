import React from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createFilter } from 'react-native-search-filter';
import ProductsList from '../data/ProductsList';
import Product from './Product';
import { useNavigation } from '@react-navigation/native';

const Tab = createMaterialTopTabNavigator();
const products = ProductsList.products;
const categories = products.filter((prod, index, self) => self.findIndex(t => t.category === prod.category) === index).map(prod => prod.category)


export default function CategoryNavigation() {
    const navigation = useNavigation();

    return (

        <Tab.Navigator>
            {
                categories.map((cat, index) => {
                    const pList = products.filter(prod => prod.category === cat);
                    navigation.setParams({category:cat});
                    return <Tab.Screen name={cat} component={() => { return <Product produuts={pList} /> }} />
                })
            }
        </Tab.Navigator>

    );
}