import React, { Component } from 'react'
import { Left,Right,Title, Header,Body} from "native-base";

export default class headerSection extends Component {    
    render() {   
        return (
                <Header>
                    <Left/>
                    <Body>
                    <Title>Water Reminder</Title>
                    </Body>
                    <Right/>
                </Header>
            )
          }
        }