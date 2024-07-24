import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import Header from './component/Header';
import TransferMoney from './component/TransferMoney';
import RechargeBill from './component/RechargeBill';
import Loan from './component/Loan';
import SponsoredLinks from './component/SponsoredLinks';
import Insurance from './component/Insurance';
import Travel from './component/Travel';
import Slider from './component/Slider';
import TransitFood from './component/TransitFood';
import Purchases from './component/Purchases';
import GameSponsored from './component/GameSponsored';

const App = () => {
  return (
    <>
    
      <Header  />
      <ScrollView>
      <View style={styles.container}>
      <TransferMoney/> 
      <RechargeBill/>
      <Loan/>
      <SponsoredLinks/>
      <Insurance/>
      <Travel/>
      <Slider/>
      <TransitFood/>
      <Purchases/>
      <GameSponsored/>
      </View>

    </ScrollView>
    </>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f0317",
    
  }
});

export default App;
