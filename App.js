import React, { Component } from 'react'
import { PushNotificationIOS, AppState } from 'react-native'
import {Provider} from 'mobx-react';
import store from './src/store';
import NavigationService from './src/NavigationService'
import Router from './src/Router'
import * as firebase from 'firebase';





 export default class App extends Component {
 componentDidMount(){
  const firebaseConfig = {
    apiKey: "AIzaSyAAegA-TYm54UdNfSZaTsJpZjAIdziDEtY",
    authDomain: "water-reminder-4d1d3.firebaseapp.com",
    databaseURL: "https://water-reminder-4d1d3.firebaseio.com",
    projectId: "water-reminder-4d1d3",
    storageBucket: "water-reminder-4d1d3.appspot.com",
    messagingSenderId: "1062930888597",
    appId: "1:1062930888597:web:fb11a7dc9fd50bf5a1689c",
    measurementId: "G-F5ZRQ3QBSD"
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  
 }

  render() {
    return (
      <Provider  {...store}>
         <Router 
         ref={navigatorRef=>{
         NavigationService.setTopLevelNavigator(navigatorRef);}}/>
      </Provider>
     
    );
  }
}


