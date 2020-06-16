/* screen -MANAPPCUS018
    design by -mayur s
 */
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, Modal, FlatList } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StyleUpcomingTrip } from '../config/CommonStyles';
import FooterBar from '../config/FooterBar';
import Constants from '../config/Constants';
import HeaderBar from '../config/HeaderBar';
import constants from 'jest-haste-map/build/constants';
import { MainPresenter } from '../config/MainPresenter';
import ApiConstants from '../config/ApiConstants';
export default class UpcomingTrip extends React.Component {
    constructor(props) {
        super(props);
        this.truckBooingStatus = false,
        this.warehouseService = false,
        this.truckAndWareHouse = false,
        this.collectMyLoad = false,
        this.service_type_id=0,
        this.state = {
            dataSource: [],
            truckData: []
        }
    }

    
    componentDidMount() {
        
        this.truckBooingStatus = this.props.navigation.getParam('flag_truck_booking')

        console.log('status 1234 : ' + this.truckBooingStatus)

        // let isWarehouse=this.props.navigation.getParam('flag_warehouse_services')
        // let isTruckingWarehouse=this.props.navigation.getParam('flag_Trucking_warehouse')
        let service_type_id = this.props.navigation.getParam('service_type_id') //service_type_id
        this.initService(service_type_id);
        
        // if(this.truckBooingStatus){
        //     this.presenter.callPostApi(ApiConstants.getMyBookings, {'service_type_id':service_type_id,'flag':2,
        //      'start_index':0,'total_count':10}, true)
        //  }else if(isWarehouse){
        //     this.presenter.callPostApi(ApiConstants.getMyBookings, {'service_type_id':service_type_id,'flag':2,
        //     'start_index':0,'total_count':10}, true)
        //  }else if(isTruckingWarehouse){
        //     this.presenter.callPostApi(ApiConstants.getMyBookings, {'service_type_id':service_type_id,'flag':2,
        //     'start_index':0,'total_count':10}, true)
        //  }
        
         
    }
    async initService(service_type_id){
        let param={
            'service_type_id':service_type_id,
            'flag':2,
             'start_index':0,
             'total_count':10
            }
     await this.presenter.callPostApi(ApiConstants.getMyBookings, param, true)
      
    }

    async onResponse(apiConstant, data) {
        switch (apiConstant) {
            case ApiConstants.getMyBookings: {
                if (data.status) {
                    this.setState({dataSource: data.truck_booking_list}) 
                //     if(this.truckBooingStatus){
                //         if (data.truck_booking_list.length != 0) {
                //             this.setState({
                //                 dataSource: data.truck_booking_list,
                //             }) 
                //     }
                // }else if(this.warehouseService){
                //         if (data.truck_booking_list.length != 0) {
                //             this.setState({
                //                 dataSource: data.truck_booking_list,
                //             })
                //     }
                // }else if(this.truckAndWareHouse){
                //         if (data.truck_booking_list.length != 0) {
                //             this.setState({
                //                 dataSource: data.truck_booking_list,
                //             })
                //     } 
                // }
                //     else {
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
        return (
            <View style={{ flex: 1, backgroundColor: Constants.COLOR_GREY }}>
                <HeaderBar title="UPCOMING TRIPS" isBack={true} isLogout={true} navigation={navigation} />
                <MainPresenter ref={(ref) => { this.presenter = ref }}
                    onResponse={this.onResponse.bind(this)} />
                <FlatList
                    style={{ marginVertical: 15 }}
                    numColumns={1}
                    data={this.state.dataSource}
                    renderItem={({ item }, index) => {
                        return (
                            <TouchableOpacity style={StyleUpcomingTrip.row} 
                            onPress={() => {  
                                this.props.navigation.navigate('ViewUpcomingTrip',
                                {'booking_id':item.truck_booking_id,'service_type_id':1,
                                flag_upcoming_Trip:1},);
                            }}>

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

                                    <View style={{ flexDirection: 'row', paddingTop: 3 }}>
                                        <Image source={require('../images/date_icon.png')}
                                            style={[StyleUpcomingTrip.imageIcon]}
                                        />
                                        <Text style={StyleUpcomingTrip.labeltext}>{Constants.Date}</Text>
                                        <Text style={StyleUpcomingTrip.datacss}>{item.pickedup_date_time}</Text>
                                    </View>

                                    <View style={{ flexDirection: 'row' }}>
                                        <Image source={require('../images/time_icon.png')}
                                            style={StyleUpcomingTrip.imageIcon}
                                        />
                                        <Text style={StyleUpcomingTrip.labeltext}>{Constants.PickUpTime}</Text>
                                        <Text style={StyleUpcomingTrip.datacss}>{item.pickUpTime}</Text>

                                        <Image source={require('../images/time_icon.png')}
                                            style={[StyleUpcomingTrip.imageIcon, { marginLeft: 10 }]}
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
                    keyExtractor={item => item.id}
                />
                <FooterBar navigation={navigation} />
            </View>
        )
    }
}