import React, { Component } from 'react'
import { StyleSheet,Dimensions,TextInput } from 'react-native'
import {observer} from 'mobx-react';
import InformationStore from '../store/informationStore';
const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

//keyboarddan girince tek tek alıyor duzelt
@observer
export default class weight extends Component {
  
  render() {
    return (
  
    <TextInput 
      style={styles.input}
      placeholder="Güncel Kilo"
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
    width: screenWidth-100,
    height:50

  }
})