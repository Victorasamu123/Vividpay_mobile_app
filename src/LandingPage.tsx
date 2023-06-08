import React ,{useEffect}from 'react'
import { View, Text ,StyleSheet, Image} from 'react-native'

const LandingPage = ({navigation}:any) => {
   useEffect(() => {
    setTimeout(() => {
       navigation.replace('Signin')
    }, 3000);
   }, [])
   
  return (
    <View style={styles.body}>
      <Image source={require("../assets/hello.png")}/>
      <Text style={styles.text}>Not Just Another Payment App</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    body:{
      flex:1,
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:'#FFF7F2'
    },
    text:{
      fontSize:30,
      color:'#000000',
      textAlign:'center',
      // margin:'10'
    }
});
export default LandingPage