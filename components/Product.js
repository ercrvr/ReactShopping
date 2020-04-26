import React from 'react';
import { Text, StyleSheet, TouchableOpacity, View, ScrollView } from 'react-native';
import { Card, Button, Divider } from 'react-native-elements';
import { useNavigation, useRoute } from '@react-navigation/native';
export default function Product(products) {

    const navigation = useNavigation();
    const route = useRoute();
    if (route.name === "Home" || route.name == "Products") {

        let featuredtitle, subtitle;
        if (products.specialpromo === 1) {
            featuredtitle = `${products.discount}% OFF`;
            subtitle = `Save AED ${(products.price * (products.discount / 100)).toFixed(2)}`;
        }

        return (
            <Card featuredTitle={featuredtitle} featuredTitleStyle={styles.titleStyle} featuredSubtitle={subtitle} featuredSubtitleStyle={styles.subtitle}
                image={{ uri: products.image }}>
                <Text style={styles.name}>
                    {products.name}
                </Text>
                <Text style={styles.price}>
                    AED {(products.price).toFixed(2)} <Text style={{ fontWeight: 'normal' }}>per {products.unit} </Text>
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

    } else {
        const a = products ;

        a.map((prod, index) => {
            let featuredtitle, subtitle;
            if (prod[index].specialpromo === 1) {
                featuredtitle = `${prod[index].discount}% OFF`;
                subtitle = `Save AED ${(prod[index].price * (prod[index].discount / 100)).toFixed(2)}`;
            }
            <ScrollView>
                <View key={index}>
                    <Card featuredTitle={featuredtitle} featuredTitleStyle={styles.titleStyle} featuredSubtitle={subtitle} featuredSubtitleStyle={styles.subtitle}
                        image={{ uri: prod[index].image }}>
                        <Text style={styles.name}>
                            {prod[index].name}
                        </Text>
                        <Text style={styles.price}>
                            AED {(prod[index].price).toFixed(2)} <Text style={{ fontWeight: 'normal' }}>per {prod[index].unit} </Text>
                        </Text>
                        <Text style={styles.category} >
                            {prod[index].category}
                        </Text>
                        <Divider />
                        <Text style={styles.description}>
                            {prod[index].description}
                        </Text>

                        <Button
                            type="clear"
                            title='Add to cart'
                            onPress={() => navigation.navigate('Products')} />
                    </Card>

                </View>
            </ScrollView>
        })

        return (
            
                <View><Text>Test</Text></View>
            

        )

    }

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
        fontWeight: 'bold'

    },
    titleStyle: {
        transform: [{ rotate: '325deg' }],
        marginBottom: 5,
        marginTop: 20,
        marginRight: 90,

        color: 'red',
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        width: 150,
        paddingLeft: 30,
        fontSize: 18
    },
    subtitle: {
        paddingLeft: 64,
        fontWeight: 'bold',
        color: '#fff',
        overflow: 'hidden',
        marginTop: 90,
        borderRadius: 7,
        paddingStart: 57,
        backgroundColor: 'rgba(255, 0, 0, 0.5)',
        alignSelf: 'flex-end'
    }

})
