
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
// Importera varje stilobjekt individuellt
import { styles, competitionName, startDate, joinButton, joinButtonText } from '../GETINBUTTON/GetInButtonStyle';

const GetInButton = ({ competitionName: tävlingsNamn, startDate: startDatum, onJoinPress }) => {
  return (
    <View style={styles.container}>
      {/* Använd prop-värdena och motsvarande stilar */}
      <Text style={competitionName.competitionName}>{tävlingsNamn}</Text>
      <Text style={startDate.startDate}>Startdatum: {startDatum}</Text>
      <TouchableOpacity style={joinButton.joinButton} onPress={onJoinPress}>
        <Text style={joinButtonText.joinButtonText}>Gå med</Text>
      </TouchableOpacity>
    </View>
  );
};

export default GetInButton;


