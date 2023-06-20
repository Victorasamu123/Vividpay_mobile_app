import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HomePage = ({navigation}:any) => {
  return (
    <View style={styles.body}>
        {/* //heder */}
        <View style={styles.headerView}>
        <Text style={styles.dashtext}>Dashboard</Text>
        <Text style={styles.text}>Hi, oluwajuwon</Text>
        </View>
        {/* body side */}
        <View style={styles.bodyview}>
            {/* balance */}
         <View style={styles.available}>
          <View style={styles.balhead}>
            <Text style={styles.totaltext}>Total Balance</Text>
            <Text style={styles.vivdtext}>Vividpay</Text>
          </View>
          <View style={styles.balbody}>
            <Text style={styles.balbodybal}>₦100000000</Text>
            <Text style={styles.vivdtext}>Earn & refer</Text>
          </View>
         </View>
         {/* first three bch */}
         <View style={styles.fitsttwocarrier}>
            <View style={styles.firstbch}>
                <Image source={require('../../assets/svgexport-5.png')}/>
                <Text style={styles.sendmoney}>Send Money</Text>
            </View>
            <View style={styles.secondbch}>
                <Image source={require('../../assets/svgexport-6.png')}/>
                <Text style={styles.fundwallet}>Fund Wallet</Text>
            </View>
            <View style={styles.thirdbch}>
                <Image source={require('../../assets/svgexport-7.png')}/>
                <Text style={styles.cashpin}>Cashpin</Text>
            </View>
         </View>
         {/* second three bch */}
         <View style={styles.fitsttwocarrier}>
            <View style={styles.firstbch}>
                <Image source={require('../../assets/svgexport-5.png')}/>
                <Text style={styles.sendmoney}>Send Money</Text>
            </View>
            <View style={styles.secondbch}>
                <Image source={require('../../assets/svgexport-6.png')}/>
                <Text style={styles.fundwallet}>Fund Wallet</Text>
            </View>
            <View style={styles.thirdbch}>
                <Image source={require('../../assets/svgexport-7.png')}/>
                <Text style={styles.cashpin}>Cashpin</Text>
            </View>
         </View>
         {/* transactio history */}
         {/* <View style={styles.trans}>
        <View style={styles.transhead}>
        <Text style={styles.text}>Transaction</Text>
        <Text style={styles.text} onPress={()=>navigation.navigate('Transactions')}>View All<Image source={require("../../assets/svgexport-3.png")}/></Text>
        </View>
         </View> */}

         {/* end of body */}
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    body:{
        flex:1
    },
    headerView:{
        width:'100%',
        height:"10%",
        backgroundColor:'#ffffff',
        flexDirection:"row",
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        elevation:4
    },
    dashtext: {
      color: '#623ECA',
      fontSize: 30,
      fontWeight: 'bold',
      marginLeft:20,
    },
    text: {
      color: 'black',
      fontSize: 16,
      fontWeight: 'bold',
      marginRight:10,
    },
     bodyview:{
        width:'100%',
        height:"90%",
        backgroundColor:'#F1F1F1',
        alignItems:"center"
     },
     available:{
        width:'90%',
        height:150,
        backgroundColor:'#623ECA',
        marginTop:20,
        elevation:5,
        borderRadius:6
     },
     balhead:{
        flexDirection:"row",
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingTop:15,
     },
     totaltext:{
       color: '#ffffff',
      fontSize: 20,
      fontWeight: '500',
     },
     vivdtext:{
        color:'#ffffff',
        fontSize:16,
        fontWeight:'bold'
     },
     balbody:{
        flexDirection:"row",
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        marginTop:70,
     },
     balbodybal:{
        color: '#ffffff',
      fontSize: 30,
      fontWeight: '500',
     },
     trans:{
        width:'90%',
        height:90,
        backgroundColor:'#ffffff',
        marginTop:20,
        elevation:4,
        borderRadius:6,
        
     },
     transhead:{
       flexDirection:'row',
       justifyContent:'space-between',
       paddingHorizontal:10,
       paddingVertical:10,
     },
     quicklinks:{
        width:'90%',
        height:290,
        backgroundColor:'#ffffff',
        marginTop:20,
        elevation:4,
        borderRadius:6,

     },
     textquick:{
      color: '#00000090',
      fontSize: 20,
      fontWeight: "600",
      marginLeft:15,
      marginTop:10,
     },
     fitsttwocarrier:{
        width:"100%",
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly',
        marginTop:20
     },
     firstbch:{
       width:'27%',
       height:80,
       backgroundColor:'#FBF1F1',
       borderRadius:6,
       elevation:5,
       alignItems:'center',
       justifyContent:'center',

     },
     sendmoney:{
        color:'#C02634',
        fontWeight:'500',
        marginTop:5,
     },
     secondbch:{
       width:'27%',
       height:80,
       backgroundColor:'#F0F7F4',
       borderRadius:6,
       elevation:5,
       alignItems:'center',
       justifyContent:'center',
     },
     fundwallet:{
        color:'#1E8A5E',
        fontWeight:'500',
        marginTop:5,
     },
     thirdbch:{
       width:'27%',
       height:80,
       backgroundColor:'#F7F6FC',
       borderRadius:6,
       elevation:5,
       alignItems:'center',
       justifyContent:'center',
     },
     cashpin:{
        color:'#4317C0',
        fontWeight:'500',
        marginTop:5,
     },
})
export default HomePage;
