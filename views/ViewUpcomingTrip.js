/* screen -MANAPPCUS019, 19-01, 19-02, 19-03, 20, 21, 22, 32, 32-01, 32-02, 32-03, 32-04, 47-01, 47-02, 47-03, 47-04
    design by -mayur s
 */
import React, { Component } from 'react';
import { View, Text, Image, ScrollView, Modal, TouchableOpacity, FlatList, PermissionsAndroid, Platform } from 'react-native';
import { StyleViewUpcomingTrip, StyleViewCurrentTrip } from '../config/CommonStyles';
import FooterBar from '../config/FooterBar';
import Constants from '../config/Constants';
import HeaderBar from '../config/HeaderBar';
import Invoice from './InvoiceView';
import { Tabs, Tab } from "native-base";
import Splash from './Splash'
import { MainPresenter } from '../config/MainPresenter';
import moment from 'moment'
import RNFetchBlob from 'rn-fetch-blob';
import RBSheet from "react-native-raw-bottom-sheet";
import Carousel from "react-native-carousel";

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
            truckData: [],
            warehouse_booking_detailsi:'',
            Profile_data: [{ partnerName: 'ABC Service' }],
            showDestinationLocations:false,
            driverDetailsModalVisible:false,
            goodsPhotoGalleryVisible:false,
            goodsPhotoGalleryList:[],
        }
    }

    componentDidMount(){
        this.service_type_id = this.props.navigation.getParam('service_type_id')
        this.booking_id = this.props.navigation.getParam('booking_id')
        // this.setState({Flag_currentTtrip:this.props.navigation.getParam('Flag_currentTtrip')});
        //console.log('bookig_id  ' + JSON.stringify(this.booking_id))
        this.presenter.callPostApi(ApiConstants.getBookingDetails, {'service_type_id':this.service_type_id,'booking_id':this.booking_id}, true)
    }

    async onResponse(apiConstant, data) {
        switch (apiConstant) {
            case ApiConstants.getBookingDetails: {
                if (data.status) {
                    if(this.service_type_id==1){
                        if (data.truck_booking_list.length != 0) {
                            this.setState({
                                truckData: data.truck_booking_list[0],
                                goodsPhotoGalleryList:data.truck_booking_list[0].goods_image_list
                            })
                        }else {
                            this.setState({ truckData: ''})
                        }
                    }
                    if(this.service_type_id==2){
                        if(data.warehouse_booking_list.length != 0){
                            this.setState({
                                warehouse_booking_detailsi:data.warehouse_booking_list[0],
                                goodsPhotoGalleryList:data.warehouse_booking_list[0].goods_image_list
                            })
                        }else{
                            this.setState({warehouse_booking_detailsi:''})
                        }
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
                            this.setState({ cancelModal_Visible: false, isSuccesfull: false, })
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
                        onPress={() => { this.setState({ driverDetailsModalVisible: false });}}
                    >
                        <Image source={require('../images/close.png')} style={{ width: 15, height: 15 }} />
                    </TouchableOpacity>

                    <Text style={[StyleViewUpcomingTrip.modalMsg, { marginBottom: 10 }]}>Driver Details</Text>

                    {
                        this.state.truckData.driver_profile_picture==""
                        ?
                            <Image
                                source={require('../images/person.png')}
                                style={{width:50, height:50, resizeMode:'cover', alignSelf:'center'}}
                            />
                        :
                            <Image
                                source ={{uri: this.state.truckData.driver_profile_picture}}
                                style={{width:50, height:50, resizeMode:'cover', alignSelf:'center'}}
                            />
    
                    }

                    <View style={StyleViewUpcomingTrip.row}>
                        <View style={StyleViewUpcomingTrip.col1}>
                            <Text style={StyleViewUpcomingTrip.col1Text}>Name</Text>
                        </View>
                        <View style={StyleViewUpcomingTrip.col2}>
                            <Text style={StyleViewUpcomingTrip.col2Text}>{this.state.truckData.driver_name}</Text>
                        </View>
                    </View>

                    <View style={StyleViewUpcomingTrip.row}>
                        <View style={StyleViewUpcomingTrip.col1}>
                            <Text style={StyleViewUpcomingTrip.col1Text}>License No.</Text>
                        </View>
                        <View style={StyleViewUpcomingTrip.col2}>
                            <Text style={StyleViewUpcomingTrip.col2Text}>{this.state.truckData.driver_license_number}</Text>
                        </View>
                    </View>

                    <View style={StyleViewUpcomingTrip.row}>
                        <View style={StyleViewUpcomingTrip.col1}>
                            <Text style={StyleViewUpcomingTrip.col1Text}>Year of Exp.</Text>
                        </View>
                        <View style={StyleViewUpcomingTrip.col2}>
                            <Text style={StyleViewUpcomingTrip.col2Text}>{this.state.truckData.driver_year_of_exp}</Text>
                        </View>
                    </View>
                
                </View>
            </View>
        )
    }

    getExtention(filename){
        return (/[.]/.exec(filename)) ? /[^.]+$/.exec(filename) : undefined;
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
            alert("File is downloaded successfully.");
        });
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
                alert("File downloading faild.");
                return false
            }
          } catch (err) {
            console.warn(err)
          }
          return false
    }

    render() {
        const { navigation } = this.props
        const Flag_currentTtrip=this.props.navigation.getParam('Flag_currentTtrip');
        const serviceData = navigation.getParam('item');
        const service_name = navigation.getParam('flag_upcoming_Trip');// 1 = upcomingtrip_truking, 2 = upcomingtrip_warehouse, 3 = upcomingtrip_warehouse_trucking,

        return (
            <View style={{ flex: 1 }}>
                
                <HeaderBar title={Flag_currentTtrip==true?"VIEW CURRENT TRIP DETAILS":"VIEW UPCOMING TRIP DETAILS"} isBack={true} isLogout={true} navigation={navigation} />
                
                <MainPresenter ref={(ref) => { this.presenter = ref }} onResponse={this.onResponse.bind(this)} navigation={this.props.navigation} />
 
                <View style={{ flex: 1 }}>

                    <ScrollView style={{ width: '100%' }} bounces={false}>

                        <View style={{ marginBottom: 2 }}>
                            <View style={StyleViewUpcomingTrip.topCircle} />
                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                {
                                    this.service_type_id==1
                                    ?
                                        <TouchableOpacity style={{ marginTop: 25, }}
                                            onPress={()=>{
                                                //return ( this.setState({ invoiceModal_Visible: true }))
                                                this.state.truckData.invoice_url!=""
                                                ?
                                                Platform.OS=="android" ? this.requestFilePermission(this.state.truckData.invoice_url) : this.getDownloadFile(this.state.truckData.invoice_url)
                                                : null
                                            }}
                                        >
                                            <Image source={require('../images/invoice_details.png')}
                                            style={StyleViewCurrentTrip.sideImage} />
                                        </TouchableOpacity>
                                    : this.service_type_id==2
                                    ?  
                                        <TouchableOpacity style={{ marginTop: 25, }}
                                            onPress={()=>{
                                                //return ( this.setState({ invoiceModal_Visible: true }))
                                                this.state.warehouse_booking_detailsi.invoice_url!=""
                                                ?
                                                Platform.OS=="android" ? this.requestFilePermission(this.state.warehouse_booking_detailsi.invoice_url) : this.getDownloadFile(this.state.warehouse_booking_detailsi.invoice_url)
                                                : null
                                            }}
                                        >
                                            <Image source={require('../images/invoice_details.png')}
                                            style={StyleViewCurrentTrip.sideImage} />
                                        </TouchableOpacity>
                                    : null
                                }
                                
                                <Image 
                                    source={
                                    this.service_type_id == '1'
                                        ? require('../images/current_trips.png')
                                        : this.service_type_id == '2'
                                            ? require('../images/WarehouseServices_copy.png')
                                            : this.service_type_id == '3'
                                                ? require('../images/Trucking_+Warehouse.png')
                                                : null
                                    }
                                    style={[StyleViewCurrentTrip.ImageCurrentTrip, { marginRight: 95 }]}
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

                                    <Text style={[StyleViewUpcomingTrip.title,{textTransform:'capitalize'}]}>
                                        {
                                              this.service_type_id==1
                                            ?`${this.state.truckData.pickup_location} - ${this.state.truckData.drop_location.drop_location[0]}`
                                            : this.service_type_id==2 
                                            ? this.state.warehouse_booking_detailsi.warehouse_type_name
                                            : ''
                                        }
                                    </Text>
                                    <View style={StyleViewUpcomingTrip.bottomLine}></View>


                                    <View style={StyleViewUpcomingTrip.row}>
                                        <View style={StyleViewUpcomingTrip.col1}>
                                            <Text style={StyleViewUpcomingTrip.col1Text}>{Constants.BookingId}</Text>
                                        </View>
                                        <View style={StyleViewUpcomingTrip.col2}>
                                            <Text style={StyleViewUpcomingTrip.col2Text}>
                                                {
                                                      this.service_type_id==1 
                                                    ? this.state.truckData.truck_booking_id
                                                    : this.service_type_id==2
                                                    ? this.state.warehouse_booking_detailsi.warehouse_booking_id
                                                    :''
                                                }
                                            </Text>
                                        </View>
                                    </View>

                                    <View style={StyleViewUpcomingTrip.row}>
                                        <View style={StyleViewUpcomingTrip.col1}>
                                            <Text style={StyleViewUpcomingTrip.col1Text}>{Constants.Status}</Text>
                                        </View>
                                        <View style={StyleViewUpcomingTrip.col2}>
                                            <Text style={[StyleViewUpcomingTrip.col2Text,{ display : this.service_type_id==1 ? 'flex' :'none'}]}>
                                            {
                                                 this.state.truckData.current_status == Constants.BOOKING_CURRENT_STATUS_DRIVER_DISPATCHED ? "Driver Dispatched"
                                                :this.state.truckData.current_status == Constants.BOOKING_CURRENT_STATUS_ARRIVED_AT_PICKUP_LOCATION ? "Arrived at Pickup Location"
                                                :this.state.truckData.current_status == Constants.BOOKING_CURRENT_STATUS_ON_ROUTE_TO_DESTINATION ? "On- route to destination"
                                                :this.state.truckData.current_status == Constants.BOOKING_CURRENT_STATUS_ARRIVED_AT_DESTINATION ? "Arrived at Destination"
                                                :this.state.truckData.current_status == Constants.BOOKING_CURRENT_STATUS_TRIP_COMPLETED_CARGO_OFFLOADED ? "Trip completed, cargo offloaded"
                                                :this.state.truckData.current_status == Constants.BOOKING_CURRENT_STATUS_IN_STORAGE ? "In storage"
                                                :this.state.truckData.current_status == Constants.BOOKING_STATUS_DELIVERED ? "Delivered"
                                                :this.state.truckData.current_status == Constants.BOOKING_STATUS_PICKED_UP ? "Picked Up"
                                                :this.state.truckData.current_status == Constants.BOOKING_STATUS_CANCELLED ? "Cancelled"
                                                :this.state.truckData.current_status == Constants.BOOKING_STATUS_CANCELLED ? "New"
                                                :null
                                            }
                                            </Text>
                                            <Text style={[StyleViewUpcomingTrip.col2Text,{ display : this.service_type_id==2 ? 'flex' :'none'}]}>
                                            {
                                                 this.state.warehouse_booking_detailsi.current_status == Constants.BOOKING_STATUS_NEW ? "New"
                                                :this.state.warehouse_booking_detailsi.current_status == Constants.BOOKING_STATUS_PICKED_UP ? "Picked up"
                                                :this.state.warehouse_booking_detailsi.current_status == Constants.BOOKING_STATUS_DELIVERED ? "Delivered"
                                                :this.state.warehouse_booking_detailsi.current_status == Constants.BOOKING_STATUS_CANCELLED ? "Cancelled"
                                                :null
                                            }
                                            </Text>
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
                                                    <Text style={StyleViewUpcomingTrip.col2Text}>
                                                        {
                                                            this.service_type_id==1 
                                                            ? this.state.truckData.partner_name
                                                            : this.service_type_id==2
                                                            ? this.state.warehouse_booking_detailsi.partner_name
                                                            :null
                                                        }</Text>
                                                </View>
                                            </View>

                                            <View style={[StyleViewUpcomingTrip.row, { marginBottom: 50 }]}>
                                                <View style={StyleViewUpcomingTrip.col1}>
                                                    <Text style={StyleViewUpcomingTrip.col1Text}>{Constants.ContactNumber}</Text>
                                                </View>
                                                <View style={StyleViewUpcomingTrip.col2}>
                                                    <Text style={StyleViewUpcomingTrip.col2Text}>
                                                    {
                                                        this.service_type_id==1
                                                        ? this.state.truckData.partner_contact
                                                        : this.service_type_id==2
                                                        ? this.state.warehouse_booking_detailsi.partner_contact
                                                        : null
                                                    }</Text>
                                                </View>
                                            </View>

                                        </Tab>

                                        {
                                            this.service_type_id == 1 ?
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
                                                            <Text style={StyleViewUpcomingTrip.col2Text}>{ moment(this.state.truckData.date_of_pickup).format("DD MMM YYYY")}</Text>
                                                        </View>
                                                    </View>

                                                    <View style={StyleViewUpcomingTrip.row}>
                                                        <View style={StyleViewUpcomingTrip.col1}>
                                                            <Text style={StyleViewUpcomingTrip.col1Text}>{Constants.PickUpTime}</Text>
                                                        </View>
                                                        <View style={StyleViewUpcomingTrip.col2}>
                                                            <Text style={StyleViewUpcomingTrip.col2Text}>{moment(this.state.truckData.date_of_pickup).format("DD MMM YYYY")}</Text>
                                                        </View>
                                                    </View>

                                                    <View style={[StyleViewUpcomingTrip.row,{}]}>
                                                        <View style={StyleViewUpcomingTrip.col1}>
                                                            <Text style={StyleViewUpcomingTrip.col1Text}>{Constants.PickUpLocation}</Text>
                                                        </View>
                                                        <View style={StyleViewUpcomingTrip.col2}>
                                                            <Text style={StyleViewUpcomingTrip.col2Text}>{this.state.truckData.pickup_location}</Text>
                                                        </View>
                                                    </View>

                                                    <View style={[StyleViewUpcomingTrip.row,{borderBottomWidth:0}]}>
                                                        <View style={StyleViewUpcomingTrip.col1}>
                                                            <Text style={StyleViewUpcomingTrip.col1Text}>{Constants.DestinationLocation}</Text>
                                                        </View>
                                                        <View style={[StyleViewUpcomingTrip.col2,{justifyContent:'flex-end', alignItems:'flex-end'}]}>
                                                            <TouchableOpacity style={{justifyContent:'flex-end', alignItems:'flex-end', alignSelf:'flex-end'}}
                                                                onPress={()=>{ this.setState({showDestinationLocations :!this.state.showDestinationLocations}) }}
                                                            >
                                                            <Image
                                                                source={ this.state.showDestinationLocations ? require('../images/ArrowUp.png') : require('../images/ArrowDown.png')}
                                                                style={{width:20, height:20, resizeMode:'cover', tintColor:Constants.COLOR_GREEN}}
                                                            />
                                                            </TouchableOpacity>
                                                        </View>
                                                    </View>

                                                    <View style={[StyleViewUpcomingTrip.row,{display : this.state.showDestinationLocations ? 'flex' : 'none'}]}>
                                                        <View style={StyleViewUpcomingTrip.col1}>
                                                            <Text style={StyleViewUpcomingTrip.col1Text}></Text>
                                                        </View>
                                                        <View style={[StyleViewUpcomingTrip.col2,{flexDirection:'column'}]}>
                                                                {
                                                                    this.state.truckData == '' ? "" :
                                                                    this.state.truckData.drop_location.drop_location.map((item)=>
                                                                        <Text style={[StyleViewUpcomingTrip.col2Text,{marginBottom:5}]}>{item}</Text>
                                                                    )
                                                                    //this.state.truckData.drop_location.drop_location[0]
                                                                }
                                                            
                                                        </View>
                                                    </View>

                                                    <View style={StyleViewUpcomingTrip.row}>
                                                        <View style={StyleViewUpcomingTrip.col1}>
                                                            <Text style={StyleViewUpcomingTrip.col1Text}>{Constants.AarrivalDate}</Text>
                                                        </View>
                                                        <View style={StyleViewUpcomingTrip.col2}>
                                                            <Text style={StyleViewUpcomingTrip.col2Text}>
                                                                { moment(this.state.truckData.arrivalDateAndTime,"YY-MM-DD h:m:s").format("DD/MM/YYYY")}
                                                                </Text>
                                                        </View>
                                                    </View>

                                                    <View style={StyleViewUpcomingTrip.row}>
                                                        <View style={StyleViewUpcomingTrip.col1}>
                                                            <Text style={StyleViewUpcomingTrip.col1Text}>{Constants.AarrivalTime}</Text>
                                                        </View>
                                                        <View style={StyleViewUpcomingTrip.col2}>
                                                            <Text style={StyleViewUpcomingTrip.col2Text}>
                                                                { moment(this.state.truckData.arrivalDateAndTime,"YY-MM-DD h:m:s").format("h:m A")}
                                                            </Text>
                                                        </View>
                                                    </View>

                                                    <View style={StyleViewUpcomingTrip.row}>
                                                        <View style={StyleViewUpcomingTrip.col1}>
                                                            <Text style={StyleViewUpcomingTrip.col1Text}>{Constants.TruckId}</Text>
                                                        </View>
                                                        <View style={StyleViewUpcomingTrip.col2}>
                                                            <Text style={StyleViewUpcomingTrip.col2Text}>
                                                                {this.state.truckData.truckId}
                                                            </Text>
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
                                                            <TouchableOpacity onPress={()=>{this.setState({driverDetailsModalVisible:true})}}>
                                                                <Text style={[StyleViewUpcomingTrip.col2Text, { color: Constants.COLOR_GREEN, textDecorationLine: 'underline' }]}>View</Text>
                                                            </TouchableOpacity>
                                                        </View>
                                                    </View>

                                                    <View style={StyleViewUpcomingTrip.row}>
                                                        <View style={StyleViewUpcomingTrip.col1}>
                                                            <Text style={StyleViewUpcomingTrip.col1Text}>Start Point</Text>
                                                        </View>
                                                        <View style={StyleViewUpcomingTrip.col2}>
                                                            <Text style={StyleViewUpcomingTrip.col2Text}>{this.state.truckData.drop_location.drop_address[0]}</Text>
                                                        </View>
                                                    </View>
                                                    {
                                                        this.state.truckData.drop_location.drop_address == '' ? "" :
                                                        this.state.truckData.drop_location.drop_address.map((item,index)=>
                                                            <View style={StyleViewUpcomingTrip.row}>
                                                                <View style={StyleViewUpcomingTrip.col1}>
                                                                    <Text style={StyleViewUpcomingTrip.col1Text}>Mid Point {index+1}</Text>
                                                                </View>
                                                                <View style={StyleViewUpcomingTrip.col2}>
                                                                    <Text style={StyleViewUpcomingTrip.col2Text}>{item}</Text>
                                                                </View>
                                                            </View>
                                                        )
                                                    }
                                                    <View style={StyleViewUpcomingTrip.row}>
                                                        <View style={StyleViewUpcomingTrip.col1}>
                                                            <Text style={StyleViewUpcomingTrip.col1Text}>End Point</Text>
                                                        </View>
                                                        <View style={StyleViewUpcomingTrip.col2}>
                                                            <Text style={StyleViewUpcomingTrip.col2Text}>{this.state.truckData.drop_location.drop_address[this.state.truckData.drop_location.drop_address.length-1]}</Text>
                                                        </View>
                                                    </View>

                                                </View>

                                            </Tab>
                                            : 
                                            this.service_type_id == '3'
                                            ? 
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

                                        {
                                            this.service_type_id == '2' ?
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
                                                            <Text style={StyleViewUpcomingTrip.col2Text}>{this.state.warehouse_booking_detailsi.warehouse_type_id}</Text>
                                                        </View>
                                                    </View>

                                                    <View style={StyleViewUpcomingTrip.row}>
                                                        <View style={StyleViewUpcomingTrip.col1}>
                                                            <Text style={StyleViewUpcomingTrip.col1Text}>{Constants.WarehoueType}</Text>
                                                        </View>
                                                        <View style={StyleViewUpcomingTrip.col2}>
                                                            <Text style={StyleViewUpcomingTrip.col2Text}>{this.state.warehouse_booking_detailsi.warehouse_type_name}</Text>
                                                        </View>
                                                    </View>

                                                    <View style={StyleViewUpcomingTrip.row}>
                                                        <View style={StyleViewUpcomingTrip.col1}>
                                                            <Text style={StyleViewUpcomingTrip.col1Text}>{Constants.StorageType}</Text>
                                                        </View>
                                                        <View style={StyleViewUpcomingTrip.col2}>
                                                            <Text style={StyleViewUpcomingTrip.col2Text}>{this.state.warehouse_booking_detailsi.storage_type}</Text>
                                                        </View>
                                                    </View>

                                                    <View style={StyleViewUpcomingTrip.row}>
                                                        <View style={StyleViewUpcomingTrip.col1}>
                                                            <Text style={StyleViewUpcomingTrip.col1Text}>{Constants.CostPerSqm}</Text>
                                                        </View>
                                                        <View style={StyleViewUpcomingTrip.col2}>
                                                            <Text style={StyleViewUpcomingTrip.col2Text}>{this.state.warehouse_booking_detailsi.cost_per_sqm}</Text>
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
                                                                this.props.navigation.navigate('MapViews',{'coordinates':this.state.warehouse_booking_detailsi.warehouse_location})
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
                                                            <Text style={StyleViewUpcomingTrip.col2Text}>
                                                                {moment(this.state.warehouse_booking_detailsi.service_start_date,"YYYY-MM-DD").format("DD/MM/YYYY")} To {moment(this.state.warehouse_booking_detailsi.service_end_date,"YYYY-MM-DD").format("DD/MM/YYYY")}
                                                                
                                                            </Text>
                                                        </View>
                                                    </View>
                                                </View>
                                            </Tab>
                                            : 
                                            this.service_type_id == '3'
                                            ?
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
                                                        <Text style={StyleViewUpcomingTrip.col2Text}>
                                                            {
                                                                this.service_type_id==1
                                                                ? this.state.truckData.corgo_type
                                                                : this.service_type_id==2
                                                                ? this.state.warehouse_booking_detailsi.corgo_type
                                                                :null
                                                            }</Text>
                                                    </View>
                                                </View>

                                                <View style={StyleViewUpcomingTrip.row}>
                                                    <View style={StyleViewUpcomingTrip.col1}>
                                                        <Text style={StyleViewUpcomingTrip.col1Text}>{Constants.CargoDesc}</Text>
                                                    </View>
                                                    <View style={StyleViewUpcomingTrip.col2}>
                                                        <Text style={StyleViewUpcomingTrip.col2Text}>
                                                        {
                                                            this.service_type_id==1
                                                            ? this.state.truckData.cargo_desc
                                                            : this.service_type_id==2
                                                            ? this.state.warehouse_booking_detailsi.cargo_desc
                                                            :null
                                                        }</Text>
                                                    </View>
                                                </View>

                                                <View style={StyleViewUpcomingTrip.row}>
                                                    <View style={StyleViewUpcomingTrip.col1}>
                                                        <Text style={StyleViewUpcomingTrip.col1Text}>{Constants.CargoHandling}</Text>
                                                    </View>
                                                    <View style={StyleViewUpcomingTrip.col2}>
                                                    {
                                                        this.service_type_id==1
                                                        ?
                                                            <Text style={StyleViewUpcomingTrip.col2Text}>
                                                            {
                                                                this.state.truckData.cargo_handling_req == 0 ? "No"
                                                                :this.state.truckData.cargo_handling_req == 1 ? "Yes"
                                                                :null
                                                            }
                                                            </Text>
                                                        : this.service_type_id==2
                                                        ?
                                                            <Text style={StyleViewUpcomingTrip.col2Text}>
                                                            {
                                                                this.state.warehouse_booking_detailsi.cargo_handling_req == 0 ? "No"
                                                                :this.state.warehouse_booking_detailsi.cargo_handling_req == 1 ? "Yes"
                                                                :null
                                                            }
                                                            </Text>
                                                        :null
                                                    }
                                                        
                                                    </View>
                                                </View>

                                                {
                                                    this.service_type_id==1
                                                    ?
                                                    <View style={[StyleViewUpcomingTrip.row,{display : this.state.truckData.cargo_handling_req == 1 ? 'flex' : 'none'}]}>
                                                        <View style={StyleViewUpcomingTrip.col1}>
                                                            <Text style={StyleViewUpcomingTrip.col1Text}>{Constants.NumberOfUSer}</Text>
                                                        </View>
                                                        <View style={StyleViewUpcomingTrip.col2}>
                                                            <Text style={StyleViewUpcomingTrip.col2Text}>{this.state.truckData.numberUsers}</Text>
                                                        </View>
                                                    </View>
                                                    : this.service_type_id==2
                                                    ?
                                                    <View style={[StyleViewUpcomingTrip.row,{display : this.state.warehouse_booking_detailsi.cargo_handling_req == 1 ? 'flex' : 'none'}]}>
                                                        <View style={StyleViewUpcomingTrip.col1}>
                                                            <Text style={StyleViewUpcomingTrip.col1Text}>{Constants.NumberOfUSer}</Text>
                                                        </View>
                                                        <View style={StyleViewUpcomingTrip.col2}>
                                                            <Text style={StyleViewUpcomingTrip.col2Text}>{this.state.warehouse_booking_detailsi.number_of_users}</Text>
                                                        </View>
                                                    </View>
                                                    :null
                                                }
                                                

                                                <View style={StyleViewUpcomingTrip.row}>
                                                    <View style={StyleViewUpcomingTrip.col1}>
                                                        <Text style={StyleViewUpcomingTrip.col1Text}>{Constants.CargoQuantity}</Text>
                                                    </View>
                                                    <View style={StyleViewUpcomingTrip.col2}>
                                                        <Text style={StyleViewUpcomingTrip.col2Text}>
                                                            {
                                                                this.service_type_id==1
                                                                ? this.state.truckData.quantity
                                                                : this.service_type_id==2
                                                                ? this.state.warehouse_booking_detailsi.quantity
                                                                :null
                                                            }</Text>
                                                    </View>
                                                </View>

                                                <View style={StyleViewUpcomingTrip.row}>
                                                    <View style={StyleViewUpcomingTrip.col1}>
                                                        <Text style={StyleViewUpcomingTrip.col1Text}>{Constants.CargoInssurance}</Text>
                                                    </View>
                                                    <View style={StyleViewUpcomingTrip.col2}>
                                                    {
                                                        this.service_type_id==1
                                                        ?
                                                            <Text style={StyleViewUpcomingTrip.col2Text}>
                                                            {
                                                                this.state.truckData.insurance_required==1?"Yes"
                                                                :this.state.truckData.insurance_required==0?"No" : null
                                                            }
                                                            </Text>
                                                        :
                                                            <Text style={StyleViewUpcomingTrip.col2Text}>
                                                            {
                                                                this.state.warehouse_booking_detailsi.insurance_required==1?"Yes"
                                                                :this.state.warehouse_booking_detailsi.insurance_required==0?"No" : null
                                                            }
                                                            </Text>
                                                    }
                                                        
                                                    </View>
                                                </View>

                                                <View style={StyleViewUpcomingTrip.row}>
                                                    <View style={StyleViewUpcomingTrip.col1}>
                                                        <Text style={StyleViewUpcomingTrip.col1Text}>{Constants.Dimension}</Text>
                                                    </View>
                                                    <View style={StyleViewUpcomingTrip.col2}>
                                                        {
                                                            this.service_type_id==1
                                                            ?
                                                            <Text style={StyleViewUpcomingTrip.col2Text}>
                                                                {this.state.truckData.cargo_size_l} * {this.state.truckData.cargo_size_b} * {this.state.truckData.cargo_size_h}
                                                            </Text>
                                                            :this.service_type_id==2
                                                            ?
                                                            <Text style={StyleViewUpcomingTrip.col2Text}>
                                                                {this.state.warehouse_booking_detailsi.cargo_size_l} * {this.state.warehouse_booking_detailsi.cargo_size_b} * {this.state.warehouse_booking_detailsi.cargo_size_h}
                                                            </Text>
                                                            : null
                                                        }
                                                        
                                                    </View>
                                                </View>

                                                <View style={StyleViewUpcomingTrip.row}>
                                                    <View style={StyleViewUpcomingTrip.col1}>
                                                        <Text style={StyleViewUpcomingTrip.col1Text}>{Constants.VolumetricWeight}</Text>
                                                    </View>
                                                    <View style={StyleViewUpcomingTrip.col2}>
                                                        <Text style={StyleViewUpcomingTrip.col2Text}>
                                                            {
                                                                this.service_type_id==1
                                                                ? this.state.truckData.volumetric_weight
                                                                : this.service_type_id==2
                                                                ? this.state.warehouse_booking_detailsi.volumetric_weight
                                                                :null
                                                            }</Text>
                                                    </View>
                                                </View>

                                                <View style={StyleViewUpcomingTrip.row}>
                                                    <View style={StyleViewUpcomingTrip.col1}>
                                                        <Text style={StyleViewUpcomingTrip.col1Text}>Packeting/Protection Details</Text>
                                                    </View>
                                                    <View style={StyleViewUpcomingTrip.col2}>
                                                        <Text style={StyleViewUpcomingTrip.col2Text}>
                                                            {
                                                                this.service_type_id==1
                                                                ? this.state.truckData.packeting_details
                                                                : this.service_type_id==2
                                                                ? this.state.warehouse_booking_detailsi.packeting_details
                                                                :null
                                                            }
                                                        </Text>
                                                    </View>
                                                </View>

                                                <View style={StyleViewUpcomingTrip.row}>
                                                    <View style={StyleViewUpcomingTrip.col1}>
                                                        <Text style={StyleViewUpcomingTrip.col1Text}>{Constants.ValueOfLload}</Text>
                                                    </View>
                                                    <View style={StyleViewUpcomingTrip.col2}>
                                                        <Text style={StyleViewUpcomingTrip.col2Text}>
                                                            {
                                                                this.service_type_id==1
                                                                ? this.state.truckData.value_of_load
                                                                : this.service_type_id==2
                                                                ? this.state.warehouse_booking_detailsi.value_of_load
                                                                :null
                                                            }</Text>
                                                    </View>
                                                </View>

                                                <View style={StyleViewUpcomingTrip.row}>
                                                    <View style={StyleViewUpcomingTrip.col1}>
                                                        <Text style={StyleViewUpcomingTrip.col1Text}>Invoice</Text>
                                                    </View>
                                                    <View style={StyleViewUpcomingTrip.col2}>
                                                    {
                                                        this.state.truckData.invoice_goods!=""
                                                        ?
                                                            <TouchableOpacity 
                                                                onPress={()=>{
                                                                    this.service_type_id==1
                                                                    ? Platform.OS=="android" ? this.requestFilePermission(this.state.truckData.invoice_goods) : this.getDownloadFile(this.state.truckData.invoice_goods)
                                                                    : this.service_type_id==2
                                                                    ? Platform.OS=="android" ? this.requestFilePermission(this.state.warehouse_booking_detailsi.invoice_goods) : this.getDownloadFile(this.state.warehouse_booking_detailsi.invoice_goods)
                                                                    : null
                                                                }}
                                                            >
                                                                <Image 
                                                                    source={require('../images/Download_file.png')}
                                                                    style={{ width: 30, height: 30, resizeMode: 'cover', padding:5 }}
                                                                />
                                                            </TouchableOpacity>
                                                        :null
                                                    }
                                                    </View>
                                                </View>
                                                
                                                <View style={StyleViewUpcomingTrip.row}>
                                                    <View style={StyleViewUpcomingTrip.col1}>
                                                        <Text style={StyleViewUpcomingTrip.col1Text}>Image</Text>
                                                    </View>
                                                    <View style={StyleViewUpcomingTrip.col2}>
                                                        <TouchableOpacity onPress={()=>{ 
                                                                this.state.goodsPhotoGalleryList==""
                                                                ? alert('Gallery is empty now.')
                                                                :
                                                                //this.setState({goodsPhotoGalleryVisible:true})
                                                                this.RBSheet.open()
                                                            }}>
                                                            <Text style={[StyleViewUpcomingTrip.col2Text, { color: Constants.COLOR_GREEN, textDecorationLine: 'underline' }]}>View Gallery</Text>
                                                        </TouchableOpacity>
                                                    </View>
                                                </View>

                                                <View style={[StyleViewUpcomingTrip.row, { display:this.service_type_id==2 ? 'none':'flex'}]}>
                                                    <View style={StyleViewUpcomingTrip.col1}>
                                                        <Text style={StyleViewUpcomingTrip.col1Text}>Recurring Requirement</Text>
                                                    </View>
                                                    <View style={StyleViewUpcomingTrip.col2}>
                                                    {
                                                        this.service_type_id==1
                                                        ?
                                                            <Text style={StyleViewUpcomingTrip.col2Text}>
                                                            {
                                                                this.state.truckData.recurring_req=="0" ? "No" : "Yes"
                                                            }
                                                            </Text>
                                                        :
                                                            <Text style={StyleViewUpcomingTrip.col2Text}>
                                                            {
                                                                this.state.warehouse_booking_detailsi.recurring_req=="0" ? "No" : "Yes"
                                                            }
                                                            </Text>
                                                    }
                                                        
                                                    </View>
                                                </View>

                                                <View style={[StyleViewUpcomingTrip.row,{ display:this.service_type_id==2 ? 'none':'flex'}]}>
                                                    <View style={StyleViewUpcomingTrip.col1}>
                                                        <Text style={StyleViewUpcomingTrip.col1Text}>Service Frequency</Text>
                                                    </View>
                                                    <View style={StyleViewUpcomingTrip.col2}>
                                                        <Text style={StyleViewUpcomingTrip.col2Text}>
                                                            {
                                                                this.state.truckData.service_frequency=="0" ? "Daily"
                                                                :this.state.truckData.service_frequency=="1" ? "Weekly"
                                                                :this.state.truckData.service_frequency=="2" ? "Monthly"
                                                                : null
                                                            }
                                                        </Text>
                                                    </View>
                                                </View>
                                                {
                                                    this.service_type_id==2 ? null
                                                    :
                                                    <View style={[StyleViewUpcomingTrip.row,{ display: this.state.truckData.recurring_req=="0"?'none':'flex' }]}>
                                                        <View style={StyleViewUpcomingTrip.col1}>
                                                            <Text style={StyleViewUpcomingTrip.col1Text}>Service Day</Text>
                                                        </View>
                                                        <View style={StyleViewUpcomingTrip.col2}>
                                                            <Text style={StyleViewUpcomingTrip.col2Text}>{this.state.truckData.service_day}</Text>
                                                        </View>
                                                    </View>
                                                }
                                            </View>
                                        </Tab>

                                        <Tab heading='PAYMENT DETAILS'
                                            tabStyle={StyleViewUpcomingTrip.tab}
                                            activeTabStyle={StyleViewUpcomingTrip.tab_active}
                                            textStyle={StyleViewUpcomingTrip.tab_text}
                                            activeTextStyle={StyleViewUpcomingTrip.tab_active_text}
                                        >
                                            <View>

                                                        <View style={StyleViewUpcomingTrip.row}>
                                                            <View style={StyleViewUpcomingTrip.col1}>
                                                                <Text style={StyleViewUpcomingTrip.col1Text}>{Constants.CargoHandlingcost}</Text>
                                                            </View>
                                                            <View style={StyleViewUpcomingTrip.col2}>
                                                                {
                                                                    this.service_type_id==1
                                                                    ?
                                                                        <Text style={StyleViewUpcomingTrip.col2Text}>
                                                                        {
                                                                            this.state.truckData.cargo_handling_req=="0"?"No":"Yes"
                                                                        }
                                                                        </Text>
                                                                    : this.service_type_id==2 
                                                                    ?
                                                                        <Text style={StyleViewUpcomingTrip.col2Text}>
                                                                        {
                                                                            this.state.warehouse_booking_detailsi.cargo_handling_req=="0"?"No":"Yes"
                                                                        }
                                                                        </Text>
                                                                    : null
                                                                }
                                                                
                                                            </View>
                                                        </View>

                                                        {
                                                            this.service_type_id==1
                                                            ?
                                                            <View style={[StyleViewUpcomingTrip.row,{ display:this.state.truckData.recurring_req=="0"?'none':'flex'}]}>
                                                                <View style={StyleViewUpcomingTrip.col1}>
                                                                    <Text style={StyleViewUpcomingTrip.col1Text}>{Constants.CostOfRecurring}</Text>
                                                                </View>
                                                                <View style={StyleViewUpcomingTrip.col2}>
                                                                    <Text style={StyleViewUpcomingTrip.col2Text}>{this.state.truckData.costOf_recurring}</Text>
                                                                </View>
                                                            </View>
                                                            : this.service_type_id==2
                                                            ?
                                                            null
                                                            :null

                                                        }

                                                        <View style={StyleViewUpcomingTrip.row}>
                                                            <View style={StyleViewUpcomingTrip.col1}>
                                                                <Text style={StyleViewUpcomingTrip.col1Text}>Trip Amount</Text>
                                                            </View>
                                                            <View style={StyleViewUpcomingTrip.col2}>
                                                                <Text style={StyleViewUpcomingTrip.col2Text}>
                                                                    {
                                                                        this.service_type_id==1
                                                                        ? this.state.truckData.trip_amount
                                                                        : this.service_type_id==2
                                                                        ? this.state.warehouse_booking_detailsi.trip_amount
                                                                        : null
                                                                    }
                                                                </Text>
                                                            </View>
                                                        </View>

                                                        <View style={StyleViewUpcomingTrip.row}>
                                                            <View style={StyleViewUpcomingTrip.col1}>
                                                                <Text style={StyleViewUpcomingTrip.col1Text}>Discount (%)</Text>
                                                            </View>
                                                            <View style={StyleViewUpcomingTrip.col2}>
                                                                <Text style={StyleViewUpcomingTrip.col2Text}>
                                                                    {
                                                                        this.service_type_id==1
                                                                        ? this.state.truckData.discount_percentage
                                                                        : this.service_type_id==2
                                                                        ? this.state.warehouse_booking_detailsi.discount_percentage
                                                                        :null
                                                                    }
                                                                </Text>
                                                            </View>
                                                        </View>

                                                        <View style={StyleViewUpcomingTrip.row}>
                                                            <View style={StyleViewUpcomingTrip.col1}>
                                                                <Text style={StyleViewUpcomingTrip.col1Text}>Discounted price</Text>
                                                            </View>
                                                            <View style={StyleViewUpcomingTrip.col2}>
                                                                <Text style={StyleViewUpcomingTrip.col2Text}>
                                                                    {
                                                                        this.service_type_id==1
                                                                        ? this.state.truckData.discounted_amount
                                                                        : this.service_type_id==2
                                                                        ? this.state.warehouse_booking_detailsi.discounted_amount
                                                                        :null
                                                                    }
                                                                </Text>
                                                            </View>
                                                        </View>

                                                        <View style={StyleViewUpcomingTrip.row}>
                                                            <View style={StyleViewUpcomingTrip.col1}>
                                                                <Text style={StyleViewUpcomingTrip.col1Text}>{Constants.InsuranceRate}</Text>
                                                            </View>
                                                            <View style={StyleViewUpcomingTrip.col2}>
                                                                <Text style={StyleViewUpcomingTrip.col2Text}>
                                                                    {
                                                                        this.service_type_id==1
                                                                        ? this.state.truckData.insurance_rate
                                                                        : this.service_type_id==2
                                                                        ? this.state.warehouse_booking_detailsi.insurance_rate
                                                                        :null
                                                                    }
                                                                </Text>
                                                            </View>
                                                        </View>

                                                        <View style={StyleViewUpcomingTrip.row}>
                                                            <View style={StyleViewUpcomingTrip.col1}>
                                                                <Text style={StyleViewUpcomingTrip.col1Text}>Total</Text>
                                                            </View>
                                                            <View style={StyleViewUpcomingTrip.col2}>
                                                                <Text style={StyleViewUpcomingTrip.col2Text}>
                                                                    {
                                                                        this.service_type_id==1
                                                                        ? this.state.truckData.total
                                                                        : this.service_type_id==2
                                                                        ? this.state.warehouse_booking_detailsi.total
                                                                        :null
                                                                        }
                                                                </Text>
                                                            </View>
                                                        </View>

                                                        <View style={StyleViewUpcomingTrip.row}>
                                                            <View style={StyleViewUpcomingTrip.col1}>
                                                                <Text style={StyleViewUpcomingTrip.col1Text}>VAT(%)</Text>
                                                            </View>
                                                            <View style={StyleViewUpcomingTrip.col2}>
                                                                <Text style={StyleViewUpcomingTrip.col2Text}>
                                                                    {
                                                                        this.service_type_id==1
                                                                        ? this.state.truckData.vat_percentage
                                                                        : this.service_type_id==2
                                                                        ? this.state.warehouse_booking_detailsi.vat_percentage
                                                                        : null
                                                                    }
                                                                </Text>
                                                            </View>
                                                        </View>

                                                        <View style={StyleViewUpcomingTrip.row}>
                                                            <View style={StyleViewUpcomingTrip.col1}>
                                                                <Text style={StyleViewUpcomingTrip.col1Text}>Final Paid Cost</Text>
                                                            </View>
                                                            <View style={StyleViewUpcomingTrip.col2}>
                                                                <Text style={StyleViewUpcomingTrip.col2Text}>
                                                                    {
                                                                        this.service_type_id==1
                                                                        ? this.state.truckData.final_paid_amount
                                                                        : this.service_type_id==2
                                                                        ? this.state.warehouse_booking_detailsi.final_paid_amount
                                                                        :null
                                                                    }
                                                                </Text>
                                                            </View>
                                                        </View>

                                                        <View style={StyleViewUpcomingTrip.row}>
                                                            <View style={StyleViewUpcomingTrip.col1}>
                                                                <Text style={StyleViewUpcomingTrip.col1Text}>Invoice</Text>
                                                            </View>
                                                            {
                                                                this.service_type_id==1
                                                                ?
                                                                    <View style={StyleViewUpcomingTrip.col2}>
                                                                    {
                                                                        this.state.truckData.invoice_url!=""
                                                                        ?
                                                                            <TouchableOpacity onPress={()=>{
                                                                                Platform.OS=="android" ? this.requestFilePermission(this.state.truckData.invoice_url) : this.getDownloadFile(this.state.truckData.invoice_url)
                                                                            }}>
                                                                            <Image 
                                                                                source={require('../images/Download_file.png')}
                                                                                style={{ width: 30, height: 30, resizeMode: 'cover', padding:5 }}
                                                                            />
                                                                            </TouchableOpacity>
                                                                        : null
                                                                    }
                                                                    </View>
                                                                :
                                                                this.service_type_id==2
                                                                ?
                                                                    <View style={StyleViewUpcomingTrip.col2}>
                                                                    {
                                                                        this.state.warehouse_booking_detailsi.invoice_url!=""
                                                                        ?
                                                                            <TouchableOpacity onPress={()=>{
                                                                                Platform.OS=="android" ? this.requestFilePermission(this.state.warehouse_booking_detailsi.invoice_url) : this.getDownloadFile(this.state.warehouse_booking_detailsi.invoice_url)
                                                                            }}>
                                                                            <Image 
                                                                                source={require('../images/Download_file.png')}
                                                                                style={{ width: 30, height: 30, resizeMode: 'cover', padding:5 }}
                                                                            />
                                                                            </TouchableOpacity>
                                                                        : null
                                                                    }
                                                                    </View>
                                                                :null
                                                            }
                                                            
                                                        </View>

                                                {/*payment details for warehouse */}
                                                {/* {this.service_type_id == '2'
                                                    ? 
                                                    <View>

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
                                                    : 
                                                    this.service_type_id == '3'
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
                                                } */}

                                            </View>
                                        </Tab>

                                    </Tabs>

                                </View>
                           
                        <TouchableOpacity style={Flag_currentTtrip==true?{display:"none"}:[StyleViewUpcomingTrip.bottomButton, { width: '90%', }]}
                            onPress={() => { this.setState({ cancelModal_Visible: true }) }}
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

                <Modal
                    animationType='fade'
                    transparent={true}
                    visible={this.state.driverDetailsModalVisible}
                    style={{ flex: 1 }}
                >
                   {
                       this.driverDetails()
                   }
                </Modal>

                <Modal
                    animationType='fade'
                    transparent={true}
                    visible={this.state.goodsPhotoGalleryVisible}
                    style={{ flex: 1 }}
                >
                   <View style={{backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                        <View style={{ width:'90%', maxHeight:250, borderRadius: 5, padding:10, backgroundColor: Constants.COLOR_WHITE, alignSelf: 'center', justifyContent: 'center' }}>
                            <TouchableOpacity style={{alignSelf:'flex-end', justifyContent: 'center', alignItems: 'center',}} onPress={()=>{ this.setState({goodsPhotoGalleryVisible:false}) }}>
                                <Image source={require('../images/close.png')} style={{width:15, height:15, resizeMode:'cover'}}/>
                            </TouchableOpacity>
                            <Text style={[StyleViewUpcomingTrip.modalMsg, { marginBottom: 20 }]}>Photo Gallery</Text>

                                <Carousel
                                    indicatorAtBottom={true}
                                    indicatorOffset={0}
                                    delay={5000}
                                    loop={true}
                                    indicatorColor="#7bc145"
                                    indicatorSpace={15}
                                >
                                    {
                                    this.state.goodsPhotoGalleryList.map((item,index) =>
                                        <View style={{flex:1, backgroundColor:'cyan', justifyContent:'center', alignItems:'center'}}>
                                            <Image 
                                                style={{width:100, height:50, resizeMode:'cover'}}
                                                source={{uri:item.image_of_good}}
                                            />
                                        </View>
                                        )
                                    }
                                </Carousel>
                            
                            
                            <FlatList
                                data={this.state.goodsPhotoGalleryList}
                                numColumns={3}
                                extraData={this.state}
                                keyExtractor={index => index.toString()}
                                bounces={false}
                                style={{alignSelf:'center', display:'none'}}
                                renderItem={
                                    ({item})=>
                                    <View style={{width:'30%', margin:5, borderWidth:0.5, borderColor:Constants.COLOR_GREY_LIGHT, justifyContent: 'center', alignItems: 'center',}}>
                                        <Image source={{uri:item.image_of_good}} style={{width:50, height:50, resizeMode:'cover'}}/>
                                    </View>
                                }
                            />
                        </View>
                   </View>
                </Modal>

                <RBSheet
                    ref={ref => { this.RBSheet = ref; }}
                    height={400}
                    duration={250}
                    customStyles={{
                        container: {
                            borderTopLeftRadius: 0,
                            borderTopRightRadius: 0,
                            backgroundColor: 'transparent',
                        }
                    }}
                >
                    <View style={{height:400, backgroundColor:Constants.COLOR_WHITE}}>
                        
                        <Text style={{fontSize:16, color:Constants.COLOR_GREY_DARK, textAlign:'center', marginVertical:5}}> Photo Gallery</Text>
                        
                        <Carousel
                            indicatorAtBottom={true}
                            indicatorOffset={0}
                            delay={5000}
                            loop={true}
                            indicatorColor="#7bc145"
                            indicatorSpace={15}
                        >
                            {
                                this.state.goodsPhotoGalleryList.map((item,index) =>
                                    <View style={{flex:1, height:400, justifyContent: 'center', alignItems: 'center',}}>
                                        <Image source={{uri:item.image_of_good}} style={{width:'90%', height:350, alignSelft:'center', resizeMode:'stretch'}}/>
                                    </View>
                                )
                            }
                        </Carousel>
                    </View>
                </RBSheet>
            </View>
        )
    }
}