import React,{useState} from 'react'
import { StyleSheet, Text, View, ImageBackground, Image,TextInput , Pressable,ScrollView} from 'react-native'

const CompSignup = ({navigation}:any) => {
    const [isFocused, setIsFocused]=useState(false);
    const [isFocused2, setIsFocused2]=useState(false);
    const [isFocused3, setIsFocused3]=useState(false);
    const handleFocus = () => {
        setIsFocused(true);
      };
    
      const handleBlur = () => {
        setIsFocused(false);
      };
      const handleFocus2 = () => {
        setIsFocused2(true);
      };
    
      const handleBlur2 = () => {
        setIsFocused2(false);
      };
      const handleFocus3 = () => {
        setIsFocused3(true);
      };
    
      const handleBlur3 = () => {
        setIsFocused3(false);
      };
    
      const inputStyles = [
        styles.input,
        isFocused ? styles.inputFocused : null,
      ];
      const inputStyles2 = [
        styles.input2,
        isFocused2 ? styles.inputFocused : null,
      ];
      const inputStyles3 = [
        styles.input3,
        isFocused3 ? styles.inputFocused : null,
      ];
      const proceed =()=>{
        navigation.navigate('Home')
      }
  return (
    <ScrollView>
    <ImageBackground source={require('../../assets/svgexport-1.png')} style={styles.body}>
    <View >
      <Image source={require('../../assets/hello.png')}/>
    </View>
    <View>
      <Text style={styles.signintext}>Complete Process</Text>
      <Text style={styles.welcometext}>Complete signup process</Text>
    </View>
    <View style={styles.inputholder}>
      <TextInput placeholder='Enter your Phonenumber' keyboardType="phone-pad"  placeholderTextColor="#757576" style={inputStyles} onFocus={handleFocus} onBlur={handleBlur}/>
    <TextInput placeholder='Enter Bank verification number' style={inputStyles2} placeholderTextColor="#757576" onFocus={handleFocus2} onBlur={handleBlur2} keyboardType="number-pad"/>
    <TextInput placeholder='Password should contain at least 8 characters' style={inputStyles3} placeholderTextColor="#757576" onFocus={handleFocus3} onBlur={handleBlur3} secureTextEntry={true}/>
    </View>
    <View>
    <Pressable
      android_ripple={{color:'#ff00ff'}}
      style={styles.button}
      onPress={proceed}
      >
      <Text style={styles.textbutton}>
          Sign Up
        </Text>
      </Pressable>
    </View>
  </ImageBackground>
  </ScrollView>
  )
}

const styles = StyleSheet.create({
    body:{
        flex:1,
        backgroundColor:"#FFF7F2",
        alignItems:"center",
        // justifyContent:"center",
    },
    signintext:{
        fontSize:42,
        color:'#220C60',
        fontWeight:"300",
        textAlign:'center'
    },
    welcometext:{
        fontSize:28,
        color:'#757576',
        fontWeight:"500",
        textAlign:'center'
    },
    inputholder:{
       margin:50
    },
    input:{
        width:300,
        height:60,
        backgroundColor:"#F0F1F3",
        borderRadius:4,
        color:"#757576",
        fontWeight:"500",
        paddingLeft:20,
        marginBottom:20,
    },
    inputFocused: {
    borderColor: '#623ECA',
    borderWidth:1,
  },
  button:{
    width:300,
    height:60,
    backgroundColor:"#623ECA",
    borderRadius:4,
  },
  input2:{
    width:300,
    height:60,
    backgroundColor:"#F0F1F3",
    borderRadius:4,
    color:"#757576",
    fontWeight:"500",
    paddingLeft:20,
    marginBottom:20,
},
input3:{
    width:300,
    height:60,
    backgroundColor:"#F0F1F3",
    borderRadius:4,
    color:"#757576",
    fontWeight:"500",
    paddingLeft:20,
},
 textbutton:{
    fontSize:20,
    color:"white",
    textAlign:'center',
    marginTop:20,
    fontWeight:'500'
 },
 qes:{
    color:'black',
    fontSize:20,
    marginTop:20, 
    textAlign:"center"
 },
 qes2:{
    color:'#623ECA',
    fontSize:22,
    marginTop:20, 
    fontWeight:'500'
 }
})
export default CompSignup;
