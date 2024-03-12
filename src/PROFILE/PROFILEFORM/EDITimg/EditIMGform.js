//version-3
import React, { useEffect,useState } from "react";
import { View, SafeAreaView, TouchableOpacity, Text, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { ContainerStyle, TextStyle,buttonstyle,IconStyle, PictureStyle, ImageStyle } from "./EditimgStyle";
import * as ImagePicker from 'expo-image-picker';
import ImageViewer from './imgviwer';

export default function EditIMGForm({ navigation }) {
  
  const [profileImageUrl, setProfileImageUrl] = useState('');

//get-profile-version-3
useEffect(() => {
  const fetchData = async () => {
    try{
      const token = localStorage.getItem("token");
      const result = await fetch ('https://localhost:7001/Profile/GetSpecific', {
        headers: {
          "Authorization":  `Bearer ${token}`
        },
      });

      if(result.status === 200){
      
        const data = await result.json();
        setProfileImageUrl(data.profileImageUrl);
               
      }
      else{
        console.log(" else error" + result.status);
      }
    }
    catch (error){
      console.log('catch error fetching data ', error);
    }
  };
  fetchData();
},[]);


//version-3
const EDITIMG = async () => {
  try {
    const token = localStorage.getItem("token");
    const result = await fetch('https://localhost:7001/Profile/UpdateProfileImage', {
      method: 'PUT',
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(profileImageUrl),
    });
    console.log(result);

    // Logga svaret som text för att inspektera innehållet
    const responseText = await result.text();
    console.log("Response Text:", responseText);

    if (result.status === 200) {
      // Använd responseText direkt om det inte är JSON
      setProfileImageUrl(responseText);
    } else {
      console.log("Else error", result.status);
    }
  } catch (error) {
    console.log('Catch error fetching data ', error);
  }
};


const pickImage = async () => {
  let result = await ImagePicker.launchImageLibraryAsync({
    allowsEditing: true,
    quality: 1,
  });

  if (!result.canceled) {
    setProfileImageUrl(result.assets[0].uri);
  } else {
    alert("You did not select any image.");
  }
};


// Funktion för att ta bort den aktuella bilden
  // function deleteImage() {
  //   setProfileImageUrl(null);
  // }

  const deleteImage = async () =>  {
    try {
      const token = localStorage.getItem("token");
      const result = await fetch('https://localhost:7001/Profile/RemoveProfileImage', {
        method: 'POST',
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(profileImageUrl),
      });
      console.log(result);
  
      // Logga svaret som text för att inspektera innehållet
      const responseText = await result.text();
      console.log("Response Text:", responseText);

      if (result.status === 200) {
        // Använd responseText direkt om det inte är JSON
        setProfileImageUrl(responseText);
      } else {
        console.log("Else error", result.status);
      }
    }
     catch (errordelet){
        console.log('catch error gick inte att radera ', errordelet)
    }
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
            <TouchableOpacity selectedImage={profileImageUrl} value={profileImageUrl} onPress={pickImage}>
              
            {profileImageUrl ? (
              <Image source={{ uri: profileImageUrl }} style={ImageStyle.Image} />
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
          {/* { ( 
            <TouchableOpacity
              style={buttonstyle.chooseimg}
              onPress={deleteImage}
            >
              <Text style={TextStyle.ButtonText1}>Ta bort bild</Text>
            </TouchableOpacity>
          )} */}
          
            <TouchableOpacity
              style={buttonstyle.chooseimg}
              onPress={deleteImage}
            >
              <Text style={TextStyle.ButtonText1}>Ta bort bild</Text>
            </TouchableOpacity>
          
      </View>
              {/* save-button-view */}
        <View style={ContainerStyle.chooseButtonContainer3}>
        <TouchableOpacity style={buttonstyle.chooseimg}>
            <Text style={TextStyle.ButtonText1} onPress={EDITIMG}>Spara</Text>
         </TouchableOpacity>
        

        </View>
    </View>
  );
}
