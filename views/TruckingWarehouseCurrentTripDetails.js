/* screen -MANAPPCUS030
    design by -mayur s
 */
import React, { Component } from 'react';
import { View, Text, Image, TextInput, ScrollView, Modal, TouchableOpacity ,Linking,Platform, PermissionsAndroid} from 'react-native';
import { StyleViewCurrentTrip, StyleCurrentTrip } from '../config/CommonStyles';
import FooterBar from '../config/FooterBar';
import Constants from '../config/Constants';
import HeaderBar from '../config/HeaderBar';
import Invoice from './InvoiceView';
// import { MainPresenter } from '../config/MainPresenter';
// import ApiConstants from '../config/ApiConstants';
import moment from 'moment';
import RNFetchBlob from 'rn-fetch-blob';
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
            Truckwarehouse_data: [ ],
            driver_telephonNumber:"",
            partner_telephoneNumber:"",
            
            warehouseTrucking_data: []
        }
    }
componentDidMount(){
    // this.initServices(service_type_id);
   this.tripDetails= this.props.navigation.getParam("bookingItem");
   this.setState({warehouseTrucking_data:this.tripDetails})
    this.service_type_id=this.props.navigation.getParam("service_type_id");
   console.log(" TRip detailes==> "+JSON.stringify(this.tripDetails));
}

// -------------------API------------------
// `async initServices(service_type_id){
//     let param={
//     'service_type_id':service_type_id,
//     'flag':1,
//     'start_index':0,
//     'total_count':10}
//     await this.presenter.callPostApi(ApiConstants.getMyBookings, param, true);
// }
// async onResponse(apiConstant, data) {
//     switch (apiConstant) {
//         case ApiConstants.getMyBookings: {
//             if (data.status) {
//                 this.setState({dataSource: data.warehouseTrucking_data});
//             //     if(this.truckBooingStatus){
//             //         if (data.truck_booking_list.length != 0) {

                        
//             //             this.setState({
//             //                 dataSource: data.truck_booking_list,
//             //             }) 
//             //     }
//             // }else {
//             //         this.setState({
//             //             dataSource: [],
//             //         })
                    
//             //     }
//             } else {
//                 alert(data.message)
//             }

