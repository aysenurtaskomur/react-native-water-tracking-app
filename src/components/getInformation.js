import React, { Component } from 'react'
import { StyleSheet , Image} from 'react-native'
import { Picker,Icon,Left,Right,Title, Card,Container,Header, Content, Button,Body} from "native-base";
import { Col, Row, Grid } from 'react-native-easy-grid';
import HeaderSection from "./headerSection";



export default class getInformation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: undefined
    };
  }
  onValueChange(value: string) {
    this.setState({
      selected: value
    });
  }
  render() {
    return (
      <Container>
         <HeaderSection/>
         <Content>

           <Grid style={styles.rowStyle}>
             <Row >
              <Picker
                mode="dialog"
                iosIcon={<Icon name="arrow-down" />}
                placeholder="Select your SIM"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                style={styles.pickerStyle}
                selectedValue={this.state.selected}
                onValueChange={this.onValueChange.bind(this)}
              >
                <Picker.Item label="Wallet" value="key0" />
                <Picker.Item label="ATM Card" value="key1" />
                <Picker.Item label="Debit Card" value="key2" />
                <Picker.Item label="Credit Card" value="key3" />
                <Picker.Item label="Net Banking" value="key4" />
              </Picker>
             </Row>
           </Grid>    
         </Content>

      </Container>
     
    )
  }
}
const styles=StyleSheet.create({
  // rowStyle:{
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  // pickerStyle:{
  //   width:100,
  //   height:100
  // }
})