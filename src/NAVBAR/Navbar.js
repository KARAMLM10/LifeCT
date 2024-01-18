import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
//import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
//import { faHome, faTrophy, faBars } from '@fortawesome/free-solid-svg-icons';
//import Icon from 'react-native-vector-icons/FontAwesome';
import {styles,menu,menuItem,icon} from '../../src/NAVBAR/Navbarstyle';
//import styles from '../../src/NAVBAR/Navbarstyle';
//import { menuStyle, menuItemStyle, iconStyle } from '../../src/NAVBAR/Navbarstyle';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { FontAwesome5 } from '@expo/vector-icons';


const Navbar = ({ onHomePress, onTrophyPress, onMorePress }) => {
  return (
    <View style={styles.menu}>
      <TouchableOpacity onPress={onHomePress} style={styles.menuItem}>
      <Icon name="home" size={30} style={{ color: '#2BF10B' }} />
      </TouchableOpacity>

      <TouchableOpacity onPress={onTrophyPress} style={styles.menuItem}>
      <Icon name="trophy" size={30} style={{ color: '#2BF10B' }} />
      </TouchableOpacity>

      <TouchableOpacity onPress={onMorePress} style={styles.menuItem}>
      <Icon name="bars" size={30} style={{ color: '#2BF10B' }} />
      </TouchableOpacity>
    </View>
  );
};

export default Navbar;