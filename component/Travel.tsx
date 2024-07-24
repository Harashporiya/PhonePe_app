import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { FontAwesome6, FontAwesome5, MaterialCommunityIcons,Ionicons } from '@expo/vector-icons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';


const Travel = () => {
  return (
    <>
      <View style={styles.transferContainer}>
        <View style={styles.recharge}>
          <Text style={styles.headerText}>Travel</Text>
          <Text style={styles.all}>View All</Text>
        </View>

        <View style={styles.iconBoxContainer}>

          
          <View style={styles.iconBox}>
            <View style={styles.iconContainer}>
            <Ionicons name="airplane" size={24} color="#9e5ed8" />
            </View>
            <Text style={styles.text}>Flights</Text>
          </View>
         

          <View style={styles.iconBox}>
            <View style={styles.iconContainer}>
            <FontAwesome5 name="bus-alt" size={24} color="#9e5ed8" />
            </View>
            <Text style={styles.text}>Bus</Text>
          </View>

          <View style={styles.iconBox}>
            <View style={styles.iconContainer}>
            <FontAwesome6 name="train-subway" size={24} color="#9e5ed8" />
            </View>
            <Text style={styles.text}>Trains</Text>
          </View>

          <View style={styles.iconBox}>
            <View style={styles.iconContainer}>
            <FontAwesome5 name="hotel" size={24} color="#9e5ed8" />
            </View>
            <Text style={styles.text}>Hotels</Text>
          </View>
        </View>

      </View>

    </>
  )
}
const styles = StyleSheet.create({
  transferContainer: {
    margin: 10,
    padding: 10,
    backgroundColor: "#21182b",
    borderRadius: 10,
  },
  iconBoxContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: 'wrap',
    marginTop: 20
  },
  iconBox: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 20,
  },
  iconContainer: {
    // padding: 10,
    // borderRadius: 10,
    // backgroundColor: "#955fd1",
    marginBottom: 5,
  },
  text: {
    fontSize: 12,
    color: "white",
    width: "100%",
    textAlign: "center"
  },
  headerText: {
    fontSize: 16,
    color: "white",
    marginBottom: 10,
    fontWeight: "bold",
    marginLeft: 10
  },
  all: {
    backgroundColor: "#32293c",
    fontWeight: "bold",
    color: "white",
    padding: 10,
    borderRadius: 5,
    fontSize: 12
  },
  recharge: {
    flexDirection: "row",
    justifyContent: "space-between"
  }
});

export default Travel