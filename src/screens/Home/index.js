import React, { Component } from 'react'
import {StyleSheet,Dimensions} from 'react-native'
import {Container, Content,Text,Button,ActionSheet,Root} from "native-base";
import { Col, Row, Grid } from 'react-native-easy-grid';
import {observer} from 'mobx-react';
import InformationStore from '../../store/informationStore';
import WaterStore from '../../store/waterStore';
import NavigationService from '../../NavigationService';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import Icon from 'react-native-vector-icons/MaterialIcons';

const {width} = Dimensions.get("window");
const size = width - 64;
const BUTTONS = ["100 ml", "200 ml", "300 ml","400 ml", "500 ml","600 ml", "700 ml", "800 ml", "900ml","1000 ml", "1100 ml", "1200 ml", "1300ml", "1400 ml", "1500 ml","Delete","Cancel"];
const DESTRUCTIVE_INDEX = 15;
const CANCEL_INDEX = 16;

@observer
export default class Home extends Component {
  constructor(props){
    super(props);
     WaterStore._waterAmount(InformationStore.weight);
     WaterStore._percentage();
  }
  
  static navigationOptions= {
      headerRight: (
        <Button 
        transparent light
        onPress={()=>NavigationService.navigate('Settings')}>
        <Text>Settings</Text>
      </Button>
      )
  };
  
    render() {
      return (
        <Root>
          <Container style={styles.container}>
          <Content contentContainerStyle={{flex: 1}}>

          <Grid>
            <Row size={80} style={{justifyContent:'center',alignItems:'center'}}>
            <AnimatedCircularProgress
            style={styles.circleProgress}
            size={size}
            width={5}
            fill={WaterStore.percente}
            tintColor="#00e0ff"
            backgroundColor="#3d5875">
            {
              (fill) => (
                <Text style={{color:'white',fontSize: 20}}>
                  HEDEF: { WaterStore.goalWater } LİTRE,  
                   %{WaterStore.percente}
                </Text>
              )
            }
          </AnimatedCircularProgress>
         
            </Row>
            <Row size={20}>
            <Button
            style={styles.button}
            onPress={() =>
            ActionSheet.show(
              {
                options: BUTTONS,
                cancelButtonIndex: CANCEL_INDEX,
                destructiveButtonIndex: DESTRUCTIVE_INDEX,
                title: "Select Water Amount"
              },
              buttonIndex => {
                this.setState({ clicked: BUTTONS[buttonIndex] });
              }
            )}
          >
            <Icon style={{flex:1,justifyContent:'center',alignItems:'center',color:'white',fontSize: 30}} name="local-drink" />
          </Button>
            </Row>
        </Grid>
          
          
      
        
          

              
          </Content>
        </Container>
        </Root>
        
      )
    }
}

const styles=StyleSheet.create({
  container:{
    backgroundColor: '#2196F3'
  },
  button:{
    height:50,
    width:50,
    borderRadius:100,
    justifyContent:'center',
    alignItems:'center'
  },
  circleProgress:{
    alignItems: 'center'
  }
});