import { Button, StyleSheet, TextInput, View, Alert, StatusBar, Text } from 'react-native';
import { useState, useEffect } from 'react';
import * as Location from 'expo-location';
import MapView, { Marker, Region } from 'react-native-maps';
import { API_MAP_KEY } from '../MapKey/Api';

export default function Map() {
  const [location, setLocation] = useState<Location.LocationObject | null>(null);
  const [address, setAddress] = useState<string>('');
  const [mapRegion, setMapRegion] = useState<Region | null>(null);
  const [currentAddress, setCurrentAddress] = useState<string>('');

  Location.setGoogleApiKey(`${API_MAP_KEY}`);

  useEffect(() => {
    const getPermissions = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert("Permission Denied", "Please grant location permissions");
        return;
      }

      let currentLocation = await Location.getCurrentPositionAsync({});
      setLocation(currentLocation);
      setMapRegion({
        latitude: currentLocation.coords.latitude,
        longitude: currentLocation.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
    };
    getPermissions();
  }, []);

  const geocode = async () => {
    try {
      const geocodedLocation = await Location.geocodeAsync(address);
      if (geocodedLocation.length > 0) {
        setMapRegion({
          latitude: geocodedLocation[0].latitude,
          longitude: geocodedLocation[0].longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        });
      } else {
        Alert.alert("Error", "Address not found");
      }
    } catch (error) {
      Alert.alert("Error", "Valid field");
    }
  };

  const reverseGeocode = async () => {
    if (location) {
      try {
        const reverseGeocodedAddress = await Location.reverseGeocodeAsync({
          longitude: location.coords.longitude,
          latitude: location.coords.latitude,
        });

        if (reverseGeocodedAddress.length > 0) {
          setCurrentAddress(reverseGeocodedAddress[0].street + ", " + reverseGeocodedAddress[0].city);
        } else {
          Alert.alert("Error", "Unable to reverse geocode location");
        }
      } catch (error) {
        Alert.alert("Error", "Unable to reverse geocode location");
      }
    } else {
      Alert.alert("Error", "Current location not available");
    }
  };

  return (
    <>
      <View style={styles.container}>
        <StatusBar
          backgroundColor={'#3f1e65'}
          barStyle={'light-content'}
        />
        <MapView
          style={styles.map}
          region={mapRegion ?? undefined}
          onRegionChangeComplete={setMapRegion}
        >
          {mapRegion && (
            <Marker
              coordinate={{
                latitude: mapRegion.latitude,
                longitude: mapRegion.longitude
              }}
              title="Location"
            />
          )}
        </MapView>
      </View>
      <View style={styles.footercontainer}>
        <TextInput
          style={styles.input}
          placeholder="Search for a location"
          value={address}
          onChangeText={setAddress}
          placeholderTextColor="#877897"
        />
        <View style={styles.searchbtn}>
           <Button title="Search" color='#955fd1' onPress={geocode} />
           </View>
       
        <View style={styles.viewbtn}>
        <Button title="Get Live Location" color="#955fd1" onPress={reverseGeocode} />
        </View>
        <Text style={styles.addressText}>{currentAddress}</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  map: {
    flex: 1,
    width: '100%',
    borderRadius: 10,
  },
  footercontainer: {
    backgroundColor: '#361854',
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '100%',
    paddingHorizontal: 10,
    marginBottom: 10,
    color:'#877897',
    fontSize:20,
  },
  addressText: {
    color: 'white',
    marginTop: 10,
    textAlign: 'center',
  },
  viewbtn:{
    marginTop:50,
    width:'100%'
  },
  searchbtn:{
      width:"100%"
  }
});
