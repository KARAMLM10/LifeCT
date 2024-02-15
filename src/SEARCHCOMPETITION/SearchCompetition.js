import React from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, } from 'react-native';
//import { header, container, separator } from '../../src/COMPETITION/Competitionstyle';
import Navbar from '../NAVBAR/Navbar';
import SearchComponent from '../SEARCHCOMPONENT/SearchComponent';
import GetInButton from '../GETINBUTTON/GetInButton'; // Se till att sökvägen är korrekt
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import {styles,safeArea,iconContainer,backIcon,competitionDetails,competitionName,competitionDate}from '../SEARCHCOMPETITION/SearchCompetitionStyle'

const LeaderboardScreen = () => {
    const navigation = useNavigation(); // Hook för att hantera navigation

// Go-back
    const goBack = () => {
        navigation.goBack();
    };

    // Dummy-funktion för sökhantering
  const handleSearch = (searchTerm) => {
    console.log('Sökterm:', searchTerm);
    // Hantera söklogiken här
  };

  return (
    <View style={styles.container}>
    <SafeAreaView style={safeArea.safeArea}>
      <TouchableOpacity style={iconContainer.iconContainer} onPress={goBack}>
        <Icon name="arrow-left" size={30} style={backIcon.backIcon} />
      </TouchableOpacity>
      <SearchComponent onSearch={handleSearch} />
    </SafeAreaView>

    <View style={competitionDetails.competitionDetails}>
      <Text style={competitionName.competitionName}>Arbetslaget FC</Text>
      <Text style={competitionDate.competitionDate}>Startdatum 2023-12-24</Text>
      <GetInButton onPress={() => console.log('Gå med-knappen tryckt')} />
    </View>

    <Navbar />
  </View>
);
};

export default LeaderboardScreen;
