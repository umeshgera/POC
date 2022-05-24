import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen';
import LoginScreen from '../screens/LoginScreen';
import Signup from '../screens/Signup';
import ForgotPassword from '../screens/ForgotPassword';


const Stack = createNativeStackNavigator();
 
  function Routes() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="SplashScreen">

          <Stack.Screen  options={{headerShown: false}}  
          name="SplashScreen" component={SplashScreen} />
          
          
          <Stack.Screen  options={{headerShown: false}}  
          name="LoginScreen" component={LoginScreen} />
          
          
          <Stack.Screen  options={{headerShown: false}}  
          name="Signup" component={Signup} />
          
          
          <Stack.Screen  options={{headerShown: false}}  
          name="ForgotPassword" component={ForgotPassword} />
          
          

        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
  export default Routes;