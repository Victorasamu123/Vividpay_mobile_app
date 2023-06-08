import React , {useState}from 'react'
import { StyleSheet, Text, View, ImageBackground, Image,TextInput , Pressable} from 'react-native'

const SignIn = ({navigation}:any) => {
    const [isFocused, setIsFocused]=useState(false);
    const [isFocused2, setIsFocused2]=useState(false);
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
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
    
      const inputStyles = [
        styles.input,
        isFocused ? styles.inputFocused : null,
      ];
      const inputStyles2 = [
        styles.input2,
        isFocused2 ? styles.inputFocused : null,
      ];
  return (
    <ImageBackground source={require('../../assets/svgexport-1.png')} style={styles.body}>
      <View >
        <Image source={require('../../assets/hello.png')}/>
      </View>
      <View>
        <Text style={styles.signintext}>Sign In</Text>
        <Text style={styles.welcometext}>Welcome back😜</Text>
      </View>
      <View style={styles.inputholder}>
        <TextInput placeholder='Enter email address' style={inputStyles} placeholderTextColor="#757576" onFocus={handleFocus}
      onBlur={handleBlur} keyboardType="email-address"/>
      <TextInput placeholder='Password should contain at least 8 characters' style={inputStyles2} placeholderTextColor="#757576" onFocus={handleFocus2}
      onBlur={handleBlur2} secureTextEntry={!showPassword}
      value={password}
      onChangeText={setPassword}/>
      </View>
      <View>
      <Pressable
        android_ripple={{color:'#ff00ff'}}
        style={styles.button}
        >
        <Text style={styles.textbutton}>
            SignIn
          </Text>
        </Pressable>
        <View>
            <Text style={styles.qes}>Do not have an Account? <Text onPress={()=>navigation.navigate('SignUp')} style={styles.qes2}>Signup</Text></Text>
        </View>
      </View>
    </ImageBackground>
  )
}

export default SignIn

const styles = StyleSheet.create({
    body:{
        flex:1,
        backgroundColor:"#FFF7F2",
        alignItems:"center",
        // justifyContent:"center",
    },
    signintext:{
        fontSize:52,
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
        marginBottom:40,
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