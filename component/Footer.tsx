import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { useNavigation , NavigationProp} from '@react-navigation/native';
import { RootStackParamList } from './Navigation';
const Footer = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View style={styles.footer}>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Show")}>
        <Ionicons name="home" size={24} color="#755e96" />
        <Text style={styles.buttonText}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Loan")}>
        <FontAwesome name="rupee" size={24} color="#755e96" />
        <Text style={styles.buttonText}>Loan</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <FontAwesome name="shield" size={24} color="#755e96" />
        <Text style={styles.buttonText}>Insurance</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <FontAwesome name="dollar" size={24} color="#755e96" />
        <Text style={styles.buttonText}>Wealth</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("History")}>
        <FontAwesome name="history" size={24} color="#755e96" />
        <Text style={styles.buttonText}>History</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#361854',
    padding: 10,
    height: 60,
  },
  button: {
    alignItems: 'center',
  },
  buttonText: {
    color: '#755e96',
    fontSize: 12,
  },
});

export default Footer;
