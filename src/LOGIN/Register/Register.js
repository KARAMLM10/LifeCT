import React from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import { containerStyle, ContainerStyle,IconStyle } from '../Register/Registerstyle';
import { useNavigation } from '@react-navigation/native';
import { ButtonStyle } from '../../styleBTN/btnstyle';
import Icon from 'react-native-vector-icons/FontAwesome';
import { inputStyle } from '../forgotpassword/forgotpasswordstyle';

export default function Register() {
  const navigation = useNavigation();

  const handleregisterpress = () => {
    // Lägg till logik för registrering här
    // navigation.navigate(''); // Navigera till rätt sida efter registrering
  };
  const goBack = () => {
    navigation.goBack();
  };


  return (
    <View style={containerStyle.container}>
    <SafeAreaView style={ContainerStyle.container2}>
      <TouchableOpacity style={IconStyle.iconContainer1} onPress={goBack}>
        <Icon name="arrow-left" size={30} style={{ color:'#2BF10B' }} />
      </TouchableOpacity>
    </SafeAreaView>
      
      <View style={{ marginTop: 100 }}>
      <TextInput
        placeholder="Användarnamn"
        placeholderTextColor="#a8a8a8"
        
        style={inputStyle.input}
        />
        
        <TextInput
        placeholder="Ort"
        placeholderTextColor="#a8a8a8"
        
        style={inputStyle.input}
        />

      <TextInput
        placeholder="E-post"
        placeholderTextColor="#a8a8a8"
        
        style={inputStyle.input}
        />

        <TextInput
        placeholder="Lösenord"
        placeholderTextColor="#a8a8a8"
        secureTextEntry={true}
        style={inputStyle.input}
        />

       <TextInput
        placeholder="Bekräfta Lösenord"
        placeholderTextColor="#a8a8a8"
        secureTextEntry={true}
        style={inputStyle.input}
        />

     <View style={ButtonStyle.btncontent}>
        <TouchableOpacity style={ButtonStyle.button2} onPress={handleregisterpress}>
            <Text style={ButtonStyle.buttonText2} >Bli Lifect</Text>
        </TouchableOpacity>
      </View>
        {/* <TouchableOpacity style={buttonStyle.button} onPress={handleregisterpress}>
          <Text style={buttonStyle.buttonText}>Registrera</Text>
        </TouchableOpacity> */}
      </View>
      
      {/* <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={linkStyle.linkText1}>Tillbaka</Text>
      </TouchableOpacity> */}
    </View>
  );
}
