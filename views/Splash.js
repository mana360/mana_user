import React, { Component } from 'react';
import {View, Text, TouchableOpacity} from 'react-native'
import HeaderBar from '../config/HeaderBar'
import FooterBar from '../config/FooterBar'
export default class Splash extends React.Component{
    render(){
        let {navigation} = this.props
        return(
            <View style={{flex:1,}}>
                <HeaderBar title="Home" isBack={true} isNotification={true} navigation={navigation}/>
                    <View style={{flex:1}}>
                        <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Home')}}>
                            <Text style={{fontSize:28}}>Welcome</Text>
                        </TouchableOpacity>
                    </View>
                <FooterBar navigation={navigation}/>
            </View>
        )
    }
}