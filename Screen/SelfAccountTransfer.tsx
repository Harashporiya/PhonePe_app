import { View, Text,StyleSheet, Image } from 'react-native'
import React from 'react'

const SelfAccountTransfer = () => {
  return (
    <>
    <View style={styles.container}>
     <View>
        <Image style={styles.image} source={{uri:"https://nextbigtechnology.com/wp-content/uploads/2021/03/PhonePe-Clone-banner-img1.png"}}/>
     </View>
     <Text style={styles.money}>Transfer money between your bank accounts!</Text>
     <Text style={styles.link}>Link multiple bank account and transfer money easily between your own account</Text>
    </View>
   <View style={styles.add}>
    <Text  style={styles.text}>ADD BANK ACCOUNT</Text>
   </View>
    </>
  )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    add:{
        backgroundColor:"#5f259e",
        padding:20
    },
    text:{
        color:"white",
        textAlign:"center"
    },
    image:{
        height:400,
        width:440,
    },
    money:{
        color:"#7946c7",
        fontSize:25,
        fontWeight:"bold",
        textAlign:"center"
    },
    link:{
        fontSize:20,
        padding:20,
        textAlign:"center",
        color:"#555555"
    }
})
export default SelfAccountTransfer