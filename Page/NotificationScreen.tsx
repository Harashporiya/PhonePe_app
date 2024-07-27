import { View, Text, StyleSheet } from 'react-native'
import React from 'react'


const NotificationScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={{color:"white"}}>NotificationScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#0f0317"
  }
})

export default NotificationScreen