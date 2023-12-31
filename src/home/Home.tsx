import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from './HomePage';
import CashPin from './CashPin';
import Cards from './Cards';
import Profile from './Profile';
const Home = () => {
    const Tab = createBottomTabNavigator();
  return (
      <Tab.Navigator
       initialRouteName='HomePage'
      >
        <Tab.Screen 
         name="HomePage"
         component={HomePage}
         options={{
            header:()=>null
         }}
        />
        <Tab.Screen 
         name="Cashpin"
         component={CashPin}
        //  options={{
        //     header:()=>null
        //  }}
        />
        <Tab.Screen 
         name="Cards"
         component={Cards}
        //  options={{
        //     header:()=>null
        //  }}
        />
        <Tab.Screen 
         name="Profile"
         component={Profile}
        //  options={{
        //     header:()=>null
        //  }}
        />
      </Tab.Navigator>
  )
}

export default Home

const styles = StyleSheet.create({})