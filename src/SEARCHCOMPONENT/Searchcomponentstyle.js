import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    searchContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff', // Vit bakgrund
      borderRadius: 20, // Rundade hörn
      padding: 5,
      margin: 10,
    },
});
export const searchInput = StyleSheet.create({     
    searchInput: {
      flex: 1,
      paddingLeft: 10,
      // Anpassa stilen efter din design, till exempel textfärg och fontstorlek
    },
});    
export const searchButton = StyleSheet.create({
    searchButton: {
      paddingHorizontal: 10,
      // Anpassa stilen efter din design
    },
    // Lägg till fler stilar om nödvändigt
  });