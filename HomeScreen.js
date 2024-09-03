import React, { useEffect, useState } from 'react';
import { SafeAreaView, FlatList, StyleSheet, View } from 'react-native';
import CharacterCard from './components/CharacterCard'; // importa o componente de cartao de personagem
import SearchBar from './components/SearchBar'; // importa o componente de barra de pesquisa
import Banner from './components/Banner'; // importa o componente de banner
import { fetchCharacters } from './services/apiService'; // importa a funcao de busca de personagens da api

export default function HomeScreen() {
  const [characters, setCharacters] = useState([]); // estado para armazenar os personagens
  const [filteredCharacters, setFilteredCharacters] = useState([]); // estado para armazenar os personagens filtrados

  useEffect(() => {
    // usa o useEffect para buscar os personagens quando o componente e montado
    fetchCharacters().then(data => {
      setCharacters(data.results); // armazena os personagens no estado
      setFilteredCharacters(data.results); // inicialmente, todos os personagens sao exibidos
    });
  }, []);

  const handleSearch = (query) => {
    // funcao que lida com a pesquisa na barra de busca
    const filtered = characters.filter(character => 
      character.name.toLowerCase().includes(query.toLowerCase()) // filtra os personagens pelo nome
    );
    setFilteredCharacters(filtered); // atualiza o estado com os personagens filtrados
  };

  const renderCharacter = ({ item }) => <CharacterCard character={item} />; // renderiza cada cartao de personagem

  return (
    <SafeAreaView style={styles.container}>
      <Banner /> {/* exibe o banner */}
      <SearchBar onSearch={handleSearch} /> {/* exibe a barra de pesquisa */}
      <FlatList
        data={filteredCharacters} // usa os personagens filtrados como fonte de dados
        renderItem={renderCharacter} // renderiza cada item da lista
        keyExtractor={item => item.id.toString()} // extrai a chave de cada item (id do personagem)
        contentContainerStyle={styles.listContainer} // aplica estilo ao container da lista
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // faz com que o container ocupe toda a area disponivel
    backgroundColor: '#1c1c1c', // define o fundo como preto escuro
  },
  listContainer: {
    padding: 10, // adiciona espacos em volta da lista
    justifyContent: 'center', // centraliza a lista horizontalmente
  },
});
