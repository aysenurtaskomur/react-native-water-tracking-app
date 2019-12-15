import React, { Component } from 'react'
import { PushNotificationIOS } from 'react-native'
import {Provider} from 'mobx-react';
import store from './src/store';
import NavigationService from './src/NavigationService'
import Router from './src/Router'
import firebase from 'firebase'
import PushNotification from 'react-native-push-notification';

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
