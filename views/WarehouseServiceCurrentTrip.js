/* screen -MANAPPCUS024
    design by -mayur s
 */
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, Modal, FlatList } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StyleCurrentTrip } from '../config/CommonStyles';
import FooterBar from '../config/FooterBar';
import Constants from '../config/Constants';
import HeaderBar from '../config/HeaderBar';
import { MainPresenter } from '../config/MainPresenter'

export default class WarehouseServicesCurrentTrip extends React.Component {
    constructor(props) {
        super(props);
        this.warehouseService = false,
        this.service_type_id = 0,
        this.state = {
            dataSource: [],
            warehouse_data:[],
        }
    }

    componentDidMount(){
        this.warehouseService=this.props.navigation.getParam('flag_warehouse_services')
        this.service_type_id = this.props.navigation.getParam('service_type_id')
        if(this.warehouseService){
            this.presenter.callPostApi(ApiConstants.getMyBookings, {'service_type_id':this.service_type_id,'flag':1,
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

    render() {
        let { navigation } = this.props
        return (
            <View style={{ flex: 1, backgroundColor: Constants.COLOR_GREY }}>
                 <MainPresenter ref={(ref) => { this.presenter = ref }} onResponse={this.onResponse.bind(this)} navigation={this.props.navigation} />
                <HeaderBar title="CURRENT TRIPS" isBack={true} isLogout={true} navigation={navigation} />
                <FlatList
                    style={{ marginVertical: 15 }}
                    numColumns={1}
                    data={this.state.dataSource}
                    renderItem={({ item }, index) => {
                        return (
                            <TouchableOpacity style={StyleCurrentTrip.row} onPress={() => {
                                 this.props.navigation.navigate('ViewUpcomingTrip',{item:this.state.warehouse_data,Flag_currentTtrip:false,flag_upcoming_Trip:2}) }}>

                                <View style={StyleCurrentTrip.col1}>
                                    <Image
                                        source={require('../images/WarehouseServices_copy.png')}
                                        style={StyleCurrentTrip.icon}
                                    />
                                </View>

                                <View style={StyleCurrentTrip.col2}>

                                    <View style={StyleCurrentTrip.bottomLine}>
                                        <Text style={StyleCurrentTrip.title}>{item.title}</Text>
                                    </View>

                                    <View style={{ flexDirection: 'row', paddingTop: 3 }}>
                                        <Image source={require('../images/date_icon.png')}
                                            style={[StyleCurrentTrip.imageIcon]}
                                        />
                                        <Text style={StyleCurrentTrip.labeltext}>{Constants.Date}</Text>
                                        <Text style={StyleCurrentTrip.datacss}>{item.date}</Text>
                                    </View>

                                    <View style={{ flexDirection: 'row' }}>
                                        <Image source={require('../images/time_icon.png')}
                                            style={StyleCurrentTrip.imageIcon}
                                        />
                                        <Text style={StyleCurrentTrip.labeltext}>{Constants.PickUpTime}</Text>
                                        <Text style={StyleCurrentTrip.datacss}>{item.pickUpTime}</Text>

                                        <Image source={require('../images/time_icon.png')}
                                            style={[StyleCurrentTrip.imageIcon, { marginLeft: 10 }]}
                                        />
                                        <Text style={StyleCurrentTrip.labeltext}>{Constants.PickUpTime}</Text>
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