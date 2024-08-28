import React, { useEffect, useState } from 'react';
import { SafeAreaView, FlatList, StyleSheet, View } from 'react-native';
import CharacterCard from './components/CharacterCard';
import SearchBar from './components/SearchBar';
import Banner from './components/Banner';
import { fetchCharacters } from './services/apiService';

export default function HomeScreen() {
  const [characters, setCharacters] = useState([]);
  const [filteredCharacters, setFilteredCharacters] = useState([]);

  useEffect(() => {
    fetchCharacters().then(data => {
      setCharacters(data.results);
      setFilteredCharacters(data.results);
    });
  }, []);

  const handleSearch = (query) => {
    const filtered = characters.filter(character => 
      character.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredCharacters(filtered);
  };

  const renderCharacter = ({ item }) => <CharacterCard character={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <Banner />
      <SearchBar onSearch={handleSearch} />
      <FlatList
        data={filteredCharacters}
        renderItem={renderCharacter}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.listContainer}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1c1c',
  },
  listContainer: {
    padding: 10,
    justifyContent: 'center', // Centraliza os cards na tela
  },
});
