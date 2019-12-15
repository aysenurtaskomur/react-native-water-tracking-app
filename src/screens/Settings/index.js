import React, { Component } from 'react'
import {StyleSheet } from 'react-native'
import { Container, Content,List, ListItem, Text,Right,Icon,Left,Button} from 'native-base'
import NavigationService from '../../NavigationService';

export default class Settings extends Component {
 
  render() {
    return (
      <Container style={styles.container}>
        <Content>
        <List>
            <ListItem selected>
              <Left>
                <Text style={styles.textStyle}>Günlük Su Miktarı</Text>
              </Left>
              <Right>
                <Button transparent
                onPress={()=>NavigationService.navigate('Amount')}
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
          </List>
         
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
  textStyle:{
    fontSize: 19,
    color:'white'
  },
  icon:{
    color:'white'
  }
});


