import { View, Text, StyleSheet, Image, TouchableOpacity, Linking } from 'react-native';
import React from 'react';

const GameSponsored = () => {
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
            <TouchableOpacity onPress={() => openLink("https://www.pokercircle.co.in/play-online-poker-65000.html?utm_placement=aanchal-munjal-65k-welcome-bonus-2462024&af_pmod_lookback_window=2d&af_c_id=BC2407221834116528504327&af_pmod_priority=equal&pid=phonepe_int&is_retargeting=true&af_click_lookback=7d&utm_content=pkr_wc65K_aanchal&utm_source=pkr_blink_phonepe&af_sub2=click_id_here&utm_medium=sponsoredgamesicon&af_adset=sponsoredgamesicon&af_ad=pkr_wc65K_aanchal&utm_campaign=welcome_bonus&af_channel=pkr_blink_phonepe&clickid=CK2407242152481724510805&af_reengagement_window=7d&af_siteid=PUB22021&af_ref=Phonepe_CK2407242152481724510805&af_sub_siteid=ADU2209141633472225663960&advertising_id=8bc3f01f-7dd4-4550-a123-33113a127649&utm_term=click_id_here&af_ad_id=BAD2407221840235338504640&c=welcome_bonus&referrer=Phonepe_CK2407242152481724510805")}>
              <View style={styles.iconContainer}>
                <Image
                  source={{ uri: "https://is2-ssl.mzstatic.com/image/thumb/Purple122/v4/1e/75/df/1e75df10-4f6d-7732-9266-7ecc0d516c0b/source/512x512bb.jpg" }}
                  style={styles.image}
                />
              </View>
            </TouchableOpacity>
            <Text style={styles.text}>PokerCircle</Text>
          </View>
         
          <View style={styles.iconBox}>
            <TouchableOpacity onPress={() => openLink("https://play.google.com/store/search?q=taj+rummy&c=apps&hl=en")}>
              <View style={styles.iconContainer}>
                <Image
                  source={{ uri:"https://imag.malavida.com/mvimgbig/download-fs/taj-rummy-29252-0.jpg" }}
                  style={styles.image}
                />
              </View>
            </TouchableOpacity>
            <Text style={styles.text}>Taj Rummy</Text>
          </View>

          <View style={styles.iconBox}>
            <TouchableOpacity onPress={() => openLink("https://play.google.com/store/apps/details?id=com.phonepe.stockbroking")}>
              <View style={styles.iconContainer}>
                <Image
                  source={{ uri:"https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/0c/2d/78/0c2d7827-8771-729d-1f1a-434636eda893/AppIcon-1x_U007ephone-0-0-0-P3-85-220-0.png/1200x600wa.png" }}
                  style={styles.image}
                />
              </View>
            </TouchableOpacity>
            <Text style={styles.text}>MPL Cards</Text>
          </View>

          <View style={styles.iconBox}>
            <TouchableOpacity onPress={() => openLink("https://www.buddyloan.com/")}>
              <View style={styles.iconContainer}>
                <Image
                  source={{ uri: "https://d3g4wmezrjkwkg.cloudfront.net/website/images/homePage/ludo-en.webp" }}
                  style={styles.image}
                />
              </View>
            </TouchableOpacity>
            <Text style={styles.text}>WinZO Ludo</Text>
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

export default GameSponsored;
