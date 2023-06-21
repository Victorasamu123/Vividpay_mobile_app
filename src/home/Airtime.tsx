import { StyleSheet, Text, View, ScrollView , Image, TextInput, Pressable} from 'react-native'
import React ,{useState,useEffect}from 'react'

const Airtime = ()=>{
  const [isFocused, setIsFocused]=useState(false);
  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };
  const inputStyles = [
    styles.input,
    isFocused ? styles.inputFocused : null,
  ];
    return(
     <ScrollView style={styles.body}>
        <View style={styles.bodyView}>
          <View style={styles.head}>
            <Image source={require('../../assets/MTN-logo-459AAF9482-seeklogo.com.png')} style={styles.mtn}/>
            <Image source={require('../../assets/download.png')} style={styles.mtn}/>
            <Image source={require('../../assets/1630540.png')} style={styles.mtn}/>
            <Image source={require('../../assets/download.jpg')} style={styles.mtn}/>
          </View>
          <View style={styles.phoneInput}>
          <TextInput placeholder='Enter valid number' keyboardType='phone-pad' placeholderTextColor="#757576" style={inputStyles} onFocus={handleFocus} onBlur={handleBlur}/>
          </View>
          <View style={styles.predictableAmount}>
           <View style={styles.fifty}>
            <Text style={styles.fiftynaira}>₦50</Text>
           </View>
           <View style={styles.fifty}>
            <Text style={styles.fiftynaira}>₦100</Text>
           </View>
           <View style={styles.fifty}>
            <Text style={styles.fiftynaira}>₦200</Text>
           </View>
          </View>
          <View style={styles.predictableAmount}>
           <View style={styles.fifty}>
            <Text style={styles.fiftynaira}>₦500</Text>
           </View>
           <View style={styles.fifty}>
            <Text style={styles.fiftynaira}>₦1000</Text>
           </View>
           <View style={styles.fifty}>
            <Text style={styles.fiftynaira}>₦2000</Text>
           </View>
          </View>
          <View style={styles.phoneInput}>
          <TextInput placeholder='₦50-₦50,000' keyboardType='phone-pad' placeholderTextColor="#757576" style={inputStyles} onFocus={handleFocus} onBlur={handleBlur}/>
          </View>
          <Pressable
      android_ripple={{color:'#ff00ff'}}
      style={styles.button}
      // onPress={proceed}
      >
      <Text style={styles.textbutton}>
          Proceed
        </Text>
      </Pressable>
        </View>
     </ScrollView> 
  )
}

const styles = StyleSheet.create({
  body:{
     flex:1
  },
  bodyView:{
    width:"100%",
    height:"100%",
     backgroundColor:'#F1F1F1',
     alignItems:"center"
  },
  head:{
    width:'95%',
    height:80,
    backgroundColor:'#ffffff',
    elevation: 1,
    marginTop:20,
    borderRadius: 6,
    alignItems:'center',
    justifyContent:"space-evenly",
    flexDirection:'row',
  },
  mtn:{
    height:50,
    width:50,
  },
  phoneInput:{
    width:'95%',
    height:80,
    backgroundColor:'#ffffff',
    elevation: 1,
    marginTop:20,
    borderRadius: 6,
    alignItems:'center',
    justifyContent:"center",
    padding:10,
  },
  input:{
    width:"100%",
    height:'100%',
    backgroundColor:"#F0F1F3",
    borderRadius:4,
    color:"#757576",
    fontWeight:"500",
    fontSize:18,
  },
    inputFocused: {
    borderColor: '#623ECA',
    borderWidth:1,
  },
  predictableAmount:{
    width:"95%",
    alignItems:"center",
    justifyContent:'space-evenly',
    marginTop:20,
    flexDirection:'row',
  },
  fifty:{
    width:100,
    height:60,
    backgroundColor:'#ffffff',
    elevation:1,
    borderRadius:6,
    alignItems:"center",
    justifyContent:'center',
  },
  fiftynaira:{
    color:'#000000',
    fontSize:30,
    fontWeight:'500'
  },
  button:{
    width:"95%",
    height:60,
    backgroundColor:"#623ECA",
    borderRadius:4,
    marginTop:20,
  },
  textbutton:{
    fontSize:20,
    color:"white",
    textAlign:'center',
    marginTop:20,
    fontWeight:'500'
 },
})
export default Airtime;