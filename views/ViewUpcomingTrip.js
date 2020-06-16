/* screen -MANAPPCUS019, 19-01, 19-02, 19-03, 20, 21, 22, 32, 32-01, 32-02, 32-03, 32-04, 47-01, 47-02, 47-03, 47-04
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
import { MainPresenter } from '../config/MainPresenter';

export default class ViewUpcomingTrip extends React.Component {
    constructor(props) {
        super(props);
        this.service_type_id = 0,
        this.booking_id = 0,
        
        this.state = {
            starCount: null,
            inputLabelTrip: '',
            reviewTrip: '',
            invoiceModal_Visible: false,
            cancelModal_Visible: false,
            isModalVisible_driverDetails:false,
            isSuccesfull: false,
            truckData: '',
            Profile_data: [{ partnerName: 'ABC Service' }],

        }
    }

    componentDidMount(){

        this.service_type_id = this.props.navigation.getParam('service_type_id')
        this.booking_id = this.props.navigation.getParam('booking_id')
        // this.setState({Flag_currentTtrip:this.props.navigation.getParam('Flag_currentTtrip')});

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


driverDetails(){
    return (
        <View style={{ backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'center', alignItems: 'center', flex: 1 }}>
            <View style={StyleViewUpcomingTrip.cancelModalView}>
                <TouchableOpacity style={{ alignSelf: 'flex-end', marginBottom: 5 }}
                    onPress={() => {
                        this.setState({ isModalVisible_driverDetails: false });
                        
                    }}
                >
                    <Image source={require('../images/close.png')}
                        style={{ width: 15, height: 15 }} />
                </TouchableOpacity>

               <Text style={[StyleViewUpcomingTrip.modalMsg, { marginBottom: 10 }]}>Driver Details</Text>
            </View>
        </View>
    )
    }

    render() {
        const { navigation } = this.props

        const Flag_currentTtrip=this.props.navigation.getParam('Flag_currentTtrip')
        const serviceData = navigation.getParam('item');
        const service_name = navigation.getParam('flag_upcoming_Trip');// 1 = upcomingtrip_truking, 2 = upcomingtrip_warehouse, 3 = upcomingtrip_warehouse_trucking,

        return (
            <View style={{ flex: 1 }}>
                <HeaderBar title={Flag_currentTtrip==false?"VIEW CURRENT TRIP DETAILS":"VIEW UPCOMING TRIP DETAILS"} isBack={true} isLogout={true} navigation={navigation} />
                <MainPresenter ref={(ref) => { this.presenter = ref }}
                                onResponse={this.onResponse.bind(this)} />
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
                                    service_name == '1'
                                        ? require('../images/current_trips.png')
                                        : service_name == '2'
                                            ? require('../images/WarehouseServices_copy.png')
                                            : service_name == '3'
                                                ? require('../images/Trucking_+Warehouse.png')
                                                : null

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


                        
                                <View>

                                    <Text style={StyleViewUpcomingTrip.title}>{this.state.truckData.title}</Text>
                                    <View style={StyleViewUpcomingTrip.bottomLine}></View>


                                    <View style={StyleViewUpcomingTrip.row}>
                                        <View style={StyleViewUpcomingTrip.col1}>
                                            <Text style={StyleViewUpcomingTrip.col1Text}>{Constants.BookingId}</Text>
                                        </View>
                                        <View style={StyleViewUpcomingTrip.col2}>
                                            <Text style={StyleViewUpcomingTrip.col2Text}>{this.state.truckData.truck_booking_id}</Text>
                                        </View>
                                    </View>

                                    <View style={StyleViewUpcomingTrip.row}>
                                        <View style={StyleViewUpcomingTrip.col1}>
                                            <Text style={StyleViewUpcomingTrip.col1Text}>{Constants.Status}</Text>
                                        </View>
                                        <View style={StyleViewUpcomingTrip.col2}>
                                            <Text style={StyleViewUpcomingTrip.col2Text}>{this.state.truckData.current_status}</Text>
                                        </View>
                                    </View>

                                    <Tabs
                                        initialPage={0}
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
                                                    <Text style={StyleViewUpcomingTrip.col2Text}>{this.state.truckData.partner_name}</Text>
                                                </View>
                                            </View>

                                            <View style={[StyleViewUpcomingTrip.row, { marginBottom: 50 }]}>
                                                <View style={StyleViewUpcomingTrip.col1}>
                                                    <Text style={StyleViewUpcomingTrip.col1Text}>{Constants.ContactNumber}</Text>
                                                </View>
                                                <View style={StyleViewUpcomingTrip.col2}>
                                                    <Text style={StyleViewUpcomingTrip.col2Text}>{this.state.truckData.contact_number}</Text>
                                                </View>
                                            </View>

                                        </Tab>

                                        {service_name == '1' ?

                                            <Tab heading='TRUCK TRIP DETAILS'
                                                tabStyle={StyleViewUpcomingTrip.tab}
                                                activeTabStyle={StyleViewUpcomingTrip.tab_active}
                                                textStyle={StyleViewUpcomingTrip.tab_text}
                                                activeTextStyle={StyleViewUpcomingTrip.tab_active_text}
                                            >
                                                <View>
                                                    <View style={StyleViewUpcomingTrip.row}>
                                                        <View style={StyleViewUpcomingTrip.col1}>
                                                            <Text style={StyleViewUpcomingTrip.col1Text}>{Constants.DateOfPickUp}</Text>
                                                        </View>
                                                        <View style={StyleViewUpcomingTrip.col2}>
                                                            <Text style={StyleViewUpcomingTrip.col2Text}>{this.state.truckData.date_of_pickup}</Text>
                                                        </View>
                                                    </View>

                                                    <View style={StyleViewUpcomingTrip.row}>
                                                        <View style={StyleViewUpcomingTrip.col1}>
                                                            <Text style={StyleViewUpcomingTrip.col1Text}>{Constants.PickUpTime}</Text>
                                                        </View>
                                                        <View style={StyleViewUpcomingTrip.col2}>
                                                            <Text style={StyleViewUpcomingTrip.col2Text}>{/*this.state.truckData.pickup_time*/}</Text>
                                                        </View>
                                                    </View>

                                                    <View style={StyleViewUpcomingTrip.row}>
                                                        <View style={StyleViewUpcomingTrip.col1}>
                                                            <Text style={StyleViewUpcomingTrip.col1Text}>{Constants.PickUpLocation}</Text>
                                                        </View>
                                                        <View style={StyleViewUpcomingTrip.col2}>
                                                            <Text style={StyleViewUpcomingTrip.col2Text}>{this.state.truckData.pickup_location}</Text>
                                                        </View>
                                                    </View>

                                                    <View style={StyleViewUpcomingTrip.row}>
                                                        <View style={StyleViewUpcomingTrip.col1}>
                                                            <Text style={StyleViewUpcomingTrip.col1Text}>{Constants.DestinationLocation}</Text>
                                                        </View>
                                                        <View style={StyleViewUpcomingTrip.col2}>
                                                            <Text style={StyleViewUpcomingTrip.col2Text}>{
                                                            this.state.truckData == ''?"":this.state.truckData.drop_location.drop_location[0]}</Text>
                                                        </View>
                                                    </View>

                                                    <View style={StyleViewUpcomingTrip.row}>
                                                        <View style={StyleViewUpcomingTrip.col1}>
                                                            <Text style={StyleViewUpcomingTrip.col1Text}>{Constants.AarrivalDate}</Text>
                                                        </View>
                                                        <View style={StyleViewUpcomingTrip.col2}>
                                                            <Text style={StyleViewUpcomingTrip.col2Text}>{/*this.state.truckData.arrival_date*/}</Text>
                                                        </View>
                                                    </View>

                                                    <View style={StyleViewUpcomingTrip.row}>
                                                        <View style={StyleViewUpcomingTrip.col1}>
                                                            <Text style={StyleViewUpcomingTrip.col1Text}>{Constants.AarrivalTime}</Text>
                                                        </View>
                                                        <View style={StyleViewUpcomingTrip.col2}>
                                                            <Text style={StyleViewUpcomingTrip.col2Text}>{/*this.state.truckData.arrival_time*/}</Text>
                                                        </View>
                                                    </View>

                                                    <View style={StyleViewUpcomingTrip.row}>
                                                        <View style={StyleViewUpcomingTrip.col1}>
                                                            <Text style={StyleViewUpcomingTrip.col1Text}>{Constants.TruckName}</Text>
                                                        </View>
                                                        <View style={StyleViewUpcomingTrip.col2}>
                                                            <Text style={StyleViewUpcomingTrip.col2Text}>{this.state.truckData.truck_name}</Text>
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
                                                            <Text style={StyleViewUpcomingTrip.col2Text}>{/*this.state.truckData.mid_point1*/}</Text>
                                                        </View>
                                                    </View>

                                                    <View style={StyleViewUpcomingTrip.row}>
                                                        <View style={StyleViewUpcomingTrip.col1}>
                                                            <Text style={StyleViewUpcomingTrip.col1Text}>{Constants.TruckId}</Text>
                                                        </View>
                                                        <View style={StyleViewUpcomingTrip.col2}>
                                                            <Text style={StyleViewUpcomingTrip.col2Text}>{/*this.state.truckData.truckID*/}</Text>
                                                        </View>
                                                    </View>
                                                </View>

                                            </Tab>
                                            : service_name == '3'
                                                ? <Tab heading='TRUCK TRIP DETAILS'
                                                    tabStyle={StyleViewUpcomingTrip.tab}
                                                    activeTabStyle={StyleViewUpcomingTrip.tab_active}
                                                    textStyle={StyleViewUpcomingTrip.tab_text}
                                                    activeTextStyle={StyleViewUpcomingTrip.tab_active_text}
                                                >
                                                    <View>
                                                        <View style={StyleViewUpcomingTrip.row}>
                                                            <View style={StyleViewUpcomingTrip.col1}>
                                                                <Text style={StyleViewUpcomingTrip.col1Text}>{Constants.DateOfPickUp}</Text>
                                                            </View>
                                                            <View style={StyleViewUpcomingTrip.col2}>
                                                                <Text style={StyleViewUpcomingTrip.col2Text}>{this.state.truckData.dateOF_pickUp}</Text>
                                                            </View>
                                                        </View>

                                                        <View style={StyleViewUpcomingTrip.row}>
                                                            <View style={StyleViewUpcomingTrip.col1}>
                                                                <Text style={StyleViewUpcomingTrip.col1Text}>{Constants.PickUpTime}</Text>
                                                            </View>
                                                            <View style={StyleViewUpcomingTrip.col2}>
                                                                <Text style={StyleViewUpcomingTrip.col2Text}>{this.state.truckData.pickup_time}</Text>
                                                            </View>
                                                        </View>

                                                        <View style={StyleViewUpcomingTrip.row}>
                                                            <View style={StyleViewUpcomingTrip.col1}>
                                                                <Text style={StyleViewUpcomingTrip.col1Text}>{Constants.PickUpLocation}</Text>
                                                            </View>
                                                            <View style={StyleViewUpcomingTrip.col2}>
                                                                <Text style={StyleViewUpcomingTrip.col2Text}>{this.state.truckData.pickup_location}</Text>
                                                            </View>
                                                        </View>

                                                        <View style={StyleViewUpcomingTrip.row}>
                                                            <View style={StyleViewUpcomingTrip.col1}>
                                                                <Text style={StyleViewUpcomingTrip.col1Text}>{Constants.DestinationLocation}</Text>
                                                            </View>
                                                            <View style={StyleViewUpcomingTrip.col2}>
                                                                <Text style={StyleViewUpcomingTrip.col2Text}>{this.state.truckData.destination_location}</Text>
                                                            </View>
                                                        </View>

                                                        <View style={StyleViewUpcomingTrip.row}>
                                                            <View style={StyleViewUpcomingTrip.col1}>
                                                                <Text style={StyleViewUpcomingTrip.col1Text}>{Constants.AarrivalDate}</Text>
                                                            </View>
                                                            <View style={StyleViewUpcomingTrip.col2}>
                                                                <Text style={StyleViewUpcomingTrip.col2Text}>{this.state.truckData.arrival_date}</Text>
                                                            </View>
                                                        </View>

                                                        <View style={StyleViewUpcomingTrip.row}>
                                                            <View style={StyleViewUpcomingTrip.col1}>
                                                                <Text style={StyleViewUpcomingTrip.col1Text}>{Constants.AarrivalTime}</Text>
                                                            </View>
                                                            <View style={StyleViewUpcomingTrip.col2}>
                                                                <Text style={StyleViewUpcomingTrip.col2Text}>{this.state.truckData.arrivalTime}</Text>
                                                            </View>
                                                        </View>

                                                        <View style={StyleViewUpcomingTrip.row}>
                                                            <View style={StyleViewUpcomingTrip.col1}>
                                                                <Text style={StyleViewUpcomingTrip.col1Text}>{Constants.TruckName}</Text>
                                                            </View>
                                                            <View style={StyleViewUpcomingTrip.col2}>
                                                                <Text style={StyleViewUpcomingTrip.col2Text}>{this.state.truckData.truck_name}</Text>
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
                                                                <Text style={StyleViewUpcomingTrip.col2Text}>{this.state.truckData.mid_point1}</Text>
                                                            </View>
                                                        </View>

                                                        <View style={StyleViewUpcomingTrip.row}>
                                                            <View style={StyleViewUpcomingTrip.col1}>
                                                                <Text style={StyleViewUpcomingTrip.col1Text}>{Constants.TruckId}</Text>
                                                            </View>
                                                            <View style={StyleViewUpcomingTrip.col2}>
                                                                <Text style={StyleViewUpcomingTrip.col2Text}>{this.state.truckData.truckID}</Text>
                                                            </View>
                                                        </View>
                                                    </View>

                                                </Tab>
                                                : null
                                        }

                                        {service_name == '2' ?
                                            <Tab heading='Warehouse details'

                                                tabStyle={StyleViewUpcomingTrip.tab}
                                                activeTabStyle={StyleViewUpcomingTrip.tab_active}

                                                textStyle={StyleViewUpcomingTrip.tab_text}
                                                activeTextStyle={StyleViewUpcomingTrip.tab_active_text}
                                            >
                                                <View>

                                                    <View style={StyleViewUpcomingTrip.row}>
                                                        <View style={StyleViewUpcomingTrip.col1}>
                                                            <Text style={StyleViewUpcomingTrip.col1Text}>{Constants.WarehouseId}</Text>
                                                        </View>
                                                        <View style={StyleViewUpcomingTrip.col2}>
                                                            <Text style={StyleViewUpcomingTrip.col2Text}>{this.state.truckData.warehouse_id}</Text>
                                                        </View>
                                                    </View>

                                                    <View style={StyleViewUpcomingTrip.row}>
                                                        <View style={StyleViewUpcomingTrip.col1}>
                                                            <Text style={StyleViewUpcomingTrip.col1Text}>{Constants.WarehoueType}</Text>
                                                        </View>
                                                        <View style={StyleViewUpcomingTrip.col2}>
                                                            <Text style={StyleViewUpcomingTrip.col2Text}>{this.state.truckData.warehouse_type}</Text>
                                                        </View>
                                                    </View>

                                                    <View style={StyleViewUpcomingTrip.row}>
                                                        <View style={StyleViewUpcomingTrip.col1}>
                                                            <Text style={StyleViewUpcomingTrip.col1Text}>{Constants.StorageType}</Text>
                                                        </View>
                                                        <View style={StyleViewUpcomingTrip.col2}>
                                                            <Text style={StyleViewUpcomingTrip.col2Text}>{this.state.truckData.storage_type}</Text>
                                                        </View>
                                                    </View>

                                                    <View style={StyleViewUpcomingTrip.row}>
                                                        <View style={StyleViewUpcomingTrip.col1}>
                                                            <Text style={StyleViewUpcomingTrip.col1Text}>{Constants.CostPerSqm}</Text>
                                                        </View>
                                                        <View style={StyleViewUpcomingTrip.col2}>
                                                            <Text style={StyleViewUpcomingTrip.col2Text}>{this.state.truckData.costPer_sqm}</Text>
                                                        </View>
                                                    </View>

                                                    <View style={StyleViewUpcomingTrip.row}>
                                                        <View style={StyleViewUpcomingTrip.col1}>
                                                            <Text style={StyleViewUpcomingTrip.col1Text}>{Constants.warehouseLocation}</Text>
                                                        </View>
                                                        <View style={StyleViewUpcomingTrip.col2}>
                                                            <Text style={StyleViewUpcomingTrip.col2Text}>{this.state.truckData.warehouse_location}</Text>
                                                            <TouchableOpacity style={{ position: 'absolute', right: 5, alignSelf: 'center' }}
                                                             onPress={()=>{
                                                                this.props.navigation.navigate('MapViews',{})
                                                            }}
                                                            >
                                                                <Image style={{ width: 30, height: 30, }} source={require('../images/location_1.png')} />
                                                            </TouchableOpacity>
                                                        </View>
                                                    </View>

                                                    <View style={StyleViewUpcomingTrip.row}>
                                                        <View style={StyleViewUpcomingTrip.col1}>
                                                            <Text style={StyleViewUpcomingTrip.col1Text}>{Constants.DurationStorage}</Text>
                                                        </View>
                                                        <View style={StyleViewUpcomingTrip.col2}>
                                                            <Text style={StyleViewUpcomingTrip.col2Text}>{this.state.truckData.duration_ofstorage}</Text>
                                                        </View>
                                                    </View>
                                                </View>
                                            </Tab>
                                            : service_name == '3'
                                                ? <Tab heading='Warehouse details'

                                                    tabStyle={StyleViewUpcomingTrip.tab}
                                                    activeTabStyle={StyleViewUpcomingTrip.tab_active}

                                                    textStyle={StyleViewUpcomingTrip.tab_text}
                                                    activeTextStyle={StyleViewUpcomingTrip.tab_active_text}
                                                >
                                                    <View>

                                                        <View style={StyleViewUpcomingTrip.row}>
                                                            <View style={StyleViewUpcomingTrip.col1}>
                                                                <Text style={StyleViewUpcomingTrip.col1Text}>{Constants.WarehouseId}</Text>
                                                            </View>
                                                            <View style={StyleViewUpcomingTrip.col2}>
                                                                <Text style={StyleViewUpcomingTrip.col2Text}>{this.state.truckData.warehouse_id}</Text>
                                                            </View>
                                                        </View>

                                                        <View style={StyleViewUpcomingTrip.row}>
                                                            <View style={StyleViewUpcomingTrip.col1}>
                                                                <Text style={StyleViewUpcomingTrip.col1Text}>{Constants.WarehoueType}</Text>
                                                            </View>
                                                            <View style={StyleViewUpcomingTrip.col2}>
                                                                <Text style={StyleViewUpcomingTrip.col2Text}>{this.state.truckData.warehouse_type}</Text>
                                                            </View>
                                                        </View>

                                                        <View style={StyleViewUpcomingTrip.row}>
                                                            <View style={StyleViewUpcomingTrip.col1}>
                                                                <Text style={StyleViewUpcomingTrip.col1Text}>{Constants.StorageType}</Text>
                                                            </View>
                                                            <View style={StyleViewUpcomingTrip.col2}>
                                                                <Text style={StyleViewUpcomingTrip.col2Text}>{this.state.truckData.storage_type}</Text>
                                                            </View>
                                                        </View>

                                                        <View style={StyleViewUpcomingTrip.row}>
                                                            <View style={StyleViewUpcomingTrip.col1}>
                                                                <Text style={StyleViewUpcomingTrip.col1Text}>{Constants.CostPerSqm}</Text>
                                                            </View>
                                                            <View style={StyleViewUpcomingTrip.col2}>
                                                                <Text style={StyleViewUpcomingTrip.col2Text}>{this.state.truckData.costPer_sqm}</Text>
                                                            </View>
                                                        </View>

                                                        <View style={StyleViewUpcomingTrip.row}>
                                                            <View style={StyleViewUpcomingTrip.col1}>
                                                                <Text style={StyleViewUpcomingTrip.col1Text}>{Constants.warehouseLocation}</Text>
                                                            </View>
                                                            <View style={StyleViewUpcomingTrip.col2}>
                                                                <Text style={StyleViewUpcomingTrip.col2Text}>{this.state.truckData.warehouse_location}</Text>
                                                                <TouchableOpacity style={service_name=='3'?{display:'none'}:{ position: 'absolute', right: 5, alignSelf: 'center' }}>
                                                                    <Image style={{ width: 25, height: 25, }} source={require('../images/location_1.png')} />
                                                                </TouchableOpacity>
                                                            </View>
                                                        </View>

                                                        <View style={StyleViewUpcomingTrip.row}>
                                                            <View style={StyleViewUpcomingTrip.col1}>
                                                                <Text style={StyleViewUpcomingTrip.col1Text}>{Constants.DurationStorage}</Text>
                                                            </View>
                                                            <View style={StyleViewUpcomingTrip.col2}>
                                                                <Text style={StyleViewUpcomingTrip.col2Text}>{this.state.truckData.duration_ofstorage}</Text>
                                                            </View>
                                                        </View>
                                                    </View>

                                                </Tab>
                                                : null
                                        }

                                        <Tab heading='GOODS DETAILS'
                                            tabStyle={StyleViewUpcomingTrip.tab}
                                            activeTabStyle={StyleViewUpcomingTrip.tab_active}
                                            textStyle={StyleViewUpcomingTrip.tab_text}
                                            activeTextStyle={StyleViewUpcomingTrip.tab_active_text}
                                        >
                                            <View>
                                                <View style={StyleViewUpcomingTrip.row}>
                                                    <View style={StyleViewUpcomingTrip.col1}>
                                                        <Text style={StyleViewUpcomingTrip.col1Text}>{Constants.CargoType}</Text>
                                                    </View>
                                                    <View style={StyleViewUpcomingTrip.col2}>
                                                        <Text style={StyleViewUpcomingTrip.col2Text}>{this.state.truckData.cargo_type}</Text>
                                                    </View>
                                                </View>

                                                <View style={StyleViewUpcomingTrip.row}>
                                                    <View style={StyleViewUpcomingTrip.col1}>
                                                        <Text style={StyleViewUpcomingTrip.col1Text}>{Constants.CargoDesc}</Text>
                                                    </View>
                                                    <View style={StyleViewUpcomingTrip.col2}>
                                                        <Text style={StyleViewUpcomingTrip.col2Text}>{this.state.truckData.cargo_description}</Text>
                                                    </View>
                                                </View>

                                                <View style={StyleViewUpcomingTrip.row}>
                                                    <View style={StyleViewUpcomingTrip.col1}>
                                                        <Text style={StyleViewUpcomingTrip.col1Text}>{Constants.CargoHandling}</Text>
                                                    </View>
                                                    <View style={StyleViewUpcomingTrip.col2}>
                                                        <Text style={StyleViewUpcomingTrip.col2Text}>{this.state.truckData.cargo_handling}</Text>
                                                    </View>
                                                </View>

                                                <View style={StyleViewUpcomingTrip.row}>
                                                    <View style={StyleViewUpcomingTrip.col1}>
                                                        <Text style={StyleViewUpcomingTrip.col1Text}>{Constants.NumberOfUSer}</Text>
                                                    </View>
                                                    <View style={StyleViewUpcomingTrip.col2}>
                                                        <Text style={StyleViewUpcomingTrip.col2Text}>{this.state.truckData.numberUsers}</Text>
                                                    </View>
                                                </View>

                                                <View style={StyleViewUpcomingTrip.row}>
                                                    <View style={StyleViewUpcomingTrip.col1}>
                                                        <Text style={StyleViewUpcomingTrip.col1Text}>{Constants.Quantity}</Text>
                                                    </View>
                                                    <View style={StyleViewUpcomingTrip.col2}>
                                                        <Text style={StyleViewUpcomingTrip.col2Text}>{this.state.truckData.quantity}</Text>
                                                    </View>
                                                </View>

                                                <View style={StyleViewUpcomingTrip.row}>
                                                    <View style={StyleViewUpcomingTrip.col1}>
                                                        <Text style={StyleViewUpcomingTrip.col1Text}>{Constants.CargoInssurance}</Text>
                                                    </View>
                                                    <View style={StyleViewUpcomingTrip.col2}>
                                                        <Text style={StyleViewUpcomingTrip.col2Text}>{this.state.truckData.cargo_insurance}</Text>
                                                    </View>
                                                </View>

                                                <View style={StyleViewUpcomingTrip.row}>
                                                    <View style={StyleViewUpcomingTrip.col1}>
                                                        <Text style={StyleViewUpcomingTrip.col1Text}>{Constants.Dimension}</Text>
                                                    </View>
                                                    <View style={StyleViewUpcomingTrip.col2}>
                                                        <Text style={StyleViewUpcomingTrip.col2Text}>{this.state.truckData.dimensions}</Text>
                                                    </View>
                                                </View>

                                                <View style={StyleViewUpcomingTrip.row}>
                                                    <View style={StyleViewUpcomingTrip.col1}>
                                                        <Text style={StyleViewUpcomingTrip.col1Text}>{Constants.VolumetricWeight}</Text>
                                                    </View>
                                                    <View style={StyleViewUpcomingTrip.col2}>
                                                        <Text style={StyleViewUpcomingTrip.col2Text}>{this.state.truckData.Volumetric_weight}</Text>
                                                    </View>
                                                </View>

                                                <View style={StyleViewUpcomingTrip.row}>
                                                    <View style={StyleViewUpcomingTrip.col1}>
                                                        <Text style={StyleViewUpcomingTrip.col1Text}>{Constants.ValueOfLload}</Text>
                                                    </View>
                                                    <View style={StyleViewUpcomingTrip.col2}>
                                                        <Text style={StyleViewUpcomingTrip.col2Text}>{this.state.truckData.valueof_load}</Text>
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
                                            </View>
                                        </Tab>

                                        <Tab heading='PAYMENT DETAILS'
                                            tabStyle={StyleViewUpcomingTrip.tab}
                                            activeTabStyle={StyleViewUpcomingTrip.tab_active}
                                            textStyle={StyleViewUpcomingTrip.tab_text}
                                            activeTextStyle={StyleViewUpcomingTrip.tab_active_text}
                                        >

                                            <View>

                                                {/*payment details for truking*/}
                                                {service_name == '1'
                                                    ? <View>
                                                        <View style={StyleViewUpcomingTrip.row}>
                                                            <View style={StyleViewUpcomingTrip.col1}>
                                                                <Text style={StyleViewUpcomingTrip.col1Text}>{Constants.RecurringRequirement}</Text>
                                                            </View>
                                                            <View style={StyleViewUpcomingTrip.col2}>
                                                                <Text style={StyleViewUpcomingTrip.col2Text}>{this.state.truckData.recursing_requirement}</Text>
                                                            </View>
                                                        </View>

                                                        <View style={StyleViewUpcomingTrip.row}>
                                                            <View style={StyleViewUpcomingTrip.col1}>
                                                                <Text style={StyleViewUpcomingTrip.col1Text}>{Constants.CostOfRecurring}</Text>
                                                            </View>
                                                            <View style={StyleViewUpcomingTrip.col2}>
                                                                <Text style={StyleViewUpcomingTrip.col2Text}>{this.state.truckData.costOf_recurring}</Text>
                                                            </View>
                                                        </View>

                                                        <View style={StyleViewUpcomingTrip.row}>
                                                            <View style={StyleViewUpcomingTrip.col1}>
                                                                <Text style={StyleViewUpcomingTrip.col1Text}>{Constants.CargoHandlingcost}</Text>
                                                            </View>
                                                            <View style={StyleViewUpcomingTrip.col2}>
                                                                <Text style={StyleViewUpcomingTrip.col2Text}>{this.state.truckData.cargoHandling_cost}</Text>
                                                            </View>
                                                        </View>

                                                        <View style={StyleViewUpcomingTrip.row}>
                                                            <View style={StyleViewUpcomingTrip.col1}>
                                                                <Text style={StyleViewUpcomingTrip.col1Text}>{Constants.Service_Frequency}</Text>
                                                            </View>
                                                            <View style={StyleViewUpcomingTrip.col2}>
                                                                <Text style={StyleViewUpcomingTrip.col2Text}>{this.state.truckData.service_frquency}</Text>
                                                            </View>
                                                        </View>

                                                        <View style={StyleViewUpcomingTrip.row}>
                                                            <View style={StyleViewUpcomingTrip.col1}>
                                                                <Text style={StyleViewUpcomingTrip.col1Text}>{Constants.InsuranceRate}</Text>
                                                            </View>
                                                            <View style={StyleViewUpcomingTrip.col2}>
                                                                <Text style={StyleViewUpcomingTrip.col2Text}>{this.state.truckData.insurance_rate}</Text>
                                                            </View>
                                                        </View>

                                                        <View style={StyleViewUpcomingTrip.row}>
                                                            <View style={StyleViewUpcomingTrip.col1}>
                                                                <Text style={StyleViewUpcomingTrip.col1Text}>{Constants.Discount}</Text>
                                                            </View>
                                                            <View style={StyleViewUpcomingTrip.col2}>
                                                                <Text style={StyleViewUpcomingTrip.col2Text}>{this.state.truckData.discount}</Text>
                                                            </View>
                                                        </View>
                                                    </View>
                                                    : null}


                                                {/*payment details for warehouse */}
                                                {service_name == '2'
                                                    ? <View>

                                                        <View style={StyleViewUpcomingTrip.row}>
                                                            <View style={StyleViewUpcomingTrip.col1}>
                                                                <Text style={StyleViewUpcomingTrip.col1Text}>{Constants.CargoHandlingcost}</Text>
                                                            </View>
                                                            <View style={StyleViewUpcomingTrip.col2}>
                                                                <Text style={StyleViewUpcomingTrip.col2Text}>{this.state.truckData.cargoHandling_cost}</Text>
                                                            </View>
                                                        </View>

                                                        <View style={StyleViewUpcomingTrip.row}>
                                                            <View style={StyleViewUpcomingTrip.col1}>
                                                                <Text style={StyleViewUpcomingTrip.col1Text}>{Constants.InsuranceRate}</Text>
                                                            </View>
                                                            <View style={StyleViewUpcomingTrip.col2}>
                                                                <Text style={StyleViewUpcomingTrip.col2Text}>{this.state.truckData.insurance_rate}</Text>
                                                            </View>
                                                        </View>

                                                        <View style={StyleViewUpcomingTrip.row}>
                                                            <View style={StyleViewUpcomingTrip.col1}>
                                                                <Text style={StyleViewUpcomingTrip.col1Text}>{Constants.Discount}</Text>
                                                            </View>
                                                            <View style={StyleViewUpcomingTrip.col2}>
                                                                <Text style={StyleViewUpcomingTrip.col2Text}>{this.state.truckData.discount}</Text>
                                                            </View>
                                                        </View>

                                                        <View style={service_name == '2'
                                                            ? StyleViewUpcomingTrip.row
                                                            : { display: 'none' }}>
                                                            <View style={StyleViewUpcomingTrip.col1}>
                                                                <Text style={StyleViewUpcomingTrip.col1Text}>{Constants.TotalAmount}</Text>
                                                            </View>
                                                            <View style={StyleViewUpcomingTrip.col2}>
                                                                <Text style={StyleViewUpcomingTrip.col2Text}>{this.state.truckData.total_amount}</Text>
                                                            </View>
                                                        </View>

                                                        <View style={service_name == '3' ? StyleViewUpcomingTrip.row : { display: 'none' }}>
                                                            <View style={StyleViewUpcomingTrip.col1}>
                                                                <Text style={StyleViewUpcomingTrip.col1Text}>{Constants.Tript_Amount}</Text>
                                                            </View>
                                                            <View style={StyleViewUpcomingTrip.col2}>
                                                                <Text style={StyleViewUpcomingTrip.col2Text}>{this.state.truckData.trip_amount}</Text>
                                                            </View>
                                                        </View>

                                                    </View>
                                                    : service_name == '3'
                                                        ? <View>

                                                            <View style={StyleViewUpcomingTrip.row}>
                                                                <View style={StyleViewUpcomingTrip.col1}>
                                                                    <Text style={StyleViewUpcomingTrip.col1Text}>{Constants.CargoHandlingcost}</Text>
                                                                </View>
                                                                <View style={StyleViewUpcomingTrip.col2}>
                                                                    <Text style={StyleViewUpcomingTrip.col2Text}>{this.state.truckData.cargoHandling_cost}</Text>
                                                                </View>
                                                            </View>

                                                            <View style={StyleViewUpcomingTrip.row}>
                                                                <View style={StyleViewUpcomingTrip.col1}>
                                                                    <Text style={StyleViewUpcomingTrip.col1Text}>{Constants.InsuranceRate}</Text>
                                                                </View>
                                                                <View style={StyleViewUpcomingTrip.col2}>
                                                                    <Text style={StyleViewUpcomingTrip.col2Text}>{this.state.truckData.insurance_rate}</Text>
                                                                </View>
                                                            </View>

                                                            <View style={StyleViewUpcomingTrip.row}>
                                                                <View style={StyleViewUpcomingTrip.col1}>
                                                                    <Text style={StyleViewUpcomingTrip.col1Text}>{Constants.Discount}</Text>
                                                                </View>
                                                                <View style={StyleViewUpcomingTrip.col2}>
                                                                    <Text style={StyleViewUpcomingTrip.col2Text}>{this.state.truckData.discount}</Text>
                                                                </View>
                                                            </View>

                                                            <View style={service_name == '2'
                                                                ? StyleViewUpcomingTrip.row
                                                                : { display: 'none' }}>
                                                                <View style={StyleViewUpcomingTrip.col1}>
                                                                    <Text style={StyleViewUpcomingTrip.col1Text}>{Constants.TotalAmount}</Text>
                                                                </View>
                                                                <View style={StyleViewUpcomingTrip.col2}>
                                                                    <Text style={StyleViewUpcomingTrip.col2Text}>{this.state.truckData.total_amount}</Text>
                                                                </View>
                                                            </View>

                                                            <View style={service_name == '3' ? StyleViewUpcomingTrip.row : { display: 'none' }}>
                                                                <View style={StyleViewUpcomingTrip.col1}>
                                                                    <Text style={StyleViewUpcomingTrip.col1Text}>{Constants.Tript_Amount}</Text>
                                                                </View>
                                                                <View style={StyleViewUpcomingTrip.col2}>
                                                                    <Text style={StyleViewUpcomingTrip.col2Text}>{this.state.truckData.trip_amount}</Text>
                                                                </View>
                                                            </View>

                                                        </View>
                                                        : null
                                                }

                                            </View>
                                        </Tab>

                                    </Tabs>

                                </View>
                           
                        <TouchableOpacity style={Flag_currentTtrip==false?{display:"none"}:[StyleViewUpcomingTrip.bottomButton, { width: '90%', }]}
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
                    visible={this.state.isModalVisible_driverDetails}
                >
                    <Invoice clickCallback={() => {
                        this.setState({ invoiceModal_Visible: false });
                    }} />
                </Modal>

                <Modal
                    animationType='fade'
                    transparent={true}
                    // visible={this.state.cancelModal_Visible}
                     visible={false}
                    style={{ flex: 1 }}
                >
                   {
                       this.driverDetails()
                   }
                </Modal>

            </View>
        )
    }
}