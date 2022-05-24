import React, { useEffect, useState } from 'react';
import { View, Text, Image, Button, TextInput, TouchableOpacity } from 'react-native';

export default function LoginScreen({ route, navigation }) {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")



    const onPressLogin = () => {
        alert("" + email + "   " + password)
    }

    const onPressSignUp = () => {
        navigation.navigate('Signup')
    }

    const onPressForgot = () => {
        navigation.navigate('ForgotPassword')
    }


    return (
        <View style={{flex:1, backgroundColor:'white'}}>
            <Text style={{ marginTop: 10, textAlign: 'center', fontWeight: 'bold', fontSize: 30 }}>
                {"Ram Ramji Login"}
            </Text>

            <View style={{ justifyContent: 'center', alignItems: 'center', }}  >
                <Image
                    style={{ marginTop: 20, width: 200, height: 200, alignItems: 'center' }}
                    resizeMode="contain"
                    source={require('../assets/poclogo.png')}
                />
            </View>


            <View style={{ marginBottom: 20, marginTop: 40, marginHorizontal: 40 }}>
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



            <View style={{ marginHorizontal: 25, marginTop: 30 }}>
                <Button title='Submit'
                    onPress={onPressLogin}
                />
            </View>

            <TouchableOpacity onPress={onPressSignUp} style={{flexDirection:'row', justifyContent:'center' }}>
                <Text style={{ textAlign: "center", marginTop: 20, color: "red",}}>
                   {"Don't have an account "}
                </Text>
                <Text style={{ textAlign: "center", marginTop: 20, color: "red", textDecorationLine:"underline"}}>
                    {"Sign Up"}
                </Text>
            </TouchableOpacity>


            <TouchableOpacity onPress={onPressForgot}>
                <Text style={{ textAlign: "center", marginTop: 20, color: "red", textDecorationLine:"underline"}}>
                    Forgot Password
                </Text>
            </TouchableOpacity>

        </View>
    );
}