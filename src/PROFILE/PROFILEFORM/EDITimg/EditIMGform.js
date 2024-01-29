// import React from "react";
// import { View, SafeAreaView, Text,TouchableOpacity, Image, Button } from "react-native";
// import Icon from 'react-native-vector-icons/FontAwesome';
// import { ContainerStyle, IconStyle , pictureStyle,Imagestyle} from "./Profileformstyle";
// import { useState } from "react";

// export default function ProfileForm ({navigation}){
//     const [imageUri, setImageUri] = useState(null);

    
//   // Funktion för att välja bild från enheten
//   const pickImage = async () => {
//     // Implementera logik för att välja en bild här
//     // Exempel: använd ImagePicker från react-native-image-picker
//   };

//   // Funktion för att ta bort den aktuella bilden
//   const deleteImage = () => {
//     setImageUri(null);
//   };

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
//             {/* <View style={pictureStyle.Picture}>
//                 <Image style={Imagestyle.Image}/>
//             </View> */}
//             {/* version-2-for-image */}
//             <View style={pictureStyle.Picture}>
//                 <TouchableOpacity onPress={pickImage}>
//                 {imageUri ? (
//                     <Image source={{ uri: imageUri }} style={Imagestyle.Image} />
//                 ) : (
//                     <Text>Välj en bild</Text>
//                 )}
//                 </TouchableOpacity>
//                 {imageUri && (
//                 <TouchableOpacity onPress={deleteImage}>
//                     <Text>Radera bild</Text>
//                 </TouchableOpacity>
//                 )}
//             </View>
//         </View>
//     );
// }


//version-3
import React, { useState } from "react";
import { View, SafeAreaView, TouchableOpacity, Text, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { ContainerStyle, IconStyle, PictureStyle, ImageStyle } from "./EditimgStyle";


export default function EditIMGForm({ navigation }) {
  const [imageUri, setImageUri] = useState(null);

  // Funktion för att välja bild från enheten
  const pickImage = () => {
    // Implementera logik för att välja bild på webben
    // Exempel: använd HTML5 input type="file"
    const inputElement = document.createElement("input");
    inputElement.type = "file";
    inputElement.accept = "image/*";
    inputElement.onchange = (event) => {
      const file = event.target.files[0];
      if (file) {
        const imageUrl = URL.createObjectURL(file);
        setImageUri(imageUrl);
      }
    };
    inputElement.click();
  };
  
  // Funktion för att ta bort den aktuella bilden
  const deleteImage = () => {
    setImageUri(null);
  };
  
  // Go-back
  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={ContainerStyle.Container}>
      <SafeAreaView style={ContainerStyle.container2}>
        <TouchableOpacity style={IconStyle.iconContainer1} onPress={goBack}>
          <Icon name="arrow-left" size={30} style={{ color: "#2BF10B" }} />
        </TouchableOpacity>
      </SafeAreaView>
      
      <View style={PictureStyle.Picture}>
        <TouchableOpacity onPress={pickImage}>
          {imageUri ? (
            <Image source={{ uri: imageUri }} style={ImageStyle.Image} />
          ) : (
            <Text>Välj en bild</Text>
          )}
        </TouchableOpacity>
        {imageUri && (
          <TouchableOpacity onPress={deleteImage}>
            <Text>Radera bild</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}



//Version-2

// import React, { useState } from "react";
// import { View, SafeAreaView, TouchableOpacity, Image } from "react-native";
// import Icon from 'react-native-vector-icons/FontAwesome';
// import { ContainerStyle, IconStyle, PictureStyle } from "./Profileformstyle";
// import ImagePicker from 'react-native-image-crop-picker';

// // Denna import är specifik för webbplattformen
// // Till detta
// import { ImagePicker as WebImagePicker } from 'react-native-web-image-picker/dist/cjs'; // eller esm beroende på hur din projekt konfigurerad

// export default function ProfileForm({ navigation }) {
//   const [image, setImage] = useState(null);

//   // Go-back
//   const goBack = () => {
//     navigation.goBack();
//   };

//   // Filuppladdning på mobilen
//   const pickImage = async () => {
//     try {
//       const result = await ImagePicker.openPicker({
//         width: 300,
//         height: 400,
//         cropping: true
//       });
//       setImage(result.path);
//     } catch (error) {
//       console.log('Error picking image: ', error);
//     }
//   };

//   // Filuppladdning på webben
//   const pickImageWeb = async () => {
//     try {
//       const result = await WebImagePicker.openPicker({
//         cropping: true
//       });
//       setImage(result.path);
//     } catch (error) {
//       console.log('Error picking image on web: ', error);
//     }
//   };

//   // Plattaformsberoende innehåll
//   const renderPlatformContent = () => {
//     return (
//       <View style={PictureStyle.Picture}>
//         <TouchableOpacity onPress={Platform.OS === 'web' ? pickImageWeb : pickImage}>
//           {image ? (
//             <Image source={{ uri: image }} style={{ width: 100, height: 100, borderRadius: 50 }} />
//           ) : (
//             <Icon name="user-circle" size={100} style={{ color: 'gray' }} />
//           )}
//         </TouchableOpacity>
//       </View>
//     );
//   };

//   return (
//     <View style={ContainerStyle.Container}>
//       <SafeAreaView style={ContainerStyle.container2}>
//         <TouchableOpacity style={IconStyle.iconContainer1} onPress={goBack}>
//           <Icon name="arrow-left" size={30} style={{ color: '#2BF10B' }} />
//         </TouchableOpacity>
//       </SafeAreaView>
//       {renderPlatformContent()}
//     </View>
//   );
// }
