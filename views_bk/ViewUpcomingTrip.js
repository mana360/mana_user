/* screen -MANAPPCUS019
    design by -mayur
 */
import React, { Component } from 'react';
import { View, Text, Image, TextInput, ScrollView, Modal, TouchableOpacity, TouchableHighlightBase } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StyleViewUpcomingTrip, StyleUpcomingTrip } from '../config/CommonStyles';
import RBSheet from "react-native-raw-bottom-sheet";
import FooterBar from '../config/FooterBar';
import Constants from '../config/Constants';
import HeaderBar from '../config/HeaderBar';
import Invoice from './InvoiceView';
export default class ViewUpcomingTrip extends React.Component {
    constructor() {
        super();
        this.state = {
            starCount: null,
            inputLabelTrip: '',
            reviewTrip: '',
            invoiceModal_Visible: false,
            cancelModal_Visible: false,
            isSuccesfull: false,
        }
    }
    delete_trip() {
        return (
            <View style={{ backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                <View style={StyleViewUpcomingTrip.cancelModalView}>
                    <TouchableOpacity style={{ alignSelf: 'flex-end', top: 5, right: 10, marginBottom: 5 }}
                        onPress={() => {
                            this.setState({ cancelModal_Visible: false })
                        }}
                    >
                        <Image source={require('../images/close.png')}
                            style={{ width: 15, height: 15 }} />
                    </TouchableOpacity>

                    <Text style={StyleViewUpcomingTrip.modalMsg}>{Constants.Cancelleation_msg}</Text>
                    <Text style={StyleViewUpcomingTrip.modalMsg}>{Constants.cancellation_msgDelete}</Text>

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
                    <TouchableOpacity style={{ alignSelf: 'flex-end', top: 5, right: 10 }}
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
                                <Text style={StyleViewUpcomingTrip.col1Text}>{Constants.PartnerName}</Text>
                            </View>
                            <View style={StyleViewUpcomingTrip.col2}>
                                <Text style={StyleViewUpcomingTrip.col2Text}>ABC Service</Text>
                            </View>
                        </View>

                        <View style={StyleViewUpcomingTrip.row}>
                            <View style={StyleViewUpcomingTrip.col1}>
                                <Text style={StyleViewUpcomingTrip.col1Text}>{Constants.Telephonenumber}</Text>
                            </View>
                            <View style={StyleViewUpcomingTrip.col2}>
                                <Text style={StyleViewUpcomingTrip.col2Text}>+56 4585965351</Text>
                            </View>
                        </View>

                        <View style={StyleViewUpcomingTrip.row}>
                            <View style={StyleViewUpcomingTrip.col1}>
                                <Text style={StyleViewUpcomingTrip.col1Text}>{Constants.DateOfPickUp}</Text>
                            </View>
                            <View style={StyleViewUpcomingTrip.col2}>
                                <Text style={StyleViewUpcomingTrip.col2Text}>11/04/2019</Text>
                            </View>
                        </View>

                        <View style={StyleViewUpcomingTrip.row}>
                            <View style={StyleViewUpcomingTrip.col1}>
                                <Text style={StyleViewUpcomingTrip.col1Text}>{Constants.PickUpTime}</Text>
                            </View>
                            <View style={StyleViewUpcomingTrip.col2}>
                                <Text style={StyleViewUpcomingTrip.col2Text}>11:00 AM</Text>
                            </View>
                        </View>

                        <View style={StyleViewUpcomingTrip.row}>
                            <View style={StyleViewUpcomingTrip.col1}>
                                <Text style={StyleViewUpcomingTrip.col1Text}>{Constants.PickUpLocation}</Text>
                            </View>
                            <View style={StyleViewUpcomingTrip.col2}>
                                <Text style={StyleViewUpcomingTrip.col2Text}>275 N Marr Road ,CA</Text>
                            </View>
                        </View>

                        <View style={StyleViewUpcomingTrip.row}>
                            <View style={StyleViewUpcomingTrip.col1}>
                                <Text style={StyleViewUpcomingTrip.col1Text}>{Constants.DestinationLocation}</Text>
                            </View>
                            <View style={StyleViewUpcomingTrip.col2}>
                                <Text style={StyleViewUpcomingTrip.col2Text}>Block no 2 Jackson Street</Text>
                            </View>
                        </View>

                        <View style={StyleViewUpcomingTrip.row}>
                            <View style={StyleViewUpcomingTrip.col1}>
                                <Text style={StyleViewUpcomingTrip.col1Text}>{Constants.CargoType}</Text>
                            </View>
                            <View style={StyleViewUpcomingTrip.col2}>
                                <Text style={StyleViewUpcomingTrip.col2Text}>Cargo type 1</Text>
                            </View>
                        </View>

                        <View style={StyleViewUpcomingTrip.row}>
                            <View style={StyleViewUpcomingTrip.col1}>
                                <Text style={StyleViewUpcomingTrip.col1Text}>{Constants.CargoHandling}</Text>
                            </View>
                            <View style={StyleViewUpcomingTrip.col2}>
                                <Text style={StyleViewUpcomingTrip.col2Text}>NO</Text>
                            </View>
                        </View>

                        <View style={StyleViewUpcomingTrip.row}>
                            <View style={StyleViewUpcomingTrip.col1}>
                                <Text style={StyleViewUpcomingTrip.col1Text}>{Constants.CargoHandlingCharges}</Text>
                            </View>
                            <View style={StyleViewUpcomingTrip.col2}>
                                <Text style={StyleViewUpcomingTrip.col2Text}>NA</Text>
                            </View>
                        </View>

                        <View style={StyleViewUpcomingTrip.row}>
                            <View style={StyleViewUpcomingTrip.col1}>
                                <Text style={StyleViewUpcomingTrip.col1Text}>{Constants.RecurringRequirement}</Text>
                            </View>
                            <View style={StyleViewUpcomingTrip.col2}>
                                <Text style={StyleViewUpcomingTrip.col2Text}>Yes</Text>
                            </View>
                        </View>

                        <View style={StyleViewUpcomingTrip.row}>
                            <View style={StyleViewUpcomingTrip.col1}>
                                <Text style={StyleViewUpcomingTrip.col1Text}>{Constants.CostOfRecurring}</Text>
                            </View>
                            <View style={StyleViewUpcomingTrip.col2}>
                                <Text style={StyleViewUpcomingTrip.col2Text}>US $34</Text>
                            </View>
                        </View>

                        <View style={StyleViewUpcomingTrip.row}>
                            <View style={StyleViewUpcomingTrip.col1}>
                                <Text style={StyleViewUpcomingTrip.col1Text}>{Constants.frequency}</Text>
                            </View>
                            <View style={StyleViewUpcomingTrip.col2}>
                                <Text style={StyleViewUpcomingTrip.col2Text}>Weekly</Text>
                            </View>
                        </View>

                        <View style={StyleViewUpcomingTrip.row}>
                            <View style={StyleViewUpcomingTrip.col1}>
                                <Text style={StyleViewUpcomingTrip.col1Text}>{Constants.CostOfTruckingService}</Text>
                            </View>
                            <View style={StyleViewUpcomingTrip.col2}>
                                <Text style={StyleViewUpcomingTrip.col2Text}>US $450</Text>
                            </View>
                        </View>

                        <View style={StyleViewUpcomingTrip.row}>
                            <View style={StyleViewUpcomingTrip.col1}>
                                <Text style={StyleViewUpcomingTrip.col1Text}>{Constants.CargoDesc}</Text>
                            </View>
                            <View style={StyleViewUpcomingTrip.col2}>
                                <Text style={StyleViewUpcomingTrip.col2Text}>Lorem ipsomeLorem ipsomeLorem ipsomeLorem </Text>
                            </View>
                        </View>

                        <TouchableOpacity style={StyleViewUpcomingTrip.bottomButton}
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