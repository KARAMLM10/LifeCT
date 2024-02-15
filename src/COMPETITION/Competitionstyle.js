import { StyleSheet } from 'react-native';

export const container = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#4B0082',
    },
});
export const header = StyleSheet.create ({
    header: {
      flexDirection: 'row', // Lägger barnkomponenterna i en rad horisontellt
      justifyContent: 'center', // Centrerar barnen i raden horisontellt
      alignItems: 'center', // Centrerar barnen i raden vertikalt
      padding: 10, // Lägger till lite utrymme runt innehållet
      // Lägg till en specifik höjd om du vill att headern ska ha en fast höjd
      height: 60, // Exempel på en specifik höjd
     
    },
});    
    
export const title = StyleSheet.create ({
    title:{
      color: 'white',
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
      marginVertical: 20,
    },
});
export const leaderboard = StyleSheet.create ({
    leaderboard:{
      marginBottom: 10,
    },
});    
export const leaderboardItem = StyleSheet.create ({
    leaderboardItem:{
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#5d2a84',
      borderRadius: 5,
      marginVertical: 5,
      padding: 10,
    },
});    
export const rank = StyleSheet.create ({
    rank:{
      fontSize: 16,
      color: 'white',
      width: 30,
      textAlign: 'right',
      marginRight: 10,
    },
});    
export const avatar = StyleSheet.create ({
    avatar:{
      width: 40,
      height: 40,
      borderRadius: 20,
      marginRight: 10,
    },
});    
export const username = StyleSheet.create ({
    username:{
      color: 'white',
      flex: 1,
    },
});    
export const score = StyleSheet.create ({
    score:{
      color: 'white',
      fontSize: 18,
      fontWeight: 'bold',
    },
});    
export const leaveButton = StyleSheet.create ({
    leaveButton:{
      backgroundColor: '#5d2a84',
      padding: 15,
      borderRadius: 5,
      margin: 10,
    },
});    
export const leaveButtonText = StyleSheet.create ({
    leaveButtonText:{
      color: 'white',
      fontSize: 16,
      textAlign: 'center',
    },
});
  export const leaveCompetitionText = StyleSheet.create ({  
    leaveCompetitionText: {
      color: 'red',  // Ändra färgen till röd
      fontSize: 16,  // Behåll fontstorleken om den är korrekt
      paddingVertical: 10,  // Justera vadderingen vertikalt för att passa layouten
      paddingHorizontal: 16,  // Justera vadderingen horisontellt för att passa layouten
      textAlign: 'right',  // Justera texten till höger
      //textDecorationLine: 'underline', // Behåll understrykning för att indikera klickbarhet
  },
});  
export const leaveCompetition = StyleSheet.create ({  
  leaveCompetition: {
   
},
});
export const lamnatavlingstyle = StyleSheet.create ({  
  lamnatavling: {
  
 marginbutton: 100,  
},
});
export const separator = StyleSheet.create ({  
  separator: {
    height: 1, // Höjden på linjen
    backgroundColor: 'white', // Färgen på linjen
    marginTop: 40,
    
},
});