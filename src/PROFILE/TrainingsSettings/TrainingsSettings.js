// import React from "react";
// import {View, TouchableOpacity, SafeAreaView} from 'react-native';
// import {ContainerStyle} from '../TrainingsSettings/TrainingsSettingsSTYLE'
// import Icon from 'react-native-vector-icons/FontAwesome';
// import {IconStyle} from '../../LOGIN/Register/Registerstyle';


// export default function TrainingsSettings ({navigation}){


//  // Go-back
//  const goBack = () => {
//     navigation.goBack();
//   };

//     return(
    
//         <View style={ContainerStyle.container}>
//           <SafeAreaView style={ContainerStyle.container2}>
//             <TouchableOpacity style={IconStyle.iconContainer1} onPress={goBack}>
//               <Icon name="arrow-left" size={30} style={{ color: '#2BF10B' }} />
//             </TouchableOpacity>
//           </SafeAreaView>

//           <View>

//           </View>
//         </View>
          


//     );
// }
//version-2


import React, { useState } from "react";
import { View, TouchableOpacity, Text, SafeAreaView } from 'react-native';
import { ContainerStyle, Container2Style,Button1Style,TextStle, ContainerSaveStyle, } from '../TrainingsSettings/TrainingsSettingsSTYLE';
import Icon from 'react-native-vector-icons/FontAwesome';
import { IconStyle } from '../../LOGIN/Register/Registerstyle';

export default function TrainingsSettings({ navigation }) {
  const [counter, setCounter] = useState(1000);

  // Funktion för att minska värdet
  const decreaseCounter = () => {
    // Kontrollera att värdet inte är noll innan du minskar det
    if (counter > 1000) {
      setCounter(counter - 1000);
    }
  };

  // Funktion för att öka värdet
  const increaseCounter = () => {
    setCounter(counter + 1000);
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
          <Text style={TextStle.Text2}>{counter}</Text>
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
        <TouchableOpacity style={Button1Style.Button3}>
          <Text style={TextStle.save} >Spara</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
