// import React from "react";
// import { View, SafeAreaView ,TouchableOpacity, Image,Text,TextInput } from "react-native";
// import Icon from 'react-native-vector-icons/FontAwesome';
// import { ContainerStyle, IconStyle ,
//      pictureStyle,Imagestyle,TextInputStyle,inputStyle
//     ,Button1Style
//     ,TextStle
// } from "./Profileformstyle";

// import Navbar from "../../NAVBAR/Navbar";

// export default function ProfileForm ({navigation}){

//       // Go-back
//   const goBack = () => {
//     navigation.goBack();
//   };

//     return(
//         <View style={ContainerStyle.Container}>
//             <SafeAreaView style={ContainerStyle.container2}>
//                 <TouchableOpacity style={IconStyle.iconContainer1} onPress={goBack}>
//                 <Icon name="arrow-left" size={30} style={{ color: '#2BF10B' }} />
//                 </TouchableOpacity>
//             </SafeAreaView>
//             <View style={pictureStyle.Picture}>
//                 <Image style={Imagestyle.Image}/>
//             </View>
//             <View style={ContainerStyle.button1}>
//                 <TouchableOpacity style={Button1Style.Button1}>
//                     <Text style={TextStle.save} >Redigera Bild</Text>
//                 </TouchableOpacity>
//             </View>


//             <View style={ContainerStyle.profileinfo}>
//             <Text style = {TextInputStyle.LabelStyle}>Användarnamn</Text>
//                 <TextInput
//                 placeholder="Användarnamn"
//                 // value={userName}
//                 // onChangeText={(text) => setUserName(text)}
//                 placeholderTextColor="#fff"
//                 style={inputStyle.input}
//                 />
//                 <Text style = {TextInputStyle.LabelStyle}>Ort</Text>
//                 <TextInput
//                 placeholder="Ort"
//                 // value={userName}
//                 // onChangeText={(text) => setUserName(text)}
//                 placeholderTextColor="#fff"
//                 style={inputStyle.input}
//                 />
//                 <Text style = {TextInputStyle.LabelStyle}>E-post</Text>
//                 <TextInput
//                 placeholder="E-post"
//                 // value={userName}
//                 // onChangeText={(text) => setUserName(text)}
//                 placeholderTextColor="#fff"
//                 style={inputStyle.input}
//                 />
//                 <Text style = {TextInputStyle.LabelStyle}>Lösenord</Text>
//                 <TextInput
//                 placeholder="Lösenord"
//                 // value={userName}
//                 // onChangeText={(text) => setUserName(text)}
//                 placeholderTextColor="#fff"
//                 secureTextEntry={true}
//                 style={inputStyle.input}
//                 />
//                 <Text style = {TextInputStyle.LabelStyle}>Bekräfta Lösenord</Text>
//                 <TextInput
//                 placeholder="Bekräfta Lösenord"
//                 // value={userName}
//                 // onChangeText={(text) => setUserName(text)}
//                 placeholderTextColor="#fff"
//                 secureTextEntry={true}
//                 style={inputStyle.input}
//                 />


//             </View>
            

//                 <Navbar/>
//         </View>
//     );
// }

//version-2
// import React from "react";
// import { View, SafeAreaView, TouchableOpacity, Image, Text, TextInput, ScrollView } from "react-native";
// import Icon from 'react-native-vector-icons/FontAwesome';
// import { ContainerStyle, IconStyle, pictureStyle, Imagestyle, TextInputStyle, inputStyle, Button1Style, TextStle } from "./Profileformstyle";
// import Navbar from "../../NAVBAR/Navbar";

// export default function ProfileForm({ navigation }) {
//   // Go-back
//   const goBack = () => {
//     navigation.goBack();
//   };

//   return (
//     <ScrollView contentContainerStyle={ContainerStyle.Container}>
//       <SafeAreaView style={ContainerStyle.container2}>
//         <TouchableOpacity style={IconStyle.iconContainer1} onPress={goBack}>
//           <Icon name="arrow-left" size={30} style={{ color: '#2BF10B' }} />
//         </TouchableOpacity>
//       </SafeAreaView>
//       <View style={pictureStyle.Picture}>
//         <Image style={Imagestyle.Image} />
//       </View>
//       <View style={ContainerStyle.button1}>
//         <TouchableOpacity style={Button1Style.Button1}>
//           <Text style={TextStle.save} >Redigera Bild</Text>
//         </TouchableOpacity>
//       </View>

