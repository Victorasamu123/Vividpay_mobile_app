import React from 'react'
import { View, Text ,StyleSheet} from 'react-native'

const LandingPage = () => {
  return (
    <View style={styles.body}>
      <Text style={styles.text}>LandingPage</Text>
    </View>
  )
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
export default LandingPage