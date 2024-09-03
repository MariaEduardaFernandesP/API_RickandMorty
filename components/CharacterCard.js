import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Componente que exibe um cartão com informações do personagem
export default function CharacterCard({ character }) {
  // Hook para navegação entre telas
  const navigation = useNavigation();

  return (
    // TouchableOpacity permite que o cartão seja clicável e navegue para a tela de detalhes
    <TouchableOpacity onPress={() => navigation.navigate('CharacterDetail', { character })}>
      <View style={styles.card}>
        {/* Imagem do personagem */}
        <Image source={{ uri: character.image }} style={styles.image} />
        <View style={styles.infoContainer}>
          {/* Nome do personagem */}
          <Text style={styles.name}>{character.name}</Text>
          {/* Status e espécie do personagem */}
          <Text style={styles.status}>{character.status} - {character.species}</Text>
          {/* Último local visto pelo personagem */}
          <Text style={styles.detail}>Último local visto: {character.location.name}</Text>
          {/* Local onde o personagem foi visto pela primeira vez */}
          <Text style={styles.detail}>Visto pela primeira vez: {character.origin.name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

// Estilos para o componente CharacterCard
const styles = StyleSheet.create({
  card: {
    flexDirection: 'row', // Organiza imagem e informações lado a lado
    backgroundColor: '#3a3a3a', // Cor de fundo do cartão
    borderRadius: 10, // Cantos arredondados
    padding: 10,
    marginVertical: 10, // Espaçamento vertical entre cartões
    marginHorizontal: 5, // Espaçamento horizontal entre cartões
    width: '100%', // Largura do cartão ocupa toda a largura disponível
    shadowColor: '#000', // Cor da sombra
    shadowOpacity: 0.3, // Opacidade da sombra
    shadowRadius: 8, // Desfoque da sombra
    elevation: 4, // Elevação para Android
    alignItems: 'center', // Alinha itens no centro
  },

  image: {
    width: 100,
    height: 100,
    borderRadius: 10, // Cantos arredondados da imagem
  },
  infoContainer: {
    marginLeft: 15, // Espaçamento entre imagem e informações
    flex: 1, // Faz o contêiner de informações ocupar o espaço restante
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ff9800', // Cor do texto do nome
  },
  status: {
    fontSize: 16,
    color: '#ffffff', // Cor do texto do status
  },
  detail: {
    fontSize: 14,
    color: '#cccccc', // Cor do texto dos detalhes
    marginTop: 2, // Espaçamento entre linhas de detalhes
  },
});
