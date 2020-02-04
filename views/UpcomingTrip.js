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
export default class UpcomingTrip extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: [
                { id: 12, title: "Nyc-Syc", date: "27 May 2018", pickUpTime: "10:24 PM", dropUpTime: "11:00 AM" },
                { id: 15, title: "Nyc Sys", date: "27 May 2018", pickUpTime: "10:24 PM", dropUpTime: "11:00 AM" },
                { id: 16, title: "Nyc 3chruch", date: "27 May 2018", pickUpTime: "10:24 PM", dropUpTime: "11:00 AM" },
            ],

            truckData: [
                {
                    booking_id: '1001', status: 'Not yet  Started', partner_name: 'ABC Service', contact_number: '+56 784520141',
                    dateOF_pickUp: '11/04/2019', pickup_time: '11.00 AM', pickup_location: '275 N Marr Road,CA', destination_location: 'Block no 2,Jackson street', arrival_date: '11/04/2019', arrivalTime: '12.00 AM', truck_name: '407 TATA', mid_point1: 'Lorem ipsome', truckID: '1010',
                    cargo_type: 'Cargo Type 1', cargo_description: 'Lorem ipsomeLorem ipsomeLorem ipsomeLorem ', cargo_handling: 'Yes', numberUsers: '2', quantity: '10', cargo_insurance: 'Yes', dimensions: '10*50*50', Volumetric_weight: '200kg', valueof_load: 'R 200',
                    recursing_requirement: 'Yes', costOf_recurring: 'R 100', cargoHandling_cost: 'R 100', service_frquency: 'Daily', insurance_rate: 'R 500', trip_amount: 'R 850', discount: '10'
                }
            ]
        }
    }
    render() {
        let { navigation } = this.props
        return (
            <View style={{ flex: 1, backgroundColor: Constants.COLOR_GREY }}>
                <HeaderBar title="UPCOMING TRIPS" isBack={true} isLogout={true} navigation={navigation} />
                <FlatList
                    style={{ marginVertical: 15 }}
                    numColumns={1}
                    data={this.state.dataSource}
                    renderItem={({ item }, index) => {
                        return (
                            <TouchableOpacity style={StyleUpcomingTrip.row} onPress={() => {
                                this.props.navigation.navigate('ViewUpcomingTrip',{item:this.state.truckData,flag:1},);
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
                                        <Text style={StyleUpcomingTrip.datacss}>{item.date}</Text>
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