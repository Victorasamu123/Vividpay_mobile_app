/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

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


function App(): JSX.Element {

  return (
    <NavigationContainer>
      
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
