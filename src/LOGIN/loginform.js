// import React from 'react';
// import { View, Text, TextInput, TouchableOpacity } from 'react-native';

// export default function LoginForm() {
//   return (
//     <View style={{ flex: 1, backgroundColor: '#6C63FF', padding: 20 }}>
//       <View style={{ alignItems: 'center', marginTop: 100 }}>
//         <Text style={{ color: '#fff', fontSize: 30, fontWeight: 'bold' }}>
//           LIFECT
//         </Text>
//       </View>
//       <View style={{ marginTop: 100 }}>
//         <TextInput
//           placeholder="Användarnamn"
//           placeholderTextColor="#fff"
//           style={{
//             backgroundColor: '#fff',
//             borderRadius: 10,
//             height: 50,
//             paddingLeft: 20,
//             marginBottom: 20,
//           }}
//         />
//         <TextInput
//           placeholder="Lösenord"
//           placeholderTextColor="#fff"
//           secureTextEntry={true}
//           style={{
//             backgroundColor: '#fff',
//             borderRadius: 10,
//             height: 50,
//             paddingLeft: 20,
//             marginBottom: 20,
//           }}
//         />
//         <TouchableOpacity
//           style={{
//             backgroundColor: '#00BFA6',
//             borderRadius: 10,
//             height: 50,
//             alignItems: 'center',
//             justifyContent: 'center',
//           }}
//         >
//           <Text style={{ color: '#fff', fontSize: 20 }}>Logga in</Text>
//         </TouchableOpacity>
//       </View>
//       <View style={{ alignItems: 'center', marginTop: 20 }}>
//         <Text style={{ color: '#fff' }}>
//           Inte medlem?{' '}
//           <Text style={{ color: '#fff', textDecorationLine: 'underline' }}>
//             Registrera dig här
//           </Text>
//         </Text>
//       </View>
//     </View>
//   );
// }


//version-2 
// LoginForm.js
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import {
  containerStyle,
  headerStyle,
  inputStyle,
  buttonStyle,
  linkStyle,
  TextInputStyle,
} from '../LOGIN/loginstyle'; 

import { useNavigation } from '@react-navigation/native'; 
import { useState } from 'react';

export default function LoginForm() {

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [userNameError, setUserNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigation = useNavigation();

  const handleLoginPress = async () => {
    setUserNameError("");
    setPasswordError("");

    if (!userName || !password) {
      if (!userName) {
        setUserNameError("Fyll i användarnamn");
      }
      if (!password) {
        setPasswordError("Fyll i lösenord");
      }
      return;
    }

    try {
      const result = await fetch('https://localhost:7001/User/Login', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ userName, password })
      });

      if (result.status === 200) {
        const data = await result.json();
        console.log(data);
        localStorage.setItem("token", data.token);
        navigation.navigate('test');
      } 
      else {
        console.log("Inloggning misslyckades");
      }
    } catch (error) {
      console.error("Något gick fel:", error);
    }
  };


  const handleforgotpasswordPress = () => {
    navigation.navigate('forgotpassword');
  };
const handleregisterpress = () => {
  navigation.navigate('register');
};

  return (    
    <View style={containerStyle.container}>
    
      <View style={headerStyle.header}>
        {/* <Text style={headerStyle.headerText}>LIFECT</Text> */}
        <Image
          source={require('../../assets/lifectimages/logo.jpg')} // Uppdatera sökvägen till din bild
          style={headerStyle.headerImage}
        />
      </View>
      <View style={{ marginTop: 100 }}>
       <Text style = {TextInputStyle.LabelStyle}>Användarnamn</Text>
        <TextInput
          placeholder="Användarnamn"
          value={userName}
          onChangeText={(text) => setUserName(text)}
          placeholderTextColor="#fff"
          style={inputStyle.input}
        />
         <Text style={{ color: 'red' }}>{userNameError}</Text>
        <Text style = {TextInputStyle.LabelStyle}>Lösenord</Text>
        <TextInput
          placeholder="Lösenord"
          value={password}
          onChangeText={(text) => setPassword(text)}
          placeholderTextColor="#fff"
          secureTextEntry={true}
          style={inputStyle.input}
        />
         <Text style={{ color: 'red' }}>{passwordError}</Text>
        <View>
          <Text style = {linkStyle.forgotpassword} onPress={handleforgotpasswordPress}>
            <Text style={linkStyle.forgot}>Glömt Lösenord</Text>
          </Text>
        </View>
        
        <TouchableOpacity style={buttonStyle.button} onPress={handleLoginPress}>
           <Text style={buttonStyle.buttonText}>Logga in</Text>
        </TouchableOpacity>
      </View>
      <View style={linkStyle.link}>
        <Text style={linkStyle.linkText}>
          <Text style = {linkStyle.linkText1}> Inte medlem? </Text>
          
          <Text style={linkStyle.linkText2} onPress={handleregisterpress}>Registrera dig här</Text>
        </Text>
      </View>
    </View>
  );
}
