import React, { Component } from 'react'
import {Provider} from 'mobx-react';
import store from './src/store';
import NavigationService from './src/NavigationService'
import Router from './src/Router'
 export default class App extends Component {
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
