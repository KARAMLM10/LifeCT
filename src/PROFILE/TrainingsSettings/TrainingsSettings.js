import React, { useState } from "react";
import { View, TouchableOpacity, Text, SafeAreaView } from 'react-native';
import { ContainerStyle, Container2Style,Button1Style,TextStle, ContainerSaveStyle, } from '../TrainingsSettings/TrainingsSettingsSTYLE';
import Icon from 'react-native-vector-icons/FontAwesome';
import { IconStyle } from '../../LOGIN/Register/Registerstyle';

export default function TrainingsSettings({ navigation }) {
  const [newGoal, setNewGoal] = useState(0);

//version-7
const Setupdatestepgoal = async () => {
  try {
    const token = localStorage.getItem("token");

    // Validera att newGoal är en siffra
    if (!Number.isNaN(newGoal)) {
      const result = await fetch('https://localhost:7001/StepCounting/UpdateStepGoal', {
        method: 'POST',
        headers: {
          "Authorization": `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: newGoal.toString()  // Skicka som heltal
      });

      console.log(newGoal);

      if (result.status === 200) {
        const data = await result.text();
        console.log(data);
      } else {
        console.log('updatestep goal misslyckades');
        console.log('else updatestep goal misslyckades', await result.text());
      }
    } else {
      console.log('Ogiltigt värde för newGoal');
    }
  } catch (error) {
    console.log('catch updatestep goal något gick fel', error);
  }
};



// version-2
const decreaseCounter = () => {
  // Uppdatera värdet med en callback-funktion
  setNewGoal((prevCounter) => {
    // Kontrollera att värdet inte är noll innan du minskar det
    if (prevCounter > 1000) {
      return prevCounter - 1000;
    } else {
      return prevCounter;
    }
  });
};

// Funktion för att öka värdet
const increaseCounter = () => {
  // Uppdatera värdet med en callback-funktion
  setNewGoal((prevCounter) => prevCounter + 1000);
};

  // Go-back
  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={ContainerStyle.container}>
      <SafeAreaView style={ContainerStyle.container2}>
        <TouchableOpacity style={IconStyle.iconContainer1} onPress={goBack}>
          <Icon name="arrow-left" size={30} style={{ color: '#2BF10B' }} />
        </TouchableOpacity>
      </SafeAreaView>

      <View style={Container2Style.container}>
        {/* Minus-knapp */}
        <TouchableOpacity onPress={decreaseCounter} style={Button1Style.Button}>
          <Text style={[TextStle.Text1, { textAlign: 'center', textAlignVertical: 'center' }]}>-</Text>
        </TouchableOpacity>

        {/* Visar det aktuella värdet */}
        <View style={{ alignItems: 'center' }}>
          <Text style={TextStle.Text2} value = {newGoal}>{newGoal}</Text>
          <View style={{ flexDirection: 'column', alignItems: 'center' }}>
            <Text style={TextStle.Text3}>Steg</Text>
          </View>
        </View>

        {/* Plus-knapp */}
        <TouchableOpacity onPress={increaseCounter} style={Button1Style.Button2}>
          <Text style={[TextStle.Text1, { textAlign: 'center', textAlignVertical: 'center' }]}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={ContainerSaveStyle.Save}>
        <TouchableOpacity style={Button1Style.Button3} onPress={Setupdatestepgoal}>
          <Text style={TextStle.save} >Spara</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
