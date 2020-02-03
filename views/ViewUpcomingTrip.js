/* screen -MANAPPCUS019,20,21,22
    design by -mayur s
 */
import React, { Component } from 'react';
import { View, Text, Image, ScrollView, Modal, TouchableOpacity, TouchableHighlightBase, TouchableOpacityBase } from 'react-native';
import { StyleViewUpcomingTrip, StyleUpcomingTrip } from '../config/CommonStyles';
import FooterBar from '../config/FooterBar';
import Constants from '../config/Constants';
import HeaderBar from '../config/HeaderBar';
import Invoice from './InvoiceView';
import { Tabs, Tab } from "native-base";

export default class ViewUpcomingTrip extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            starCount: null,
            inputLabelTrip: '',
            reviewTrip: '',
            invoiceModal_Visible: false,
            cancelModal_Visible: false,
            isSuccesfull: false,
            Profile_data: [{ partnerName: 'ABC Service' }],
            truckData: [
                {
                    booking_id: '1001', status: 'Not yet  Started', partner_name: 'ABC Service', contact_number: '+56 784520141',
                    dateOF_pickUp: '11/04/2019', pickup_time: '11.00 AM', pickup_location: '275 N Marr Road,CA', destination_location: 'Block no 2,Jackson street', arrival_date: '11/04/2019', arrivalTime: '12.00 AM', truck_name: '407 TATA', mid_point1: 'Lorem ipsome', truckID: '1010',
                    cargo_type: 'Cargo Type 1', cargo_description: 'Lorem ipsomeLorem ipsomeLorem ipsomeLorem ', cargo_handling: 'Yes', numberUsers: '2', quantity: '10', cargo_insurance: 'Yes', dimensions: '10*50*50', Volumetric_weight: '200kg', valueof_load: 'R 200',
                    recursing_requirement:'Yes',costOf_recurring:'R 100',cargoHandling_cost:'R 100',service_frquency:'Daily',insurance_rate:'R 500',trip_amount:'R 850',discount:'10'
                }
            ]
        }
    }
    delete_trip() {
        return (
            <View style={{ backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                <View style={StyleViewUpcomingTrip.cancelModalView}>
                    <TouchableOpacity style={{ alignSelf: 'flex-end', marginBottom: 5 }}
                        onPress={() => {
                            this.setState({ cancelModal_Visible: false })
                        }}
                    >
                        <Image source={require('../images/close.png')}
                            style={{ width: 15, height: 15 }} />
                    </TouchableOpacity>

                    <Text style={[StyleViewUpcomingTrip.modalMsg, { marginBottom: 10 }]}>{Constants.Cancelleation_msg}</Text>
                    <Text style={[StyleViewUpcomingTrip.modalMsg, { marginBottom: 10 }]}>{Constants.cancellation_msgDelete}</Text>

                    <View style={{ flexDirection: 'row', justifyContent: 'center', marginVertical: 10 }}>
                        <TouchableOpacity style={StyleViewUpcomingTrip.cancelModalButton}
                            onPress={() => {
                                this.setState({ isSuccesfull: true, })
                            }}
                        >
                            <Text style={StyleViewUpcomingTrip.cancelModalButtonText}>{Constants.YES}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={StyleViewUpcomingTrip.cancelModalButton}
                            onPress={() => {
                                this.setState({ cancelModal_Visible: false })
                            }}>
                            <Text style={StyleViewUpcomingTrip.cancelModalButtonText}>{Constants.NO}</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        )
    }
    TripCancelledSuccessfully() {
        return (
            <View style={{ backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                <View style={StyleViewUpcomingTrip.cancelModalView}>
                    <TouchableOpacity style={{ alignSelf: 'flex-end', marginBottom: 5 }}
                        onPress={() => {
                            this.setState({ cancelModal_Visible: false });
                            this.props.navigation.goBack();
                        }}
                    >
                        <Image source={require('../images/close.png')}
                            style={{ width: 15, height: 15 }} />
                    </TouchableOpacity>
                    <Image style={{ width: 80, height: 80, alignSelf: 'center', marginVertical: 5 }}
                        source={require('../images/sent_icon.png')}
                    />
                    <Text style={[StyleViewUpcomingTrip.modalMsg, { marginTop: 5 }]}>{Constants.TripCanceledSuccessfully}</Text>
                    <Text style={[StyleViewUpcomingTrip.modalMsg, { marginBottom: 10 }]}>{Constants.checkYourregisteredEmailIdPeneltyInfo}</Text>
                </View>
            </View>
        )

    }
    render() {
        let { navigation } = this.props
        return (
            <View style={{ flex: 1 }}>
                <HeaderBar title="VIEW UPCOMING TRIP" isBack={true} isLogout={true} navigation={navigation} />
                <View style={{ flex: 1 }}>

                    <ScrollView style={{ width: '100%' }} bounces={false}>

                        <View style={{ marginBottom: 2 }}>
                            <View style={StyleViewUpcomingTrip.topCircle} />
                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                <TouchableOpacity style={[StyleViewUpcomingTrip.imageSideView, { marginBottom: -30, marginLeft: -80, marginRight: 10 }]}
                                    onPress={() => {
                                        this.setState({ invoiceModal_Visible: true });
                                    }} >
                                    <Image source={require('../images/invoice_details.png')}
                                        style={StyleViewUpcomingTrip.sideImage}
                                    />
                                </TouchableOpacity>
                                <Image source={require('../images/current_trips.png')}
                                    style={StyleViewUpcomingTrip.ImageCurrentTrip}
                                />
                            </View>
                        </View>

                        <Text style={StyleViewUpcomingTrip.title}>CHURCH gate2- SYS</Text>
                        <View style={StyleViewUpcomingTrip.bottomLine}></View>


                        <View style={StyleViewUpcomingTrip.row}>
                            <View style={StyleViewUpcomingTrip.col1}>
                                <Text style={StyleViewUpcomingTrip.col1Text}>{Constants.BookingId}</Text>
                            </View>
                            <View style={StyleViewUpcomingTrip.col2}>
                                <Text style={StyleViewUpcomingTrip.col2Text}>1001</Text>
                            </View>
                        </View>

                        <View style={StyleViewUpcomingTrip.row}>
                            <View style={StyleViewUpcomingTrip.col1}>
                                <Text style={StyleViewUpcomingTrip.col1Text}>{Constants.Status}</Text>
                            </View>
                            <View style={StyleViewUpcomingTrip.col2}>
                                <Text style={StyleViewUpcomingTrip.col2Text}>Not yet Started</Text>
                            </View>
                        </View>

                        {this.state.truckData.map((result) => {
                            return (
                                <Tabs
                                initialPage={0}
                                style={{borderRightWidth:1,borderColor:'white'}}
                                tabBarUnderlineStyle={{backgroundColor:Constants.COLOR_GREEN_PROFILE,height:0,width:'90%'}}
                                >
                                    <Tab heading='PARTNER DETAILS' 
                                         tabStyle={StyleViewUpcomingTrip.tab}
                                         activeTabStyle={StyleViewUpcomingTrip.tab_active}
                                         textStyle={StyleViewUpcomingTrip.tab_text}
                                         activeTextStyle={StyleViewUpcomingTrip.tab_active_text}
                                         style={{ marginBottom: 50 }}>

                                        <View style={StyleViewUpcomingTrip.row}>
                                            <View style={StyleViewUpcomingTrip.col1}>
                                                <Text style={StyleViewUpcomingTrip.col1Text}>{Constants.PartnerName}</Text>
                                            </View>
                                            <View style={StyleViewUpcomingTrip.col2}>
                                                <Text style={StyleViewUpcomingTrip.col2Text}>{result.partner_name}</Text>
                                            </View>
                                        </View>

                                        <View style={StyleViewUpcomingTrip.row}>
                                            <View style={StyleViewUpcomingTrip.col1}>
                                                <Text style={StyleViewUpcomingTrip.col1Text}>{Constants.ContactNumber}</Text>
                                            </View>
                                            <View style={StyleViewUpcomingTrip.col2}>
                                                <Text style={StyleViewUpcomingTrip.col2Text}>{result.contact_number}</Text>
                                            </View>
                                        </View>
                                    </Tab>

                                    <Tab heading='TRUCK TRIP DETAILS'
                                    
                                          tabStyle={StyleViewUpcomingTrip.tab}
                                          activeTabStyle={StyleViewUpcomingTrip.tab_active}
                                          textStyle={StyleViewUpcomingTrip.tab_text}
                                          activeTextStyle={StyleViewUpcomingTrip.tab_active_text}
                                    >

                                        <View style={StyleViewUpcomingTrip.row}>
                                            <View style={StyleViewUpcomingTrip.col1}>
                                                <Text style={StyleViewUpcomingTrip.col1Text}>{Constants.DateOfPickUp}</Text>
                                            </View>
                                            <View style={StyleViewUpcomingTrip.col2}>
                                                <Text style={StyleViewUpcomingTrip.col2Text}>{result.dateOF_pickUp}</Text>
                                            </View>
                                        </View>

                                        <View style={StyleViewUpcomingTrip.row}>
                                            <View style={StyleViewUpcomingTrip.col1}>
                                                <Text style={StyleViewUpcomingTrip.col1Text}>{Constants.PickUpTime}</Text>
                                            </View>
                                            <View style={StyleViewUpcomingTrip.col2}>
                                                <Text style={StyleViewUpcomingTrip.col2Text}>{result.pickup_time}</Text>
                                            </View>
                                        </View>

                                        <View style={StyleViewUpcomingTrip.row}>
                                            <View style={StyleViewUpcomingTrip.col1}>
                                                <Text style={StyleViewUpcomingTrip.col1Text}>{Constants.PickUpLocation}</Text>
                                            </View>
                                            <View style={StyleViewUpcomingTrip.col2}>
                                                <Text style={StyleViewUpcomingTrip.col2Text}>{result.pickup_location}</Text>
                                            </View>
                                        </View>

                                        <View style={StyleViewUpcomingTrip.row}>
                                            <View style={StyleViewUpcomingTrip.col1}>
                                                <Text style={StyleViewUpcomingTrip.col1Text}>{Constants.DestinationLocation}</Text>
                                            </View>
                                            <View style={StyleViewUpcomingTrip.col2}>
                                                <Text style={StyleViewUpcomingTrip.col2Text}>{result.destination_location}</Text>
                                            </View>
                                        </View>

                                        <View style={StyleViewUpcomingTrip.row}>
                                            <View style={StyleViewUpcomingTrip.col1}>
                                                <Text style={StyleViewUpcomingTrip.col1Text}>{Constants.AarrivalDate}</Text>
                                            </View>
                                            <View style={StyleViewUpcomingTrip.col2}>
                                                <Text style={StyleViewUpcomingTrip.col2Text}>{result.arrival_date}</Text>
                                            </View>
                                        </View>

                                        <View style={StyleViewUpcomingTrip.row}>
                                            <View style={StyleViewUpcomingTrip.col1}>
                                                <Text style={StyleViewUpcomingTrip.col1Text}>{Constants.AarrivalTime}</Text>
                                            </View>
                                            <View style={StyleViewUpcomingTrip.col2}>
                                                <Text style={StyleViewUpcomingTrip.col2Text}>{result.arrivalTime}</Text>
                                            </View>
                                        </View>

                                        <View style={StyleViewUpcomingTrip.row}>
                                            <View style={StyleViewUpcomingTrip.col1}>
                                                <Text style={StyleViewUpcomingTrip.col1Text}>{Constants.TruckName}</Text>
                                            </View>
                                            <View style={StyleViewUpcomingTrip.col2}>
                                                <Text style={StyleViewUpcomingTrip.col2Text}>{result.truck_name}</Text>
                                            </View>
                                        </View>

                                        <View style={StyleViewUpcomingTrip.row}>
                                            <View style={StyleViewUpcomingTrip.col1}>
                                                <Text style={StyleViewUpcomingTrip.col1Text}>{Constants.DriverDEtails}</Text>
                                            </View>
                                            <View style={StyleViewUpcomingTrip.col2}>
                                                <TouchableOpacity>
                                                    <Text style={[StyleViewUpcomingTrip.col2Text, { color: Constants.COLOR_GREEN, textDecorationLine: 'underline' }]}>View</Text>
                                                </TouchableOpacity>
                                            </View>
                                        </View>

                                        <View style={StyleViewUpcomingTrip.row}>
                                            <View style={StyleViewUpcomingTrip.col1}>
                                                <Text style={StyleViewUpcomingTrip.col1Text}>{Constants.MidPoint1}</Text>
                                            </View>
                                            <View style={StyleViewUpcomingTrip.col2}>
                                                <Text style={StyleViewUpcomingTrip.col2Text}>{result.mid_point1}</Text>
                                            </View>
                                        </View>

                                        <View style={StyleViewUpcomingTrip.row}>
                                            <View style={StyleViewUpcomingTrip.col1}>
                                                <Text style={StyleViewUpcomingTrip.col1Text}>{Constants.TruckId}</Text>
                                            </View>
                                            <View style={StyleViewUpcomingTrip.col2}>
                                                <Text style={StyleViewUpcomingTrip.col2Text}>{result.truckID}</Text>
                                            </View>
                                        </View>

                                    </Tab>

                                    <Tab heading='GOODS DETAILS'
                                            tabStyle={StyleViewUpcomingTrip.tab}
                                            activeTabStyle={StyleViewUpcomingTrip.tab_active}
                                            textStyle={StyleViewUpcomingTrip.tab_text}
                                            activeTextStyle={StyleViewUpcomingTrip.tab_active_text}   
                                    >

                                        <View style={StyleViewUpcomingTrip.row}>
                                            <View style={StyleViewUpcomingTrip.col1}>
                                                <Text style={StyleViewUpcomingTrip.col1Text}>{Constants.CargoType}</Text>
                                            </View>
                                            <View style={StyleViewUpcomingTrip.col2}>
                                                <Text style={StyleViewUpcomingTrip.col2Text}>{result.cargo_type}</Text>
                                            </View>
                                        </View>

                                        <View style={StyleViewUpcomingTrip.row}>
                                            <View style={StyleViewUpcomingTrip.col1}>
                                                <Text style={StyleViewUpcomingTrip.col1Text}>{Constants.CargoDesc}</Text>
                                            </View>
                                            <View style={StyleViewUpcomingTrip.col2}>
                                                <Text style={StyleViewUpcomingTrip.col2Text}>{result.cargo_description}</Text>
                                            </View>
                                        </View>

                                        <View style={StyleViewUpcomingTrip.row}>
                                            <View style={StyleViewUpcomingTrip.col1}>
                                                <Text style={StyleViewUpcomingTrip.col1Text}>{Constants.CargoHandling}</Text>
                                            </View>
                                            <View style={StyleViewUpcomingTrip.col2}>
                                                <Text style={StyleViewUpcomingTrip.col2Text}>{result.cargo_handling}</Text>
                                            </View>
                                        </View>

                                        <View style={StyleViewUpcomingTrip.row}>
                                            <View style={StyleViewUpcomingTrip.col1}>
                                                <Text style={StyleViewUpcomingTrip.col1Text}>{Constants.NumberOfUSer}</Text>
                                            </View>
                                            <View style={StyleViewUpcomingTrip.col2}>
                                                <Text style={StyleViewUpcomingTrip.col2Text}>{result.numberUsers}</Text>
                                            </View>
                                        </View>

                                        <View style={StyleViewUpcomingTrip.row}>
                                            <View style={StyleViewUpcomingTrip.col1}>
                                                <Text style={StyleViewUpcomingTrip.col1Text}>{Constants.Quantity}</Text>
                                            </View>
                                            <View style={StyleViewUpcomingTrip.col2}>
                                                <Text style={StyleViewUpcomingTrip.col2Text}>{result.quantity}</Text>
                                            </View>
                                        </View>

                                        <View style={StyleViewUpcomingTrip.row}>
                                            <View style={StyleViewUpcomingTrip.col1}>
                                                <Text style={StyleViewUpcomingTrip.col1Text}>{Constants.CargoInssurance}</Text>
                                            </View>
                                            <View style={StyleViewUpcomingTrip.col2}>
                                                <Text style={StyleViewUpcomingTrip.col2Text}>{result.cargo_insurance}</Text>
                                            </View>
                                        </View>

                                        <View style={StyleViewUpcomingTrip.row}>
                                            <View style={StyleViewUpcomingTrip.col1}>
                                                <Text style={StyleViewUpcomingTrip.col1Text}>{Constants.Dimension}</Text>
                                            </View>
                                            <View style={StyleViewUpcomingTrip.col2}>
                                                <Text style={StyleViewUpcomingTrip.col2Text}>{result.dimensions}</Text>
                                            </View>
                                        </View>

                                        <View style={StyleViewUpcomingTrip.row}>
                                            <View style={StyleViewUpcomingTrip.col1}>
                                                <Text style={StyleViewUpcomingTrip.col1Text}>{Constants.VolumetricWeight}</Text>
                                            </View>
                                            <View style={StyleViewUpcomingTrip.col2}>
                                                <Text style={StyleViewUpcomingTrip.col2Text}>{result.Volumetric_weight}</Text>
                                            </View>
                                        </View>

                                        <View style={StyleViewUpcomingTrip.row}>
                                            <View style={StyleViewUpcomingTrip.col1}>
                                                <Text style={StyleViewUpcomingTrip.col1Text}>{Constants.ValueOfLload}</Text>
                                            </View>
                                            <View style={StyleViewUpcomingTrip.col2}>
                                                <Text style={StyleViewUpcomingTrip.col2Text}>{result.valueof_load}</Text>
                                            </View>
                                        </View>

                                        <View style={StyleViewUpcomingTrip.row}>
                                            <View style={StyleViewUpcomingTrip.col1}>
                                                <Text style={StyleViewUpcomingTrip.col1Text}>Image</Text>
                                            </View>
                                            <View style={StyleViewUpcomingTrip.col2}>
                                                <Image source={require('../images/generator.jpeg')} style={{
                                                    width: 100, height: 100, resizeMode: 'stretch', borderWidth: 2, borderColor: Constants.COLOR_GREY_LIGHT
                                                    , padding: 15
                                                }} />
                                            </View>
                                        </View>

                                    </Tab>

                                    <Tab heading='PAYMENT DETAILS'
                                            tabStyle={StyleViewUpcomingTrip.tab}
                                            activeTabStyle={StyleViewUpcomingTrip.tab_active}
                                            textStyle={StyleViewUpcomingTrip.tab_text}
                                            activeTextStyle={StyleViewUpcomingTrip.tab_active_text}
                                    >
                                     
                                        <View style={StyleViewUpcomingTrip.row}>
                                            <View style={StyleViewUpcomingTrip.col1}>
                                                <Text style={StyleViewUpcomingTrip.col1Text}>{Constants.RecurringRequirement}</Text>
                                            </View>
                                            <View style={StyleViewUpcomingTrip.col2}>
                                                <Text style={StyleViewUpcomingTrip.col2Text}>{result.dateOF_pickUp}</Text>
                                            </View>
                                        </View>

                                        <View style={StyleViewUpcomingTrip.row}>
                                            <View style={StyleViewUpcomingTrip.col1}>
                                                <Text style={StyleViewUpcomingTrip.col1Text}>{Constants.CostOfRecurring}</Text>
                                            </View>
                                            <View style={StyleViewUpcomingTrip.col2}>
                                                <Text style={StyleViewUpcomingTrip.col2Text}>{result.costOf_recurring}</Text>
                                            </View>
                                        </View>

                                        <View style={StyleViewUpcomingTrip.row}>
                                            <View style={StyleViewUpcomingTrip.col1}>
                                                <Text style={StyleViewUpcomingTrip.col1Text}>{Constants.CargoHandlingcost}</Text>
                                            </View>
                                            <View style={StyleViewUpcomingTrip.col2}>
                                                <Text style={StyleViewUpcomingTrip.col2Text}>{result.cargoHandling_cost}</Text>
                                            </View>
                                        </View>

                                        <View style={StyleViewUpcomingTrip.row}>
                                            <View style={StyleViewUpcomingTrip.col1}>
                                                <Text style={StyleViewUpcomingTrip.col1Text}>{Constants.Service_Frequency}</Text>
                                            </View>
                                            <View style={StyleViewUpcomingTrip.col2}>
                                                <Text style={StyleViewUpcomingTrip.col2Text}>{result.service_frquency}</Text>
                                            </View>
                                        </View>

                                        <View style={StyleViewUpcomingTrip.row}>
                                            <View style={StyleViewUpcomingTrip.col1}>
                                                <Text style={StyleViewUpcomingTrip.col1Text}>{Constants.InsuranceRate}</Text>
                                            </View>
                                            <View style={StyleViewUpcomingTrip.col2}>
                                                <Text style={StyleViewUpcomingTrip.col2Text}>{result.insurance_rate}</Text>
                                            </View>
                                        </View>

                                        <View style={StyleViewUpcomingTrip.row}>
                                            <View style={StyleViewUpcomingTrip.col1}>
                                                <Text style={StyleViewUpcomingTrip.col1Text}>{Constants.Discount}</Text>
                                            </View>
                                            <View style={StyleViewUpcomingTrip.col2}>
                                                <Text style={StyleViewUpcomingTrip.col2Text}>{result.discount}</Text>
                                            </View>
                                        </View>

                                    </Tab>
                             
                                </Tabs>

                            )
                        })}



                        <TouchableOpacity style={[StyleViewUpcomingTrip.bottomButton, { width: '90%', marginTop: 50 }]}
                            onPress={() => {
                                this.setState({ cancelModal_Visible: true })
                            }}
                        >
                            <Text style={StyleViewUpcomingTrip.buttonText}>{Constants.CANCELTRIP}</Text>
                        </TouchableOpacity>

                    </ScrollView>

                </View>

                <FooterBar navigation={navigation} />

                <Modal
                    animationType='fade'
                    transparent={true}
                    visible={this.state.cancelModal_Visible}
                    style={{ flex: 1 }}
                >
                    {
                        this.state.isSuccesfull
                            ?
                            this.TripCancelledSuccessfully()
                            :
                            this.delete_trip()
                    }
                </Modal>

                <Modal
                    animationType='fade'
                    transparent={true}
                    visible={this.state.invoiceModal_Visible}
                >
                    <Invoice clickCallback={() => {
                        this.setState({ invoiceModal_Visible: false });
                    }} />
                </Modal>

            </View>
        )
    }
}