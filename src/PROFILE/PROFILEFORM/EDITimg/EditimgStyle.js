import { StyleSheet } from "react-native";
export const ContainerStyle = StyleSheet.create({
    Container:{
        flex:1,
        backgroundColor: '#411663',
        padding: 20,
    },
    container2: {
     
        backgroundColor: '#411663',
        //padding: 20,  
        //app.UseCors(x => x.AllowAnyHeader().AllowAnyOrigin().AllowAnyMethod());  
      },
      Container3:{
        height:320,
        width:250,
        marginTop:40,
        
        borderRadius:20,
        borderColor: 'white',  // Border color
        borderWidth: 2, 
        alignItems:'center',
        justifyContent:'center',
        alignSelf:'center',
      },
      chooseButtonContainer: {
        alignSelf: 'center',
        borderRadius:20,
        height:60,
        width:370,
        marginTop:70,
        backgroundColor:'#632E8C',
      },
      chooseButtonContainer2:{
        alignSelf: 'center',
        borderRadius:20,
        height:60,
        width:370,
        marginTop:10,
        backgroundColor:'#632E8C',
      },
      chooseButtonContainer3:{
        alignSelf: 'center',
        borderRadius:20,
        height:60,
        width:370,
        marginTop:25,
        backgroundColor:'#632E8C',
      }
});
export const IconStyle = StyleSheet.create({
    iconContainer1: {
      marginLeft:15,
      //marginTop:10,
    },
  });
  export const PictureStyle = StyleSheet.create({
    Picture:{
        alignItems:'center',
        justifyContent:'center',
        borderColor: 'white',  // Border color
        borderWidth: 2, 
        height:40,
        width:40,
        borderRadius:50,
    },
  });
  export const ImageStyle = StyleSheet.create({
    Image:{
              
        height: 325,
        width:250,
        borderRadius:20,
        
    },
  }); 
  export const buttonstyle = StyleSheet.create({
   
    chooseimg:{
      
      alignItems:'center',
      justifyContent:'center',
      
      
    },
    
  });
  export const TextStyle = StyleSheet.create({
    ButtonText1:{
      color:'#34DE18',
      marginTop:10,
      fontSize:25
    },
    ButtonText2:{
        color:'white',
        fontSize:25,
        marginBottom:5,
    },
  });