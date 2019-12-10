import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import {Item,Input,Text} from "native-base";
import {observer} from 'mobx-react';
import InformationStore from '../store/informationStore';

//keyboarddan girince tek tek alıyor duzelt
@observer
export default class weight extends Component {
  render() {
    return (
    <Item style={{width:125}}>
    <Input 
      style={styles.input}
      placeholder="weight"
      keyboardType="numeric"
      value={InformationStore.weight}
      onChangeText={(value) =>InformationStore._setWeight(value)}
      />
      
     {/* <Text>{InformationStore.weight}</Text> */}
      
    </Item>  
     
    )
  }
}
              
const styles=StyleSheet.create({

  input:{
    borderRadius: 10,
    textAlign:'center',
    backgroundColor:'white'
  }
})