import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    // Lägg till dina stilar här
    container: {
      flex: 1, // Fyller tillgängligt utrymme vertikalt
      backgroundColor: '#4B0082', // Mörk lila bakgrundsfärg som matchar bilden
    },
}); 
export const safeArea = StyleSheet.create({
    safeArea: {
      backgroundColor: '#4B0082', // Ersätt med din önskade färg
    },
});     
export const iconContainer = StyleSheet.create({
    iconContainer: {
      paddingHorizontal: 10, // Justera efter behov
      marginTop: 40,
    },
});    
export const  backIcon = StyleSheet.create({
    backIcon: {
      color: '#84C441', // Ersätt med din önskade ikonfärg
    },
});    
export const competitionDetails = StyleSheet.create({
    competitionDetails: {
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
    },
});    
export const competitionName = StyleSheet.create({
    competitionName: {
      fontSize: 24,
      fontWeight: 'bold',
      color: 'white',
      marginBottom: 10,
    },
});  
export const competitionDate = StyleSheet.create({ 
    competitionDate: {
      fontSize: 18,
      color: 'white',
      marginBottom: 20,
    },
});     
