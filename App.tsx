import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import Header from './component/Header';
import TransferMoney from './component/TransferMoney';
import RechargeBill from './component/RechargeBill';

const App = () => {
  return (
    <>
      <Header />
      <View style={styles.container}>
      <TransferMoney/> 
      <RechargeBill/>
      </View>

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
