/* screen -MANAPPCUS002
    design by -mayur
 */
import React, { Component } from 'react';
import {View, Text, TouchableOpacity,Image,ScrollView,Modal,FlatList} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {StyleUpcomingTrip} from '../config/CommonStyles';
import FooterBar from '../config/FooterBar';
import Constants from '../config/Constants';
import HeaderBar from '../config/HeaderBar';
import constants from 'jest-haste-map/build/constants';
export default class UpcomingTrip extends React.Component{
    constructor() {
        super();
        this.state = {
            dataSource:[
                {id:12, title:"Nyc-Syc", date:"27 May 2018", pickUpTime:"10:24 PM",dropUpTime:"11:00 AM"},
                {id:15, title:"Nyc Sys", date:"27 May 2018", pickUpTime:"10:24 PM",dropUpTime:"11:00 AM"},
                {id:16, title:"Nyc 3chruch", date:"27 May 2018", pickUpTime:"10:24 PM",dropUpTime:"11:00 AM"},
              ]
      }
    }
    render(){
        let {navigation} = this.props
        return(
            <View style={{flex:1,backgroundColor:Constants.COLOR_GREY}}>
            <HeaderBar title="UPCOMING TRIP" isBack={true} isLogout={true} navigation={navigation}/>
            <FlatList
                    style={{marginVertical:15}}
                    numColumns={1}
                    data={this.state.dataSource}
                    renderItem={({item},index)=>{
                  return(
                       <TouchableOpacity  style={StyleUpcomingTrip.row} onPress={()=>{this.props.navigation.navigate('ViewUpcomingTrip');}}>
                            <View style={StyleUpcomingTrip.col1}>
                              <Image
                                  source={require('../images/Truck_Bookings_copy.png')}
                                  style={StyleUpcomingTrip.icon}
                              />
                            </View>
                            <View style={StyleUpcomingTrip.col2}>
                                <View style={StyleUpcomingTrip.bottomLine}>
                                <Text style={StyleUpcomingTrip.title}>{item.title}</Text>
                                </View> 

                                <View style={{flexDirection:'row',paddingTop:3}}>
                                    <Image source={require('../images/date_icon.png')}
                                          style={[StyleUpcomingTrip.imageIcon]}
                                    />
                                    <Text style={StyleUpcomingTrip.labeltext}>{Constants.Date}</Text>
                                    <Text style={StyleUpcomingTrip.datacss}>{item.date}</Text>
                                </View>
                            
                                <View style={{flexDirection:'row'}}>
                                    <Image source={require('../images/time_icon.png')}
                                          style={StyleUpcomingTrip.imageIcon}
                                    />
                                    <Text style={StyleUpcomingTrip.labeltext}>{Constants.PickUpTime}</Text>
                                    <Text style={StyleUpcomingTrip.datacss}>{item.pickUpTime}</Text>

                                    <Image source={require('../images/time_icon.png')}
                                          style={[StyleUpcomingTrip.imageIcon,{marginLeft:10}]}
                                    />
                                    <Text style={StyleUpcomingTrip.labeltext}>{Constants.PickUpTime}</Text>
                                    <Text style={StyleUpcomingTrip.datacss}>{item.dropUpTime}</Text>
                                </View>
                            </View>
                            <View style={StyleUpcomingTrip.col3}>
                                <Image
                                    source={require('../images/forward_icon.png')}
                                    style={StyleUpcomingTrip.arrow}
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