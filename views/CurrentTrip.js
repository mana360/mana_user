/* screen -MANAPPCUS016
    design by -mayur s
 */
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import { StyleCurrentTrip } from '../config/CommonStyles';
import FooterBar from '../config/FooterBar';
import Constants from '../config/Constants';
import HeaderBar from '../config/HeaderBar';
import { MainPresenter } from '../config/MainPresenter';
import ApiConstants from '../config/ApiConstants';
import moment from 'moment'

export default class CurrentTrip extends React.Component {
    constructor(props) {
        super(props);
        this.truckBooingStatus = false,
        this.warehouseService = false,
        this.truckAndWareHouse = false,
        this.collectMyLoad = false,
        this.service_type_id =0,
        this.state = {
            dataSource:[],
            warehouseTrucking_list:[],
        }
    }

    componentDidMount() {

        this.truckBooingStatus = this.props.navigation.getParam('flag_truck_booking');
        this.service_type_id = this.props.navigation.getParam('service_type_id');
        this.initServices(this.service_type_id);         
    }

    async initServices(service_type_id){
        let param={
            'service_type_id':service_type_id,
            'flag':1,
            'start_index':0,
            'total_count':10
        }
        await this.presenter.callPostApi(ApiConstants.getMyBookings, param, true);
    }

