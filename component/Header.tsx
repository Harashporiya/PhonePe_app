import React from 'react';
import { View, Text, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from './Navigation';

const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  
  return (
    <>
      <View style={styles.container}>
        <StatusBar backgroundColor={'#3f1e65'} barStyle={'light-content'} />
        <View style={styles.user}>
          <View style={styles.icon}>
            <Feather name="user" size={22} color="#542b95" />
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('Map')}>
            <Text style={styles.add}>Add Address</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.bell}>
          <TouchableOpacity onPress={() => navigation.navigate('Scan')}>
            <MaterialIcons name="qr-code-scanner" size={24} color="white" style={styles.bellIcon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
            <Feather name="bell" size={24} color="white" style={styles.bellIcon} />
          </TouchableOpacity>
          <AntDesign name="questioncircleo" size={24} color="white" style={styles.bellIcon} />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#3f1e65',
    justifyContent: "space-between"
  },
  text: {
    marginLeft: 10,
    fontSize: 18,
    color: 'blue',
  },
  icon: {
    backgroundColor: "white",
    padding: 9,
    borderRadius: 10,
  },
  add: {
    color: "white",
    fontWeight: "bold",
    marginLeft: 10,
    fontSize: 18,
  },
  bell: {
    flexDirection: "row",
  },
  bellIcon: {
    marginHorizontal: 10,
  },
  user: {
    flexDirection: "row",
  }
});

export default HomeScreen;
