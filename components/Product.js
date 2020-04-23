import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Card, Button, Divider } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';


export default function Product(products, ) {
    const navigation = useNavigation();
    return (

        <Card containerStyle={{}}
            image={{ uri: products.image }}>
            <Text style={styles.name}>
                {products.name}
            </Text>
            <Text style={styles.price}>
                AED {(products.price).toFixed(2)} <Text style={{fontWeight:'normal'}}>per {products.unit} </Text>
            </Text>
            <Text style={styles.category} >
                {products.category}
            </Text>
            <Divider />
            <Text style={styles.description}>
                {products.description}
            </Text>

            <Button
                type="clear"
                title='Add to cart'
                onPress={() => navigation.navigate('Products')} />
        </Card>

    );
}


const styles = StyleSheet.create({
    name: {
        color: '#5a647d',
        
        fontSize: 18,
    },
    price: {
        fontWeight: 'bold',
        color: 'darkblue'
    },
    description: {
        height: 60,
        fontSize: 14,
        color: '#c1c4cd'
    },
    category: {
        fontWeight:'bold'

    }

})
