import { View, Text, StyleSheet,Linking, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesome, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Fontisto } from '@expo/vector-icons';

const TransitFood = () => {
    const openLink = (url) => {
        Linking.openURL(url).catch(err => console.error("Couldn't load page", err));
      };
  return (
    <>
      <View style={styles.transferContainer}>
        <View style={styles.recharge}>
          <Text style={styles.headerText}>Transit & Food</Text>
          <Text style={styles.all}>View All</Text>
        </View>

        <View style={styles.iconBoxContainer}>

          
        <View style={styles.iconBox}>
            <TouchableOpacity onPress={() => openLink("https://www.icicibank.com/personal-banking/accounts/savings-account?ITM=nli_cms_accounts_savings_account_header_nav.html")}>
              <View style={styles.iconContainer}>
                <Image
                  source={{ uri: "https://pbs.twimg.com/profile_images/1158978933200568321/o5nAuaRq_400x400.png" }}
                  style={styles.image}
                />
              </View>
            </TouchableOpacity>
            <Text style={styles.text}>Buy FASTag</Text>
          </View>
         

          <View style={styles.iconBox}>
            <View style={styles.iconContainer}>
            <Fontisto name="metro" size={38} color="#9e5ed8" />
            </View>
            <Text style={styles.text}>Metro</Text>
          </View>

          <View style={styles.iconBox}>
            <View style={styles.iconContainer}>
            <MaterialCommunityIcons name="credit-card-outline" size={28} color="#9e5ed8" />

            </View>
            <Text style={styles.text}>NCMC Recharge</Text>
          </View>

          <View style={styles.iconBox}>
            <View style={styles.iconContainer}>
            <FontAwesome name="cab" size={24} color="#9e5ed8" />
            </View>
            <Text style={styles.text}>Prepaid Cabs</Text>
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
  },
  image: {
    width: 40, 
    height: 40,
    borderRadius: 10,
  },
});

export default TransitFood