import React, { Component } from 'react'
import { StyleSheet , Image,Dimensions} from 'react-native'
import { Left,Right,Title, Card,Container,Header, Content, Button,Fab} from "native-base";
import { Col, Row, Grid } from 'react-native-easy-grid';
import Icon from 'react-native-vector-icons/MaterialIcons';
import NavigationService from '../NavigationService';
import InformationStore from '../store/informationStore';
import {observer} from 'mobx-react';

const screenHeight = Math.round(Dimensions.get('window').height);

@observer
export default class FirstPage extends Component { 
    
    render() {         
        return (
            <Container style={styles.container}>
            <Content>
                <Fab
                active={'true'}
                direction="up"
                containerStyle={{ }}
                style={{ backgroundColor: 'white' }}
                position="bottomRight"
                onPress = {() => NavigationService.navigate('Information')
                }>
                <Icon style={{color:'blue'}} name="chevron-right" />
                </Fab>
                <Grid>
                    <Row style={styles.imageRow}>
                        <Col>
                            <Card transparent>                  
                            <Button 
                            transparent
                            onPress={()=>{InformationStore._setGender(1)}}>
                                <Image
                                    style={styles.image}
                                    source={require('../assets/woman.jpg')}
                                />
                            </Button> 
                            </Card>
                        </Col>
                        <Col>
                            <Card transparent> 
                            <Button 
                            transparent
                            onPress={()=>{InformationStore._setGender(2)}}>
                                    <Image
                                        style={styles.image}
                                        source={require('../assets/man.jpg')}
                                    />
                            </Button>                                 
                        </Card> 
                        </Col>         
                      </Row>  
                </Grid>      
            </Content>   
               
            </Container>
        );
    }
}
 
const styles=StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#2196F3'
    },
     imageRow:{
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: screenHeight/3
     },
    image:{
        borderRadius: 100,
        width:150,
        height:150,
        marginHorizontal: 30
    }
});