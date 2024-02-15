import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {styles,innerContent,stepsCount,goalText,tabBar,button,buttonText,circularProgressConfig} from '../STEPCOUNTER/Stepcounterstyle';
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
          size={circularProgressConfig.size}
          width={circularProgressConfig.width}
          fill={circularProgressConfig.fill}
          tintColor={circularProgressConfig.tintColor}
          backgroundColor={circularProgressConfig.backgroundColor}
          padding={circularProgressConfig.padding}
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
  
