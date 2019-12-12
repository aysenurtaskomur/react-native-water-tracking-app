import React, { Component } from 'react'
import {StyleSheet } from 'react-native'
import { Container, Content,List, ListItem, Text,Right,Icon,Left} from 'native-base'

export default class Settings extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Content>
        <List>
            <ListItem selected>
              <Left>
                <Text style={styles.textStyle}>Change Water Amount</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem selected>
              <Left>
                <Text style={styles.textStyle}>Change Weight</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
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
  }
});