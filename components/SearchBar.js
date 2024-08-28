import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search characters..."
        value={query}
        onChangeText={text => {
          setQuery(text);
          handleSearch();
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  input: {
    backgroundColor: '#ffffff',
    padding: 12,
    borderRadius: 8,
    fontSize: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
});
