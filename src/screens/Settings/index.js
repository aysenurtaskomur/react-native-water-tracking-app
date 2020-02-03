import React, { Component } from 'react'
import {StyleSheet,View } from 'react-native'
import { Container, Content,List, ListItem, Text,Right,Icon,Left,Button} from 'native-base'
import NavigationService from '../../NavigationService';
import WaterStore from '../../store/waterStore';
import * as firebase from 'firebase';
export default class Settings extends Component {
 

  render() {
    return (
      <View style={styles.container}>
        <List>
            <ListItem selected>
              <Left>
                <Text style={styles.textStyle}>Günlük Su Miktarı</Text>
              </Left>
              <Right>
                <Button transparent
                onPress={()=>NavigationService.navigate('ChangeAmount')}
                >
                  <Icon name="arrow-forward" style={styles.icon}/>
                </Button>
              </Right>
            </ListItem>

            <ListItem selected>
              <Left>
                <Text style={styles.textStyle}>Kilo Değişimi</Text>
              </Left>
              <Right>
                <Button transparent
                onPress={()=>NavigationService.navigate('ChangeWeight')}
                >
                <Icon name="arrow-forward" style={styles.icon}/> 
                </Button>
              </Right>
            </ListItem>

            <ListItem selected>
              <Left>
                <Text style={styles.textStyle}>Su Takvimi</Text>
              </Left>
              <Right>
                <Button transparent
                onPress={()=>NavigationService.navigate('Calendar')}
                >
                <Icon name="arrow-forward" style={styles.icon}/> 
                </Button>
              </Right>
            </ListItem>
          </List>
         
      </View>
    )
  }
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#1976D2'
  },
  textStyle:{
    fontSize: 19,
    color:'white'
  },
  icon:{
    color:'white'
  }
});


