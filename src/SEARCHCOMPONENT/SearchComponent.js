import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Anta att du använder FontAwesome
import {styles,searchInput,searchButton} from '../SEARCHCOMPONENT/Searchcomponentstyle'

const SearchComponent = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <View style={styles.searchContainer}>
      <TextInput
        style={searchInput.searchInput}
        placeholder="Tävlingsnamn"
        value={searchTerm}
        onChangeText={setSearchTerm}
        // Du kan lägga till fler props som keyboardType, returnKeyType, etc.
      />
      <TouchableOpacity
        style={searchButton.searchButton}
        onPress={() => onSearch(searchTerm)}
        // Lägg till en onPress-funktion som anropar en sökfunktion med searchTerm
      >
        <Icon name="search" size={20} color="#000" />
      </TouchableOpacity>
    </View>
  );
};

export default SearchComponent;
