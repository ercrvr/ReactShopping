import React from 'react';
import { View } from 'react-native';
import { Header } from 'react-native-elements';
import Colors from '../layouts/Colors';


export default function HeaderFile() {
    return (
        <View>
            <Header
                centerComponent={{ text: 'React Shopping Project', style: { fontWeight: 'bold', color: Colors.textColorLight } }}
                containerStyle={{
                    backgroundColor: Colors.HeaderBgColorLight,
                    justifyContent: 'space-around',
                }}
            />
        </View>
    );
}

