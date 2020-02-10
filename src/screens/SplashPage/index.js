import React, { Component } from 'react'
import { StyleSheet, Image, ActivityIndicator, View, Text } from 'react-native'
import { Container, Content } from 'native-base';
import NavigationService from '../../NavigationService';
import * as firebase from 'firebase';
import { YellowBox } from 'react-native';
import _ from 'lodash';

YellowBox.ignoreWarnings(['Setting a timer']);
const _console = _.clone(console);
console.warn = message => {
  if (message.indexOf('Setting a timer') <= -1) {
    _console.warn(message);
  }
};

export default class SplashPage extends Component {

  
  componentDidMount() {
    setTimeout(() => {
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          NavigationService.navigate('Home')
        }
        else {
          NavigationService.navigate('FirstPage')
        }

      })
    }, 1000);
  }

  // firebase.auth().onAuthStateChanged(user => {
  //  NavigationService.navigate(user ? 'Main' : 'SignUp')
  // })

  render() {
    return (
      <Container style={styles.container} >
        <Content contentContainerStyle={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
          <Image
            source={require('./s.jpg')} />
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#BBDEFB',
  }
});