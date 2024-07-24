import { View, ScrollView, Image, StyleSheet } from 'react-native';
import React from 'react';

const Slider = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Image
          style={styles.image}
          source={{ uri: 'https://i.ytimg.com/vi/nUaVwusnqMk/maxresdefault.jpg' }}
        />
        <Image
          style={styles.image}
          source={{ uri: 'https://i.ytimg.com/vi/nUaVwusnqMk/maxresdefault.jpg' }}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 200, 
  },
  image: {
    width: 430, 
    height: '100%',
    marginRight: 10,
    borderRadius: 10,
  },
});

export default Slider;
