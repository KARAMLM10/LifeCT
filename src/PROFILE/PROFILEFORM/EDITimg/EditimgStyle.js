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
});
export const IconStyle = StyleSheet.create({
    iconContainer1: {
      marginLeft:15,
      marginTop:30,
    },
  });
  export const PictureStyle = StyleSheet.create({
    Picture:{
        alignItems:'center',
        justifyContent:'center',
    },
  });
  export const ImageStyle = StyleSheet.create({
    Image:{
        borderColor: 'white',  // Border color
        borderWidth: 2,      
        height: 130,
        width:115,
        borderRadius:50,
    },
  }); 