import { StyleSheet } from 'react-native';

export const containerStyle = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#411663',
        padding: 20, 
    },
});

export const accountsettingStyle = StyleSheet.create({
    accountsetting: {
        marginTop:20,
        alignItems:'center',
        height: 300,
    },
});

export const buttonStyle = StyleSheet.create({
    button: {
        alignItems: 'center',
        marginTop:30,
        backgroundColor:'#632E8C',
        height:60,
        width:220,
        borderRadius:10,
        shadowColor: '#000',  // Färgen på skuggan
        shadowOffset: { width: 0, height: 2 },  // Förskjutningen (offset) av skuggan
        shadowOpacity: 0.2,  // Opaciteten (genomskinligheten) av skuggan
        shadowRadius: 3,  // Radien (utbredningen) av skuggan
        elevation: 5, 
    },
    buttonText: {
        color: '#34DE18',
        fontSize: 20,
        alignContent:'center',
        textAlign:'center',
        marginTop: 15,
      },
      button2: {
        marginTop:40,
        backgroundColor:'#F40505',
        height:55,
        width:220,
        borderRadius:10,
        shadowColor: '#F40505',  // Färgen på skuggan
        shadowOffset: { width: 1, height: 2 },  // Förskjutningen (offset) av skuggan
        shadowOpacity: 0.5,  // Opaciteten (genomskinligheten) av skuggan
        shadowRadius: 3,  // Radien (utbredningen) av skuggan
        elevation: 5, 
      },
      buttonText2: {
        color: '#411663',
        fontSize: 30,
        alignContent:'center',
        textAlign:'center',
        marginTop: 6,
      },
});