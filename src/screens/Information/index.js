import React, { Component } from 'react'
import { StyleSheet,Dimensions } from 'react-native'
import {Container, Content,Text,Fab,Item} from "native-base";
import { Col, Row, Grid } from 'react-native-easy-grid';
import TimePicker from '../../components/timePicker'
import Weight from '../../components/weight';
import Icon from 'react-native-vector-icons/MaterialIcons';
import NavigationService from '../../NavigationService';
import firebase from 'firebase'
const screenWidth = Math.round(Dimensions.get('window').width);

export default class Information extends Component {


  static navigationOptions={
    headerLeft: null
  }
  render() {
    return (
    <Container style={styles.container}>
        <Content contentContainerStyle={{ flex:1,justifyContent:'center'}}>        
          <Fab
          active={'true'}
          direction="up"
          containerStyle={{ }}
          style={{ backgroundColor: 'white' }}
          position="bottomRight"
          onPress = {() => NavigationService.navigate('Home')
        }>
          <Icon style={{color:'blue'}} name="chevron-right" />
        </Fab>
         <Grid>
             <Row style={styles.rowStyle}>
              <Col size={screenWidth/2}>
              <Text style={styles.textStyle}> Kilo </Text>
              </Col>
              <Col size={screenWidth/2} style={{alignItems: 'center',justifyContent: 'center'}}>
                <Item style={{width:125,alignItems:'center'}}>
                <Weight />
                </Item> 
              </Col>      
            </Row>

            <Row style={styles.rowStyle}>
                <Col size={screenWidth/2} >
                  <Text style={styles.textStyle}>  Uyanma Saati </Text>
                </Col>
                <Col size={screenWidth/2}>
                 
                    <TimePicker pickername="wakeup"/>
                  
                </Col>
            </Row>

            <Row style={styles.rowStyle}>
                <Col size={screenWidth/2}>
                  <Text style={styles.textStyle}>  Uyku Saati </Text>
                </Col>
                <Col size={screenWidth/2}>
                  <TimePicker pickername="sleep"/>
               
                </Col>
            </Row>
           </Grid>
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
    alignItems: 'center'
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


