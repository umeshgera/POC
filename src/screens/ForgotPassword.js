import { StyleSheet, Text, View,TextInput,Button ,Image} from 'react-native'
import React from 'react'

const ForgotPassword = () => {
    
    const onPressSubmit =() =>{
        alert("umesh gera")
    }

  return (
    <View style={{flex:1, backgroundColor:'white'}}>
    <Text style={{textAlign:"center",color:"purple",fontSize:30}}>ForgotPassword</Text>
          
      <View style={{ justifyContent: 'center', alignItems: 'center', }}  >
                <Image
                    style={{ marginTop: 20, width: 200, height: 200, alignItems: 'center' }}
                    resizeMode="contain"
                    source={require('../assets/poclogo.png')}
                />
            </View>

        
      <View style={{ marginBottom: 20, marginTop: 40, marginHorizontal: 40 }}>
                <Text>{ "Name"}</Text>
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

          <View style={{marginVertical:30,marginHorizontal:30}}>
         <Button title='Submit' 
         onPress={onPressSubmit}/>
         </View>

    </View>
  )
}

export default ForgotPassword

const styles = StyleSheet.create({})