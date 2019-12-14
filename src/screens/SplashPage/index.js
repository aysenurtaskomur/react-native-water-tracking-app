import React, { Component } from 'react'
import { StyleSheet,Image } from 'react-native'
import {Container,Content } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import NavigationService from '../../NavigationService';

export default class SplashPage extends Component {

  componentDidMount(){
    setTimeout(()=>{
       NavigationService.navigate('FirstPage');
    },2000);
  }

  render() {
    return (
     <Container style={styles.container} >
       <Content contentContainerStyle={{flex:1, justifyContent:'center',alignItems: 'center'}} >
         <Image
         style={{width: 150, height: 150}}
         source={require('./s.jpg')}/> 
       </Content>
     </Container>
    )
  }
}

const styles=StyleSheet.create({
  container:{
    
    backgroundColor: '#BBDEFB',
   
  }
});