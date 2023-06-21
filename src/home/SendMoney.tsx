import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'

const SendMoney = ()=>{
    return(
    <ScrollView style={styles.body}>
     <View style={styles.bodyView}>
      
     </View>
    </ScrollView>
  )
}


const styles = StyleSheet.create({
  body:{
    flex:1
  },
  bodyView:{
    width:'100%',
    height:'100%',
    backgroundColor:'#F1F1F1',
    alignItems:"center"

  }
})
export default SendMoney;