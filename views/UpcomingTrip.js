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
import { MainPresenter } from '../config/MainPresenter';
import ApiConstants from '../config/ApiConstants';
import moment from 'moment'

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
            truckData: [],
            truck_booking_list:[],
            warehouse_booking_list:[],
            warehouseTrucking_list:[],
        }
    }
    
    componentDidMount() {
        
        this.truckBooingStatus = this.props.navigation.getParam('flag_truck_booking')

        //console.log('status 1234 : ' + this.truckBooingStatus)

        // let isWarehouse=this.props.navigation.getParam('flag_warehouse_services')
        // let isTruckingWarehouse=this.props.navigation.getParam('flag_Trucking_warehouse')

        this.service_type_id = this.props.navigation.getParam('service_type_id') //service_type_id
        this.initService(this.service_type_id);
        
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
                    if(this.service_type_id==1){
                        this.setState({dataSource: data.truck_booking_list})
                    }else if(this.service_type_id==2){
                        this.setState({dataSource: data.warehouse_booking_list})
                    }else{
                        if(this.service_type_id==3){
                            this.setState({dataSource: data.truck_warehouse_booking_list})
                        }
                    }
                    //console.log("truck ====> "+JSON.stringify(this.state.truck_booking_list))
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
                
                <MainPresenter ref={(ref) => { this.presenter = ref }} onResponse={this.onResponse.bind(this)} navigation={this.props.navigation} />
                
                <View style={{ display : this.state.dataSource=="" ? 'flex' : 'none', flex:1, justifyContent:'center', alignItems:'center',marginTop:20 }}>
                    <Text style={{fontSize:16}}> No trip available. </Text>
                </View>
                    <FlatList
                    style={{ marginVertical: 15 }}
                    numColumns={1}
                    data={
                        this.state.dataSource
                        }
                    extraData={this.state}
                    keyExtractor={index => index.toString()}
                    renderItem={({ item }, index) => {
                        return (
                            <TouchableOpacity style={StyleUpcomingTrip.row} 
                                onPress={() => {
                                    if(this.service_type_id==1){
                                        this.props.navigation.navigate('ViewUpcomingTrip', {'booking_id':item.truck_booking_id, 'service_type_id':this.service_type_id, 'flag_upcoming_Trip':1})
                                    }
                                    if(this.service_type_id==2){
                                        this.props.navigation.navigate('ViewUpcomingTrip', {'booking_id':item.warehouse_booking_id, 'service_type_id':this.service_type_id, 'flag_upcoming_Trip':1})
                                    }
                                    if(this.service_type_id==3){
                                        // alert(this.service_type_id);
                                        this.props.navigation.navigate('ViewUpcomingTrip', {'booking_id':item.Truck_warehouse_booking, 'service_type_id': this.service_type_id, 'flag_upcoming_Trip':1})
                                        
                                    }
                                }}
                            >

                                <View style={StyleUpcomingTrip.col1}>
                                    <Image
                                        source={
                                            this.service_type_id==1
                                            ?require('../images/Truck_Bookings_copy.png')
                                            : this.service_type_id==2
                                            ?require('../images/WarehouseServices_copy.png')
                                            :require('../images/Trucking_+Warehouse.png')
                                        }
                                        style={StyleUpcomingTrip.icon}
                                    />
                                </View>

                                <View style={StyleUpcomingTrip.col2}>
                                    
                                    <View style={StyleUpcomingTrip.bottomLine}>
                                        <Text style={StyleUpcomingTrip.title}>
                                            {    
                                                this.service_type_id==2
                                                ?
                                                item.partner_name
                                                :
                                                `${item.pickup_location} - ${item.drop_location.drop_location[0]}`
                                     
                                            }
                                        </Text>
                                    </View>
                               
                                    <View style={this.service_type_id==3?{ flexDirection: 'row', paddingTop: 3 }:{display:'none'}}>
                                    <Image source={require('../images/date_icon.png')}
                                            style={[StyleUpcomingTrip.imageIcon]}
                                        />

                                        <Text style={StyleUpcomingTrip.labeltext}>{this.service_type_id==3? Constants.PICKEDUP:null}</Text>
                                        <Text style={StyleUpcomingTrip.datacss}>
                                            { moment(item.pickedup_date_time).format("DD/MMMM/YYYY")
                                                
                                            }
                                        </Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', paddingTop: 3 }}>
                                      
                                        <Image source={require('../images/date_icon.png')}
                                            style={[StyleUpcomingTrip.imageIcon]}
                                        />

                                        <Text style={StyleUpcomingTrip.labeltext}>{this.service_type_id==1? Constants.Date:Constants.Start_Date}</Text>
                                        <Text style={StyleUpcomingTrip.datacss}>
                                            {   this.service_type_id==1
                                                ? moment(item.date_of_pickup).format("DD MMM YYYY")
                                                : this.service_type_id==2
                                                ? moment(item.service_start_date).format("DD/MMM/YYYY  hh:mm:ss A")
                                                :this.service_type_id==3
                                                ?moment(item.service_start_date).format("DD/MMM/YYYY  hh:mm:ss A")
                                                :null
                                            }
                                        </Text>
                                    </View>

                                    <View style={{ flexDirection: 'row' }}>
                                        <Image source={require('../images/time_icon.png')}
                                            style={StyleUpcomingTrip.imageIcon}
                                        />
                                        <Text style={StyleUpcomingTrip.labeltext}>{this.service_type_id==1?Constants.dropoffDate:Constants.End_Date}</Text>
                                        <Text style={StyleUpcomingTrip.datacss}>
                                            {   this.service_type_id==1
                                                ?
                                                 moment(item.arrivalDateAndTime,"YY-MM-DD").format("DD/MMMM/YYYY")
                                                :this.service_type_id==2
                                                ?  moment(item.service_end_date).format("DD/MMMM/YYYY hh:mm:ss")
                                                :this.service_type_id==3
                                                ?moment(item.service_end_date).format("DD/MMMM/YYYY hh:mm:ss")
                                                :null
                                            }
                                        </Text>
                                        <Image source={require('../images/time_icon.png')}
                                            style={[StyleUpcomingTrip.imageIcon, { marginLeft: 10, display : this.service_type_id==1 ? 'flex' : 'none'}]}
                                        />
                                        <Text style={[StyleUpcomingTrip.labeltext,{display : this.service_type_id==1? 'flex' : 'none'}]}>{Constants.DropUpTime}</Text>
                                        <Text style={[StyleUpcomingTrip.datacss,  {display : this.service_type_id==1 ? 'flex' : 'none'}]}>{moment(item.arrivalDateAndTime,"h:m:s").format("hh:mm:ss")}</Text>
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
                />
                <FooterBar navigation={navigation} />
            </View>
        )
    }
}