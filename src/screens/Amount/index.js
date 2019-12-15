import React, { Component } from 'react'
import {StyleSheet,Dimensions } from 'react-native'
import InformationStore from '../../store/informationStore';
import {Container,Content,Text,Button,Item,Input} from 'native-base'
import { Col, Grid } from 'react-native-easy-grid';
import Weight from '../../components/weight';
import NavigationService from '../../NavigationService';
import WaterStore from '../../store/waterStore';

const screenWidth = Math.round(Dimensions.get('window').width);

export default class changeAmount extends Component {

  
  static navigationOptions={
    headerBackTitle: 'Geri'
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
                value={WaterStore.goalWater}
                onChangeText={(value) =>WaterStore._setWaterAmount(value)}
                />
              </Item>
              <Button 
                style={styles.buttonStyle}
                onPress={()=> NavigationService.navigate('Home')}>
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