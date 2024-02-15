import { StyleSheet } from 'react-native';

// Här är ett exempel på stildefinitioner. Du behöver anpassa dessa för att passa din appdesign.
export const styles = StyleSheet.create({
    menu: {
      flexDirection: 'row',
      justifyContent: 'center',//'space-evenly',
      padding: 10,
      alignItems: 'center', // Centrerar barnen vertikalt
      // Lägg till andra stilar för din menu container här
        },
    });
export const button = StyleSheet.create({    
    button: {
      backgroundColor: '#5d2a84',
      padding: 10,
      borderRadius: 5,
      // Lägg till andra stilar för dina knappar här
      marginHorizontal: 5, // Lägger till horisontell marginal mellan knapparna
      // Justera storlek, padding, och borderRadius för att matcha designen från bilden
      paddingHorizontal: 20, // Exempel på horisontell padding
      paddingVertical: 10, // Exempel på vertikal padding
      borderRadius: 20, // Exempel på borderRadius
      marginTop:40,
        },
    });
export const buttonText = StyleSheet.create({
    buttonText: {
      color: 'white',
      fontSize: 16,
      // Lägg till andra stilar för din knapptext här
        },
    });