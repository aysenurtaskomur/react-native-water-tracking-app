import React, { Component } from 'react'
import {StyleSheet,Dimensions,TextInput,View } from 'react-native'
import {Container,Content,Text,Button,Item,Input} from 'native-base'
import { Col, Grid } from 'react-native-easy-grid';
import NavigationService from '../../NavigationService';
import WaterStore from '../../store/waterStore';
const screenWidth = Math.round(Dimensions.get('window').width);

import * as firebase from 'firebase';

export default class changeAmount extends Component {

  
  static navigationOptions={
    headerBackTitle: 'Geri'
 }


 writeUpdAmount(){
   WaterStore._percentage();
  var userId = firebase.auth().currentUser.uid;
  firebase.database().ref('/informations/'+ userId)
  .update({
    goalWater: WaterStore.goalWater,
    percente: WaterStore.percente 
  })
 }
  render() {
    return (
      <Container style={styles.container}>
        <Content contentContainerStyle={{flex:1}}>
        <Grid>
          <Col style={{justifyContent:'center',alignItems:'center'}}>
              <Item style={{ width: screenWidth - 100}}>

                <Input
                style={styles.input}
                placeholder="Yeni Hedef"
                keyboardType="numeric"
                onChangeText={(value) =>WaterStore._setWaterAmount(value)}
                /> 
                
              </Item>
              <Button 
                style={styles.buttonStyle}
                onPress={()=> { this.writeUpdAmount(); NavigationService.navigate('Home');}}>
                  <Text style={styles.textStyle}>KAYDET</Text> 
              </Button>
          </Col>   
        </Grid> 
       </Content>
      </Container>
    )
  }
}
const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#1976D2'
  },
  input:{
    borderRadius: 10,
    textAlign:'center',
    backgroundColor:'white',
    alignSelf: 'center',
    width:50
  },
  textStyle:{
    color:'#1976D2',
    fontWeight:'600',
    fontSize:20
  },
  buttonStyle:{
    backgroundColor:'white',marginTop:30,
    width:screenWidth/3,
    borderRadius:7, 
    justifyContent: "center", 
    textAlignVertical: "center"
  }
})