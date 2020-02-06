import React, { Component } from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'
import * as Progress from 'react-native-progress';
import { BarChart, LineChart } from "react-native-chart-kit";
const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);
import WaterStore from '../../store/waterStore';
import NavigationService from '../../NavigationService';
import waterStore from '../../store/waterStore';
import * as firebase from 'firebase';

 

export default class Calendar extends Component {

  render() {
    const data = {
      labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      datasets: [
        {
          data: [50, 70, 2000, 700, 200]
        }
      ]
    };



    return (
      <View style={styles.container}>
        <BarChart
          width={Dimensions.get("window").width}
          height={screenHeight - 300}
          data={data}
          chartConfig={{
            backgroundGradientFrom: "#1976D2",
            backgroundGradientFromOpacity: 0,
            backgroundGradientTo: "#1976D2",
            backgroundGradientToOpacity: 0.5,
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            barPercentage: 1,
            fillShadowGradientOpacity: 0.6,
            barRadius: 5,
            propsForLabels: {
              size: "15"
            }
          }}
          verticalLabelRotation={30}
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