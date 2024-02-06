//version-3
import React, { useState } from "react";
import { View, SafeAreaView, TouchableOpacity, Text, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { ContainerStyle, TextStyle,buttonstyle,IconStyle, PictureStyle, ImageStyle } from "./EditimgStyle";


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
      
          {/* picture-view */}
      <View style={ContainerStyle.Container3}>
        <View style={PictureStyle.Picture}>
            <TouchableOpacity onPress={pickImage}>

            {imageUri ? (
              <Image source={{ uri: imageUri }} style={ImageStyle.Image} />
            ) : (
              <Text style={TextStyle.ButtonText2}>+</Text>
            )}
            </TouchableOpacity>
        </View>        
      </View>
          {/* select-picture-view */}
      <View style={ContainerStyle.chooseButtonContainer}>
         <TouchableOpacity style={buttonstyle.chooseimg} 
               onPress={pickImage}>
            <Text style={TextStyle.ButtonText1}>Ladda up en ny bild</Text>
         </TouchableOpacity>
      </View>
            {/* delet-picture-view */}
     
      <View style={ContainerStyle.chooseButtonContainer2}>
          { ( // Visa om det finns en bild eller ingen bild
            <TouchableOpacity
              style={buttonstyle.chooseimg}
              onPress={deleteImage}
            >
              <Text style={TextStyle.ButtonText1}>Ta bort bild</Text>
            </TouchableOpacity>
          )}
      </View>
              {/* save-button-view */}
        <View style={ContainerStyle.chooseButtonContainer3}>
        <TouchableOpacity style={buttonstyle.chooseimg}>
            <Text style={TextStyle.ButtonText1}>Spara</Text>
         </TouchableOpacity>
        </View>
    </View>
  );
}