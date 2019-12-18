/* screen -MANAPPCUS002
    design by -mayur
 */
import React, { Component } from 'react';
import { View, Text, Image, TextInput, ScrollView, } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StyleViewCompletedDetail } from '../config/CommonStyles';
import FooterBar from '../config/FooterBar';
import Constants from '../config/Constants';
import HeaderBar from '../config/HeaderBar';
export default class ViewCompletedTripDetail extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }
    onStarRatingPress(rating) {
        this.setState({ starCount: rating })
        alert(rating)
    }
    render() {
        let { navigation } = this.props
        return (
            <View style={{ flex: 1 }}>

                <HeaderBar title="VIEW COMPLETED TRIP DETAILS" isBack={true} isLogout={true} navigation={navigation} />
                <View style={{ flex: 1 }}>
                    <ScrollView style={{ width: '100%' }} bounces={false}>

                        <View style={{ marginBottom: 2 }}>
                            <View style={StyleViewCompletedDetail.topCircle} />
                            <Image source={require('../images/current_trips.png')}
                                style={StyleViewCompletedDetail.ImageCurrentTrip}
                            />
                        </View>

                        <Text style={StyleViewCompletedDetail.label}>Chruch gate2-SYS</Text>
                        <View style={StyleViewCompletedDetail.bottomline}></View>

                        <View style={StyleViewCompletedDetail.row}>
                            <View style={StyleViewCompletedDetail.col1}>
                                <Text style={StyleViewCompletedDetail.col1Text}>{Constants.PartnerName}</Text>
                            </View>
                            <View style={StyleViewCompletedDetail.col2}>
                                <Text style={StyleViewCompletedDetail.col2Text}>ABC Services</Text>
                            </View>
                        </View>

                        <View style={StyleViewCompletedDetail.row}>
                            <View style={StyleViewCompletedDetail.col1}>
                                <Text style={StyleViewCompletedDetail.col1Text}>{Constants.Telephonenumber}</Text>
                            </View>
                            <View style={StyleViewCompletedDetail.col2}>
                                <Text style={StyleViewCompletedDetail.col2Text}>+567894654</Text>
                            </View>
                        </View>

                        <View style={StyleViewCompletedDetail.row}>
                            <View style={StyleViewCompletedDetail.col1}>
                                <Text style={StyleViewCompletedDetail.col1Text}>{Constants.DateOfPickUp}</Text>
                            </View>
                            <View style={StyleViewCompletedDetail.col2}>
                                <Text style={StyleViewCompletedDetail.col2Text}>11/04/2019</Text>
                            </View>
                        </View>

                        <View style={StyleViewCompletedDetail.row}>
                            <View style={StyleViewCompletedDetail.col1}>
                                <Text style={StyleViewCompletedDetail.col1Text}>{Constants.PickUpTime}</Text>
                            </View>
                            <View style={StyleViewCompletedDetail.col2}>
                                <Text style={StyleViewCompletedDetail.col2Text}>11:00 AM</Text>
                            </View>
                        </View>

                        <View style={StyleViewCompletedDetail.row}>
                            <View style={StyleViewCompletedDetail.col1}>
                                <Text style={StyleViewCompletedDetail.col1Text}>{Constants.ArrivalTime}</Text>
                            </View>
                            <View style={StyleViewCompletedDetail.col2}>
                                <Text style={StyleViewCompletedDetail.col2Text}>05:00 AM</Text>
                            </View>
                        </View>

                        <View style={StyleViewCompletedDetail.row}>
                            <View style={StyleViewCompletedDetail.col1}>
                                <Text style={StyleViewCompletedDetail.col1Text}>{Constants.PickUpLocation}</Text>
                            </View>
                            <View style={StyleViewCompletedDetail.col2}>
                                <Text style={StyleViewCompletedDetail.col2Text}>275 N Mar Road,CA</Text>
                            </View>
                        </View>

                        <View style={StyleViewCompletedDetail.row}>
                            <View style={StyleViewCompletedDetail.col1}>
                                <Text style={StyleViewCompletedDetail.col1Text}>{Constants.DestinationLocation}</Text>
                            </View>
                            <View style={StyleViewCompletedDetail.col2}>
                                <Text style={StyleViewCompletedDetail.col2Text}>NYC,Lane 35,street2.</Text>
                            </View>
                        </View>

                        <View style={StyleViewCompletedDetail.row}>
                            <View style={StyleViewCompletedDetail.col1}>
                                <Text style={StyleViewCompletedDetail.col1Text}>{Constants.CargoType}</Text>
                            </View>
                            <View style={StyleViewCompletedDetail.col2}>
                                <Text style={StyleViewCompletedDetail.col2Text}>Cargo Type 1</Text>
                            </View>
                        </View>

                        <View style={StyleViewCompletedDetail.row}>
                            <View style={StyleViewCompletedDetail.col1}>
                                <Text style={StyleViewCompletedDetail.col1Text}>{Constants.CargoHandling}</Text>
                            </View>
                            <View style={StyleViewCompletedDetail.col2}>
                                <Text style={StyleViewCompletedDetail.col2Text}>NO</Text>
                            </View>
                        </View>
                        <View style={StyleViewCompletedDetail.row}>
                            <View style={StyleViewCompletedDetail.col1}>
                                <Text style={StyleViewCompletedDetail.col1Text}>{Constants.CargoHandlingCharges}</Text>
                            </View>
                            <View style={StyleViewCompletedDetail.col2}>
                                <Text style={StyleViewCompletedDetail.col2Text}>11:00 AM</Text>
                            </View>
                        </View>

                        <View style={StyleViewCompletedDetail.row}>
                            <View style={StyleViewCompletedDetail.col1}>
                                <Text style={StyleViewCompletedDetail.col1Text}>{Constants.RecurringRequirement}</Text>
                            </View>
                            <View style={StyleViewCompletedDetail.col2}>
                                <Text style={StyleViewCompletedDetail.col2Text}>Yes</Text>
                            </View>
                        </View>

                        <View style={StyleViewCompletedDetail.row}>
                            <View style={StyleViewCompletedDetail.col1}>
                                <Text style={StyleViewCompletedDetail.col1Text}>{Constants.CostOfRecurring}</Text>
                            </View>
                            <View style={StyleViewCompletedDetail.col2}>
                                <Text style={StyleViewCompletedDetail.col2Text}>Us $35</Text>
                            </View>
                        </View>

                        <View style={StyleViewCompletedDetail.row}>
                            <View style={StyleViewCompletedDetail.col1}>
                                <Text style={StyleViewCompletedDetail.col1Text}>{Constants.frequency}</Text>
                            </View>
                            <View style={StyleViewCompletedDetail.col2}>
                                <Text style={StyleViewCompletedDetail.col2Text}>Weekly</Text>
                            </View>
                        </View>

                        <View style={StyleViewCompletedDetail.row}>
                            <View style={StyleViewCompletedDetail.col1}>
                                <Text style={StyleViewCompletedDetail.col1Text}>{Constants.CostOfTruckingService}</Text>
                            </View>
                            <View style={StyleViewCompletedDetail.col2}>
                                <Text style={StyleViewCompletedDetail.col2Text}>US $452</Text>
                            </View>
                        </View>

                        <View style={StyleViewCompletedDetail.row}>
                            <View style={StyleViewCompletedDetail.col1}>
                                <Text style={StyleViewCompletedDetail.col1Text}>{Constants.Status}</Text>
                            </View>
                            <View style={[StyleViewCompletedDetail.col2, { flexDirection: 'row' }]}>
                                <Text style={[StyleViewCompletedDetail.col2Text, { color: Constants.COLOR_GREEN, fontWeight: 'bold' }]}
                                >Completed</Text>
                                <Image source={require('../images/status_completed.png')}
                                    style={{ width: 45, height: 45, marginLeft: '25%', top: -8 }}
                                />
                            </View>
                        </View>



                    </ScrollView>
                </View>

                <FooterBar navigation={navigation} />
            </View>
        )
    }
}