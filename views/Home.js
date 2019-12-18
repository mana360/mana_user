import React, { Component } from 'react';
import {View, Text, TouchableOpacity,ScrollView} from 'react-native'
import HeaderBar from '../config/HeaderBar'
import FooterBar from '../config/FooterBar'
import { StyleViewUpcomingTrip, StyleViewCurrentTrip } from '../config/CommonStyles';
import Constants from '../config/Constants';
export default class Home extends React.Component{
    constructor(props){
        super(props);
        this.state={
          
        }
    }
    render(){
        let {navigation} = this.props
        return(
            <View>
                <HeaderBar isBack={true} title='home'/>
                <Text>welcomes</Text>
                <FooterBar navigation={navigation}/>
            </View>
        )
    }
}