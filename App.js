import React, { Component } from 'react'
import { PushNotificationIOS } from 'react-native'
import {Provider} from 'mobx-react';
import store from './src/store';
import NavigationService from './src/NavigationService'
import Router from './src/Router'
import * as firebase from 'firebase';
import PushNotification from 'react-native-push-notification';
import InformationStore from './src/store/informationStore';
import WaterStore from './src/store/waterStore';

var today = new Date();
var time = today.getHours() + ":" + today.getMinutes();

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
  firebase.initializeApp(firebaseConfig);
 }
   
    // PushNotification.localNotificationSchedule({
    //   message: "My Notification Message", // (required)
    //   date: new Date(Date.now() + 60 * 1000)
    //   });
   

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

PushNotification.configure({
  // (optional) Called when Token is generated (iOS and Android)
  onRegister: function(token) {
    console.log("TOKEN:", token);
  },

  // (required) Called when a remote or local notification is opened or received
  onNotification: function(notification) {
    console.log("NOTIFICATION:", notification);

    // process the notification

    // required on iOS only (see fetchCompletionHandler docs: https://github.com/react-native-community/react-native-push-notification-ios)
    notification.finish(PushNotificationIOS.FetchResult.NoData);
  },

  // ANDROID ONLY: GCM or FCM Sender ID (product_number) (optional - not required for local notifications, but is need to receive remote push notifications)
  senderID: "YOUR GCM (OR FCM) SENDER ID",

  // IOS ONLY (optional): default: all - Permissions to register.
  permissions: {
    alert: true,
    badge: true,
    sound: true
  },

  // Should the initial notification be popped automatically
  // default: true
  popInitialNotification: true,

  /**
   * (optional) default: true
   * - Specified if permissions (ios) and token (android and ios) will requested or not,
   * - if not, you must call PushNotificationsHandler.requestPermissions() later
   */
  requestPermissions: true
});
