import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import {Item,Input,Text} from "native-base";
import {observer} from 'mobx-react';
import InformationStore from '../store/informationStore';

//keyboarddan girince tek tek alıyor duzelt
@observer
export default class weight extends Component {
  
  constructor(props){
    super(props);
  }
  render() {
    return (
  
    <Input 
      style={styles.input}
      placeholder="Kilonuz"
      keyboardType="numeric"
      value={InformationStore.weight}
      onChangeText={(value) =>InformationStore._setWeight(value)}
      />
     
     
    )
  }
}
              
const styles=StyleSheet.create({

  input:{
    borderRadius: 10,
    textAlign:'center',
    backgroundColor:'white',
    alignSelf: 'center',
    width:50
  }
})