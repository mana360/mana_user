/* screen -MANAPPCUS017,17-1
    design by -mayur s
 */
import React, { Component } from 'react';
import { View, Text, Image, TextInput, ScrollView, Modal, TouchableOpacity,Linking,Platform } from 'react-native';
import { StyleViewCurrentTrip, StyleCurrentTrip } from '../config/CommonStyles';
import RBSheet from "react-native-raw-bottom-sheet";
import FooterBar from '../config/FooterBar';
import Constants from '../config/Constants';
import HeaderBar from '../config/HeaderBar';
import Invoice from './InvoiceView';
export default class ViewCurrentTrip extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            starCount: null,
            inputLabelTrip: '',
            reviewTrip: '',
            modal_Visible: false,
            live_geopin: true,//true=Map,false=delay rbsheet 
            invoiceModal_Visible: false,
            truck_data: [
                { title: 'NYC - SYS', current_status: 'On Route to destinatio', estimate_timetocmplte: '11 PM', estimate_datetocmplete: '11/03/2019', driver_name: 'Amanda.P', driver_no: '+56 7845145142', Partner_name: 'Uric', partner_no: '+56 745895612' }
            ],
            truckData: [
                {
                    title:'Church gate2 -SYC', booking_id: '1001', status: 'Not yet  Started', partner_name: 'ABC Service', contact_number: '+56 784520141',
                    dateOF_pickUp: '11/04/2019', pickup_time: '11.00 AM', pickup_location: '275 N Marr Road,CA', destination_location: 'Block no 2,Jackson street', arrival_date: '11/04/2019', arrivalTime: '12.00 AM', truck_name: '407 TATA', mid_point1: 'Lorem ipsome', truckID: '1010',
                    cargo_type: 'Cargo Type 1', cargo_description: 'Lorem ipsomeLorem ipsomeLorem ipsomeLorem ', cargo_handling: 'Yes', numberUsers: '2', quantity: '10', cargo_insurance: 'Yes', dimensions: '10*50*50', Volumetric_weight: '200kg', valueof_load: 'R 200',
                    recursing_requirement: 'Yes', costOf_recurring: 'R 100', cargoHandling_cost: 'R 100', service_frquency: 'Daily', insurance_rate: 'R 500', trip_amount: 'R 850', discount: '10'
                }
            ],
        }
    }

    dialCall = () => {
 
        let phoneNumber = '';
     
        if (Platform.OS === 'android') {
          phoneNumber = 'tel:${1234567890}';
        }
        else {
          phoneNumber = 'telprompt:${1234567890}';
        }
     
        Linking.openURL(phoneNumber);
      };
    render() {
        let { navigation } = this.props

        return (
            <View style={{ flex: 1 }}>

                <HeaderBar title="VIEW CURRENT TRIP" isBack={true} isLogout={true} navigation={navigation} />
                <View style={{ flex: 1 }}>
                    <ScrollView style={{ width: '100%' }} bounces={false}>

                        <View style={{ marginBottom: 2 }}>

                            <View style={StyleViewCurrentTrip.topCircle} />

                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: "center" }}>

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

                                <Image source={require('../images/current_trips.png')}
                                    style={StyleViewCurrentTrip.ImageCurrentTrip}
                                />
                                <TouchableOpacity style={{ marginTop: 25, }}
                                    onPress={() => {
                                        this.props.navigation.navigate('HelpAndSupport', { flag: false })
                                    }}
                                >
                                    <Image source={require('../images/support_icon.png')}
                                        style={StyleViewCurrentTrip.sideImage}
                                    />
                                </TouchableOpacity>
                            </View>

                        </View>

                        {this.state.truck_data.map((result) => {
                            return (
                                <View>
                                    <Text style={StyleViewCurrentTrip.title}>NYC - SYS</Text>
                                    <View style={StyleViewCurrentTrip.bottomLine}></View>

                                    <View style={StyleViewCurrentTrip.row}>
                                        <View style={StyleViewCurrentTrip.col1}>
                                            <Text style={StyleViewCurrentTrip.col1Text}>{Constants.CurrentStatus}</Text>
                                        </View>
                                        <View style={StyleViewCurrentTrip.col2}>
                                            <Text style={StyleViewCurrentTrip.col2Text}>{result.current_status}</Text>
                                        </View>
                                    </View>

                                    <View style={StyleViewCurrentTrip.row}>
                                        <View style={StyleViewCurrentTrip.col1}>
                                            <Text style={StyleViewCurrentTrip.col1Text}>{Constants.EstimatedTimeTocmpleteTrip}</Text>
                                        </View>
                                        <View style={StyleViewCurrentTrip.col2}>
                                            <Text style={StyleViewCurrentTrip.col2Text}>{result.estimate_timetocmplte}</Text>
                                        </View>
                                    </View>

                                    <View style={StyleViewCurrentTrip.row}>
                                        <View style={StyleViewCurrentTrip.col1}>
                                            <Text style={StyleViewCurrentTrip.col1Text}>{Constants.EstimatedDateTocmpleteTrip}</Text>
                                        </View>
                                        <View style={StyleViewCurrentTrip.col2}>
                                            <Text style={StyleViewCurrentTrip.col2Text}>{result.estimate_datetocmplete}</Text>
                                        </View>
                                    </View>

                                    <View style={StyleViewCurrentTrip.row}>
                                        <View style={StyleViewCurrentTrip.col1}>
                                            <Text style={StyleViewCurrentTrip.col1Text}>{Constants.DriverName}</Text>
                                        </View>
                                        <View style={StyleViewCurrentTrip.col2}>
                                            <Text style={StyleViewCurrentTrip.col2Text}>{result.driver_name}</Text>
                                        </View>
                                    </View>

                                    <View style={StyleViewCurrentTrip.row}>
                                        <View style={StyleViewCurrentTrip.col1}>
                                            <Text style={StyleViewCurrentTrip.col1Text}>{Constants.ContactNo}</Text>
                                        </View>
                                        <View style={StyleViewCurrentTrip.col2}>
                                            <Text style={StyleViewCurrentTrip.col2Text}>{result.driver_no}</Text>
                                            <TouchableOpacity style={{ right: 5, position: 'absolute', alignSelf: 'center' }}
                                             onPress={()=>{
                                                this.dialCall();
                                            }}
                                            >
                                                <Image source={require('../images/call_01.png')} style={{ width: 30, height: 30, }} />
                                            </TouchableOpacity>
                                        </View>
                                    </View>

                                    <View style={StyleViewCurrentTrip.row}>
                                        <View style={StyleViewCurrentTrip.col1}>
                                            <Text style={StyleViewCurrentTrip.col1Text}>{Constants.Partnername}</Text>
                                        </View>
                                        <View style={StyleViewCurrentTrip.col2}>
                                            <Text style={StyleViewCurrentTrip.col2Text}>{result.Partner_name}</Text>
                                        </View>
                                    </View>

                                    <View style={StyleViewCurrentTrip.row}>
                                        <View style={StyleViewCurrentTrip.col1}>
                                            <Text style={StyleViewCurrentTrip.col1Text}>{Constants.ContactNo}</Text>
                                        </View>
                                        <View style={StyleViewCurrentTrip.col2}>
                                            <Text style={StyleViewCurrentTrip.col2Text}>{result.partner_no}</Text>
                                            <TouchableOpacity style={{ right: 5, position: 'absolute', alignSelf: 'center' }}
                                               onPress={()=>{
                                                   this.dialCall();
                                               }}
                                            >
                                                <Image source={require('../images/call_01.png')} style={{ width: 30, height: 30, }} />
                                            </TouchableOpacity>
                                        </View>
                                    </View>

                                </View>
                            )
                        })}

                        {/* buttom button */}
                        <View style={{ flexDirection: 'row', justifyContent: 'center', }}>

                            <TouchableOpacity style={[StyleViewCurrentTrip.bottomButton, { marginRight: 15, width: '40%' }]}
                                onPress={() => {
                                    if (this.state.live_geopin == true)
                                        this.props.navigation.navigate('MapViews', { flag_map: 'truck' })
                                    else
                                        this.RBSheet.open(); //delay msg
                                }}
                            >
                                <Image source={require('../images/live_geo_pin.png')}
                                    style={StyleViewCurrentTrip.buttonIcon}
                                />
                                <Text style={StyleViewCurrentTrip.buttonText}>{Constants.LiveGeoPin}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[StyleViewCurrentTrip.bottomButton, { width: '40%' }]}
                                onPress={() => {
                                        this.props.navigation.navigate('ViewCurrentTripAll',{item:this.state.truckData,flag_CurrentTrip:1})
                                }}
                            >

                                <Text style={StyleViewCurrentTrip.buttonText}>{Constants.ViewMore}</Text>
                            </TouchableOpacity>
                        </View>

                    </ScrollView>

                    <RBSheet
                        ref={ref => {
                            this.RBSheet = ref;
                        }}
                        height={200}
                        duration={300}

                        customStyles={{
                            container: {
                                borderTopLeftRadius: 50,
                                borderTopRightRadius: 50,
                            }
                        }}
                    >
                        <Image source={require('../images/ROAD_BLOCK.jpg')}
                            style={{ width: 100, resizeMode: 'stretch', height: 100, alignSelf: 'center', marginTop: 20 }} />
                        <Text style={{
                            textAlign: 'center', width: '70%', textTransform: 'uppercase', fontWeight: 'bold', marginHorizontal: 30, paddingLeft: 10,
                            paddingTop: 10, fontSize: Constants.FONT_SIZE_LARGE, color: 'grey', alignSelf: 'center'
                        }}>{Constants.WillCauseDelayBecauseOfSomeRoadBloc}</Text>

                    </RBSheet>

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