/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import LandingPage from './LandingPage';
import SignIn from './auth/SignIn';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator()
function App(): JSX.Element {
  
  return (
    <NavigationContainer>
     <Stack.Navigator
      initialRouteName='Landing_Page'
     >
      <Stack.Screen
       name="Landing_Page"
       component={LandingPage}
       options={{
        header:()=>null,
        
       }}
      />
      <Stack.Screen
        name="Signin"
        component={SignIn}
        options={{
          header:()=>null,
          
         }}
      />
     </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
    body:{
      flex:1,
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:'#ffff00'
    },
    text:{
      fontSize:40,
      color:'#000000'
    }
});

export default App;
