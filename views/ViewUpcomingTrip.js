/* screen -MANAPPCUS019,20,21,22
    design by -mayur s
 */
import React, { Component } from 'react';
import { View, Text, Image, ScrollView, Modal, TouchableOpacity, TouchableHighlightBase, TouchableOpacityBase } from 'react-native';
import { StyleViewUpcomingTrip, StyleViewCurrentTrip } from '../config/CommonStyles';
import FooterBar from '../config/FooterBar';
import Constants from '../config/Constants';
import HeaderBar from '../config/HeaderBar';
import Invoice from './InvoiceView';
import { Tabs, Tab } from "native-base";
import Splash from './Splash'
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
        const { navigation } = this.props
        const serviceData = navigation.getParam('item');
        const service_name = navigation.getParam('flag');// 1=truking ,2=warehouse,3=warehousetrucking

        return (
            <View style={{ flex: 1 }}>
                <HeaderBar title="VIEW UPCOMING TRIP" isBack={true} isLogout={true} navigation={navigation} />
                <View style={{ flex: 1 }}>

                    <ScrollView style={{ width: '100%' }} bounces={false}>

                        <View style={{ marginBottom: 2 }}>
                            <View style={StyleViewUpcomingTrip.topCircle} />
                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                <TouchableOpacity style={{ marginTop: 25, }}
                                    onPress={() => {
                                        return (
                                            this.setState({ invoiceModal_Visible: true })
                                        )
                                    }}
                                >
                                    <Image source={require('../images/invoice_details.png')}
                                        style={StyleViewCurrentTrip.sideImage} />
                                </TouchableOpacity>

                                <Image source={
                                        service_name=='1'
                                        ?require('../images/current_trips.png')
                                        :service_name=='2'
                                        ?require('../images/WarehouseServices_copy.png')
                                        :null
                                    }

                                    style={service_name == '1' ? [StyleViewCurrentTrip.ImageCurrentTrip, { marginRight: 95 }] : StyleViewCurrentTrip.ImageCurrentTrip}
                                />
                                <TouchableOpacity style={{ marginTop: 25, }}
                                    onPress={() => {
                                        this.props.navigation.navigate('HelpAndSupport', { flag: false })
                                    }}
                                >
                                    <Image source={require('../images/support_icon.png')}
                                        style={service_name == '1' ? { display: 'none' } : StyleViewCurrentTrip.sideImage}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>

                        <Text style={StyleViewUpcomingTrip.title}>CHURCH gate2- SYS</Text>
                        <View style={StyleViewUpcomingTrip.bottomLine}></View>


                        {serviceData.map((result) => {
                            return (
                                <View>

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

                                    <Tabs
                                        initialPage={4}
                                        style={{ borderRightWidth: 1, borderColor: 'white' }}
                                        tabBarUnderlineStyle={{ backgroundColor: Constants.COLOR_GREEN_PROFILE, height: 0, width: '90%' }}
                                    >
                                        <Tab heading='PARTNER DETAILS'
                                            tabStyle={StyleViewUpcomingTrip.tab}
                                            activeTabStyle={StyleViewUpcomingTrip.tab_active}
                                            textStyle={StyleViewUpcomingTrip.tab_text}
                                            activeTextStyle={StyleViewUpcomingTrip.tab_active_text}
                                            >



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

                                            tabStyle={service_name == '1' ? StyleViewUpcomingTrip.tab : { display: 'none' }}
                                            activeTabStyle={service_name == '1' ? StyleViewUpcomingTrip.tab_active : { display: 'none' }}
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

                                        <Tab heading='Warehouse details'

                                            tabStyle={service_name == '2' ? StyleViewUpcomingTrip.tab : { display: 'none' }}
                                            activeTabStyle={service_name == '2' ? StyleViewUpcomingTrip.tab_active : { display: 'none' }}
                                            textStyle={StyleViewUpcomingTrip.tab_text}
                                            activeTextStyle={StyleViewUpcomingTrip.tab_active_text}
                                        >

                                            <View style={StyleViewUpcomingTrip.row}>
                                                <View style={StyleViewUpcomingTrip.col1}>
                                                    <Text style={StyleViewUpcomingTrip.col1Text}>{Constants.WarehouseId}</Text>
                                                </View>
                                                <View style={StyleViewUpcomingTrip.col2}>
                                                    <Text style={StyleViewUpcomingTrip.col2Text}>{result.warehouse_id}</Text>
                                                </View>
                                            </View>

                                            <View style={StyleViewUpcomingTrip.row}>
                                                <View style={StyleViewUpcomingTrip.col1}>
                                                    <Text style={StyleViewUpcomingTrip.col1Text}>{Constants.WarehoueType}</Text>
                                                </View>
                                                <View style={StyleViewUpcomingTrip.col2}>
                                                    <Text style={StyleViewUpcomingTrip.col2Text}>{result.warehouse_type}</Text>
                                                </View>
                                            </View>

                                            <View style={StyleViewUpcomingTrip.row}>
                                                <View style={StyleViewUpcomingTrip.col1}>
                                                    <Text style={StyleViewUpcomingTrip.col1Text}>{Constants.StorageType}</Text>
                                                </View>
                                                <View style={StyleViewUpcomingTrip.col2}>
                                                    <Text style={StyleViewUpcomingTrip.col2Text}>{result.storage_type}</Text>
                                                </View>
                                            </View>

                                            <View style={StyleViewUpcomingTrip.row}>
                                                <View style={StyleViewUpcomingTrip.col1}>
                                                    <Text style={StyleViewUpcomingTrip.col1Text}>{Constants.CostPerSqm}</Text>
                                                </View>
                                                <View style={StyleViewUpcomingTrip.col2}>
                                                    <Text style={StyleViewUpcomingTrip.col2Text}>{result.costPer_sqm}</Text>
                                                </View>
                                            </View>

                                            <View style={StyleViewUpcomingTrip.row}>
                                                <View style={StyleViewUpcomingTrip.col1}>
                                                    <Text style={StyleViewUpcomingTrip.col1Text}>{Constants.warehouseLocation}</Text>
                                                </View>
                                                <View style={StyleViewUpcomingTrip.col2}>
                                                    <Text style={StyleViewUpcomingTrip.col2Text}>{result.warehouse_location}</Text>
                                                </View>
                                            </View>

                                            <View style={StyleViewUpcomingTrip.row}>
                                                <View style={StyleViewUpcomingTrip.col1}>
                                                    <Text style={StyleViewUpcomingTrip.col1Text}>{Constants.DurationStorage}</Text>
                                                </View>
                                                <View style={StyleViewUpcomingTrip.col2}>
                                                    <Text style={StyleViewUpcomingTrip.col2Text}>{result.duration_ofstorage}</Text>
                                                </View>
                                            </View>



                                        </Tab>

                                        <Tab heading='PAYMENT DETAILS'
                                            tabStyle={StyleViewUpcomingTrip.tab}
                                            activeTabStyle={StyleViewUpcomingTrip.tab_active}
                                            textStyle={StyleViewUpcomingTrip.tab_text}
                                            activeTextStyle={StyleViewUpcomingTrip.tab_active_text}
                                        >
                                            {/*payment details for truking*/}
                                            <View style={service_name == '1' ? { flex: 1 } : { display: 'none' }}>
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
                                            </View>

                                            {/*payment details for warehouse */}
                                            <View style={service_name == '2' ? { } : { display: 'none' }}>
                                              
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

                                                <View style={StyleViewUpcomingTrip.row}>
                                                    <View style={StyleViewUpcomingTrip.col1}>
                                                        <Text style={StyleViewUpcomingTrip.col1Text}>{Constants.TotalAmount}</Text>
                                                    </View>
                                                    <View style={StyleViewUpcomingTrip.col2}>
                                                        <Text style={StyleViewUpcomingTrip.col2Text}>{result.total_amount}</Text>
                                                    </View>
                                                </View>

                                            </View>


                                        </Tab>

                                    </Tabs>

                                </View>
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