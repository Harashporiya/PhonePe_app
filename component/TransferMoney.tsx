import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { FontAwesome5, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';


const TransferMoney = () => {
  return (
    <>
      <View style={styles.transferContainer}>
        <Text style={styles.headerText}>Transfer Money</Text>
        <View style={styles.iconBoxContainer}>


          <View style={styles.iconBox}>
            <View style={styles.iconContainer}>
              <FontAwesome5 name='user' size={24} color='white' />
            </View>
            <Text style={styles.text}>To Mobile Number</Text>
          </View>

          <View style={styles.iconBox}>
            <View style={styles.iconContainer}>
              <AntDesign name='bank' size={24} color='white' />
            </View>
            <Text style={styles.text}>To Bank/UPI ID</Text>
          </View>

          <View style={styles.iconBox}>
            <View style={styles.iconContainer}>
              <FontAwesome5 name='user-circle' size={24} color='white' />
            </View>
            <Text style={styles.text}>To Self Account</Text>
          </View>
          <View style={styles.iconBox}>
            <View style={styles.iconContainer}>
              <MaterialCommunityIcons name='bank' size={24} color='white' />
            </View>
            <Text style={styles.text}>Check Bank Balance</Text>
          </View>
        </View>


        <View style={styles.footer}>
          <View style={styles.box}>
            <Text style={styles.try}>UPI Lite:<Text style={styles.trynow}> Try Now</Text></Text>
          </View>
          <View style={styles.box2}>
            <MaterialCommunityIcons name="data-matrix-scan" size={20} color="white" />

            <Text style={{ color: "white", marginHorizontal: 10 }}>UPI ID: 8278445136@ybl</Text>
          </View>
        </View>

      </View>

      <View style={styles.NowBox}>
        <View style={styles.wallet}>
          <MaterialIcons name="wallet" size={30} color="#8864bc" />
          <Text style={{ color: "white", marginHorizontal: 10 }}>PhonePe <Text style={{ fontWeight: "bold" }}>Wallet</Text></Text>
        </View>

        <View style={styles.wallet}>
          <MaterialIcons name="explore" size={24} color="#8864bc" />
          <Text style={{ color: "white", marginHorizontal: 10 }}>Explore <Text style={{ fontWeight: "bold" }}>Rewards</Text></Text>
        </View>

        <View style={styles.wallet}>
          <AntDesign name="notification" size={24} color="#8864bc" />
          <Text style={{ color: "white", marginHorizontal: 10 }}>Invite<Text style={{ fontWeight: "bold" }}> Now</Text></Text>
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
  },
  iconBox: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 20,
  },
  iconContainer: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#955fd1",
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
    fontWeight: "bold"
  },
  try: {
    color: "white",
  },
  box: {
    borderColor: "#4c4358",
    borderWidth: 2,
    borderRadius: 10,
    padding: 4,

  },
  box2: {
    borderColor: "#4c4358",
    borderWidth: 2,
    borderRadius: 10,
    padding: 4,
    flexDirection: "row",
    marginHorizontal: 20,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginLeft: 20,
  },
  trynow: {
    fontWeight: "bold",
    color: "#7c52a8",
    textDecorationLine: "underline"
  },
  NowBox: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    // margin: 10,
    padding: 10,
    // backgroundColor: "#21182b",
    borderRadius: 10,
  },
  wallet: {
    backgroundColor: "#2a1a36",
    padding: 10,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    // marginBottom: 10, 
    width: '30%',

  },
});

export default TransferMoney