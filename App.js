// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

// import React from 'react';
// import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
// import LoginForm from './src/loginform'; // Importera LoginForm från rätt sökväg

// export default function App({ navigation }) {
//   const navigateToLoginForm = () => {
//     // Använd navigation för att navigera till LoginForm
//     navigation.navigate('LoginForm');
//   };

//   return (
//     <View style={styles.container}>
//       <Text>Öppna App.js för att börja arbeta på din app!</Text>
//       <TouchableOpacity onPress={navigateToLoginForm} style={styles.button}>
//         <Text style={styles.buttonText}>Gå till Login</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   button: {
//     marginTop: 20,
//     padding: 10,
//     backgroundColor: '#00BFA6',
//     borderRadius: 5,
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 16,
//   },
// });



// App.js
import React from 'react';
import Navigation from './Navigation';

const App = () => {
   return <Navigation />;

};

export default App;

//version-2
//App.js
// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import Navigation from './Navigation';

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Navigation />
//     </NavigationContainer>
//   );
// };

// export default App;


