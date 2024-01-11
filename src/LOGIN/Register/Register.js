import React from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import { containerStyle, ContainerStyle, IconStyle, errorStyle } from '../Register/Registerstyle';
import { useNavigation } from '@react-navigation/native';
import { ButtonStyle } from '../../styleBTN/btnstyle';
import Icon from 'react-native-vector-icons/FontAwesome';
import { inputStyle } from '../forgotpassword/forgotpasswordstyle';
import { useState } from "react";

export default function Register() {

  const [userName, setUserName] = useState("");
  const [county, setCountry] = useState("");
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [confirmPassworderror, setConfirmPassworderror] = useState('');
  const [firstnameError, setFirstnameError] = useState("");
  const [countryerror, setCountryError] = useState("")
  const [emailError, setEmailError] = useState("");
  const [passwordeerror, setPasswordeError] = useState("");
  const navigation = useNavigation();
  var message = "fasle";

  const handleregisterpress = async () => {
    
    setFirstnameError("");
    setEmailError("");
    setCountryError("");
    setPasswordeError("");
    setConfirmPassworderror("");

    if (!userName || !county || !email || !password || !confirmPassworderror) {

      if (!userName) {
        setFirstnameError("Fyll i Förnamn");
      }
      if (!county){
          setCountryError("Fyll i Efternamn");
      }
      if (!email) {
        setEmailError("Fyll i e-postadress");
      }
      if (!password){
        setPasswordeError("Fyll i Lösenord");
      }
      if (!confirmPassworderror){
        setConfirmPassworderror("Fyll i Bekräfta Lösenord");
      }
    }
    try {

      const result = await fetch('https://localhost:7001/User/Register', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ userName, county, email, password ,confirmPassword,message,firstnameError, countryerror, emailError, passwordeerror,confirmPassworderror})
      });
      //console.log('Request body:', JSON.stringify({ userName, county, email, message,password,confirmPassword }));
      //console.log('Response body:', await result.text());
      //console.log('Response status:', result.status);
      console.log(result);

      if (result.status === 200) {
        const data = await result.json();
        console.log(data);
        localStorage.setItem("token", data.token);
        navigation.navigate('Loginview');
      } 
      else {
        console.log("registrering misslyckades");
        console.log("" + {userName});
        console.log("" + {county});
        console.log("" + {email});
        console.log("" + {password});
        console.log("" + {message});
      }
    } 
    catch (error) {
      console.error("Något gick fel:", error);
    }
  };

  // Go-back
  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={containerStyle.container}>
      <SafeAreaView style={ContainerStyle.container2}>
        <TouchableOpacity style={IconStyle.iconContainer1} onPress={goBack}>
          <Icon name="arrow-left" size={30} style={{ color: '#2BF10B' }} />
        </TouchableOpacity>
      </SafeAreaView>

      <View style={{ marginTop: 100 }}>
      <Text name="error-message" style={errorStyle.errormessage} >{firstnameError}</Text>
        <TextInput
          placeholder="Användarnamn"
          placeholderTextColor="#a8a8a8"
          value={userName}
          onChangeText={(text) => setUserName(text)}
          style={inputStyle.input}
        />

        <Text name="error-message" style={errorStyle.errormessage}>{countryerror}</Text>
        <TextInput
        placeholder="Ort"
        placeholderTextColor="#a8a8a8"
        value={county}
        onChangeText={(text) => setCountry(text)}
        style={inputStyle.input}
        />
        <Text name="error-message" style={errorStyle.errormessage}>{emailError}</Text>
        <TextInput
          placeholder="E-post"
          placeholderTextColor="#a8a8a8"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={inputStyle.input}
        />

        <Text name="error-message" style={errorStyle.errormessage}>{passwordeerror}</Text>
        <TextInput
          placeholder="Lösenord"
          placeholderTextColor="#a8a8a8"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
          style={inputStyle.input}
        />

        <Text name="error-message" style={errorStyle.errormessage}>{confirmPassworderror}</Text>
        <TextInput
        placeholder="Bekräfta Lösenord"
        placeholderTextColor="#a8a8a8"
        value={confirmPassword}
        onChangeText={(text) => setConfirmPassword(text)}
        secureTextEntry={true}
        style={inputStyle.input}
        />

        <View style={ButtonStyle.btncontent}>
          <TouchableOpacity style={ButtonStyle.button2}  onPress={handleregisterpress}>
            <Text style={ButtonStyle.buttonText2} >Bli Lifect</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}