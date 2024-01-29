
import React from 'react';
import { View, FlatList,Text, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import { containerStyle, ContainerStyle, IconStyle, errorStyle } from '../Register/Registerstyle';
import { useNavigation } from '@react-navigation/native';
import { ButtonStyle } from '../../styleBTN/btnstyle';
import Icon from 'react-native-vector-icons/FontAwesome';
import { inputStyle } from '../forgotpassword/forgotpasswordstyle';
import { useState } from "react";
import citiesInSweden from '../Register/cities';
import { useMemo } from 'react';


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
  const [showErrorMessage, setShowErrorMessage] = useState('')
  const navigation = useNavigation();
  var message = "fasle";
  const [searchText, setSearchText] = useState("");
  const [filteredCities, setFilteredCities] = useState([]);
  const [registrationError, setRegistrationError] = useState("");

  const lazyLoadCities = useMemo(() => {
    return citiesInSweden;
  }, []); 
  console.log('Lazy-loaded cities:', lazyLoadCities);

  const handleSearch = (text) => {
    setSearchText(text);
    const filtered = citiesInSweden.filter(city => city.toLowerCase().startsWith(text.toLowerCase()));
    setFilteredCities(filtered);
  };

  const handleCitySelect = (city) => {
    setCountry(city);
    setFilteredCities([]); // Dölj listan när en stad väljs
  };

  const renderCityItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleCitySelect(item)}>
      <Text style={inputStyle.input}>{item}</Text>
    </TouchableOpacity>
  );
  

  const handleregisterpress = async () => {
    
    setFirstnameError("");
    setEmailError("");
    setShowErrorMessage(false)
    setCountryError("");
    setPasswordeError("");
    setConfirmPassworderror("");

    if (!userName || !county || !email || !password || !confirmPassword || password !== confirmPassword) {

      if (!userName) {
        setFirstnameError("Fyll i Förnamn");
      }
      if (!county){
          setCountryError("välj ort");
      }
      if (!email) {
        setEmailError("Fyll i e-postadress");
      }
      if (!password){
        setPasswordeError("Fyll i Lösenord");
      }
      if (!confirmPassword){
        setConfirmPassworderror("Fyll i Bekräfta Lösenord");
      }
      if(password !== confirmPassword){
        setShowErrorMessage("password och bekräftapassword måste vara samma") 
      }
    }

    if (!firstnameError && !countryerror && !emailError && !passwordeerror && !confirmPassworderror && !showErrorMessage) 
    {
    try {

      const result = await fetch('https://localhost:7001/User/Register', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ userName, county, email, password ,confirmPassword,message,firstnameError, countryerror, emailError, passwordeerror,confirmPassworderror, showErrorMessage})
      });
     
      console.log(result);

      if (result.status === 200) {
        const data = await result.json();
        console.log(data);
        localStorage.setItem("token", data.token);
        navigation.navigate('Loginview');
      } 
      else {
        console.log("registrering misslyckades");
        const errorData = await result.json(); 
        const errorMessage = errorData.message || "Något gick fel vid registrering";
        console.log("Registrering misslyckades:", errorMessage);
        console.log("Registrering misslyckades:", errorData.message);
        setRegistrationError(errorMessage);
        //setRegistrationError(errorData.message); 
        // setRegistrationError(data.message);
      }
    } 
    catch (error) {
      console.error("Något gick fel:", error);
      setRegistrationError("Något gick fel. Försök igen .");
    }
    
  }


  };

  // Go-back
  const goBack = () => {
    navigation.goBack();
  };

//Backend-important-kod => 
// app.UseCors(x => x.AllowAnyHeader().AllowAnyOrigin().AllowAnyMethod());
// app.UseCors(builder => builder.AllowAnyOrigin()
// .AllowAnyHeader()
// .AllowAnyMethod());



  return (
    <View style={containerStyle.container}>
      <SafeAreaView style={ContainerStyle.container2}>
        <TouchableOpacity style={IconStyle.iconContainer1} onPress={goBack}>
          <Icon name="arrow-left" size={30} style={{ color: '#2BF10B' }} />
        </TouchableOpacity>
      </SafeAreaView>

      <Text name="error-message" style={errorStyle.errormessage}>{registrationError}</Text>
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
        {/* <TextInput
        placeholder="Ort"
        placeholderTextColor="#a8a8a8"
        value={county}
        onChangeText={(text) => setCountry(text)}
        style={inputStyle.input}
        /> */}
        {/* <Picker
            selectedValue={county}
            onValueChange={(itemValue) => setCountry(itemValue)}
            style={inputStyle.input}
            itemStyle={{ height: 50 }} // För att justera höjden av varje Picker.Item
          >
            <Picker.Item label="Välj en ort" value="" />
            {citiesInSweden.map((city, index) => (
              <Picker.Item key={index} label={city} value={city} />
            ))}
        </Picker> */}

        {/* test-2-for-picker */}
          <TextInput
              placeholder="Sök ort..."
              placeholderTextColor="#a8a8a8"
              onChangeText={handleSearch}
              value={searchText}
              style={inputStyle.input}
            />
            {filteredCities.length > 0 && (
              <FlatList
                  data={filteredCities}
                  renderItem={renderCityItem}
                  keyExtractor={(item) => item} // Se till att använda ortsnamnet som nyckel
              />
            )}          
        {/* test-2-for-picker */} 
           
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
        <Text name="error-message" style={errorStyle.errormessage}>{showErrorMessage}</Text>

        <View style={ButtonStyle.btncontent}>
          <TouchableOpacity style={ButtonStyle.button2}  onPress={handleregisterpress}>
            <Text style={ButtonStyle.buttonText2} >Bli Lifect</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
  