import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

// Componente que exibe um banner com uma imagem de fundo
export default function Banner() {
  return (
    <ImageBackground
      source={{ uri: 'https://example.com/banner-image.jpg' }} // URL da imagem de fundo
      style={styles.banner} // Estilo para o banner
    >
      <View style={styles.overlay}> 
        {/* Sobreposição com cor semi-transparente para melhorar a legibilidade do texto */}
        <Text style={styles.title}>Rick and Morty API</Text> 
      </View>
    </ImageBackground>
  );
}

// Estilos para o componente Banner
const styles = StyleSheet.create({
  banner: {
    height: 200, // Altura do banner
    justifyContent: 'center', // Alinha o conteúdo verticalmente ao centro
    alignItems: 'center', // Alinha o conteúdo horizontalmente ao centro
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Cor preta com 50% de opacidade para sobreposição
    width: '100%', // Largura da sobreposição ocupa toda a largura do banner
    height: '100%', // Altura da sobreposição ocupa toda a altura do banner
    justifyContent: 'center', // Alinha o conteúdo verticalmente ao centro dentro da sobreposição
    alignItems: 'center', // Alinha o conteúdo horizontalmente ao centro dentro da sobreposição
  },
  title: {
    color: '#fff', // Cor do texto do título
    fontSize: 24, // Tamanho da fonte do título
    fontWeight: 'bold', // Negrito para o título
  },
});
