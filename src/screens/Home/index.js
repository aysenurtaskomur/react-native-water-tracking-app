import React, { Component } from 'react'
import { StyleSheet, Dimensions, ActivityIndicator, Alert } from 'react-native'
import { Container, Content, Text, Button, ActionSheet, Root } from "native-base";
import { Col, Row, Grid } from 'react-native-easy-grid';
import { observer } from 'mobx-react';
import InformationStore from '../../store/informationStore';
import WaterStore from '../../store/waterStore';
import NavigationService from '../../NavigationService';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as firebase from 'firebase';

const { width } = Dimensions.get("window");
const windowSize = width - 64;
const ActionButtons = ["50", "100", "200", "300", "400", "500", "600", "700", "800", "900", "1000", "1100", "1200", "1300", "1400", "1500", "Cancel"];
const cancelButtonIndex = ActionButtons.length - 1;


 var weekday = ['Sun','Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][new Date().getDay()];

@observer
export default class Home extends Component {

  componentDidMount() {
    WaterStore._waterAmount(InformationStore.weight);
   
    var userId = firebase.auth().currentUser.uid;
    let check = firebase.database().ref('/informations/' + userId);
    check.on('value', snapshot => {
      var waterFirebase = snapshot.child('water').val();
      var waterGoalFirebase = snapshot.child('goalWater').val();
      var percenteFirebase = snapshot.child('percente').val();
      WaterStore.goalWater = waterGoalFirebase;
      WaterStore.water = waterFirebase;
      WaterStore.percente = percenteFirebase;
    });
  }


  writeUpdPercente() {
    var userId = firebase.auth().currentUser.uid;
    firebase.database().ref('/informations/' + userId)
      .update({
        water: WaterStore.water,
        percente: WaterStore.percente,
      }) 
  }

  writeDayAmount() {
    var userId = firebase.auth().currentUser.uid;
      var query = firebase.database().ref('informations/'+ userId).orderByValue();
      query.on('value',snapshot=>{
        snapshot.forEach(childSnapshot=>{
           WaterStore.childKey = childSnapshot.key;
         
           if(WaterStore.childKey == weekday)
            {
               var up = {};
               up[WaterStore.childKey] = WaterStore.water;
               firebase.database().ref('/informations/' + userId).update(up);
              
            }
         })
      })
  }

  static navigationOptions = {
    headerLeft: null,
    headerRight: (
      <Button
        transparent light
        onPress={() => NavigationService.navigate('Settings')}>
        <Icon style={{ fontSize: 30, color: 'white', paddingRight: 10 }} name="person" />
      </Button>
    )
  };

  render() {
    return (
      <Root>
        <Container style={styles.container}>
          <Content contentContainerStyle={{ flex: 1 }}>
            <Grid>
              <Row size={70} style={styles.rowStyle}>
                <AnimatedCircularProgress
                  style={styles.circleProgress}
                  size={windowSize}
                  width={8}
                  fill={WaterStore.percente}
                  tintColor="#01579B"
                  backgroundColor="#42A5F5">
                  {
                    
                      (fill) => (
                      <Text style={{ color: 'white', fontSize: 60 }}>
                        %{WaterStore.percente}
                      </Text>
                      
                    )
                  }
                </AnimatedCircularProgress>
              </Row>

              <Row size={10} style={styles.rowStyle}>
                <Text style={{ fontSize: 40, color: 'white' }}> {WaterStore.water} / {WaterStore.goalWater}  mL</Text>
              </Row>
              <Row size={20} style={styles.rowStyle}>
                <Button
                  style={styles.button}
                  onPress={() =>
                    ActionSheet.show(
                      {
                        options: ActionButtons,
                        cancelButtonIndex: { cancelButtonIndex },
                        destructiveButtonIndex: cancelButtonIndex,
                        title: "Select Water Amount"
                      },
                      buttonIndex => {
                        if (ActionButtons[buttonIndex] > 49) {
                          WaterStore._addWater(parseInt(ActionButtons[buttonIndex]));
                          this.writeUpdPercente();
                          this.writeDayAmount();
                        }
                      }
                    )
                  }
                >
                  <Icon style={{ color: '#1A237E', fontSize: 30 }} name="local-drink" />
                </Button>
              </Row>
            </Grid>
          </Content>
        </Container>
      </Root>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1976D2'
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    width: 60,
    borderRadius: 100,
    backgroundColor: 'white'
  },
  circleProgress: {
    alignItems: 'center'
  },
  rowStyle: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});