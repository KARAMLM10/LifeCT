import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

export const containerStyle = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: '#411663',
      padding: 20,
      
    },
  });

  export const headerStyle = StyleSheet.create({
    header: {
      alignItems: 'center',
      marginTop: 100,
      marginRight:-70,
    },
  //   headerText: {
  //     color: '#fff',
  //     fontSize: 30,
  //     fontWeight: 'bold',
  //   },
    headerImage: {
      width: 250, // Uppdatera bredd och höjd efter dina behov
      height: 190,

    },
  });

  export const inputStyle = StyleSheet.create({
    input: {
      backgroundColor: '#fff',
      borderRadius: 10,
      height: 50,
      paddingLeft: 20,
      //marginBottom: 20,
      textAlign: 'center',
      width: screenWidth >= 374 ? 350 : 350,
      alignSelf: 'center',
    },
    pickerContainer: {
      backgroundColor: '#fff',
      borderRadius: 10,
      height: 50,
      marginBottom: 20,
      width: screenWidth >= 374 ? 350 : 350,
      alignSelf: 'center',
      borderWidth: 1,
      borderColor: '#ccc',
    },
    picker: {
      height: 50,
      width: '100%',
    },
  });

  export const ContainerStyle = StyleSheet.create({
    container2: {
     
      backgroundColor: '#411663',
      //padding: 20,    
    },
  });
  
  export const IconStyle = StyleSheet.create({
    iconContainer1: {
      marginLeft:15,
      marginTop:30,
    },
  });
  
