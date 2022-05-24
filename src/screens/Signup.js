import React, { useEffect, useState } from 'react';
import { View, Text, Image, Button, TextInput, ScrollView } from 'react-native';

export default function Signup({ route, navigation }) {

    
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const onPressSignUp = () => {
       alert("abcd")
    }

    return (
        <ScrollView>
        <View style={{flex:1, backgroundColor:'white'}}>
            <Text style={{ marginTop: 10, textAlign: 'center', fontWeight: 'bold', fontSize: 30 }}>
                {"Ram Ramji SignUp"}
            </Text>

            <View style={{ justifyContent: 'center', alignItems: 'center', }}  >
                <Image
                    style={{ marginTop: 20, width: 200, height: 200, alignItems: 'center' }}
                    resizeMode="contain"
                    source={require('../assets/poclogo.png')}
                />
            </View>


            <View style={{ marginBottom: 20, marginTop: 40, marginHorizontal: 40 }}>
                <Text>{'Name'}</Text>
                <TextInput
                    style={{ width: '100%', borderBottomWidth: 1, borderBottomColor: 'grey', height: 40, }}
                    autoCapitalize="none"
                    returnKeyType="next"
                    maxLength={50}
                    placeholder={'like  abc@gmail.com'}
                    // onChangeText={text => setEmail(text)}
                    // value={email}
                    // defaultValue={email}
                />
            </View>

            <View style={{ marginBottom: 20, marginTop: 10, marginHorizontal: 40 }}>
                <Text>{'Father Name'}</Text>
                <TextInput
                    style={{ width: '100%', borderBottomWidth: 1, borderBottomColor: 'grey', height: 40, }}
                    autoCapitalize="none"
                    returnKeyType="next"
                    maxLength={50}
                    placeholder={'like  abc@gmail.com'}
                    // onChangeText={text => setEmail(text)}
                    // value={email}
                    // defaultValue={email}
                />
            </View>

            <View style={{ marginBottom: 20, marginTop: 10, marginHorizontal: 40 }}>
                <Text>{'Email'}</Text>
                <TextInput
                    style={{ width: '100%', borderBottomWidth: 1, borderBottomColor: 'grey', height: 40, }}
                    autoCapitalize="none"
                    returnKeyType="next"
                    maxLength={50}
                    placeholder={'like  abc@gmail.com'}
                    onChangeText={text => setEmail(text)}
                    value={email}
                    defaultValue={email}
                />
            </View>


            <View style={{ marginBottom: 20, marginTop: 10, marginHorizontal: 40 }}>
                <Text>{'Password'}</Text>
                <TextInput
                    style={{ width: '100%', borderBottomWidth: 1, borderBottomColor: 'grey', height: 40, }}
                    autoCapitalize="none"
                    returnKeyType="next"
                    maxLength={50}
                    placeholder={'like  Abc@123@3'}
                    onChangeText={text => setPassword(text)}
                    value={password}
                    defaultValue={password}
                />
            </View>
            



            <View style={{ marginHorizontal: 25, marginVertical: 30 }}>
                <Button title='Create Account'
                    onPress={onPressSignUp}
                />
            </View>

          

        </View>
        </ScrollView>
    );
}