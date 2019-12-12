import React, { Component } from 'react'
import {Provider} from 'mobx-react';
import store from './src/store';
import NavigationService from './src/NavigationService'
import Router from './src/Router'
import firebase from 'firebase'

 export default class App extends Component {
   componentDidMount(){
    var firebaseConfig = {
      apiKey: "AIzaSyCLvfZmdzUztDv2C7T2lqHKxoa_9YEK9Wg",
      authDomain: "water-reminder-c20fd.firebaseapp.com",
      databaseURL: "https://water-reminder-c20fd.firebaseio.com",
      projectId: "water-reminder-c20fd",
      storageBucket: "water-reminder-c20fd.appspot.com",
      messagingSenderId: "59279755629",
      appId: "1:59279755629:web:7997af1ea81fe885203264",
      measurementId: "G-0QQBW1MGWK"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
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
