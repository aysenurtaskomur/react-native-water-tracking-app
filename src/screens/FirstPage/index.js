import React, { Component } from 'react'
import { StyleSheet ,Dimensions} from 'react-native'
import { Container, Content,Fab, Input,Text,Item} from "native-base";
import { Col, Row, Grid } from 'react-native-easy-grid';
import Icon from 'react-native-vector-icons/MaterialIcons';
import NavigationService from '../../NavigationService';
import InformationStore from '../../store/informationStore';
import {observer} from 'mobx-react';

const screenWidth = Math.round(Dimensions.get('window').width);

@observer
export default class FirstPage extends Component { 
    
    render() {         
        return (
            <Container style={styles.container}>
            <Content contentContainerStyle={{flex:1}} >
                <Grid > 
                    <Col style={{ justifyContent:'center',alignItems:'center'}}>                                     
                    <Text style={styles.textStyle}> Kullanıcı Adı </Text> 
                    <Item style={{ width: screenWidth - 100}}>
                        <Input 
                        style={styles.input}
                        placeholder="username"
                        keyboardType="default"
                        value={InformationStore.username}
                        onChangeText={(value) =>InformationStore._setUsername(value)}
                        /> 
                        </Item>   
                    </Col>
   
                    <Fab
                    active={'true'}
                    direction="up"
                    containerStyle={{ flex:1}}
                    style={{ backgroundColor: 'white'}}
                    position="bottomRight"
                    onPress = {() => NavigationService.navigate('Information')
                    }>
                    <Icon style={{color:'blue'}} name="chevron-right" />
                    </Fab>
                  
                   
                </Grid>      
            </Content>   
               
            </Container>
        );
    }
}
 
const styles=StyleSheet.create({
    container:{
        backgroundColor: '#1976D2'
    },
    rowStyle:{
        alignItems: 'center'
    },
    textStyle:{
        fontSize:22,
        color:'white',
        marginBottom:15
    },
    input:{
        borderRadius: 10,
        textAlign:'center',
        backgroundColor:'white'     
    }
});