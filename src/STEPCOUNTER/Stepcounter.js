import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {styles,innerContent,stepsCount,goalText,tabBar,button,buttonText} from '../../src/STEPCOUNTER/StepcounterStyle';
import Navbar from '../NAVBAR/Navbar';
const Stepcounter = () => {
    // Hanterare för knapptryckningar
    const handleDayPress = () => {
      console.log('Dag tryckt');
    };
  
    const handleWeekPress = () => {
      console.log('Vecka tryckt');
    };
  
    const handleMonthPress = () => {
      console.log('Månad tryckt');
    };
  
    // Komponentens render-funktion
    return (
      <View style={styles.container}>
        <AnimatedCircularProgress               
          size={300}
          width={15}
          fill={75} // Anta att 7458 är 75% av 10000
          tintColor="#7FFF00" // Grön färg för framstegsindikatorn
          backgroundColor="white" // Mörkare bakgrundsfärg för framstegsindikatorn
          padding={10} // Om du vill ha lite utrymme mellan framstegsindikatorn och innehållet
        >
          {
            (fill) => (
              <View style={innerContent.Content}>
                <Icon name="running" size={50} color="#7FFF00" />
                <Text style={stepsCount.stepsCount}>
                  1500
                </Text>
                <Text style={goalText.goalText}>
                  Mål 10000
                </Text>
              </View>
            )
          }
        </AnimatedCircularProgress>
        {/* Vy för navigationsfältet med knappar */}
        <View style={tabBar.tabBar}>
          <TouchableOpacity onPress={handleDayPress} style={button.button}>
            <Text style={buttonText.buttonText}>Dag</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleWeekPress} style={button.button}>
            <Text style={buttonText.buttonText}>Vecka</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleMonthPress} style={button.button}>
            <Text style={buttonText.buttonText}>Månad</Text>
          </TouchableOpacity>
        </View>
        <Navbar />
      </View> 
    );
  };
  
  export default Stepcounter;
  
