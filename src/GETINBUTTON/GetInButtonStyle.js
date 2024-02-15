
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      backgroundColor: '#4B0082', // Ersätt med din önskade bakgrundsfärg Lilla rutan som går ta bort
      borderRadius: 10,
      padding: 20,
      alignItems: 'center',
    },
});
    export const competitionName = StyleSheet.create ({
      competitionName:{  
      color: '#FFFFFF', // Ersätt med din önskade textfärg
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10,
    },
});
    export const startDate = StyleSheet.create ({
      startDate:{
      color: '#FFFFFF', // Ersätt med din önskade textfärg
      fontSize: 18,
      marginBottom: 20,
    },  
});
export const joinButton = StyleSheet.create ({
      joinButton:{
      backgroundColor: '#84C441', // Ersätt med din önskade knappfärg
      paddingHorizontal: 30,
      paddingVertical: 10,
      borderRadius: 20,
    },  
});
export const joinButtonText = StyleSheet.create ({
      joinButtonText:{
      color: '#FFFFFF', // Ersätt med din önskade textfärg
      fontSize: 18,
      fontWeight: 'bold',
    },  
});