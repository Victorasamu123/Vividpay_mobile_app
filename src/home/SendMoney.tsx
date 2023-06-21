import { StyleSheet, Text, View, ScrollView,Pressable, TextInput} from 'react-native'
import React from 'react'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

const SendMoney = ({navigation}:any)=>{
    return(
    <ScrollView style={styles.body}>
     <View style={styles.bodyView}>
      <View style={styles.bodyHead}>
         <Pressable style={styles.toVividpay}>
            <Text style={styles.optionText}>Send</Text>
            <Text style={styles.optionText}>To</Text>
            <Text style={styles.optionText}>Vividpay</Text>
         </Pressable>
         <Pressable onPress={()=>navigation.navigate('OtherBanks')} style={styles.toOtherBanks}>
            <Text style={styles.optionText2}>Send</Text>
            <Text style={styles.optionText2}>To</Text>
            <Text style={styles.optionText2}>other Banks</Text>
         </Pressable>
         <Pressable onPress={()=>navigation.navigate('PrepaidAccount')} style={styles.toOtherBanks}>
            <Text style={styles.optionText2}>Send</Text>
            <Text style={styles.optionText2}>To</Text>
            <Text style={styles.optionText2}>prepaid account</Text>
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
    alignItems:'center',
    justifyContent:'center'
  },
  optionText:{
    color:"#ffffff",
    fontSize:18,
  },
  optionText2:{
    color:"#623ECA",
    fontSize:18,
  }
})
export default SendMoney;