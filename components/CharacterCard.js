import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function CharacterCard({ character }) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate('CharacterDetail', { character })}>
      <View style={styles.card}>
        <Image source={{ uri: character.image }} style={styles.image} />
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{character.name}</Text>
          <Text style={styles.status}>{character.status} - {character.species}</Text>
          <Text style={styles.detail}>Last known location: {character.location.name}</Text>
          <Text style={styles.detail}>First seen in: {character.origin.name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row', // Disposição em linha
    backgroundColor: '#3a3a3a',
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
    alignItems: 'center', // Centraliza o conteúdo verticalmente
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  infoContainer: {
    marginLeft: 15,
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ff9800',
  },
  status: {
    fontSize: 16,
    color: '#ffffff',
  },
  detail: {
    fontSize: 14,
    color: '#cccccc',
    marginTop: 2,
  },
});
