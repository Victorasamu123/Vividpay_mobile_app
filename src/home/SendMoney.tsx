import { StyleSheet, Text, View, ScrollView,Pressable } from 'react-native'
import React from 'react'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

const SendMoney = ({navigate}:any)=>{
    return(
    <ScrollView style={styles.body}>
     <View style={styles.bodyView}>
      <View style={styles.bodyHead}>
         <Pressable style={styles.toVividpay}>
            <Text style={styles.optionText}>Send fund To Vividpay</Text>
         </Pressable>
         <Pressable style={styles.toOtherBanks}>

         </Pressable>
         <Pressable style={styles.toOtherBanks}>

         </Pressable>
      </View>
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

  },
  bodyHead:{
    width:'95%',
    alignItems:"center",
    justifyContent:'space-evenly',
    marginTop:10,
    flexDirection:'row',
  },
  toVividpay:{
    width:100,
    height:80,
    backgroundColor:'#623ECA',
    elevation:1,
    borderRadius:6,
    alignItems:'center',
    justifyContent:'center'
  },
  toOtherBanks:{
    width:100,
    height:80,
    backgroundColor:'#ffffff',
    elevation:1,
    borderRadius:6,
    borderColor:'#623ECA',
    borderWidth:1,
  }
})
export default SendMoney;