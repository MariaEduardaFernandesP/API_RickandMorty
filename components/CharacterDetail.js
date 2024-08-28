import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

export default function CharacterDetail({ route }) {
  const { character } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: character.image }} style={styles.image} />
      <Text style={styles.name}>{character.name}</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Status:</Text>
        <Text style={styles.value}>{character.status}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Species:</Text>
        <Text style={styles.value}>{character.species}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Gender:</Text>
        <Text style={styles.value}>{character.gender}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Origin:</Text>
        <Text style={styles.value}>{character.origin.name}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Last Known Location:</Text>
        <Text style={styles.value}>{character.location.name}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#1c1c1c',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100, // Arredonda a imagem para torná-la circular
    marginBottom: 20,
    resizeMode: 'contain', // Ajusta a imagem sem cortar
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ff9800',
    marginBottom: 20,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  value: {
    fontSize: 16,
    color: '#cccccc',
  },
});
