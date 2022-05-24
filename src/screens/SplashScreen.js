import React, { useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native';

export default function SplashScreen({ route, navigation }) {

    useEffect(() => {
        setTimeout(() => {
            // navigation.navigate('Loginscreen');
        }, 1000);
    }, [])

    return (
        <View>
            <Text style={{ marginTop: 10, textAlign: 'center', fontWeight: 'bold', fontSize: 30 }}>
                {"Ram Ramji"}
            </Text>
            <Text style={{ marginTop: 10, marginBottom: -10, textAlign: 'center', fontWeight: 'bold', fontSize: 30 }}>
                {"Sitaram ji Ram ji"}
            </Text>
            <View style={{ justifyContent: 'center', alignItems: 'center', }}  >
                <Image
                    style={{ width: 300, height: 450, alignItems: 'center' }}
                    resizeMode="contain"
                    source={require('../assets/sitaramphoto.jpg')}
                />
            </View>
        </View>
    );
}