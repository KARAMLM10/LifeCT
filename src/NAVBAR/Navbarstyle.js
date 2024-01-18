import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    menu: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      backgroundColor: '#6A5ACD',
      borderTopWidth: 1,
      borderTopColor: '#483D8B',
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
export const icon = StyleSheet.create({
    icon: {
      width: 24,
      height: 24,
    },
});

// import { StyleSheet } from 'react-native';

// export const menuStyle = {
//   flexDirection: 'row',
//   justifyContent: 'space-evenly',
//   backgroundColor: '#6A5ACD',
//   borderTopWidth: 1,
//   borderTopColor: '#483D8B',
// };

// export const menuItemStyle = {
//   paddingVertical: 20,
// };

// export const iconStyle = {
//   width: 24,
//   height: 24,
// };
