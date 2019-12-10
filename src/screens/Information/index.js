import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import {Container, Content,Text,Fab} from "native-base";
import { Col, Row, Grid } from 'react-native-easy-grid';
import TimePicker from '../../components/timePicker'
import Weight from '../../components/weight';
import Icon from 'react-native-vector-icons/MaterialIcons';
import NavigationService from '../../NavigationService';


export default class Information extends Component {
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
              <Col>
              <Text style={styles.textStyle}> Weight </Text>
              </Col>
              <Col style={{alignItems: 'center',justifyContent: 'center'}}>
                <Weight />
              </Col>      
            </Row>

            <Row style={styles.rowStyle}>
                <Col size={1}>
                  <Text style={styles.textStyle}>  Wake Up </Text>
                </Col>
                <Col size={3}>
                  <TimePicker  date='wakeup'/>
                </Col>
            </Row>

            <Row style={styles.rowStyle}>
                <Col size={1}>
                  <Text style={styles.textStyle}>  Sleep </Text>
                </Col>
                <Col size={3}>
                  <TimePicker  date='sleep'/>
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
    backgroundColor: '#2196F3'
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
    marginLeft:50
  }
})


