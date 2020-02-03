/* screen -MANAPPCUS030
    design by -mayur s
 */
import React, { Component } from 'react';
import { View, Text, Image, TextInput, ScrollView, Modal, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StyleViewCurrentTrip, StyleCurrentTrip } from '../config/CommonStyles';
import RBSheet from "react-native-raw-bottom-sheet";
import FooterBar from '../config/FooterBar';
import Constants from '../config/Constants';
import HeaderBar from '../config/HeaderBar';
import Invoice from './InvoiceView';
import TripHelpAndSupport from './TripHelpAndSupport';
export default class TruckingWarehouseCurrentTripDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            starCount: null,
            inputLabelTrip: '',
            reviewTrip: '',
            modal_Visible: false,
            invoiceModal_Visible: false,
            Truckwarehouse_data: [{ title: 'NYC - SYS', partnername: 'ABC Services', TelephoneNumber: '+56 89232021', Estimated_timetocomplete: '11 PM', estimated_datetocomplete: '11/12/2019', Driver_name: 'Amanda.P', phone_number: '+56 4521241512', }]
        }
    }
    render() {
        let { navigation } = this.props
        return (
            <View style={{ flex: 1 }}>

                <HeaderBar title="TRUCKING + WAREHOUSE  CURRENT TRIP DETAILS" isBack={true} isLogout={true} navigation={navigation} />
                <View style={{ flex: 1 }}>

                    <ScrollView style={{ width: '100%' }} bounces={false}>

                        <View style={{ marginBottom: 2 }}>
                            <View style={StyleViewCurrentTrip.topCircle}>
                            </View>

                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                <TouchableOpacity style={{ marginTop: 25 }}
                                    onPress={() => {
                                        this.setState({ invoiceModal_Visible: true })
                                    }}
                                >
                                    <Image source={require('../images/invoice_details.png')}
                                        style={StyleViewCurrentTrip.sideImage}
                                    />
                                </TouchableOpacity>

                                <Image source={require('../images/Trucking_+Warehouse.png')}
                                    style={StyleViewCurrentTrip.ImageCurrentTrip}
                                />

                                <TouchableOpacity style={{ marginTop: 25 }}
                                    onPress={() => {
                                        this.props.navigation.navigate('HelpAndSupport', { flag: false });
                                    }}
                                >
                                    <Image source={require('../images/support_icon.png')}
                                        style={StyleViewCurrentTrip.sideImage}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>

                        {this.state.Truckwarehouse_data.map((result) => {
                            return (
                                <View>
                                    <Text style={StyleViewCurrentTrip.title}>Current Trip:{result.title}</Text>
                                    <View style={StyleViewCurrentTrip.bottomLine}></View>

                                    <View style={StyleViewCurrentTrip.row}>
                                        <View style={StyleViewCurrentTrip.col1}>
                                            <Text style={StyleViewCurrentTrip.col1Text}>{Constants.PartnerName}</Text>
                                        </View>
                                        <View style={StyleViewCurrentTrip.col2}>
                                            <Text style={StyleViewCurrentTrip.col2Text}>{result.partnername}</Text>
                                        </View>
                                    </View>

                                    <View style={StyleViewCurrentTrip.row}>
                                        <View style={StyleViewCurrentTrip.col1}>
                                            <Text style={StyleViewCurrentTrip.col1Text}>{Constants.Telephonenumber}</Text>
                                        </View>
                                        <View style={StyleViewCurrentTrip.col2}>
                                            <Text style={StyleViewCurrentTrip.col2Text}>{result.TelephoneNumber}</Text>
                                        </View>
                                    </View>

                                    <View style={StyleViewCurrentTrip.row}>
                                        <View style={StyleViewCurrentTrip.col1}>
                                            <Text style={StyleViewCurrentTrip.col1Text}>Estimated time to completion of trip</Text>
                                        </View>
                                        <View style={StyleViewCurrentTrip.col2}>
                                            <Text style={StyleViewCurrentTrip.col2Text}>{result.Estimated_timetocomplete}</Text>
                                        </View>
                                    </View>

                                    <View style={StyleViewCurrentTrip.row}>
                                        <View style={StyleViewCurrentTrip.col1}>
                                            <Text style={StyleViewCurrentTrip.col1Text}>Estimated Date for completion of trip</Text>
                                        </View>
                                        <View style={StyleViewCurrentTrip.col2}>
                                            <Text style={StyleViewCurrentTrip.col2Text}>{result.estimated_datetocomplete}</Text>
                                        </View>
                                    </View>

                                    <View style={StyleViewCurrentTrip.row}>
                                        <View style={StyleViewCurrentTrip.col1}>
                                            <Text style={StyleViewCurrentTrip.col1Text}>{Constants.DriverName}</Text>
                                        </View>
                                        <View style={StyleViewCurrentTrip.col2}>
                                            <Text style={StyleViewCurrentTrip.col2Text}>{result.Driver_name}</Text>
                                        </View>
                                    </View>

                                    <View style={StyleViewCurrentTrip.row}>
                                        <View style={StyleViewCurrentTrip.col1}>
                                            <Text style={StyleViewCurrentTrip.col1Text}>{Constants.PhoneNumber}</Text>
                                        </View>
                                        <View style={StyleViewCurrentTrip.col2}>
                                            <Text style={StyleViewCurrentTrip.col2Text}>{result.phone_number}</Text>
                                            <TouchableOpacity style={{ right: 5, position: 'absolute', alignSelf: 'center' }}>
                                                <Image source={require('../images/call_01.png')} style={{ width: 30, height: 30, }} />
                                            </TouchableOpacity>
                                        </View>
                                    </View>

                                    <View style={StyleViewCurrentTrip.row}>
                                        <View style={StyleViewCurrentTrip.col1}>
                                            <Text style={StyleViewCurrentTrip.col1Text}>{Constants.LiveGeoPin}</Text>
                                        </View>
                                        <TouchableOpacity style={StyleViewCurrentTrip.col2}
                                            onPress={() => {
                                                this.props.navigation.navigate('MapViews', { flag: 'truckingWarehouse' })

                                            }}
                                        >
                                            <Image source={require('../images/live_geo_pin.png')}
                                                style={{ width: 20, height: 20, tintColor: Constants.COLOR_GREEN, marginRight: 5, marginLeft: 3 }} />
                                            <Text style={{ color: Constants.COLOR_GREEN }}>{Constants.ViewMap}</Text>
                                        </TouchableOpacity>
                                    </View>

                                </View>
                            )
                        })}

                        <TouchableOpacity style={{ backgroundColor: Constants.COLOR_GREEN, alignSelf: 'center', justifyContent: 'center', alignItems: 'center', width: '50%', marginVertical: 25, borderRadius: 50 }}>
                            <Text style={{ color: Constants.COLOR_WHITE, paddingVertical: 10, fontSize: Constants.FONT_SIZE_EXTRA_LARGE }}>View More</Text>
                        </TouchableOpacity>
                    </ScrollView>

                </View>

                <FooterBar navigation={navigation} />

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