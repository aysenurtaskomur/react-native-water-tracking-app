import React, { Component } from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'
import * as Progress from 'react-native-progress';
import { BarChart, LineChart } from "react-native-chart-kit";
const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);
import TimeStore from '../../store/timeStore';
import NavigationService from '../../NavigationService';
import waterStore from '../../store/waterStore';
import * as firebase from 'firebase';


export default class Calendar extends Component {
 
  constructor(props) {
    super(props);
   var userId = firebase.auth().currentUser.uid;
   firebase.database().ref('/informations/' + userId)
   .on('value',snapshot=>{
      var MonFirebase = snapshot.child('Mon').val();
      var TueFirebase = snapshot.child('Tue').val();
      var WedFirebase = snapshot.child('Wed').val();
      var ThuFirebase = snapshot.child('Thu').val();
      var FriFirebase = snapshot.child('Fri').val();
      var SatFirebase = snapshot.child('Sat').val();
      var SunFirebase = snapshot.child('Sun').val();
      TimeStore.Monday = MonFirebase;
      TimeStore.Tuesday = TueFirebase;
      TimeStore.Wednesday = WedFirebase;
      TimeStore.Thursday = ThuFirebase;
      TimeStore.Friday = FriFirebase;
      TimeStore.Saturday = SatFirebase;
      TimeStore.Sunday = SunFirebase;
   }) 

  }

  render() {
    const data = {
      labels: ["Mon ", "Tue ", "Wed ", "Thu ", "Fri ", "Sat " , "Sun  "],
      datasets: [
        {
          data: [TimeStore.Monday,TimeStore.Tuesday,TimeStore.Wednesday, TimeStore.Thursday, TimeStore.Friday, TimeStore.Saturday, TimeStore.Sunday ]
        }
      ]
    };



    return (
      <View style={styles.container}>
        <BarChart
          width={Dimensions.get("window").width }
          height={screenHeight - 200}
          data={data}
          chartConfig={{
            backgroundGradientFrom: "#1976D2",
            backgroundGradientFromOpacity: 0,
            backgroundGradientTo: "#1976D2",
            backgroundGradientToOpacity: 0.5,
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            barPercentage: 0.8,
            fillShadowGradientOpacity: 0.6,
            barRadius: 5,
            decimalPlaces:0.1,
            propsForLabels: {
              fontSize:14
            }
          }}
          showBarTops={false}
          fromZero={true}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1976D2',
    justifyContent: 'center',
    alignItems: 'center'
  }
})