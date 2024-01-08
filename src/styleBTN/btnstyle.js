import { StyleSheet } from 'react-native';

export const buttonStyle = StyleSheet.create({
    button: {
      backgroundColor: '#2BF10B',
      borderRadius: 10,
      height: 40,
      alignItems: 'center',
      justifyContent: 'center', 
         
      width:100,
    },
    buttonText: {
      color: 'black',
      fontSize: 20,
    },
  });

  // export const ButtonStyle = StyleSheet.create({
  //   button2: {
  //     backgroundColor: '#2BF10B',
  //     borderRadius: 10,
  //     height: 40,
  //     alignItems: 'center',
  //     justifyContent: 'center', 
  //        alignContent:'center',
  //     width:100,
  //   },
  //   buttonText2: {
  //     color: '#411663',
  //     fontSize: 20,
  //   },
  // });
  // styles.js
export const ButtonStyle = StyleSheet.create({
  btncontent: {
   
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:20,
  },
  button2: {
    backgroundColor: '#2BF10B',
    borderRadius: 10,
    height: 37,
    alignItems: 'center',
    justifyContent: 'center',
    width: 150,
  },
  buttonText2: {
    color: '#411663',
    fontSize: 24,
    fontWeight:'bold',
  },
});
