/* screen -MANAPPCUS046
    design by -mayur s
 */
import React, { Component } from 'react';
import {View, Text, TouchableOpacity,Image,ScrollView,Modal,FlatList} from 'react-native';
import {StyleUpcomingTrip} from '../config/CommonStyles';
import FooterBar from '../config/FooterBar';
import Constants from '../config/Constants';
import HeaderBar from '../config/HeaderBar';

export default class WarehouseServiceUpcomingTrip extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            dataSource:[
                {id:12, title:"Nyc-Syc", date:"27 May 2018", pickUpTime:"10:24 PM",dropUpTime:"11:00 AM"},
                {id:15, title:"Nyc Sys", date:"27 May 2018", pickUpTime:"10:24 PM",dropUpTime:"11:00 AM"},
                {id:16, title:"Nyc 3chruch", date:"27 May 2018", pickUpTime:"10:24 PM",dropUpTime:"11:00 AM"},
              ],
              warehouse_data:[
                {
                   title:'ABC service', booking_id: '1021', status: 'ongoing', partner_name: 'ABC Service', contact_number: '+56 784520141',
                    cargo_type: 'Cargo Type 1', cargo_description: 'Lorem ipsomeLorem ipsomeLorem ipsomeLorem ', cargo_handling: 'Yes', numberUsers: '2', quantity: '10', cargo_insurance: 'Yes', dimensions: '10*50*50', Volumetric_weight: '200kg', valueof_load: 'R 200',
                    warehouse_id:'1234',warehouse_type:'Public',storage_type:'Refregirator',costPer_sqm:'R 35',warehouse_location:'Street 45,Lane2',duration_ofstorage:'11/09/2019 to 15/10/2020',
                    recursing_requirement: 'Yes', costOf_recurring: 'R 100', cargoHandling_cost: 'R 100', service_frquency: 'Daily', insurance_rate: 'R 500', discount: '10',total_amount:'R 500'
                }
              ]
      }
    }
    render(){
        let {navigation} = this.props
        return(
            <View style={{flex:1,backgroundColor:Constants.COLOR_GREY}}>
            <HeaderBar title="UPCOMING TRIPS" isBack={true} isLogout={true} navigation={navigation}/>
            <FlatList
                    style={{marginVertical:15}}
                    numColumns={1}
                    data={this.state.dataSource}
                    renderItem={({item},index)=>{
                  return(
                       <TouchableOpacity  style={StyleUpcomingTrip.row} onPress={()=>{
                           this.props.navigation.navigate('ViewUpcomingTrip',{item:this.state.warehouse_data,flag_upcoming_Trip:2})}}>
                            <View style={StyleUpcomingTrip.col1}>
                              <Image
                                  source={require('../images/WarehouseServices_copy.png')}
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