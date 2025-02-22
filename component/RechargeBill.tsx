import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { FontAwesome, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';


const RechargeBill = () => {
  return (
    <>
      <View style={styles.transferContainer}>
        <View style={styles.recharge}>
          <Text style={styles.headerText}>Recharge & Pay Bill</Text>
          <Text style={styles.all}>View All</Text>
        </View>

        <View style={styles.iconBoxContainer}>

          
          <View style={styles.iconBox}>
            <View style={styles.iconContainer}>
              <MaterialIcons name="mobile-friendly" size={26} color="#9e5ed8" />
            </View>
            <Text style={styles.text}>Mobile Recharge</Text>
          </View>
         

          <View style={styles.iconBox}>
            <View style={styles.iconContainer}>
              <MaterialCommunityIcons name="cash" size={26} color="#9e5ed8" />
            </View>
            <Text style={styles.text}>Loan Repayment</Text>
          </View>

          <View style={styles.iconBox}>
            <View style={styles.iconContainer}>
              <FontAwesome name="credit-card-alt" size={24} color="#9e5ed8" />
            </View>
            <Text style={styles.text}>Credit Card Payment</Text>
          </View>

          <View style={styles.iconBox}>
            <View style={styles.iconContainer}>
              <FontAwesome5 name="home" size={26} color="#9e5ed8" />
            </View>
            <Text style={styles.text}>Rent</Text>
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
    // padding: 2,
    // borderRadius: 10,
    // backgroundColor: "#955fd1",
    marginBottom: 5,
  },
  text: {
    fontSize: 12,
    color: "white",
    width: "90%",
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

export default RechargeBill