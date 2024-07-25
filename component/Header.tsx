import React from 'react';
import { View, Text, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

const App = () => {
  const navigation = useNavigation();
  return (
    <>
      <View style={styles.container}>
        <StatusBar
          backgroundColor={'#3f1e65'}
          barStyle={'light-content'}
        />
        <View style={styles.user}>
          <View style={styles.icon}>
            <Feather name="user" size={22} color="#542b95" />
          </View>
          <Text style={styles.add}>Add Address</Text>
        </View>

        <View style={styles.bell}>
          <TouchableOpacity onPress={()=>navigation.navigate("Scan")} >
          <MaterialIcons name="qr-code-scanner" size={24} color="white" style={styles.bellIcon} />
          </TouchableOpacity>
          <Feather name="bell" size={24} color="white" style={styles.bellIcon} />
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

export default App;
