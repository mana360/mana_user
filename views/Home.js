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
            datasource:[
                {id:'1',desc:'abcdfg',quantity:'1',price:'45.00', total:'45.00'},
                {id:'2',desc:'abcdfg',quantity:'1',price:'45.00', total:'45.00'},
                {id:'3',desc:'abcdfg',quantity:'1',price:'45.00', total:'45.00'},
                {id:'4',desc:'abcdfg',quantity:'1',price:'45.00', total:'45.00'},
                {id:'5',desc:'abcdfg',quantity:'1',price:'45.00', total:'45.00'},
            ]
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