//             break;
//         }
//     }
// }`

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
        let { navigation } = this.props
        return (
            <View style={{ flex: 1 }}>
            
            {/* <MainPresenter ref={(ref) => { this.presenter = ref }} 
                            onResponse={this.onResponse.bind(this)}
                            navigation={this.props.navigation} /> */}
                            <HeaderBar title="TRUCKING + WAREHOUSE  CURRENT TRIP DETAILS" isBack={true} isLogout={true} navigation={navigation} />
                <View style={{ flex: 1 }}>

                    <ScrollView style={{ width: '100%' }} bounces={false}>

                        <View style={{ marginBottom: 2 }}>
                            <View style={StyleViewCurrentTrip.topCircle}>
                            </View>

                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                <TouchableOpacity style={{ marginTop: 25 }}
                                   onPress={()=>{
                                    //return ( this.setState({ invoiceModal_Visible: true }))
                                    this.state.warehouseTrucking_data.invoice_url!=""
                                    ?
                                    Platform.OS=="android" ? this.requestFilePermission(this.state.warehouseTrucking_data.invoice_url) : this.getDownloadFile(this.state.warehouseTrucking_data.invoice_url)
                                    : null
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
                                        // this.props.navigation.navigate('HelpAndSupport', { flag: false ,"service_type_id":this.service_type_id,"booking_id":this.tripDetails.Truck_warehouse_booking,"driver_id":his.tripDetails.driver_id})
                                        this.props.navigation.navigate("HelpAndSupport",{"tripHelpAndSupport":true,"service_type_id":this.service_type_id,"booking_id":this.tripDetails.Truck_warehouse_booking});
                                    }}
                                >
                                    <Image source={require('../images/support_icon.png')}
                                        style={StyleViewCurrentTrip.sideImage}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>


                                <View>
                                <Text style={StyleViewCurrentTrip.title}>{this.state.warehouseTrucking_data.pickup_location} - 
                                {this.state.warehouseTrucking_data.pickup_location==undefined?"":this.state.warehouseTrucking_data.drop_location.drop_location[0]} </Text>
                                    <View style={StyleViewCurrentTrip.bottomLine}></View>

                                    <View style={StyleViewCurrentTrip.row}>
                                        <View style={StyleViewCurrentTrip.col1}>
                                            <Text style={StyleViewCurrentTrip.col1Text}>{Constants.PartnerName}</Text>
                                        </View>
                                        <View style={StyleViewCurrentTrip.col2}>
                                            <Text style={StyleViewCurrentTrip.col2Text}>{this.state.warehouseTrucking_data.partner_name}</Text>
                                        </View>
                                    </View>

                                    <View style={StyleViewCurrentTrip.row}>
                                        <View style={StyleViewCurrentTrip.col1}>
                                            <Text style={StyleViewCurrentTrip.col1Text}>{Constants.Telephonenumber}</Text>
                                        </View>
                                        <View style={StyleViewCurrentTrip.col2}>
                                            <Text style={StyleViewCurrentTrip.col2Text}>{this.state.warehouseTrucking_data.partner_contact}</Text>
                                        </View>
                                    </View>

                                    <View style={StyleViewCurrentTrip.row}>
                                        <View style={StyleViewCurrentTrip.col1}>
                                            <Text style={StyleViewCurrentTrip.col1Text}>Estimated time to completion of trip</Text>
                                        </View>
                                        <View style={StyleViewCurrentTrip.col2}>
                                            <Text style={StyleViewCurrentTrip.col2Text}>{moment(this.state.warehouseTrucking_data.date_of_drop).format("hh:mm A")}</Text>
                                        </View>
                                    </View>

                                    <View style={StyleViewCurrentTrip.row}>
                                        <View style={StyleViewCurrentTrip.col1}>
                                            <Text style={StyleViewCurrentTrip.col1Text}>Estimated Date for completion of trip</Text>
                                        </View>
                                        <View style={StyleViewCurrentTrip.col2}>
                                            <Text style={StyleViewCurrentTrip.col2Text}>{moment(this.state.warehouseTrucking_data.date_of_drop).format("DD/MMMM/YYYY")}</Text>
                                        </View>
                                    </View>

                                    <View style={StyleViewCurrentTrip.row}>
                                        <View style={StyleViewCurrentTrip.col1}>
                                            <Text style={StyleViewCurrentTrip.col1Text}>{Constants.DriverName}</Text>
                                        </View>
                                        <View style={StyleViewCurrentTrip.col2}>
                                            <Text style={StyleViewCurrentTrip.col2Text}>{this.state.warehouseTrucking_data.driver_name}</Text>
                                        </View>
                                    </View>

                                    <View style={StyleViewCurrentTrip.row}>
                                        <View style={StyleViewCurrentTrip.col1}>
                                            <Text style={StyleViewCurrentTrip.col1Text}>{Constants.PhoneNumber}</Text>
                                        </View>
                                        <View style={StyleViewCurrentTrip.col2}>
                                            <Text style={StyleViewCurrentTrip.col2Text}>{this.state.warehouseTrucking_data.driver_contact}</Text>
                                            <TouchableOpacity style={{ right: 5, position: 'absolute', alignSelf: 'center' }}
                                            onPress={()=>{
                                                this.dialCall(this.state.warehouseTrucking_data.driver_contact);
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
                                        this.props.navigation.navigate('MapViews', { flag_marker:true,
                                            "TripDetials":this.state.warehouseTrucking_data.drop_location.drop_latlng[1]==undefined?
                                            alert("Co-ordinate Not Found")
                                            :this.state.warehouseTrucking_data.drop_location.drop_latlng[1]==""?
                                            alert("Co-ordinate Not Found")
                                            :
                                            this.state.warehouseTrucking_data.drop_location.drop_latlng[1]
                                        });


                                            }}
                                        >
                                            <Image source={require('../images/live_geo_pin.png')}
                                                style={{ width: 20, height: 20, tintColor: Constants.COLOR_GREEN, marginRight: 5, marginLeft: 3 }} />
                                            <Text style={{ color: Constants.COLOR_GREEN }}>{Constants.ViewMap}</Text>
                                        </TouchableOpacity>
                                    </View>

                                </View>
                            
                      

                        <TouchableOpacity style={{ backgroundColor: Constants.COLOR_GREEN, alignSelf: 'center', justifyContent: 'center', alignItems: 'center', width: '50%', marginVertical: 25, borderRadius: 50 }}
                            onPress={() => {
                               
                                this.props.navigation.navigate('ViewUpcomingTrip', {'booking_id':this.tripDetails.truck_booking_id,'service_type_id': this.service_type_id, flag_upcoming_Trip:"3",Flag_currentTtrip:true})
                                    // console.log("service type id==>"+this.service_type_id+"booking ID==>"+this.tripDetails.truck_booking_id);
                                
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