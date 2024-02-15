import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { styles, menuItem, iconColor } from '../../src/NAVBAR/Navbarstyle';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { FontAwesome5 } from '@expo/vector-icons';


const Navbar = ({ onHomePress, onTrophyPress, onMorePress }) => {
  return (
    <View style={styles.menu}>
      <TouchableOpacity onPress={onHomePress} style={menuItem.menuItem}>
      <Icon name="home" size={30} color={iconColor.iconColor.color} />
      </TouchableOpacity>

      <TouchableOpacity onPress={onTrophyPress} style={menuItem.menuItem}>
      <Icon name="trophy" size={30} color={iconColor.iconColor.color} />
      </TouchableOpacity>

      <TouchableOpacity onPress={onMorePress} style={menuItem.menuItem}>
      <Icon name="bars" size={30} color={iconColor.iconColor.color} />
      </TouchableOpacity>
    </View>
  );
};

export default Navbar;