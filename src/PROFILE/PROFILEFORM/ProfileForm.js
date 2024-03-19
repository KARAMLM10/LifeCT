
//version-3
import React from "react";
import { useEffect, useState } from "react";
import { View, SafeAreaView, TouchableOpacity, Image, Text, TextInput, ScrollView, } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { ContainerStyle, IconStyle, pictureStyle, Imagestyle, TextInputStyle, inputStyle, Button1Style, TextStle } from "./Profileformstyle";
import Navbar from "../../NAVBAR/Navbar";
import { StatusBar } from 'expo-status-bar';
const ProfileForm = ({ navigation }) => {

  
  const [userName, setUserName] = useState('');
  
  const [profileImageUrl, setProfileImageUrl] = useState('');
  const [county, setCounty] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  

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
        setUserName(data.userName);
        setCounty(data.county);
        setEmail(data.email);
        setPassword(data.password);
        setConfirmPassword(data.confirmPassword);
       
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


const Saveupdating = async () => {
   // try {
      const token = localStorage.getItem("token");
      const result = await fetch ('https://localhost:7001/Profile/UpdateProfile',{
        method: 'PUT',
        headers: {
        "Authorization": `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userName,
        county,
        email, 
        profileImageUrl: "", // Du kan sätta detta till tomt om du inte behöver uppdatera det
        password: "",
        confirmPassword: "",
      }),
      });
      
      console.log(result)

      if(result.status === 200){
        const data = await result.text();
        // const jsonData = JSON.parse(data);
        // console.log(jsonData);
        // setUserName(jsonData.userName);
        // setCounty(jsonData.county);
     
            
      }
      else {
        console.log("else Error updating profile: ", result.status);
      }

    // 
    // catch (errorcatch) {
    //   console.log('Catch error fetching data: ', errorcatch);
    //   console.log('Server response: ', errorcatch.response);
    // }

};

const DeletProfile = async () => {
       try {
        const token = localStorage.getItem("token");
        const result = await fetch ('https://localhost:7001/Profile/Delete',{
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        
        });  
        console.log(result);
        if (result.status === 200) {
            //const data = await result.json();
            //console.log(data);
             
            localStorage.clear();
            navigation.navigate('register');
        }
        else {
          console.log("else error gick inte att radera profile");
        }
      } 
      catch (error) {
        console.log("catch error gick inte att radera profile" + error);
      }
};


  const goBack = () => {
    navigation.goBack();
  };
  const gotoEDitimg = () => {
    navigation.navigate('Editimage');
  };


  return (
    <ScrollView contentContainerStyle={ContainerStyle.Container}>
      <SafeAreaView style={ContainerStyle.safeArea}>
        <TouchableOpacity style={IconStyle.iconContainer1} onPress={goBack}>
          <Icon name="arrow-left" size={30} style={{ color: '#2BF10B' }}/>
        </TouchableOpacity>
      </SafeAreaView>
      <View style={pictureStyle.Picture}>
        <Image style={Imagestyle.Image}  source={profileImageUrl} value={profileImageUrl}/>
      </View>
      <View style={ContainerStyle.button1}>
        <TouchableOpacity style={Button1Style.Button1} onPress={gotoEDitimg}>
          <Text style={TextStle.save}>Redigera Bild</Text>
        </TouchableOpacity>
      </View>

      <View style={ContainerStyle.profileinfo}>
        <Text style={TextInputStyle.LabelStyle}>Användarnamn</Text>
        
        <TextInput
          placeholder="Användarnamn"
          placeholderTextColor="#fff"
          style={inputStyle.input}
          value={userName}
          onChangeText={(text) => setUserName(text)}
        />
       
        <Text style={TextInputStyle.LabelStyle}>Ort</Text>
         <TextInput
           placeholder="Ort"
           placeholderTextColor="#fff"
           style={inputStyle.input}
           value={county}
           onChangeText={(text) => setCounty(text)}
         />
         <Text style={TextInputStyle.LabelStyle}>E-post</Text>
         <TextInput
           placeholder="E-post"
           placeholderTextColor="#fff"
           style={inputStyle.input}
           value={email}
           onChangeText={(text) => setEmail(text)}
         />
         <Text style={TextInputStyle.LabelStyle}>Lösenord</Text>
         <TextInput
           placeholder="Lösenord"
           placeholderTextColor="#fff"
           secureTextEntry={true}
           style={inputStyle.input}
           value={password}
         />         
         <Text style={TextInputStyle.LabelStyle}>Bekräfta Lösenord</Text>
         <TextInput
           placeholder="Bekräfta Lösenord"
           placeholderTextColor="#fff"
           secureTextEntry={true}
           style={inputStyle.input}
           value={confirmPassword}
         />
      </View>
      <View style={ContainerStyle.button1}>
        <TouchableOpacity style={Button1Style.Button1} onPress={Saveupdating}>
          <Text style={TextStle.save}>Spara</Text>
        </TouchableOpacity>
      </View>
      <View style={ContainerStyle.button1}>
        <TouchableOpacity style={Button1Style.Button2} onPress={DeletProfile}>
          <Text style={TextStle.save2}>Avsluta Kontot</Text>
        </TouchableOpacity>
      </View>
      <Navbar />
      <StatusBar style="auto" />
    </ScrollView>
  );
};


export default ProfileForm;
