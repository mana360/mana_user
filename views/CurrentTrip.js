/* screen -MANAPPCUS002
    design by -mayur
 */
import React, { Component } from 'react';
import {View, Text, TouchableOpacity,Image,ScrollView,Modal,FlatList} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {StyleCurrentTrip} from '../config/CommonStyles';
import FooterBar from '../config/FooterBar';
import Constants from '../config/Constants';
import HeaderBar from '../config/HeaderBar';
export default class CurrentTrip extends React.Component{
    constructor() {
        super();
        this.state = {
          dataSource:[
            {id:12, title:"Nyc-Syc", date:"27/11/2018", pickUpTime:"10:24 PM",dropUpTime:"11:00 AM"},
          ]
      }
    }
    render(){
        let {navigation} = this.props
        return(
            <View style={{flex:1,backgroundColor:Constants.COLOR_GREY}}>
            <HeaderBar title="CURRENT TRIP" isBack={true} isLogout={true} navigation={navigation}/>
            <FlatList
                    style={{marginVertical:15}}
                    numColumns={1}
                    data={this.state.dataSource}
                    renderItem={({item},index)=>{
                  return(
                       <TouchableOpacity  style={StyleCurrentTrip.row} onPress={()=>{alert(item.id)}}>
                      <View style={StyleCurrentTrip.col1}>
                        <Image
                            source={require('../images/Truck_Bookings_copy.png')}
                            style={StyleCurrentTrip.icon}
                        />
                      </View>
                      <View style={StyleCurrentTrip.col2}>
                          <View style={StyleCurrentTrip.bottomLine}>
                          <Text style={[StyleCurrentTrip.label,{fontWeight:'bold'}]}>{item.title} </Text>
                          </View> 
                          <View style={{flexDirection:'row'}}>
                          <Image source={require('../images/date_icon.png')}
                                 style={StyleCurrentTrip.imageIcon}
                        /><Text>{Constants.Date}</Text>
                          </View>
                      
                          <Text style={StyleCurrentTrip.arrow.label}></Text>
                      </View>
                      <View style={StyleCurrentTrip.col1}>
                          <Image
                              source={require('../images/forward_icon.png')}
                              style={StyleCurrentTrip.arrow}
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