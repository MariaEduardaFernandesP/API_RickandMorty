import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

export default function Banner() {
  return (
    <ImageBackground
      source={{ uri: 'https://example.com/banner-image.jpg' }}
      style={styles.banner}
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>Rick and Morty API</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  banner: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
});
