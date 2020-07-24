/* screen -MANAPPCUS046
    design by -mayur s
 */
import React, { Component } from 'react';
import {View, Text, TouchableOpacity,Image,ScrollView,Modal,FlatList} from 'react-native';
import {StyleUpcomingTrip} from '../config/CommonStyles';
import FooterBar from '../config/FooterBar';
import Constants from '../config/Constants';
import HeaderBar from '../config/HeaderBar';
import { MainPresenter } from '../config/MainPresenter'

export default class WarehouseServiceUpcomingTrip extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            dataSource:[],
            warehouse_data:[]
      }
    }

    componentDidMount(){
        this.warehouseService=this.props.navigation.getParam('flag_warehouse_services')
        this.service_type_id = this.props.navigation.getParam('service_type_id')
        if(this.warehouseService){
            this.presenter.callPostApi(ApiConstants.getMyBookings, {'service_type_id':this.service_type_id,'flag':2,
            'start_index':0,'total_count':10}, true)
        }
    }

    async onResponse(apiConstant, data) {
        switch (apiConstant) {
            case ApiConstants.getMyBookings: {
                if (data.status) {
                    if (data.warehouse_booking_list.length != 0) {
                            this.setState({
                                dataSource: data.warehouse_booking_list,
                    })
                }
                    
                else {
                        this.setState({
                            dataSource: [],
                        })
                        
                    }
                }else {
                    // alert(data.message)
                    this.presenter.getCommonAlertBox(data.message);

                }
    
                break;
            }
        }
    }

    render(){
        let {navigation} = this.props
        return(
            <View style={{flex:1,backgroundColor:Constants.COLOR_GREY}}>
                 <MainPresenter ref={(ref) => { this.presenter = ref }} onResponse={this.onResponse.bind(this)} navigation={this.props.navigation} />
            <HeaderBar title="UPCOMING TRIPS" isBack={true} isLogout={true} navigation={navigation}/>
            <FlatList
                    style={{marginVertical:15}}
                    numColumns={1}
                    data={this.state.dataSource}
                    renderItem={({item},index)=>{
                  return(
                       <TouchableOpacity  style={StyleUpcomingTrip.row} onPress={()=>{
                           this.props.navigation.navigate('ViewUpcomingTrip',{flag_upcoming_Trip:2})}}>
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
                                    <Text style={StyleUpcomingTrip.datacss}>{item.pickup_time}</Text>

                                    <Image source={require('../images/time_icon.png')}
                                          style={[StyleUpcomingTrip.imageIcon,{marginLeft:10}]}
                                    />
                                    <Text style={StyleUpcomingTrip.labeltext}>{Constants.PickUpTime}</Text>
                                    <Text style={StyleUpcomingTrip.datacss}>{item.dropup_time}</Text>
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