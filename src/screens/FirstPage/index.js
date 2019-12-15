import React, { Component } from 'react'
import { StyleSheet ,Dimensions,Alert} from 'react-native'
import { Container, Content,Fab, Input,Text,Item} from "native-base";
import { Col, Row, Grid } from 'react-native-easy-grid';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Weight from '../../components/weight';
import NavigationService from '../../NavigationService';
import InformationStore from '../../store/informationStore';
import {observer} from 'mobx-react';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

@observer
export default class FirstPage extends Component { 
    
    validate = () => {
        let error= "";

       if(!InformationStore.weight){
           error="error";
       }
       
       if(!InformationStore.username){
           error="error";
       }

       if(error)
       {
           Alert.alert("Uyarı!","Bütün verileri giriniz");
           return false;
       }
       return true;
    }

    onClick=event=>{
        const isValid=this.validate(); 
        if(isValid){
            NavigationService.navigate('Information');
        }
        
    }
    render() {         
        return (
            <Container style={styles.container}>
            <Content contentContainerStyle={{flex:1}} >
                <Grid> 
                    
                <Row style={{justifyContent:'center',alignItems:'center'}}>
                    <Item style={{ width: screenWidth - 100}}>
                        <Input 
                        style={styles.input}
                        placeholder="Kullanıcı Adınız"
                        keyboardType="default"
                        value={InformationStore.username}
                        onChangeText={(value) =>InformationStore._setUsername(value)}
                        /> 
                    </Item>   
                 </Row>  

                    
                <Row style={{justifyContent:'center',alignItems:'center'}}>
                    <Item style={{ width: screenWidth - 100,justifyContent:'center',alignItems:'center'}}>
                        <Weight />
                    </Item>
                </Row>
                    
                    
   
                    <Fab
                    active={'true'}
                    direction="up"
                    containerStyle={{ flex:1}}
                    style={{ backgroundColor: 'white'}}
                    position="bottomRight"
                    onPress = {() =>{this.onClick()}}
                    >
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
        marginTop:screenHeight/10
    },
    input:{
        borderRadius: 10,
        textAlign:'center',
        backgroundColor:'white'     
    }
});