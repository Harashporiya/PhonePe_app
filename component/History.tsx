import { View, Text, StyleSheet, TextInput } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import Header from './Header';
import Footer from './Footer';

const History = () => {
  return (
    <>
      <Header/>
      <View style={styles.container}>
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={20} color="gray" style={styles.icon} />
          <TextInput
            style={styles.searchInput}
            placeholder='Search by name, number or UPI ID'
            placeholderTextColor="#877897"
          />
        </View>
      </View>
      <Footer/>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#100718",
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#21182b',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    margin:10,
    borderColor:"#9686aa",
    borderWidth:2,
  },
  icon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    padding:6, 
    fontSize:19,  
    color:"#90839d",
  },
});

export default History;
