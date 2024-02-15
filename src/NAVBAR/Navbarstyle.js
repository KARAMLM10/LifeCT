import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    menu: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      backgroundColor: '#5d2a84',
      borderTopWidth: 1,
      borderTopColor: '#5d2a84',
      position: 'absolute',
      borderRadius: 10,
      bottom: 0,
      left: 0,
      right: 0,
    },
  });
export const menuItem = StyleSheet.create({
    menuItem: {
      paddingVertical: 20,
    },
  });    
export const iconColor = StyleSheet.create({
    iconColor:  {
      color: '#2BF10B',
    },
});


