import React, { Component } from 'react'
import { View, StyleSheet, Dimensions, Alert } from 'react-native'
import {  Fab} from "native-base";
import { Col, Row, Grid } from 'react-native-easy-grid';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Weight from '../../components/weight';
import NavigationService from '../../NavigationService';
import InformationStore from '../../store/informationStore';
import WaterStore from '../../store/waterStore';
import { observer } from 'mobx-react';
import * as firebase from 'firebase';
const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

@observer
export default class FirstPage extends Component {
    validate = () => {
        let error = "";
        if (!InformationStore.weight) {
            error = "error";
        }

        if (error) {
            Alert.alert("Uyarı!", "Bütün verileri giriniz");
            return false;
        }
        return true;
    }

    signUp = event => {
        const isValid = this.validate();
        if (isValid) {
            firebase.auth().signInAnonymously().catch(function(error) {
                var errorMessage = error.message;
                console.log(errorMessage);
              });
              firebase.auth().onAuthStateChanged(function(user) {
                if (user) {
                  var userId = firebase.auth().currentUser.uid; 
                  firebase.database().ref('/informations/'+ userId)
                  .set({
                    weight: InformationStore.weight,
                    goalWater: WaterStore.goalWater,
                    water: WaterStore.water,
                    percente: WaterStore.percente,
                    date: new Date().toLocaleDateString(),
                    Mon: 0,
                    Tue: 0,
                    Wed:0,
                    Thu:0,
                    Fri:0,
                    Sat:0,
                    Sun:0
                  })
                  .then(user => NavigationService.navigate('Home'))
                } 
              });
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Weight />
                </View>
                
                   <Fab
                    active={'true'}
                    direction="up"
                    containerStyle={{ flex: 1 }}
                    style={{ backgroundColor: 'white' }}
                    position="bottomRight"
                    onPress={() => { this.signUp() }}
                >
                    <Icon style={{ color: 'blue' }} name="chevron-right" />
                </Fab>  
                
        </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1976D2',
        justifyContent: 'center',
        alignItems:'center'
    },
    rowStyle: {
        alignItems: 'center'
    },
    textStyle: {
        fontSize: 22,
        color: 'white',
        marginTop: screenHeight / 10
    },
    input: {
        borderRadius: 10,
        textAlign: 'center',
        backgroundColor: 'white'
    }
});