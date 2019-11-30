import React, { Component } from 'react'
import { StyleSheet , Image} from 'react-native'
import { Left,Right,Title, Card,Container,Header, Content, Button,Body} from "native-base";
import { Col, Row, Grid } from 'react-native-easy-grid';
import {Dimensions } from "react-native";
import HeaderSection from "./headerSection";
 const screenHeight = Math.round(Dimensions.get('window').height);
export default class firstPage extends Component {    
    render() {   
       
        return (
            <Container>
            <HeaderSection/>
            
            <Content style={styles.container}>
                <Grid>
                    <Row style={styles.imageRow}>
                        <Col>
                            <Card transparent>                  
                            <Button transparent>
                                <Image
                                    style={styles.image}
                                    source={require('../assets/woman.jpg')}
                                />
                            </Button> 
                            </Card>
                        </Col>
                        <Col>
                            <Card transparent> 
                            <Button transparent>
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
    
        backgroundColor: 'white',
       
       
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