import React ,{useEffect}from 'react'
import { View, Text ,StyleSheet, Image} from 'react-native'

const LandingPage = ({navigation}:any) => {
   useEffect(() => {
    setTimeout(() => {
       navigation.replace('Signin')
    }, 2000);
   }, [])
   
  return (
    <View style={styles.body}>
      <Text style={styles.text}>VIVIDPAY</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    body:{
      flex:1,
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:'#623ECA'
    },
    text:{
      fontSize:70,
      color:'#FFF7F2',
      fontWeight:'600',
      textAlign:'center',
      // margin:'10'
    }
});
export default LandingPage