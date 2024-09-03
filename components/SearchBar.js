import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState(''); // define o estado inicial da pesquisa como uma string vazia

  const handleSearch = () => {
    // funcao que lida com a acao de busca
    onSearch(query); // chama a funcao de busca passada como prop e passa a consulta atual
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input} // aplica o estilo ao campo de entrada
        placeholder="Pesquisar personagens..." // texto de exemplo que aparece no campo de entrada
        value={query} // vincula o valor do campo de entrada ao estado da consulta
        onChangeText={text => {
          // quando o texto no campo de entrada mudar
          setQuery(text); // atualiza o estado da consulta com o novo texto
          handleSearch(); // chama a funcao de busca para filtrar os resultados
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16, // adiciona espaco ao redor da barra de pesquisa
  },
  input: {
    backgroundColor: '#ffffff', // define o fundo do campo de entrada como branco
    padding: 12, // adiciona espaco interno ao redor do texto
    borderRadius: 8, // arredonda os cantos do campo de entrada
    fontSize: 16, // define o tamanho da fonte do texto
    shadowColor: '#000', // define a cor da sombra
    shadowOpacity: 0.1, // define a opacidade da sombra
    shadowRadius: 4, // define o raio da sombra
    elevation: 2, // adiciona uma sombra para dispositivos Android
  },
});
