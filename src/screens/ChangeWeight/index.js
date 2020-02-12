import React, { Component } from 'react'
import {StyleSheet,Dimensions } from 'react-native'
import InformationStore from '../../store/informationStore';
import {Container,Content,Text,Button,Item} from 'native-base'
import { Col, Row, Grid } from 'react-native-easy-grid';
import Weight from '../../components/weight';
import NavigationService from '../../NavigationService';
import WaterStore from '../../store/waterStore';
import * as firebase from 'firebase';

const screenWidth = Math.round(Dimensions.get('window').width);

export default class changeWeight extends Component {
  static navigationOptions={
    headerBackTitle: 'Geri'
  }

   writeUpdWeight(){
    WaterStore._waterAmount(InformationStore.weight); 
     WaterStore._percentage();
    var userId = firebase.auth().currentUser.uid;
    firebase.database().ref('/informations/'+ userId)
    .update({
      weight: InformationStore.weight,
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
                  <Weight/>
                </Item>
                <Button 
                style={styles.buttonStyle}
                onPress={()=> {this.writeUpdWeight(); NavigationService.navigate('Home'); }}>
                  <Text style={styles.textStyle}>HESAPLA</Text> 
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
    backgroundColor: '#1976D2'
  },
  textStyle:{
    color:'#1976D2',
    fontWeight:'600',
    fontSize:18
  },
  buttonStyle:{
    backgroundColor:'white',marginTop:30,
    width:screenWidth/3,
    borderRadius:7, 
    justifyContent: "center", 
    textAlignVertical: "center"
  }
})