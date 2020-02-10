import React, { Component } from 'react'
import { StyleSheet,Dimensions } from 'react-native'
import {Container, Content,Text,Fab,Item} from "native-base";
import { Col, Row, Grid } from 'react-native-easy-grid';
import TimePicker from '../../components/timePicker'
import Weight from '../../components/weight';
import Icon from 'react-native-vector-icons/MaterialIcons';
import NavigationService from '../../NavigationService';

import InformationStore from '../../store/informationStore';
import WaterStore from '../../store/waterStore';
const screenWidth = Math.round(Dimensions.get('window').width);

import * as firebase from 'firebase';



export default class Information extends Component {

constructor(props) {
  super(props);
  console.log("sdfsdf");
}
  static navigationOptions={
    headerLeft: null
  }

  signUp(){
    firebase.auth().signInAnonymously().catch(function(error) {
      var errorMessage = error.message;
      console.log(errorMessage);
    });
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        var userId = firebase.auth().currentUser.uid; 
        firebase.database().ref('/informations/'+ userId)
        .set({
          weight: InformationStore.weight,
          sleepTime: InformationStore.sleep,
          wakeupTime: InformationStore.wakeup,
          goalWater: WaterStore.goalWater,
          water: WaterStore.water,
          percente: WaterStore.percente,
          date: new Date().toLocaleDateString(),
          Mon: 0,
          Tue: 0,
          Wed:0,
          Thu:0,
          Fri:0,
          Sat:0,
          Sun:0
        })
        .then(user => NavigationService.navigate('Home'))
      } 
    });
    
   
  }
  render() {
    return (
    <Container style={styles.container}>
        <Content contentContainerStyle={{ flex:1}}>        
         <Grid>
            <Row style={styles.rowStyle}>
              <Row> 
                <Text style={styles.textStyle}>  Uyanma Saati  </Text>
              </Row>
              <Row>
                <TimePicker pickername="wakeup"/>
              </Row>
            </Row>

            <Row style={styles.rowStyle}>
              <Row>
                <Text style={styles.textStyle}>  Uyku Saati </Text>
              </Row>
              <Row>
                <TimePicker pickername="sleep"/>
              </Row>
            </Row>
           </Grid>  
           <Fab
          active={'true'}
          direction="up"
          containerStyle={{ }}
          style={{ backgroundColor: 'white' }}
          position="bottomRight"
          onPress = {() =>{ this.signUp()}}
        >
          <Icon style={{color:'blue'}} name="chevron-right" />
        </Fab>
        </Content>
      </Container>
      
    );
  }
}
   


const styles=StyleSheet.create({
  container:{
    backgroundColor: '#1976D2'
  },
  rowStyle:{
    alignItems: 'center',
    justifyContent:'center'
  },
  input:{
    borderRadius: 10,
    textAlign:'center',
    backgroundColor:'white'
  },
  textStyle:{
    fontSize:22,
    color:'white',
    marginLeft:20
  }
})


