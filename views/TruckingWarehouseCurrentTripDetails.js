/* screen -MANAPPCUS030
    design by -mayur s
 */
import React, { Component } from 'react';
import { View, Text, Image, TextInput, ScrollView, Modal, TouchableOpacity ,Linking,Platform} from 'react-native';
import { StyleViewCurrentTrip, StyleCurrentTrip } from '../config/CommonStyles';
import FooterBar from '../config/FooterBar';
import Constants from '../config/Constants';
import HeaderBar from '../config/HeaderBar';
import Invoice from './InvoiceView';
import { MainPresenter } from '../config/MainPresenter';
import ApiConstants from '../config/ApiConstants';
export default class TruckingWarehouseCurrentTripDetails extends React.Component {
    constructor(props) {
        super(props);
        this.tripDetails=[];
        service_type_id="";
        this.state = {
            starCount: null,
            inputLabelTrip: '',
            reviewTrip: '',
            modal_Visible: false,
            invoiceModal_Visible: false,
            Truckwarehouse_data: [{ title: 'NYC - SYS', partnername: 'ABC Services', TelephoneNumber: '+56 89232021', Estimated_timetocomplete: '11 PM', estimated_datetocomplete: '11/12/2019', Driver_name: 'Amanda.P', phone_number: '+56 4521241512', }],
            driver_telephonNumber:"",
            partner_telephoneNumber:"",
            
            warehouseTrucking_data: [
                {
                    // title: 'PVR service', booking_id: '1851', status: 'Not yet started', partner_name: 'ABC Service', contact_number: '+56 784520141',
                    // cargo_type: 'Cargo Type 1', cargo_description: 'Lorem ipsomeLorem ipsomeLorem ipsomeLorem ', cargo_handling: 'Yes', numberUsers: '2', quantity: '10', cargo_insurance: 'Yes', dimensions: '10*50*50', Volumetric_weight: '200kg', valueof_load: 'R 200',
                    // dateOF_pickUp: '11/04/2019', pickup_time: '11.00 AM', pickup_location: '275 N Marr Road,CA', destination_location: 'Block no 2,Jackson street', arrival_date: '11/04/2019', arrivalTime: '12.00 AM', truck_name: '407 TATA', mid_point1: 'Lorem ipsome', truckID: '1010',
                    // warehouse_id: '1234', warehouse_type: 'Public', storage_type: 'Refregirator', costPer_sqm: 'R 35', warehouse_location: 'Street 45,Lane2', duration_ofstorage: '11/09/2019 to 15/10/2020',
                    // recursing_requirement: 'Yes', costOf_recurring: 'R 100', cargoHandling_cost: 'R 100', service_frquency: 'Daily', insurance_rate: 'R 500', discount: '10', trip_amount: 'R 500'
                }
            ]
        }
    }
componentDidMount(){
    // this.initServices(service_type_id);
    this.service_type_id=this.props.navigation.getParam("service_type_id");
   this.tripDetails= this.props.navigation.getParam("bookingItem");
}
// -------------------API------------------
async initServices(service_type_id){
    let param={
    'service_type_id':service_type_id,
    'flag':1,
    'start_index':0,
    'total_count':10}
    await this.presenter.callPostApi(ApiConstants.getMyBookings, param, true);
}
async onResponse(apiConstant, data) {
    switch (apiConstant) {
        case ApiConstants.getMyBookings: {
            if (data.status) {
                this.setState({dataSource: data.warehouseTrucking_data});
            //     if(this.truckBooingStatus){
            //         if (data.truck_booking_list.length != 0) {

                        
            //             this.setState({
            //                 dataSource: data.truck_booking_list,
            //             }) 
            //     }
            // }else {
            //         this.setState({
            //             dataSource: [],
            //         })
                    
            //     }
            } else {
                alert(data.message)
            }

            break;
        }
    }
}

// ----------------------------------------


    dialCall = (number) => {

        let phoneNumber = '';

        if (Platform.OS === 'android') {
            phoneNumber = `tel:${number}`;
        }
        else {
            phoneNumber = `telprompt:${number}`;
        }

        Linking.openURL(phoneNumber);
    };
    render() {
        let { navigation } = this.props
        return (
            <View style={{ flex: 1 }}>
            
            <MainPresenter ref={(ref) => { this.presenter = ref }} 
                            onResponse={this.onResponse.bind(this)}
                            navigation={this.props.navigation} />
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
                                        // this.props.navigation.navigate('HelpAndSupport', { flag: false });
                                        this.props.navigation.navigate('HelpAndSupport', { flag: false ,"service_type_id":this.service_type_id,"booking_id":this.tripDetails.booking_id})

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
                                            <Text style={StyleViewCurrentTrip.col2Text}>{result.partner_contact}</Text>
                                        </View>
                                    </View>

                                    <View style={StyleViewCurrentTrip.row}>
                                        <View style={StyleViewCurrentTrip.col1}>
                                            <Text style={StyleViewCurrentTrip.col1Text}>Estimated time to completion of trip</Text>
                                        </View>
                                        <View style={StyleViewCurrentTrip.col2}>
                                            <Text style={StyleViewCurrentTrip.col2Text}>{result.date_of_drop}</Text>
                                        </View>
                                    </View>

                                    <View style={StyleViewCurrentTrip.row}>
                                        <View style={StyleViewCurrentTrip.col1}>
                                            <Text style={StyleViewCurrentTrip.col1Text}>Estimated Date for completion of trip</Text>
                                        </View>
                                        <View style={StyleViewCurrentTrip.col2}>
                                            <Text style={StyleViewCurrentTrip.col2Text}>{result.date_of_drop}</Text>
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
                                            <Text style={StyleViewCurrentTrip.col1Text}>{Constants.PhoneNumber}</Text>
                                        </View>
                                        <View style={StyleViewCurrentTrip.col2}>
                                            <Text style={StyleViewCurrentTrip.col2Text}>{result.driver_contact}</Text>
                                            <TouchableOpacity style={{ right: 5, position: 'absolute', alignSelf: 'center' }}
                                            onPress={()=>{
                                                this.dialCall(result.phone_number);
                                            }}
                                            >
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
                                                // this.props.navigation.navigate('MapViews', { flag: 'truckingWarehouse',"latlong":"" })
                                        this.props.navigation.navigate('MapViews', { flag_marker:true,"TripDetials":this.tripDetails });


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

                        <TouchableOpacity style={{ backgroundColor: Constants.COLOR_GREEN, alignSelf: 'center', justifyContent: 'center', alignItems: 'center', width: '50%', marginVertical: 25, borderRadius: 50 }}
                            onPress={() => {
                                // this.props.navigation.navigate('ViewCurrentTripAll', { item: this.state.warehouseTrucking_data, flag_CurrentTrip: 3 })
                                // this.props.navigation.navigate('ViewUpcomingTrip',{'booking_id':result.truck_booking_id,Flag_currentTtrip:true,flag_upcoming_Trip:"3"});
                                this.props.navigation.navigate('ViewUpcomingTrip', {'booking_id':this.tripDetails.truck_booking_id, 'service_type_id': this.service_type_id, flag_upcoming_Trip:"3",Flag_currentTtrip:true})
                                    console.log("service type id==>"+this.service_type_id+"booking ID==>"+this.tripDetails.truck_booking_id);
                                
                            }}
                        >
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