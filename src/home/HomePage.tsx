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
            {/* available balance */}
         <View style={styles.available}>
           <View style={styles.availheader}>
            <Image source={require("../../assets/svgexport.png")}/>
            <Text style={styles.availheadertext}>Available Balance</Text>
           </View>
           <Text style={styles.availbodytext}>₦0.00</Text>
         </View>
         {/* withdrawable balance */}
         <View style={styles.withdraw}>
           <View style={styles.withheader}>
            <Image source={require("../../assets/svgexport-2.png")}/>
            <Text style={styles.withheadertext}>Withdrawable Balance</Text>
           </View>
           <Text style={styles.withbodytext}>₦0.00</Text>
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
        height:100,
        backgroundColor:'#ffffff',
        marginTop:30,
        elevation:5,
        borderRadius:6
     },
     availheader:{
        flexDirection:'row',
        paddingLeft:15,
        paddingTop:15
    },
     availheadertext:{
      color: '#220C60',
      fontSize: 26,
      fontWeight: 'bold',
      marginLeft:10,
     },
     availbodytext:{
      color: '#220C60',
      fontSize: 26,
      fontWeight: "600",
      marginLeft:15,
      marginTop:10,
     },
     withdraw:{
        width:'90%',
        height:100,
        backgroundColor:'#F1F4FB',
        marginTop:10,
        elevation:5,
        borderRadius:6
     },
     withheader:{
        flexDirection:'row',
        paddingLeft:15,
        paddingTop:15
    },
     withheadertext:{
      color: '#013AC0',
      fontSize: 26,
      fontWeight: 'bold',
      marginLeft:10,
     },
     withbodytext:{
      color: '#013AC0',
      fontSize: 26,
      fontWeight: "600",
      marginLeft:15,
      marginTop:10,
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
     }
})
export default HomePage;
