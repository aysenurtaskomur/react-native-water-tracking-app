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
          onPress = {() =>{ NavigationService.navigate('Home')}}
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


