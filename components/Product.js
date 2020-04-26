import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Card, Button, Divider } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';





export default function Product(products, showtags) {
    const navigation = useNavigation();
    let featuredtitle, subtitle;
        if(products.specialpromo === 1){
            featuredtitle = `${products.discount}% OFF`;
            subtitle = `Save AED ${(products.price * (products.discount/100)).toFixed(2)}`; 
       }
    
    return (
        <Card featuredTitle={featuredtitle} featuredTitleStyle={styles.titleStyle} featuredSubtitle={subtitle}  featuredSubtitleStyle={styles.subtitle}
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

    },
    titleStyle:{
        transform:[{ rotate: '325deg'}],
        marginBottom: 5, 
        marginTop: 20,
        marginRight: 90, 
        
        color:'red', 
        backgroundColor:'rgba(255, 255, 255, 0.7)',
        width: 150,
        paddingLeft: 30,
        fontSize:18
    },
    subtitle:{
        paddingLeft: 64,
        fontWeight:'bold',
        color: '#fff',
        overflow: 'hidden',
        marginTop: 90,
        borderRadius: 7,
        paddingStart: 57,
        backgroundColor:'rgba(255, 0, 0, 0.5)',
        alignSelf: 'flex-end'
    }

})
