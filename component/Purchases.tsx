import { View, Text, StyleSheet,  Image } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';



const Purchases = () => {

  return (
    <>
      <View style={styles.transferContainer}>
        <View style={styles.recharge}>
          <Text style={styles.headerText}>Purchases</Text>
          <Text style={styles.all}>View All</Text>
        </View>

        <View style={styles.iconBoxContainer}>

          
          <View style={styles.iconBox}>
            <View style={styles.iconContainer}>
            <MaterialCommunityIcons name="podium-gold" size={24} color="#9e5ed8" />
            </View>
            <Text style={styles.text}>Gold</Text>
          </View>
         

          <View style={styles.iconBox}>
       
              <View style={styles.iconContainer}>
                <Image
                  source={{ uri: "https://static1.xdaimages.com/wordpress/wp-content/uploads/2019/05/play-store-1.jpg"}}
                  style={styles.image}
                />
              </View>
         

            <Text style={styles.text}>Google Play</Text>
          </View>

          <View style={styles.iconBox}>
            <View style={styles.iconContainer}>
            <MaterialCommunityIcons   name="ticket-outline" size={28} color="#9e5ed8" />

            </View>
            <Text style={styles.text}>Brand Vouchers</Text>
          </View>

          <View style={styles.iconBox}>
            <View style={styles.iconContainer}>
            <Image
                  source={{ uri: "https://cdsassets.apple.com/live/7WUAS350/images/gifting/gift-cards-and-certificates/gift-cards-app-store-itunes.png"}}
                  style={styles.image}
                />
            </View>
            <Text style={styles.text}>Gold Loan</Text>
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

export default Purchases