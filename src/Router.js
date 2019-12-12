import React from 'react';
import {createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from './screens/Home'
import Information from './screens/Information'
import FirstPage from './screens/firstPage'
import Settings from './screens/Settings'
import 'react-native-gesture-handler'
 
const AppStack = createStackNavigator({
    FirstPage: FirstPage,
    Information: Information,
    Home: Home,
    Settings: Settings
},{
  initialRouteName: 'FirstPage',
  headerLayoutPreset: 'center',
  defaultNavigationOptions:{
    title: 'Water Reminder',
    headerBackTitle: null,
    headerStyle:{
      backgroundColor: '#3F51B5'
    },
    headerTintColor: 'white',
    headerTitleStyle:{
      fontWeight: '400'
    }
  }
});

const SettingsModal= createStackNavigator({
    Main: AppStack,
    Settings : Settings
},{
  mode: "modal",
  headerMode: "none"
});

export default AppContainer=createAppContainer(SettingsModal);