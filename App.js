import React,{Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SignInScreen from './source/screens/SignInScreen'
import AuthLoadingScreen from './source/screens/AuthLoadingScreen'
import HomeScreen from './source/screens/HomeScreen'
import { createDrawerNavigator } from 'react-navigation-drawer';
import LoginScreen from './source/screens/LoginScreen';


// Implementation of HomeScreen, OtherScreen, SignInScreen, AuthLoadingScreen
// goes here.

const AppStack = createDrawerNavigator({ Home: HomeScreen, Other: LoginScreen });
const AuthStack = createStackNavigator({
   SignIn:{
    screen:SignInScreen,
    navigationOptions: {
      header: null,
    },
   },
   Login:{
    screen:LoginScreen,
    navigationOptions: {
      header: null,
    },
   }, 
  },
  {
    initialRouteName: 'Login',
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
   },
  );

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: AppStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'AuthLoading',
    }
  )
);
// export default class App extends Component{
//   render(){
//     return(
//       <View>
//         <Text>Hi</Text>
//       </View>
//     )
//   }
// }
