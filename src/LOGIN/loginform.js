// LOGINform.js  fill

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
        navigation.navigate('accountsettings'); // Här ändrar man 
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

        //  profile-settings 
        const gotoprofile = () => {
          navigation.navigate('compititionadmin');
        };
        //  profile-settings 


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

        {/* profile-settings */}
        
        <TouchableOpacity style={buttonStyle.button1} onPress={gotoprofile}>
           <Text style={buttonStyle.buttonText}>compititionadmin</Text>
        </TouchableOpacity>
        {/* profile-settings */}


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
