import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

// Componente que exibe os detalhes de um personagem
export default function CharacterDetail({ route }) {
  // Obtém os detalhes do personagem a partir dos parâmetros da rota
  const { character } = route.params;

  return (
    // ScrollView permite rolar o conteúdo se ele for maior que a tela
    <ScrollView contentContainerStyle={styles.container}>
      {/* Imagem do personagem */}
      <Image source={{ uri: character.image }} style={styles.image} />
      {/* Nome do personagem */}
      <Text style={styles.name}>{character.name}</Text>
      {/* Informações adicionais sobre o personagem */}
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Status:</Text>
        <Text style={styles.value}>{character.status}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Espécie:</Text>
        <Text style={styles.value}>{character.species}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Genêro:</Text>
        <Text style={styles.value}>{character.gender}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Origem:</Text>
        <Text style={styles.value}>{character.origin.name}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Último local visto:</Text>
        <Text style={styles.value}>{character.location.name}</Text>
      </View>
    </ScrollView>
  );
}

// Estilos para o componente CharacterDetail
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#1c1c1c', // Cor de fundo do contêiner
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100, // Torna a imagem circular
    marginBottom: 20,
    resizeMode: 'contain', // Mantém a proporção da imagem
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ff9800', // Cor do texto do nome
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
    color: '#ffffff', // Cor do texto do rótulo
  },
  value: {
    fontSize: 16,
    color: '#cccccc', // Cor do texto do valor
  },
});
