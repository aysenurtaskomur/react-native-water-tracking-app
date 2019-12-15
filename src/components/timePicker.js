import React, {Component} from 'react';
import {AppRegistry,StyleSheet,PanResponder,View,Dimensions} from 'react-native';
import {Container,Content,Item} from 'native-base';
import TimePicker from 'react-native-datepicker';
import InformationStore from '../store/informationStore';
import {observer} from 'mobx-react';


const screenWidth = Math.round(Dimensions.get('window').width);
@observer
export default class timePicker extends Component {

  componentWillMount() {
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (e) => {console.log('onStartShouldSetPanResponder'); return true;},
      onMoveShouldSetPanResponder: (e) => {console.log('onMoveShouldSetPanResponder'); return true;},
      onPanResponderGrant: (e) => console.log('onPanResponderGrant'),
      onPanResponderMove: (e) => console.log('onPanResponderMove'),
      onPanResponderRelease: (e) => console.log('onPanResponderRelease'),
      onPanResponderTerminate: (e) => console.log('onPanResponderTerminate')
    });
  }


  render() {
  const {pickername} = this.props;
    return (
      
        
        <View style={styles.container}>
        <TimePicker
          style={{ width: screenWidth/5}}
          date={pickername==='wakeup' ? InformationStore.wakeup : InformationStore.sleep}
          mode="time"
          format="HH:mm"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          minuteInterval={10}
          showIcon={false}
          customStyles={{
            dateTouchBody: {
              marginTop:10,  
              height: 40,
              width:'175%'
            },
            dateText: {
              fontSize: 20,
              color: "black",
              textAlign: "left"
            },
            dateInput: {
              borderRadius:10,
              backgroundColor: 'white',
            },
          }}
          onDateChange={(time) => {InformationStore._setTime(pickername,time)}}
        />
        
       </View>
       
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center'
  }
});

AppRegistry.registerComponent('datepicker', () => datepicker);