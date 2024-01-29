import { StyleSheet } from "react-native";

export const ContainerStyle = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#411663',
        padding:20,
    },
   
});
export const Container2Style = StyleSheet.create({
  container:{
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:50,
    flexDirection: 'row',
  },
});
export const Button1Style = StyleSheet.create({
  Button:{
    height:40,
    width:40,
    borderRadius:50,
    marginRight:75,
    backgroundColor: '#2BF10B',
    alignItems:'center',
    justifyContent:'center',
    
  },
  Button2:{
    height:40,
    width:40,
    borderRadius:50,    
    marginLeft:75,
    backgroundColor: '#2BF10B',
    alignItems:'center',
    justifyContent:'center',
  },
  Button3:{
    backgroundColor:'#632E8C',
    height:60,
    width:180,
    borderRadius:10,
    alignItems:'center',
    justifyContent:'center'
  }
});
export const TextStle = StyleSheet.create({
  Text1:{
    color: '#411663',
    fontSize: 40,
    fontWeight:'800',
    marginBottom:5,
  },
  Text2:{
    color:'#FFFFFF',
    fontSize: 32,
    marginTop:10,
  },
  Text3:{
    marginTop:-1,
    fontSize:18,
    color:'#FFFFFF'
  },
  save:{
    color:'#37D31F',
    fontSize:25,
    fontWeight:'600',
    marginTop:-5,
  },
});

export const ContainerSaveStyle = StyleSheet.create({
  Save:{
    marginTop:40,
    alignItems:'center',
    justifyContent:'center',
  },
});
//text-2{ color: '#411663' }
//text-2-style={{ fontSize: 24, fontWeight: 'bold' }}
// 2-{ padding: 10, borderRadius: 20, backgroundColor: 'green', marginLeft: 20 }
// 1-{ padding: 10, borderRadius: 20, backgroundColor: 'red', marginRight: 20 }