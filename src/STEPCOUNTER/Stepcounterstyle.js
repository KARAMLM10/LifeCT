import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4B0082', // Dark purple background color
  },
});
export const innerContent = StyleSheet.create({
  Content: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
  export const icon = StyleSheet.create ({
    icon: {
    width: 30, // Adjust according to your icon size
    height: 30, // Adjust according to your icon size
    marginBottom: 10, // Add some space below the icon
  },
});  
  export const stepsCount = StyleSheet.create ({
    stepsCount: {
    color: 'white', // White color for the text
    fontSize: 48,
    fontWeight: 'bold',
  },
});   
  export const goalText = StyleSheet.create ({
    goalText: {
    color: 'white',
    fontSize: 18,
    marginTop: 5, // Add some space above the goal text
  },
});
  export const tabBar = StyleSheet.create ({
    tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    backgroundColor: '#4B0082',
    marginTop: 30,
  },
});
  export const tabText = StyleSheet.create ({
    tabText:{
    color: 'white',
    fontSize: 16,
    padding: 10,
  },
});
  export const button = StyleSheet.create ({
    button:{
    backgroundColor: '#7FFF00', // Or any color you choose for your buttons
    padding: 10,
    borderRadius: 20, // Add if you want rounded corners
    // Add shadow or other styling effects here if you want
  },
});
  export const buttonText = StyleSheet.create ({
    buttonText: {
    color: '#3d5875', // Choose a color that contrasts with the background
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
