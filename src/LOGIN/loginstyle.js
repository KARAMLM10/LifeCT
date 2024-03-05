// loginstyle.js
import { StyleSheet } from 'react-native';

export const ContainerStyle = StyleSheet.create({
  container2: {
    flex: 1,
    backgroundColor: '#411663',
    padding: 20,    
  },
});

export const IconStyle = StyleSheet.create({
  iconContainer1: {
    marginLeft:20,
    marginTop:20,
  },
});

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
  },
//   headerText: {
//     color: '#fff',
//     fontSize: 30,
//     fontWeight: 'bold',
//   },
  headerImage: {
    width: 200, // Uppdatera bredd och höjd efter dina behov
    height: 100,
  },
});

export const TextInputStyle = StyleSheet.create({
    LabelStyle:{
        color: 'white',
        fontSize : 15,
        marginBottom:5,
    },
});

export const inputStyle = StyleSheet.create({
  input: {
    backgroundColor: '#fff',
    borderRadius: 10,
    height: 50,
    paddingLeft: 20,
    marginBottom: 20,
  },
});

export const buttonStyle = StyleSheet.create({
  button: {
    backgroundColor: '#2BF10B',
    borderRadius: 10,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center', 
       marginTop:-20,
    width:100,
  },
  button1:{
    backgroundColor: '#2BF10B',
    borderRadius: 10,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center', 
       marginTop:20,
    width:100,
  },
  buttonText: {
    color: 'black',
    fontSize: 20,
  },
});

export const linkStyle = StyleSheet.create({
  link: {
    alignItems: 'center',
    justifyContent: 'center', // Placera innehållet längst ned
    marginTop: 30, // Placera längst ned
    flexDirection: 'row', // För att justera texten åt höger
    marginTop:90,
  },
  linkText1: {
    color: 'white',
    textDecorationLine: 'none',
    fontSize:20,
  },
  linkText2: {
    color: '#2BF10B',
    textDecorationLine: 'none',
    fontSize:20,
  },
  forgotpassword: {
    marginLeft: 'auto',
    textDecorationLine: 'underline',
    color:'white', 
    fontSize:18,
  },
});
