// ForgotPassword.js
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import {containerStyle, headerStyle, inputStyle,ContainerStyle,IconStyle} from '../forgotpassword/forgotpasswordstyle';
import { ButtonStyle } from '../../styleBTN/btnstyle';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function ForgotPassword({ navigation }) {
  const handleResetPassword = () => {
    // Implementera logiken för att återställa lösenordet här
    // Detta kan innefatta att skicka en återställningslänk via e-post eller liknande
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

        <View style={headerStyle.header}>
        {/* <Text style={headerStyle.headerText}>LIFECT</Text> */}
        <Image
          source={require('../../../assets/lifectimages/forgotpassword.jpg')} // Uppdatera sökvägen till din bild
          style={headerStyle.headerImage}
        />
      </View>

      <TextInput
        placeholder="E-post"
        placeholderTextColor="#a8a8a8"
        
        style={inputStyle.input}
        />
      <View style={ButtonStyle.btncontent}>
        <TouchableOpacity style={ButtonStyle.button2} onPress={handleResetPassword}>
            <Text style={ButtonStyle.buttonText2} >Skicka</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
