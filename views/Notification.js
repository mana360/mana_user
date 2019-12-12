/* screen -MANAPPCUS002
    design by -mayur
 */
import React, { Component } from 'react';
import {View, Text, TouchableOpacity,Image,ScrollView,Modal,FlatList} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {StyleNotification} from '../config/CommonStyles';
import FooterBar from '../config/FooterBar';
import Constants from '../config/Constants';
import HeaderBar from '../config/HeaderBar';
export default class Notification extends React.Component{
    constructor() {
        super();
        this.state = {
          dataSource:[
            {id:12, status:"Trip 1 delay", desc:"Lorem ipsum dolor sit amet, consectetur ", dateTime:"10 May 2018 10:24 AM",},
            {id:5, status:"New Alert", desc:"Lorem ipsum dolor sit amet, consectetur", dateTime:"10 May 2018 10:24 AM",}
          ]
      }
    }
    render(){
        let {navigation} = this.props
        return(
            <View style={{flex:1,backgroundColor:Constants.COLOR_GREY}}>
            <HeaderBar title="Notification" isBack={true} isLogout={true} navigation={navigation}/>
            <FlatList
                    style={{marginVertical:15}}
                    numColumns={1}
                    data={this.state.dataSource}
                    renderItem={({item},index)=>{
                  return(
                       <TouchableOpacity  style={StyleNotification.row} onPress={()=>{alert(item.id)}}>
                      <View style={StyleNotification.col1}>
                        <Image
                            source={require('../images/notification-icon.png')}
                            style={StyleNotification.icon}
                        />
                      </View>
                      <View style={StyleNotification.col2}>
                          <Text style={StyleNotification.title}>{item.status} </Text>
                          <Text style={StyleNotification.desc}>{item.desc}
                          </Text>
                          <Text style={StyleNotification.dateTime}>{item.dateTime}</Text>
                      </View>
                      <View style={StyleNotification.col1}>
                          <Image
                              source={require('../images/forward_icon.png')}
                              style={StyleNotification.arrow}
                          />
                      </View>
                  </TouchableOpacity>
                 )
             }}
             extraData={this.state}
             keyExtractor={item=>item.id}
            />
      <FooterBar navigation={navigation}/>
        </View>
        )
    }
}