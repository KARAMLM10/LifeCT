import { StyleSheet } from "react-native";
export const ContainerStyle = StyleSheet.create({
    Container:{
      backgroundColor: '#411663',
      padding: 15,
      justifyContent: 'center',
    },
    
    safeArea: {
      flex: 0,
      backgroundColor: '#411663',
      marginTop:-45,
    },
    // container2: {
    //     marginTop:-25,
    //     backgroundColor: '#411663',
    //     flex:0,
    //     //padding: 20,  
    //     //app.UseCors(x => x.AllowAnyHeader().AllowAnyOrigin().AllowAnyMethod());  
    //   },

      profileinfo:{
        marginTop:17,

      },
      button1:{
        marginTop:15,
        alignItems:'center',
      },
});
export const IconStyle = StyleSheet.create({
    iconContainer1: {
      marginLeft:15,
      marginTop:30,
    },
  });
  export const pictureStyle = StyleSheet.create({
    Picture:{
        alignItems:'center',
        justifyContent:'center',
        marginTop:50,
    },
  });
  export const Imagestyle = StyleSheet.create({
    Image:{
        borderColor: 'white',  // Border color
        borderWidth: 1,      
        height: 130,
        width:130,
        borderRadius:50,
    },
  }); 

  export const TextInputStyle = StyleSheet.create({
    LabelStyle:{
        color: 'white',
        fontSize : 15,
        marginBottom:5,
    },
});
export const inputStyle = StyleSheet.create({
    input: {
      backgroundColor: '#fff',
      borderRadius: 10,
      height: 50,
      paddingLeft: 20,
      marginBottom: 3,
    },
  });
  export const Button1Style = StyleSheet.create({
  
  Button1:{
    backgroundColor:'#632E8C',
    height:50,
    width:160,
    borderRadius:10,
    alignItems:'center',
    justifyContent:'center'
  },
  Button2:{
    backgroundColor:'#FD0808',
    height:50,
    width:250,
    borderRadius:10,
    alignItems:'center',
    justifyContent:'center',
  },
});
export const TextStle = StyleSheet.create({
    
    save:{
      color:'#37D31F',
      fontSize:18,
      fontWeight:'600',
      marginTop:-5,
    },
    save2:{
      color:'#632E8C',
      fontSize:18,
      fontWeight:'600',
      marginTop:-5,
    },
  });
  