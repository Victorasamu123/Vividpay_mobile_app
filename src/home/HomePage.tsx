import { Image, StyleSheet, Text, View , ScrollView,Pressable} from 'react-native'
import React , {useEffect,useState}from 'react'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

const HomePage = ({navigation}:any) => {
  const [AccountBalance, setAccountBalance]=useState<number>(100000000)

  const accountNum = AccountBalance.toLocaleString()
  return (
     <View style={styles.body}>
       <ScrollView>
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
            <Text style={styles.balbodybal}>₦{accountNum}</Text>
            <Text style={styles.vivdtext}>Earn & refer</Text>
          </View>
         </View>
         {/* first three bch */}
         <View style={styles.fitsttwocarrier}>
            <Pressable onPress={()=>navigation.navigate('Sendmoney')} style={styles.firstbch}>
                <Image source={require('../../assets/svgexport-5.png')}/>
                <Text style={styles.sendmoney}>Send Money</Text>
                </Pressable>
            <Pressable onPress={()=>navigation.navigate('Fundwallet')} style={styles.secondbch}>
                <Image source={require('../../assets/svgexport-6.png')}/>
                <Text style={styles.fundwallet}>Fund Wallet</Text>
                </Pressable>
            <Pressable onPress={()=>navigation.navigate('Cashpin')} style={styles.thirdbch}>
                <Image source={require('../../assets/svgexport-7.png')}/>
                <Text style={styles.cashpin}>Cashpin</Text>
         </Pressable>
         </View>
         {/* second three bch */}
         <View style={styles.fitsttwocarrier}>
              <Pressable onPress={()=>navigation.navigate('Airtime')} style={styles.fourbch}>
                <Image source={require('../../assets/svgexport-8.png')}/>
                <Text style={styles.airtime}>Airtime</Text>
                </Pressable>
            <Pressable onPress={()=>navigation.navigate('Paybills')} style={styles.fivebch}>
                <Image source={require('../../assets/svgexport-9.png')}/>
                <Text style={styles.paybills}>Pay Bills</Text>
                </Pressable>
                <Pressable onPress={()=>navigation.navigate('Viewall')} style={styles.sixbch}>
                <Image source={require('../../assets/svgexport-10.png')}/>
                <Text style={styles.viewall}>View All</Text>
                </Pressable>
         </View>
         {/* transactio history */}
         <View style={styles.trans}>
        <View style={styles.transhead}>
        <Text style={styles.text}>Transaction</Text>
        <Text style={styles.text} onPress={()=>navigation.navigate('Transactions')}>View All<Image source={require("../../assets/svgexport-3.png")}/></Text>
        </View>
         </View>

         {/* end of body */}
        </View>
    </ScrollView>
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
        alignItems:"center",
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
        elevation:1,
        borderRadius:6,
        marginBottom:40,
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
       backgroundColor:'#FFF3F7',
       borderRadius:6,
       elevation:1,
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
       elevation:1,
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
       backgroundColor:'#F7F7FF',
       borderRadius:6,
       elevation:1,
       alignItems:'center',
       justifyContent:'center',
     },
     cashpin:{
        color:'#4317C0',
        fontWeight:'500',
        marginTop:5,
     },
     fourbch:{
       width:'27%',
       height:80,
       backgroundColor:'#FCF8EE',
       borderRadius:6,
       elevation:1,
       alignItems:'center',
       justifyContent:'center',
     },
     airtime:{
        color:'#8C6500',
        fontWeight:'500',
        marginTop:5,
     },
     fivebch:{
       width:'27%',
       height:80,
       backgroundColor:'#F1F4FB',
       borderRadius:6,
       elevation:1,
       alignItems:'center',
       justifyContent:'center',
     },
     paybills:{
        color:'#013AC0',
        fontWeight:'500',
        marginTop:5,
     },
     sixbch:{
       width:'27%',
       height:80,
       backgroundColor:'#FEF5FF',
       borderRadius:6,
       elevation:1,
       alignItems:'center',
       justifyContent:'center',
     },
     viewall:{
        color:'#AE00BB',
        fontWeight:'500',
        marginTop:5,
     },
})
export default HomePage;
