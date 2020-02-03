import React, { Component } from 'react'
import { Text, View,StyleSheet,Dimensions } from 'react-native'
import * as Progress from 'react-native-progress';
import { BarChart,LineChart } from "react-native-chart-kit";


const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

const data = {
  labels: ["Ja", "February", "March", "April", "May", "June"],
  datasets: [
    {
      data: [100, 45, 28, 80, 99, 43]
    }
  ]
};

export default class Calendar extends Component {
  render() {
    return (
      <View style={styles.container}>
       
       <View style={{justifyContent:'center',alignItems:'center'}}>
         <BarChart
          data={data}
          width={Dimensions.get("window").width} // from react-native
          height={screenHeight-300}
          style={{borderRadius: 16}}
          chartConfig={{
            backgroundColor: '#1976D2',
              backgroundGradientFrom: '#114f8d',
              backgroundGradientTo: '#1b7fe4',
            decimalPlaces: 3, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(214, 232, 250, ${opacity})`,
            barPercentage:1
           
          }}
          verticalLabelRotation={30}
          showBarTops={false}
        />
      </View> 

      {/* <View style={{justifyContent:'center',alignItems:'center'}}>
        <LineChart
          data={{
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100
                ]
              }
            ]
          }}
          width={Dimensions.get("window").width-30} // from react-native
          height={250}
          chartConfig={{
            backgroundColor: "#1A237E",
            backgroundGradientFrom: "#1A237E",
            backgroundGradientTo: "#0D47A1",
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16
            },
            propsForDots: {
              r: "6",
              strokeWidth: "2",
              stroke: "#ffa726"
            }
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16
          }}
        />
      </View> */}
      </View>
    )
  }
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#1976D2'
  }
})