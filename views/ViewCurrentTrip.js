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
import { MainPresenter } from '../config/MainPresenter';

export default class ViewCurrentTrip extends React.Component {
    constructor(props) {
        super(props);
        this.service_type_id = 0,
        this.booking_id = 0,
        this.state = {
            starCount: null,
            inputLabelTrip: '',
            reviewTrip: '',
            modal_Visible: false,
            live_geopin: true, 
            invoiceModal_Visible: false,
            truck_data: [],
            truckData: '',
            driver_telephone_no:123454654654,
            partner_telephone_no:123454654654,

        }
    }

    dialCall = (number) => {
 
        let phoneNumber = '';
     
        if (Platform.OS === 'android') {
          phoneNumber = `tel:${number}`;
        }
        else {
          phoneNumber =  `telprompt::${number}`;
        }
     
        Linking.openURL(phoneNumber);
      };

    
    componentDidMount(){

            this.service_type_id = this.props.navigation.getParam('service_type_id')
            this.booking_id = this.props.navigation.getParam('booking_id')
            console.log('bookig_id  ' + JSON.stringify(this.booking_id))
    
        this.presenter.callPostApi(ApiConstants.getBookingDetails, {'service_type_id':this.service_type_id,'booking_id':this.booking_id}, true)
    }

    async onResponse(apiConstant, data) {
        switch (apiConstant) {
            case ApiConstants.getBookingDetails: {
                if (data.status) {
                    if (data.truck_booking_details.length != 0) {
                        this.setState({
                                truckData: data.truck_booking_details[0],
                            }) 
                            console.log('data data data : ' + JSON.stringify(this.truckData))
                    }else {
                        this.setState({
                            truckData: '',
                        })
                        
                    }
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
            <View style={{ flex: 1 }}>
            <MainPresenter ref={(ref) => { this.presenter = ref }}
                                onResponse={this.onResponse.bind(this)} />
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
                                <Image
                                 source={ require('../images/Truck_Bookings.png')}
                                    style={StyleViewCurrentTrip.ImageCurrentTrip}
                                />
                                {/* <Image
                                 source={this.truckData ==""? require('../images/Truck_Bookings.png'):{uri: Constants.IMAGE_BASE_URL+this.truckData}}
                                    style={StyleViewCurrentTrip.ImageCurrentTrip}
                                /> */}
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

                        {/* {this.state.truckData.map((result) => {
                            return ( */}
                                <View>
                                    <Text style={StyleViewCurrentTrip.title}>{this.state.truckData.driver_name}</Text>
                                    <View style={StyleViewCurrentTrip.bottomLine}></View>

                                    <View style={StyleViewCurrentTrip.row}>
                                        <View style={StyleViewCurrentTrip.col1}>
                                            <Text style={StyleViewCurrentTrip.col1Text}>{Constants.CurrentStatus}</Text>
                                        </View>
                                        <View style={StyleViewCurrentTrip.col2}>
                                            <Text style={StyleViewCurrentTrip.col2Text}>{this.state.truckData.current_status}</Text>
                                        </View>
                                    </View>

                                    <View style={StyleViewCurrentTrip.row}>
                                        <View style={StyleViewCurrentTrip.col1}>
                                            <Text style={StyleViewCurrentTrip.col1Text}>{Constants.EstimatedTimeTocmpleteTrip}</Text>
                                        </View>
                                        <View style={StyleViewCurrentTrip.col2}>
                                            <Text style={StyleViewCurrentTrip.col2Text}>{this.state.truckData.estimate_timetocmplte}</Text>
                                        </View>
                                    </View>

                                    <View style={StyleViewCurrentTrip.row}>
                                        <View style={StyleViewCurrentTrip.col1}>
                                            <Text style={StyleViewCurrentTrip.col1Text}>{Constants.EstimatedDateTocmpleteTrip}</Text>
                                        </View>
                                        <View style={StyleViewCurrentTrip.col2}>
                                            <Text style={StyleViewCurrentTrip.col2Text}>{this.state.truckData.estimate_datetocmplete}</Text>
                                        </View>
                                    </View>

                                    <View style={StyleViewCurrentTrip.row}>
                                        <View style={StyleViewCurrentTrip.col1}>
                                            <Text style={StyleViewCurrentTrip.col1Text}>{Constants.DriverName}</Text>
                                        </View>
                                        <View style={StyleViewCurrentTrip.col2}>
                                            <Text style={StyleViewCurrentTrip.col2Text}>{this.state.truckData.driver_name}</Text>
                                        </View>
                                    </View>

                                    <View style={StyleViewCurrentTrip.row}>
                                        <View style={StyleViewCurrentTrip.col1}>
                                            <Text style={StyleViewCurrentTrip.col1Text}>{Constants.ContactNo}</Text>
                                        </View>
                                        <View style={StyleViewCurrentTrip.col2}>
                                            <Text style={StyleViewCurrentTrip.col2Text}>{this.state.truckData.driver_contact}</Text>
                                            <TouchableOpacity style={{ right: 5, position: 'absolute', alignSelf: 'center' }}
                                             onPress={()=>{
                                                this.dialCall(this.state.driver_telephone_no);
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
                                            <Text style={StyleViewCurrentTrip.col2Text}>{this.state.truckData.partner_name}</Text>
                                        </View>
                                    </View>

                                    <View style={StyleViewCurrentTrip.row}>
                                        <View style={StyleViewCurrentTrip.col1}>
                                            <Text style={StyleViewCurrentTrip.col1Text}>{Constants.ContactNo}</Text>
                                        </View>
                                        <View style={StyleViewCurrentTrip.col2}>
                                            <Text style={StyleViewCurrentTrip.col2Text}>{this.state.truckData.partner_no}</Text>
                                            <TouchableOpacity style={{ right: 5, position: 'absolute', alignSelf: 'center' }}
                                               onPress={()=>{
                                                   this.dialCall(this.state.partner_telephone_no);
                                               }}
                                            >
                                                <Image source={require('../images/call_01.png')} style={{ width: 30, height: 30, }} />
                                            </TouchableOpacity>
                                        </View>
                                    </View>

                                </View>
                            {/* )
                        })} */}

                        {/* buttom button */}
                        <View style={{ flexDirection: 'row', justifyContent: 'center', }}>

                            <TouchableOpacity style={[StyleViewCurrentTrip.bottomButton, { marginRight: 15, width: '40%' }]}
                                onPress={() => {
                                    if (this.state.live_geopin == true)
                                        this.props.navigation.navigate('MapViews', { flag_map: 'marker_direction' })
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
                
                                        // this.props.navigation.navigate('ViewUpcomingTripAll',{item:this.state.truckData,flag_CurrentTrip:1})
                                this.props.navigation.navigate('ViewUpcomingTrip',{item:this.state.truckData,Flag_currentTtrip:false,flag_upcoming_Trip:"1"});

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