import { View, Text, StyleSheet, Image, TouchableOpacity, Linking } from 'react-native';
import React from 'react';

const SponsoredLinks = () => {
  const openLink = (url) => {
    Linking.openURL(url).catch(err => console.error("Couldn't load page", err));
  };

  return (
    <>
      <View style={styles.transferContainer}>
        <View style={styles.recharge}>
          <Text style={styles.headerText}>Sponsored Links</Text>
        </View>
        
        <View style={styles.iconBoxContainer}>
          
          <View style={styles.iconBox}>
            <TouchableOpacity onPress={() => openLink("https://www.a23.com/rummy.html?af_c_id=BC2407051841293388529521&pid=phonepe_int&af_click_lookback=7d&af_ad=OF-28921_A23_HomeIcon_CPC16_2&af_channel=Phonepe&clickid=CK2407242004207796345332&af_siteid=PUB22024&af_ref=Phonepe_CK2407242004207796345332&af_sub_siteid=ADU2209051225197071409807&advertising_id=8bc3f01f-7dd4-4550-a123-33113a127649&af_ad_id=BAD2407051843369908529238&c=Rummy_PhonePe_Perf_Mar_HPicon&referrer=Phonepe_CK2407242004207796345332")}>
              <View style={styles.iconContainer}>
                <Image
                  source={{ uri: "https://www.a23.com/assets/images/main-body/rummy/rummyvariants_lp.webp" }}
                  style={styles.image}
                />
              </View>
            </TouchableOpacity>
            <Text style={styles.text}>A23 Rummy</Text>
          </View>
         
          <View style={styles.iconBox}>
            <TouchableOpacity onPress={() => openLink("https://www.rummycircle.com/play-online-rummy-fs-nb.html?af_pmod_lookback_window=7d&af_c_id=BC2406292304452091588419&af_pmod_priority=equal&pid=phonepe_int&af_click_lookback=7d&utm_content=walletbalance500on200&utm_source=blinkdigital_phonepe&af_redirect=true&utm_medium=homepageiconcoinsbl&af_adset=homepageiconcoinsbl&af_ad=walletbalance500on200&utm_campaign=app_panindia&deep_link_value=https%3A%2F%2Fwww.rummycircle.com%2FaddCash&af_channel=blinkdigital_phonepe&clickid=CK2407242004207756345264&utm_placement=get-rs500-wallet-balance-munmun-eng-1572024&af_siteid=PUB22024&af_ref=Phonepe_CK2407242004207756345264&af_sub_siteid=ADU2209051225197071409807&advertising_id=8bc3f01f-7dd4-4550-a123-33113a127649&utm_term=CK2407242004207756345264&af_ad_id=BAD2407231807435335717279&c=app_panindia&referrer=Phonepe_CK2407242004207756345264")}>
              <View style={styles.iconContainer}>
                <Image
                  source={{ uri: "https://play-lh.googleusercontent.com/S6lxmcOpX4zQLj2JEWcPKe3RrlVJIenxriVF-QjAcVxcnlRbrYtC46MsSLcytqW_zh8" }}
                  style={styles.image}
                />
              </View>
            </TouchableOpacity>
            <Text style={styles.text}>RummyCircle</Text>
          </View>

          <View style={styles.iconBox}>
            <TouchableOpacity onPress={() => openLink("https://play.google.com/store/apps/details?id=com.phonepe.stockbroking")}>
              <View style={styles.iconContainer}>
                <Image
                  source={{ uri: "https://play-lh.googleusercontent.com/87GEovTOpwWXe6d6kXV5qvG2-2B7lhMPe6rPV3TdoovL-tBWfF20zunDKlrTeOblag" }}
                  style={styles.image}
                />
              </View>
            </TouchableOpacity>
            <Text style={styles.text}>Share.Market</Text>
          </View>

          <View style={styles.iconBox}>
            <TouchableOpacity onPress={() => openLink("https://www.buddyloan.com/")}>
              <View style={styles.iconContainer}>
                <Image
                  source={{ uri: "https://play-lh.googleusercontent.com/G9tUm4oC57E6QQ9ZRbdmAjM1832BdRPw9B8lRweKn2QuPfdMM4LCCz68J22k3w_Vb_w" }}
                  style={styles.image}
                />
              </View>
            </TouchableOpacity>
            <Text style={styles.text}>Buddy Loan</Text>
          </View>
        </View>

      </View>
    </>
  );
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
    marginBottom: 5,
  },
  image: {
    width: 60, 
    height: 60,
    borderRadius: 20,
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

export default SponsoredLinks;
