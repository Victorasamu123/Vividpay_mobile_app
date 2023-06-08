import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from './HomePage';
const Home = () => {
    const Tab = createBottomTabNavigator();
  return (
      <Tab.Navigator
       initialRouteName='HomePage'
      >
        <Tab.Screen 
         name="HomePage"
         component={HomePage}
        />
      </Tab.Navigator>
  )
}

export default Home

const styles = StyleSheet.create({})