    async onResponse(apiConstant, data) {
        switch (apiConstant) {
            case ApiConstants.getMyBookings: {
                if (data.status) {
                    if(this.service_type_id==1){
                        this.setState({dataSource: data.truck_booking_list});
                    }
                    else if(this.service_type_id==2){
                        this.setState({dataSource: data.warehouse_booking_list});
                    }else{
                        if(this.service_type_id==3){
                            this.setState({dataSource: data.truck_warehouse_booking_list});
                        }
                    }
            
                } else {
                    alert(data.message)
                }
    
                break;
            }
        }
    }
dateAndTime(itemDate,value){
    let tempdate=itemDate.split(" ");
    return tempdate[value];
}
    render() {

        let { navigation } = this.props
        let isTruck = this.props.navigation.getParam('flag_truck_booking')
        let isWarehouse=this.props.navigation.getParam('flag_warehouse_services')
        let isTruckingWarehouse=this.props.navigation.getParam('flag_Trucking_warehouse')

        return (
            <View style={{ flex: 1, backgroundColor: Constants.COLOR_GREY }}>

            <MainPresenter ref={(ref) => { this.presenter = ref }}  onResponse={this.onResponse.bind(this)} navigation={this.props.navigation} />
            
            <HeaderBar title="Current Trips" isBack={true} isLogout={true} navigation={navigation} />

            <View style={{ display : this.state.dataSource=="" ? 'flex' : 'none', flex:1, justifyContent:'center', alignItems:'center' }}>
                <Text style={{fontSize:16}}> No trip is available. </Text>
            </View>
                <FlatList
                    style={{ display: this.state.dataSource=="" ? 'none' : 'flex', marginVertical: 15}}
                    numColumns={1}
                    data={this.state.dataSource}
                    extraData={this.state}
                    keyExtractor={index => index.toString()}
                    renderItem={({ item }, index) => {
                        return (
                            <TouchableOpacity style={StyleCurrentTrip.row} onPress={() =>{

                                if(this.service_type_id==1){
                                    this.props.navigation.navigate('ViewCurrentTrip',
                                    {'booking_id':item.truck_booking_id,'service_type_id':1,"bookingItem":item});
                                }
                                if(this.service_type_id==2){
                                    this.props.navigation.navigate('ViewUpcomingTrip',
                                    {item:item,"flag_upcoming_Trip":2,'service_type_id':2,'booking_id':item.warehouse_booking_id,Flag_currentTtrip:true})
                                }
                                if(this.service_type_id==3){
                                    this.props.navigation.navigate('TruckingWarehouseCurrentTripDetails',
                                     {'booking_id':item.truck_booking_id,'service_type_id':3,"bookingItem":item})
                                }
                                    //     this.props.navigation.navigate('ViewCurrentTrip',
                                    // {'booking_id':item.truck_booking_id,'service_type_id':1});
                             }}>

                                <View style={StyleCurrentTrip.col1}>
                                    <Image
                                        source={require('../images/Truck_Bookings_copy.png')}
                                        style={StyleCurrentTrip.icon}
                                    />
                                </View>
                              
                                <View style={StyleCurrentTrip.col2}>
                                    <View style={StyleCurrentTrip.bottomLine}>
                                        <Text style={StyleCurrentTrip.title}>
                                            {     this.service_type_id==1 
                                                ? item.truck_booking_id
                                                : this.service_type_id==2
                                                ? item.warehouse_booking_id
                                                :''
                                            }
                                        </Text>
                                    </View>

                                    <View style={{ flexDirection: 'row', paddingTop: 3 }}>
                                        <View style={{flexDirection:"row"}}>
                                        <Image source={require('../images/date_icon.png')}
                                            style={[StyleCurrentTrip.imageIcon]}
                                        />
                        
                                        <Text style={StyleCurrentTrip.labeltext}>{this.service_type_id==2?Constants.Start_Date:Constants.pickupDate}:</Text>
                                        <Text style={[StyleCurrentTrip.datacss,{paddingRight:10}]}>{ 
                                       this.service_type_id==2
                                       ?
                                       moment(item.service_start_date).format("DD/MMM/YYYY  hh:mm:ss")
                                       :
                                       this.dateAndTime(item.pickedup_date_time,0)
                                        }</Text>
                                        </View>
                                        <View style={{flexDirection:"row"}}>
                                        <Image source={require('../images/date_icon.png')}
                                            style={this.service_type_id==2?{display:'none'}:[StyleCurrentTrip.imageIcon]}
                                        />
                        
                                        <Text style={this.service_type_id==2?{display:'none'}:StyleCurrentTrip.labeltext}>{Constants.PickUpTime}:</Text>
                                        <Text style={StyleCurrentTrip.datacss}>{ this.service_type_id==2?null:this.dateAndTime(item.pickedup_date_time,1)}</Text>
                                        </View>
                                    </View>

                                    <View style={{ flexDirection: 'row' }}>
                                        <Image source={require('../images/date_icon.png')}
                                            style={StyleCurrentTrip.imageIcon}
                                        />
                                        <Text style={StyleCurrentTrip.labeltext}>{this.service_type_id==2?Constants.End_Date: Constants.dropoffDate}:</Text>
                                        <Text style={StyleCurrentTrip.datacss}>{ 
                                          this.service_type_id==2? moment(item.service_end_date).format("DD/MMM/YYYY  hh:mm:ss")
                                          :
                                          this.dateAndTime(item.arrivalDateAndTime,0)
                                    
                                        }</Text>

                                        <Image source={require('../images/time_icon.png')}
                                            style={this.service_type_id==2?{display:'none'}:[StyleCurrentTrip.imageIcon, { marginLeft: 10 }]}
                                        />
                                        <Text style={this.service_type_id==2?{display:'none'}:[StyleCurrentTrip.labeltext,{}]}>{Constants.DropUpTime}:</Text>
                                        <Text style={StyleCurrentTrip.datacss}>{this.service_type_id==2?null:this.dateAndTime(item.arrivalDateAndTime,1)}</Text>
                                    </View>
                                </View>
                              
                                <View style={StyleCurrentTrip.col3}>
                                    <Image
                                        source={require('../images/forward_icon.png')}
                                        style={StyleCurrentTrip.arrow}
                                    />
                                </View>
                            
                            </TouchableOpacity>

                        )
                    }}
                />
               
                <FooterBar navigation={navigation} />
          
            </View>
        )
    }
}