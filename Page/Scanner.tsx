import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, Linking, TouchableOpacity } from 'react-native';
import { BarCodeScanner, BarCodeScannerResult } from 'expo-barcode-scanner';

export default function Scanner() {
  const [hasPermission, setHasPermission] = useState<string | undefined>();
  const [scanned, setScanned] = useState<boolean>(false);
  const [text, setText] = useState<string>('Not yet scanned');

  const askForCameraPermission = async () => {
    const { status } = await BarCodeScanner.requestPermissionsAsync();
    setHasPermission(status === 'granted' ? 'granted' : 'denied');
  };

  const openLink = () => {
    Linking.openURL(text).catch((err) => console.error("Failed to open URL:", err));
  };

  // Request Camera Permission
  useEffect(() => {
    askForCameraPermission();
  }, []);

  // What happens when we scan the bar code
  const handleBarCodeScanned = ({ type, data }: BarCodeScannerResult) => {
    setScanned(true);
    setText(data);
    console.log('Type: ' + type + '\nData: ' + data);
  };

  // Check permissions and return the screens
  if (hasPermission === undefined) {
    return (
      <View style={styles.container}>
        <Text>Requesting for camera permission</Text>
      </View>
    );
  }
  if (hasPermission === 'denied') {
    return (
      <View style={styles.container}>
        <Text style={{ margin: 10 }}>No access to camera</Text>
        <Button title={'Allow Camera'} onPress={askForCameraPermission} />
      </View>
    );
  }

  // Return the View
  return (
    <View style={styles.container}>
      <View style={styles.barcodebox}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={{ height: 400, width: 600, borderRadius: 20 }}
        />
      </View>
      <TouchableOpacity onPress={openLink}>
        <Text style={styles.maintext}>{text}</Text>
      </TouchableOpacity>

      {scanned && (
        <Button title={'Scan again?'} onPress={() => setScanned(false)} color='tomato' />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#21182b',
    alignItems: 'center',
    justifyContent: 'center',
  },
  maintext: {
    fontSize: 16,
    margin: 20,
    color: 'skyblue',
    textDecorationLine: 'underline',
  },
  barcodebox: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 300,
    width: 300,
    overflow: 'hidden',
    borderRadius: 30,
    //   backgroundColor: 'tom'
  },
});
