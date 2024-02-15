import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import {styles, button, buttonText} from './Competitionbuttonsstyle';
// Anta att du har definierat stilar för button och buttonText någonstans i din kod

const Competitionbuttons = ({ onNewCompetitionPress, onSearchCompetitionPress }) => {
  return (
    <View style={styles.menu}>
      <TouchableOpacity onPress={onNewCompetitionPress} style={button.button}>
        <Text style={buttonText.buttonText}>Ny tävling</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onSearchCompetitionPress} style={button.button}>
        <Text style={buttonText.buttonText}>Sök tävling</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Competitionbuttons;