//       <View style={ContainerStyle.profileinfo}>
//         <Text style={TextInputStyle.LabelStyle}>Användarnamn</Text>
//         <TextInput
//           placeholder="Användarnamn"
//           placeholderTextColor="#fff"
//           style={inputStyle.input}
//         />
//         <Text style={TextInputStyle.LabelStyle}>Ort</Text>
//         <TextInput
//           placeholder="Ort"
//           placeholderTextColor="#fff"
//           style={inputStyle.input}
//         />
//         <Text style={TextInputStyle.LabelStyle}>E-post</Text>
//         <TextInput
//           placeholder="E-post"
//           placeholderTextColor="#fff"
//           style={inputStyle.input}
//         />
//         <Text style={TextInputStyle.LabelStyle}>Lösenord</Text>
//         <TextInput
//           placeholder="Lösenord"
//           placeholderTextColor="#fff"
//           secureTextEntry={true}
//           style={inputStyle.input}
//         />
//         <Text style={TextInputStyle.LabelStyle}>Bekräfta Lösenord</Text>
//         <TextInput
//           placeholder="Bekräfta Lösenord"
//           placeholderTextColor="#fff"
//           secureTextEntry={true}
//           style={inputStyle.input}
//         />
//       </View>

//       <Navbar />
//     </ScrollView>
//   );
// }

//version-3
import React from "react";
import { View, SafeAreaView, TouchableOpacity, Image, Text, TextInput, ScrollView, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { ContainerStyle, IconStyle, pictureStyle, Imagestyle, TextInputStyle, inputStyle, Button1Style, TextStle } from "./Profileformstyle";
import Navbar from "../../NAVBAR/Navbar";
const ProfileForm = ({ navigation }) => {
  const goBack = () => {
    navigation.goBack();
  };
  return (
    <ScrollView contentContainerStyle={ContainerStyle.Container}>
      <SafeAreaView style={ContainerStyle.safeArea}>
        <TouchableOpacity style={IconStyle.iconContainer1} onPress={goBack}>
          <Icon name="arrow-left" size={30} style={{ color: '#2BF10B' }}/>
        </TouchableOpacity>
      </SafeAreaView>
      <View style={pictureStyle.Picture}>
        <Image style={Imagestyle.Image}/>
      </View>
      <View style={ContainerStyle.button1}>
        <TouchableOpacity style={Button1Style.Button1}>
          <Text style={TextStle.save}>Redigera Bild</Text>
        </TouchableOpacity>
      </View>

      <View style={ContainerStyle.profileinfo}>
        <Text style={TextInputStyle.LabelStyle}>Användarnamn</Text>
        <TextInput
          placeholder="Användarnamn"
          placeholderTextColor="#fff"
          style={inputStyle.input}
        />
        <Text style={TextInputStyle.LabelStyle}>Ort</Text>
         <TextInput
           placeholder="Ort"
           placeholderTextColor="#fff"
           style={inputStyle.input}
         />
         <Text style={TextInputStyle.LabelStyle}>E-post</Text>
         <TextInput
           placeholder="E-post"
           placeholderTextColor="#fff"
           style={inputStyle.input}
         />
         <Text style={TextInputStyle.LabelStyle}>Lösenord</Text>
         <TextInput
           placeholder="Lösenord"
           placeholderTextColor="#fff"
           secureTextEntry={true}
           style={inputStyle.input}
         />         
         <Text style={TextInputStyle.LabelStyle}>Bekräfta Lösenord</Text>
         <TextInput
           placeholder="Bekräfta Lösenord"
           placeholderTextColor="#fff"
           secureTextEntry={true}
           style={inputStyle.input}
         />
      </View>
      <View style={ContainerStyle.button1}>
        <TouchableOpacity style={Button1Style.Button1}>
          <Text style={TextStle.save}>Spara</Text>
        </TouchableOpacity>
      </View>
      <View style={ContainerStyle.button1}>
        <TouchableOpacity style={Button1Style.Button2}>
          <Text style={TextStle.save2}>Avsluta Kontot</Text>
        </TouchableOpacity>
      </View>

      <Navbar />
    </ScrollView>
  );
};


export default ProfileForm;
// const styles = StyleSheet.create({
//   container: {
    
//     backgroundColor: '#411663',
//     padding: 15,
//     justifyContent: 'center',
//   },
//   safeArea: {
//     flex: 0,
//     backgroundColor: '#411663',
//     marginTop:-45,
//   },
// });


