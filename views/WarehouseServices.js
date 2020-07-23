/* screen -MANAPPCUS023
    design by -mayur
 */
import React, { Component } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import { Card, CardItem } from "native-base";
import { StyleTruckBooking } from '../config/CommonStyles';
import Constants from '../config/Constants';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { MainPresenter } from '../config/MainPresenter'
import ApiConstants from '../config/ApiConstants';

export default class WarehouseServices extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            warehouseServicesData: [],
        }
    }
    componentDidMount() {
        this.presenter.callGetApi(ApiConstants.getDashboardData, "", true)

    }
    onResponse(apiConstant, data) {
        switch (apiConstant) {
            case ApiConstants.getDashboardData:
                if (data.status) {
                    let current_trips = data.dashboard_data.warehouse_booking.current_trips
                    let upcoming_trips = data.dashboard_data.warehouse_booking.upcoming_trips
                    if (data && data.dashboard_data && data.dashboard_data.warehouse_booking) {
                        let localArray = [
                            { title: "Available Warehouse Booking", type: "current", desc: data.dashboard_data.referral_content, percent:current_trips?current_trips :0  },
                            { title: "Upcoming Trips", type: "upcoming", desc: data.dashboard_data.referral_content, percent:upcoming_trips?upcoming_trips :0  },
                        ]
                        this.setState({
                            warehouseServicesData:localArray
                        })
                    }
                } else {
                    alert(data.message)
                }
                break;

            default:
                break;
        }
    }
    render() {
        let { navigation } = this.props
        return (
            <View style={{ flex: 1, backgroundColor: Constants.COLOR_GREY }}>
                <MainPresenter ref={(ref) => { this.presenter = ref }} onResponse={this.onResponse.bind(this)} navigation={this.props.navigation} />
                <FlatList
                    data={this.state.warehouseServicesData}
                    extraData={this.state}
                    keyExtractor={(index) => { index.toString() }}
                    numColumns={1}
                    renderItem={
                        ({ item, index }) =>
                            <View style={StyleTruckBooking.row}>
                                <View style={StyleTruckBooking.col1}>
                                    <AnimatedCircularProgress
                                        size={90}
                                        width={10}
                                        fill={item.percent}
                                        rotation="0"
                                        lineCap="round"
                                        duration={1200}
                                        tintColor="#9ABD08"
                                        backgroundColor="#E8E8E8">
                                        {(fill) => (<Text style={{ color: "#9ABD08" }}> {item.percent} </Text>)}
                                    </AnimatedCircularProgress>

                                </View>
                                <View style={StyleTruckBooking.col2}>
                                    <Text style={[StyleTruckBooking.labelText2]}>{item.title}</Text>
                                    <Text style={StyleTruckBooking.descText}>{item.desc}</Text>
                                    <TouchableOpacity style={StyleTruckBooking.button}
                                        onPress={() => {
                                            item.type == "current"
                                                ?
                                                this.props.navigation.navigate('CurrentTrip',{'flag_truck_booking':true,'service_type_id':2})
                                                :
                                                this.props.navigation.navigate('UpcomingTrip',{'flag_truck_booking':true,'service_type_id':2})
                                        }}
                                    >
                                        <Text style={StyleTruckBooking.buttonLabel}>{Constants.ViewAll}</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                    }
                />

            </View>
        )
    }
}