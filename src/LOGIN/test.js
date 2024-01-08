// import React from 'react';
// import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
// import {
//   ContainerStyle,
// } from './loginstyle'; // Uppdatera sökvägen beroende på var din styles.js-fil finns
// import { ScreenStack } from 'react-native-screens';

// export default function Test(){
//     return(

//         <SafeAreaView style = {ContainerStyle.container2} >
//             <ScreenStack options = {{headerTitle: ""}}/>
//         </SafeAreaView>

//         // <View style={ContainerStyle.container2}>
//         //     <Text>Test Sidan</Text>
//         // </View>
//     );
// }


// import React from 'react';
// import { SafeAreaView, Text } from 'react-native';
// import { ContainerStyle } from './loginstyle';

// export default function Test() {
//   return (
//     <SafeAreaView style={ContainerStyle.container2}>
//       <Text>Test Sidan</Text>
//     </SafeAreaView>
//   );
// }
//version-2 
import React from 'react';
import { SafeAreaView, TouchableOpacity, Text } from 'react-native'; // Lägg till Text här
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { ContainerStyle, IconStyle } from './loginstyle';

export default function Test() {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={ContainerStyle.container2}>
      <TouchableOpacity style={IconStyle.iconContainer1} onPress={goBack}>
        <Icon name="arrow-left" size={30} style={{ color:'#2BF10B' }} />
      </TouchableOpacity>
      <Text>Test Sidan</Text>
    </SafeAreaView>
  );
}





