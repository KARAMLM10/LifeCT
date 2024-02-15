import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import VictorImage from '../../assets/lifectimages/victor2024.jpg';
import JoakimImage from '../../assets/lifectimages/joakim2024.jpg';
import PlankenImage from '../../assets/lifectimages/planken24.jpg';
import MyImage from '../../assets/lifectimages/my.jpg';
import {lamnatavlingstyle, leaveCompetition, leaveCompetitionText, header, button, container, buttonText, title, leaderboard, leaderboardItem, rank, avatar, username, score, separator } from '../../src/COMPETITION/Competitionstyle';
import Navbar from '../NAVBAR/Navbar';
import Competitionbuttons from '../COMPETITIONBUTTONS/Competitionbuttons'; // Anpassa sökvägen till rätt plats
//import SearchComponent from '../SEARCHCOMPONENT/SearchComponent';
import { useNavigation } from '@react-navigation/native'; 

const users = [
  { id: 1, name: 'My', score: 29949, imageUrl: MyImage },
  { id: 2, name: 'Ragata', score: 24349, imageUrl: 'https://files.hemmets.se/uploads/2013/04/min-egen-berattelse-1-e1430138369145.jpg' },
  { id: 3, name: 'Joakim', score: 110293, imageUrl: JoakimImage },
  { id: 4, name: 'Victor', score: 233334, imageUrl: VictorImage },
  { id: 5, name: 'William', score: 111, imageUrl: PlankenImage },
  // Lägg till fler användare här
];

const LeaderboardScreen = () => {
  const navigation = useNavigation(); // Lägg till denna rad för att få tillgång till navigation objektet
  const handleLeaveCompetition = () => {
    // Logik för att lämna tävlingen
  };
// Funktion för att navigera till SearchCompetition skärmen
const navigateToSearchCompetition = () => {
  navigation.navigate('SearchCompetition'); // Ersätt 'SearchCompetition' med det korrekta namnet på din skärm
};
  return (
    <View style={container.container}>
    <View style={header.header}>
      <Competitionbuttons
        onNewCompetitionPress={() => {
          console.log('Ny tävling-knappen tryckt');
        }}
        onSearchCompetitionPress={navigateToSearchCompetition} // Uppdatera denna prop för att använda den nya funktionen
      /> 
      </View>
      <View style={separator.separator} />

      <Text style={title.title}>Arbetslaget FC</Text>
      <View>
      <ScrollView style={leaderboard.leaderboard}>
        {users.sort((a, b) => b.score - a.score).map((user, index) => (
          <View key={user.id} style={leaderboardItem.leaderboardItem}>
            <Text style={rank.rank}>{index + 1}</Text>
            <Image 
              style={avatar.avatar} 
              source={user.imageUrl ? { uri: user.imageUrl } : user.image}
            />
            <Text style={username.username}>{user.name}</Text>
            <Text style={score.score}>{user.score}</Text>
          </View>
        ))}
      </ScrollView>
      </View>
         <View style = {lamnatavlingstyle.lamnatavling}>
      <TouchableOpacity onPress={handleLeaveCompetition} style={leaveCompetition.leaveCompetition}>
        <Text style={leaveCompetitionText.leaveCompetitionText}>Lämna tävlingen</Text>
      </TouchableOpacity>
      </View>
      <View style={separator.separator} />
      <Navbar /> 
    </View>
  );
};

export default LeaderboardScreen;
