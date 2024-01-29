import React from "react";
import {View, TouchableOpacity, Text} from 'react-native';
import {containerStyle,
accountsettingStyle,
buttonStyle,

} from '../PROFILE/Accountsettingsstyle';
import Navbar from '../NAVBAR/Navbar';
export default function Accountsetting ({ navigation }) {

    const handleLogout = () => {
        // Här kan du implementera logik för logg ut
        // Exempel: Nollställ användarinformation, navigera till inloggningssidan, etc.
         //resetUserData();
       
         console.log('Logga ut-knappen har tryckts på.');
         navigation.navigate('Loginview');
         console.log('Användaren har loggat ut.');

        // Alert.alert('Logga ut', 'Är du säker på att du vill logga ut?', [
        //   { text: 'Avbryt', style: 'cancel' },
        //   {
        //     text: 'Ja',
        //     onPress: () => {
        //       // Här kan du implementera logik för logg ut
        //       // Exempel: navigation.navigate('Login'); för att navigera till inloggningssidan
        //     },
        //   },
        // ]);
      };

      const gototrainingsSettings = () => {
        navigation.navigate('trainingssettings');
      };

      const gotoProfileForm = () => {
        navigation.navigate('profileform');
      };

    return (
        <View style={containerStyle.container}>
        
        <View style={accountsettingStyle.accountsetting}>

        <TouchableOpacity style={buttonStyle.button} onPress={gotoProfileForm}>
           <Text style={buttonStyle.buttonText}>Kontoinställningar</Text>
        </TouchableOpacity>


        <TouchableOpacity style={buttonStyle.button} onPress={gototrainingsSettings}>
           <Text style={buttonStyle.buttonText}>Träningsintällningar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={buttonStyle.button2} onPress={handleLogout}>
           <Text style={buttonStyle.buttonText2}>Logga ut</Text>
        </TouchableOpacity>
        
        </View>


            <Navbar/>
        </View>
    ); 
}