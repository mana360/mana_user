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
        }
    }

   async  componentDidMount() {

        this.truckBooingStatus = this.props.navigation.getParam('flag_truck_booking');
        this.service_type_id = this.props.navigation.getParam('service_type_id');
        this.initServices(service_type_id);
   
    //   await this.presenter.callPostApi(ApiConstants.getMyBookings, {'service_type_id':1,'flag':1,
    //          'start_index':0,'total_count':10}, true)
         
    }

    async initServices(service_type_id){
        let param={
        'service_type_id':service_type_id,
        'flag':1,
        'start_index':0,
        'total_count':10},
        await this.presenter.callPostApi(ApiConstants.getMyBookings, param, true);
    }
    async onResponse(apiConstant, data) {
        switch (apiConstant) {
            case ApiConstants.getMyBookings: {
                if (data.status) {
                    this.setState({dataSource: data.truck_booking_list});
                //     if(this.truckBooingStatus){
                //         if (data.truck_booking_list.length != 0) {

                            
                //             this.setState({
                //                 dataSource: data.truck_booking_list,
                //             }) 
                //     }
                // }else {
                //         this.setState({
                //             dataSource: [],
                //         })
                        
                //     }
                } else {
                    alert(data.message)
                }
    
                break;
            }
        }
    }

    render() {

        let { navigation } = this.props
        let isTruck = this.props.navigation.getParam('flag_truck_booking')
        let isWarehouse=this.props.navigation.getParam('flag_warehouse_services')
        let isTruckingWarehouse=this.props.navigation.getParam('flag_Trucking_warehouse')

        return (
            <View style={{ flex: 1, backgroundColor: Constants.COLOR_GREY }}>
                <HeaderBar 
                    title="Current Trips"
                    isBack={true} isLogout={true} navigation={navigation} />
                    <MainPresenter ref={(ref) => { this.presenter = ref }}
                    onResponse={this.onResponse.bind(this)} />
                    
                <FlatList
                    style={{ marginVertical: 15 }}
                    numColumns={1}
                    data={this.state.dataSource}
                    renderItem={({ item }, index) => {
                        return (
                            <TouchableOpacity style={StyleCurrentTrip.row} onPress={() =>{

                                if(this.service_type_id==1){
                                    this.props.navigation.navigate('ViewCurrentTrip',
                                    {'booking_id':item.truck_booking_id,'service_type_id':1,"bookingItem":item});
                                }
                                if(this.service_type_id==2){
                                    this.props.navigation.navigate('ViewUpcomingTrip',
                                    {item:item,"flag_upcoming_Trip":2,'booking_id':item.truck_booking_id,Flag_currentTtrip:true})
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
                                        <Text style={StyleCurrentTrip.title}>{item.truck_booking_id}</Text>
                                    </View>

                                    <View style={{ flexDirection: 'row', paddingTop: 3 }}>
                                        <View style={{flexDirection:"row"}}>
                                        <Image source={require('../images/date_icon.png')}
                                            style={[StyleCurrentTrip.imageIcon]}
                                        />
                        
                                        <Text style={StyleCurrentTrip.labeltext}>{Constants.pickupDate}:</Text>
                                        <Text style={[StyleCurrentTrip.datacss,{paddingRight:10}]}>{item.date_of_pickup}</Text>
                                        </View>
                                        <View style={{flexDirection:"row"}}>
                                        <Image source={require('../images/date_icon.png')}
                                            style={[StyleCurrentTrip.imageIcon]}
                                        />
                        
                                        <Text style={StyleCurrentTrip.labeltext}>{Constants.PickUpTime}:</Text>
                                        <Text style={StyleCurrentTrip.datacss}>{item.date}</Text>
                                        </View>
                                    </View>

                                    <View style={{ flexDirection: 'row' }}>
                                        <Image source={require('../images/date_icon.png')}
                                            style={StyleCurrentTrip.imageIcon}
                                        />
                                        <Text style={StyleCurrentTrip.labeltext}>{Constants.dropoffDate}:</Text>
                                        <Text style={StyleCurrentTrip.datacss}>{item.pickUpTime}</Text>

                                        <Image source={require('../images/time_icon.png')}
                                            style={[StyleCurrentTrip.imageIcon, { marginLeft: 10 }]}
                                        />
                                        <Text style={StyleCurrentTrip.labeltext}>{Constants.DropUpTime}:</Text>
                                        <Text style={StyleCurrentTrip.datacss}>{item.dropUpTime}</Text>
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
                    extraData={this.state}
                    keyExtractor={item => item.id}
                />
               
                <FooterBar navigation={navigation} />
          
            </View>
        )
    }
}