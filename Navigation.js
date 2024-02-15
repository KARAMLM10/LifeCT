// // Navigation.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import Home from '../LifeCT/src/Views/Home';
//import LoginForm from './src/LOGIN/loginform';
import Test from './src/LOGIN/test';
import ForgotPassword from './src/LOGIN/forgotpassword/forgotpassword';
import Register from './src/LOGIN/Register/Register';
import LoginView from './src/Views/loginview';
import StepCounter from './src/STEPCOUNTER/Stepcounter';
import Navbar from './src/NAVBAR/Navbar';
import Accountsetting from './src/PROFILE/Accountsettings';
import TrainingsSettings from './src/PROFILE/TrainingsSettings/TrainingsSettings';
import ProfileForm from './src/PROFILE/PROFILEFORM/ProfileForm';
import EditIMGForm from './src/PROFILE/PROFILEFORM/EDITimg/EditIMGform';
import Competition from './src/COMPETITION/Competition';
import SearchCompetition from './src/SEARCHCOMPETITION/SearchCompetition';


const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="Home" component={Home} /> */}
        <Stack.Screen name="Loginview" options={{ headerShown: false }} component={LoginView} />
        
        <Stack.Screen name="test"
          options={{ headerShown: false }}        
        component={Test}/>
        <Stack.Screen name='forgotpassword' options={{headerShown: false}} component={ForgotPassword}/>
        <Stack.Screen name='register' options={{headerShown: false}} component={Register}/>
        <Stack.Screen name='StepCounter' options= {{headerShown: false}} component={StepCounter}/> 
        <Stack.Screen name='Navbar' options={{headerShown: false}} component={Navbar}/>
        <Stack.Screen name='accountsettings' options={{headerShown:false}} component={Accountsetting} />
        <Stack.Screen name='trainingssettings' options={{headerShown:false}} component={TrainingsSettings} />
        <Stack.Screen name='profileform' options={{headerShown:false}} component={ProfileForm} />
        <Stack.Screen name='Editimage' options={{headerShown:false}} component={EditIMGForm} />
        <Stack.Screen name='Competition'options={{headerShown:false}} component={Competition} />
        <Stack.Screen name='SearchCompetition'options={{headerShown:false}} component={SearchCompetition} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

//veresion-2
// Navigation.js
// import React from 'react';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { NavigationContainer } from '@react-navigation/native';

// //import HomeScreen from './src/Views/Home';
// import LoginFormScreen from './src/LOGIN/loginform';
// import TestScreen from './src/LOGIN/test';
// import ForgotPasswordScreen from './src/LOGIN/forgotpassword/forgotpassword';
// import RegisterScreen from './src/LOGIN/Register/Register';

// const Drawer = createDrawerNavigator();

// const Navigation = () => {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator initialRouteName="Loginform">
//         {/* <Drawer.Screen name="Home" component={HomeScreen} /> */}
//         <Drawer.Screen name="Loginform" component={LoginFormScreen} />
//         <Drawer.Screen name="Test" component={TestScreen} />
//         <Drawer.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
//         <Drawer.Screen name="Register" component={RegisterScreen} />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// };

// export default Navigation;
