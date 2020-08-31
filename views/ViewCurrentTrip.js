/* screen -MANAPPCUS017,17-1
    design by -mayur s
 */
import React, { Component } from 'react';
import { View, Text, Image, TextInput, ScrollView, Modal, TouchableOpacity,Linking,Platform, PermissionsAndroid } from 'react-native';
import { StyleViewCurrentTrip, StyleCurrentTrip, StyleMyBooking } from '../config/CommonStyles';
import RBSheet from "react-native-raw-bottom-sheet";
import FooterBar from '../config/FooterBar';
import Constants from '../config/Constants';
import HeaderBar from '../config/HeaderBar';
import Invoice from './InvoiceView';
import { MainPresenter } from '../config/MainPresenter';
import RNFetchBlob from 'rn-fetch-blob';
import moment from 'moment';

export default class ViewCurrentTrip extends React.Component {
    constructor(props) {
        super(props);
        this.service_type_id = 0,
        this.booking_id = 0,
        this.tripDetails=[];
        this.state = {
            starCount: null,
            inputLabelTrip: '',
            reviewTrip: '',
            modal_Visible: false,
            live_geopin: true, 
            invoiceModal_Visible: false,
            truck_data: [],
            truckData: [],
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
            console.log('bookig_id  ' + JSON.stringify(this.booking_id));
            this.tripDetails= this.props.navigation.getParam("bookingItem");
            console.log(JSON.stringify( "Trip Details===========================>"+ JSON.stringify(this.tripDetails)));
            this.setState({truckData:this.tripDetails});
    
        // this.presenter.callPostApi(ApiConstants.getBookingDetails, {'service_type_id':this.service_type_id,'booking_id':this.booking_id}, true)
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
                    // alert(data.message)
                    this.presenter.getCommonAlertBox(data.message);

                }
    
                break;
            }
        }
    }
    
    getExtention(filename){
        return (/[.]/.exec(filename)) ? /[^.]+$/.exec(filename) : undefined;
    }

    async requestFilePermission(file_path){
        try {
            const granted = await PermissionsAndroid.request(
              PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
              {
                'title': 'File Storage Permission',
                'message': 'App needs access to your file storage to download file.'
              }
            )
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                // permission granted
                this.getDownloadFile(file_path)
                return true
            }
            else {
                // permission denied
                // alert("File downloading faild.");
                this.presenter.getCommonAlertBox("File downloading faild");

                return false
            }
          } catch (err) {
            console.warn(err)
          }
          return false
    }

    getDownloadFile(file_path){
        var date = new Date();
        var image_URL = file_path;
        var ext = this.getExtention(image_URL);
        ext = "." + ext[0];
        const { config, fs } = RNFetchBlob;
        let DownloadDir = fs.dirs.DownloadDir
        let options = {
            fileCache: true,
            addAndroidDownloads: {
                useDownloadManager: true,
                notification: true,
                path: DownloadDir + "/Mana" + Math.floor(date.getTime()+ date.getSeconds() / 2) + ext,
                description: 'Mana invoice file'
            }
        }
        config(options).fetch('GET', image_URL).then((res) => {
            this.presenter.getCommonAlertBox("File is downloaded successfully.");
        });
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
                                   
                                            onPress={()=>{
                                                //return ( this.setState({ invoiceModal_Visible: true }))
                                                this.state.truckData.invoice_goods!=""
                                                ?
                                                Platform.OS=="android" ? this.requestFilePermission(this.state.truckData.invoice_url) : this.getDownloadFile(this.state.truckData.invoice_url)
                                                : null
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
                                        this.props.navigation.navigate('HelpAndSupport', { flag: false ,"service_type_id":this.service_type_id,"booking_id":this.booking_id,"driver_id":this.state.truckData.driver_id,"tripHelpAndSupport":true})
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
                                            {/* <Text style={StyleViewCurrentTrip.col2Text}>{this.state.truckData.current_status}</Text> */}
                                            <Text style={[StyleMyBooking.bookingStatus,{color:Constants.COLOR_GREY_DARK}]
                                                // this.state.truckData.current_status== Constants.BOOKING_STATUS_NEW ?[StyleMyBooking.bookingStatus,{color:Constants.COLOR_ORANGE}]
                                                // :
                                                // this.state.truckData.current_status==Constants.BOOKING_STATUS_PICKED_UP?[StyleMyBooking.bookingStatus,{color:Constants.COLOR_ORANGE}]
                                                // :
                                                // this.state.truckData.current_status==Constants.BOOKING_STATUS_DELIVERED?[StyleMyBooking.bookingStatus,{color:Constants.COLOR_GREEN}]
                                                // :
                                                // this.state.truckData.current_status==Constants.BOOKING_STATUS_CANCELLED?[StyleMyBooking.bookingStatus,{color:Constants.COLOR_RED}]
                                                // :
                                                // null
                                            }>
                                                {
                                                    this.state.truckData.current_status==Constants.BOOKING_CURRENT_STATUS_DRIVER_DISPATCHED ? "Driver Dispatched"
                                                    :
                                                    this.state.truckData.current_status==Constants.BOOKING_CURRENT_STATUS_ARRIVED_AT_PICKUP_LOCATION ? "Arrived at Pickup Location"
                                                    :   
                                                    this.state.truckData.current_status==Constants.BOOKING_CURRENT_STATUS_ON_ROUTE_TO_DESTINATION ? "On- route to destination"
                                                    :
                                                    this.state.truckData.current_status==Constants.BOOKING_CURRENT_STATUS_ARRIVED_AT_DESTINATION ? "Arrived at Destination"
                                                    :
                                                    this.state.truckData.current_status== Constants.BOOKING_CURRENT_STATUS_TRIP_COMPLETED_CARGO_OFFLOADED ? "Trip completed, cargo offloaded"
                                                    :
                                                    this.state.truckData.current_status== Constants.BOOKING_CURRENT_STATUS_UPCOMING ? "Upcoming"
                                                    :
                                                    this.state.truckData.current_status== Constants.BOOKING_CURRENT_STATUS_IN_STORAGE ? "In Storage"
                                                    : 
                                                    this.state.truckData.current_status==Constants.BOOKING_CURRENT_STATUS_DELIVERED? "Delivered"
                                                    :
                                                    this.state.truckData.current_status== Constants.BOOKING_CURRENT_STATUS_PENDING? "Pending"
                                                    :
                                                    this.state.truckData.current_status== Constants.BOOKING_CURRENT_STATUS_ONGOING? "Ongoing"
                                                    :
                                                    this.state.truckData.current_status== Constants.BOOKING_CURRENT_STATUS_CANCEL_BY_DRIVER? "Canceled by Driver"
                                                    :
                                                    this.state.truckData.current_status== Constants.BOOKING_CURRENT_STATUS_CANCEL_BY_CUSTOMER? "Canceled by Customer"
                                                    :
                                                    this.state.truckData.current_status== Constants.BOOKING_CURRENT_STATUS_CANCEL_BY_PARTNER? "Canceled by Partner"
                                                    :
                                                    this.state.truckData.current_status== Constants.BOOKING_CURRENT_STATUS_CANCEL_BY_ADMIN? "Canceled by Admin"
                                                    :
                                                    this.state.truckData.current_status== Constants.BOOKING_CURRENT_STATUS_DELIVERED_TO_DROP1? "Delivered to Drop Address 1"    
                                                    :
                                                    null
                                                }
                                                </Text>
                                    </View>
                                    </View>

                                    <View style={StyleViewCurrentTrip.row}>
                                        <View style={StyleViewCurrentTrip.col1}>
                                            <Text style={StyleViewCurrentTrip.col1Text}>{Constants.EstimatedTimeTocmpleteTrip}</Text>
                                        </View>
                                        <View style={StyleViewCurrentTrip.col2}>
                                            <Text style={StyleViewCurrentTrip.col2Text}>
                                                {
                                                this.state.truckData.arrivalDateAndTime==undefined?"NA"
                                                :this.state.truckData.arrivalDateAndTime==""?
                                                "NA":
                                            moment(this.state.truckData.arrivalDateAndTime).format("hh:mm A")
                                            }
                                            </Text>
                                        </View>
                                    </View>

                                    <View style={StyleViewCurrentTrip.row}>
                                        <View style={StyleViewCurrentTrip.col1}>
                                            <Text style={StyleViewCurrentTrip.col1Text}>{Constants.EstimatedDateTocmpleteTrip}</Text>
                                        </View>
                                        <View style={StyleViewCurrentTrip.col2}>
                                            <Text style={StyleViewCurrentTrip.col2Text}>{
                                                this.state.truckData.arrivalDateAndTime==undefined?"NA"
                                                :this.state.truckData.arrivalDateAndTime==""?
                                                "NA":
                                            moment(this.state.truckData.arrivalDateAndTime).format("DD/MM/YYYY")
                                                                                        
                                            }</Text>
                                        </View>
                                    </View>

                                    <View style={StyleViewCurrentTrip.row}>
                                        <View style={StyleViewCurrentTrip.col1}>
                                            <Text style={StyleViewCurrentTrip.col1Text}>{Constants.DriverName}</Text>
                                        </View>
                                        <View style={StyleViewCurrentTrip.col2}>
                                            <Text style={StyleViewCurrentTrip.col2Text}>{
                                            this.state.truckData.driver_name==undefined
                                            ?""
                                            :this.state.truckData.driver_name==""
                                            ?""
                                            : this.state.truckData.driver_name
                                            }</Text>
                                        </View>
                                    </View>
{/*     
                                    <View style={StyleViewCurrentTrip.row}>
                                        <View style={StyleViewCurrentTrip.col1}>
                                            <Text style={StyleViewCurrentTrip.col1Text}>{Constants.ContactNo}</Text>
                                        </View>
                                        <View style={StyleViewCurrentTrip.col2}>
                                            <Text style={StyleViewCurrentTrip.col2Text}>{
                                            this.state.truckData.driver_contact==undefined?
                                            ""
                                            :this.state.truckData.driver_contact==""?
                                            ""
                                            :this.state.truckData.driver_contact
                                            }</Text>
                                            <TouchableOpacity style={{ right: 5, position: 'absolute', alignSelf: 'center' }}
                                             onPress={()=>{
                                                this.dialCall(this.state.truckData.driver_contact);
                                            }}
                                            >
                                                <Image source={require('../images/call_01.png')} style={{ width: 30, height: 30, }} />
                                            </TouchableOpacity>
                                        </View>
                                    </View> */}

                                    <View style={StyleViewCurrentTrip.row}>
                                        <View style={StyleViewCurrentTrip.col1}>
                                            <Text style={StyleViewCurrentTrip.col1Text}>{Constants.Partnername}</Text>
                                        </View>
                                        <View style={StyleViewCurrentTrip.col2}>
                                            <Text style={StyleViewCurrentTrip.col2Text}>{
                                            this.state.truckData.partner_name==undefined?
                                            ""
                                            :
                                            this.state.truckData.partner_name==""
                                            ?""
                                            :this.state.truckData.partner_name
                                            }</Text>
                                        </View>
                                    </View>

                                    <View style={StyleViewCurrentTrip.row}>
                                        <View style={StyleViewCurrentTrip.col1}>
                                            <Text style={StyleViewCurrentTrip.col1Text}>{Constants.ContactNo}</Text>
                                        </View>
                                        <View style={StyleViewCurrentTrip.col2}>
                                            <Text style={StyleViewCurrentTrip.col2Text}>{
                                            this.state.truckData.partner_contact==undefined?""
                                            :this.state.truckData.partner_contact==""?
                                            "":this.state.truckData.partner_contact
                                            
                                            }</Text>
                                            <TouchableOpacity style={{ right: 5, position: 'absolute', alignSelf: 'center' }}
                                               onPress={()=>{
                                                   this.dialCall(this.state.truckData.partner_contact);
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
                                    if (this.state.live_geopin == true){
                                            // alert(this.state.truckData.drop_location.drop_latlng[1]);
                                            this.state.truckData.drop_location.drop_latlng[1] ==undefined
                                            ?
                                            // alert("Co-ordinate Not Found")
                                            this.presenter.getCommonAlertBox( this.state.truckData.drop_location.drop_latlng[1])
                                            :
                                            this.state.truckData.drop_location.drop_latlng[1]==""?
                                            this.presenter.getCommonAlertBox("Co-ordinate Not Found")
                                            :
                                // this.props.navigation.navigate('MapViews', { flag_marker:true,"TripDetials": this.state.truckData.drop_location.drop_latlng[1]  });
                                this.props.navigation.navigate('Tripmap',{ 'drop1': this.state.truckData.drop_location.drop_latlng[1],"isService":true})

                                    }

                                    else{
                                        this.RBSheet.open(); //delay msg
                                    }
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
                                // this.props.navigation.navigate('ViewUpcomingTrip',{item:this.state.truckData,Flag_currentTtrip:true,flag_upcoming_Trip:"1",booking_id});
                                this.props.navigation.navigate('ViewUpcomingTrip', {'booking_id':this.booking_id, 'service_type_id': this.service_type_id, 'flag_upcoming_Trip':1,Flag_currentTtrip:true})

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