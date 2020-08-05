/*
    screen no :- MANAPPCUS0 80,82,83,84,85,86,88,89
    design by :  Udayraj
    api by    :  Udayraj
 */
import React from 'react'
import { View, Text, Image, TouchableOpacity, TouchableWithoutFeedback, ScrollView, FlatList, TextInput, PermissionsAndroid, } from 'react-native'
import Constants from '../config/Constants'
import HeaderBar from '../config/HeaderBar'
import FooterBar from '../config/FooterBar'
import { StyleMyBookingDetails } from '../config/CommonStyles'
import { Card, CardItem } from 'native-base'
import Modal from "react-native-modal";
import {MainPresenter} from '../config/MainPresenter';
import ApiConstants from '../config/ApiConstants';
import RNFetchBlob from 'rn-fetch-blob';
import moment from 'moment'

export default class MyBookingDetails extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            isInfoViewVisible1: false,
            isInfoViewVisible2: false,
            isReasonModalvisible: false,
            reasonText: "",
            reasonSubmit: false,
            truck_booking_details:[],
            load_category:"",
            other_services:[],
            
            isShareMyRideModalVisible:false,
            shareMyRideType:"",
            shareByEmail:"",
            shareByMobile:"",
            isgenerateOTPSuccessModalVisisble:false,
        }
    }

    componentDidMount(){
        let data = this.props.navigation.getParam('book_item')
        this.getTruckBookingDetails(data.booking_id, data.service_type_id)
    }

    cancelOrder() {
        this.setState({isReasonModalvisible: false})
        let param = {
            'booking_id': this.state.truck_booking_details.booking_id,
            'reason' : this.state.reasonText
        }
        this.presenter.callPostApi(ApiConstants.cancelBooking,param,true)
    }

    showReasonView() {
        return (
            <View style={StyleMyBookingDetails.reasonView}>
                
                <TouchableWithoutFeedback
                    style={{ position: 'absolute', right: 5, top: 3, }}
                    onPress={() => { this.setState({ isReasonModalvisible: false }) }}
                >
                    <Image source={require('../images/close.png')} style={StyleMyBookingDetails.reasonCloser} />
                </TouchableWithoutFeedback>
                
                <Text style={StyleMyBookingDetails.reasonTitle}>{Constants.CANCEL_REASON}</Text>
                
                <View style={StyleMyBookingDetails.reasonTextView}>
                    <TextInput
                        style={StyleMyBookingDetails.reasonText}
                        placeholder="Enter Cancel Reason"
                        placeholderTextColor="rgba(64,64,64,0.5)"
                        multiline={true}
                        value={this.state.reasonText}
                        onChangeText={(value) => { this.setState({ reasonText: value }) }}
                    />
                </View>
                
                <Text style={StyleMyBookingDetails.reasonNote}>Note: Refund will be provided as per Cancellation Policy. Please refer Cancellation policy for further detail </Text>
                
                <TouchableOpacity 
                    style={[StyleMyBookingDetails.reasonButtonView,{backgroundColor: this.state.reasonText =="" ? Constants.COLOR_GREY_LIGHT : Constants.COLOR_GREEN}]}
                    disabled={ this.state.reasonText=="" ? true : false}
                    onPress={() => { this.cancelOrder() }}
                >
                    <Text style={StyleMyBookingDetails.reasonButtonText}>{Constants.CANCEL_ORDER}</Text>
                </TouchableOpacity>
            </View>
        )
    }

    showReasonSubmitSuccess() {
        return (
            <View style={StyleMyBookingDetails.reasonView}>
                <TouchableWithoutFeedback
                    style={{ position: 'absolute', right: 5, top: 3, }}
                    onPress={() => { 
                            this.setState({ isReasonModalvisible: false, reasonSubmit: false }) 
                            this.props.navigation.goBack();
                            this.props.navigation.state.params.cancelTripCallback();
                        }
                    }
                >
                    <Image source={require('../images/close.png')} style={StyleMyBookingDetails.reasonCloser} />
                </TouchableWithoutFeedback>
                <Text style={{ marginVertical: 8, color: Constants.COLOR_GREEN_DARK, fontSize: Constants.FONT_SIZE_LARGE, textAlign: 'center' }}>
                    Your request for cancellation has{'\n'}been processed.
                </Text>
                <TouchableOpacity style={StyleMyBookingDetails.reasonButtonView}
                    onPress={() => {
                        this.setState({ isReasonModalvisible: false, reasonSubmit: false })
                        this.props.navigation.goBack();
                        this.props.navigation.state.params.cancelTripCallback();
                    }}
                >
                    <Text style={StyleMyBookingDetails.reasonButtonText}>{Constants.OK}</Text>
                </TouchableOpacity>
            </View>

        )
    }

    async getTruckBookingDetails(booking_id, service_type_id){
        let params ={
            'booking_id' :booking_id,
            'service_type_id':service_type_id,
        }
        await this.presenter.callPostApi(ApiConstants.getBookingDetails, params, true);
    }

    shareMyRide(){
        this.setState({isShareMyRideModalVisible:false,})
        let param =""
        if(this.state.shareMyRideType=="1"){
            // 1 email
            param = {
                'booking_id':this.state.truck_booking_details.booking_id,
                'share_type' : 1,
                'email_id': this.state.shareByEmail
            }
        }
        if(this.state.shareMyRideType=="2"){
            // 2 mobile
            param = {
                'booking_id':this.state.truck_booking_details.booking_id,
                'share_type' : 2,
                'mobile_no': this.state.shareByMobile
            }
        }
        this.presenter.callPostApi(ApiConstants.shareMyRide, param, true)
    }

    async generateOTP(){
        let param={
            "service_type_id":4,
            "booking_id":this.state.truck_booking_details.booking_id,
        }
        await this.presenter.callPostApi(ApiConstants.generateOTP,param,true);
    }

    onResponse(apiConstant, data) {
    
    switch (apiConstant) {

        case ApiConstants.shareMyRide:{
            this.setState({shareByEmail:"", shareByMobile:"", shareMyRideType:""})
            if(data.status){
                this.presenter.getCommonAlertBox(data.message);
            }else{
                // alert(data.message)
            this.presenter.getCommonAlertBox(data.message);

            }
            break;
        }

        case ApiConstants.cancelBooking:{
            if(data.status){
                this.setState({ isReasonModalvisible: true, reasonText: "", reasonSubmit: true })
            }else{
                // alert(data.message)
            this.presenter.getCommonAlertBox(data.message);

            }
            break;
        }
        case ApiConstants.generateOTP: {
           if(data.status){
            this.setState({isgenerateOTPSuccessModalVisisble:true});
           }else{
            //    alert(data.message)
            this.presenter.getCommonAlertBox(data.message);

           }
          break;
      }

        case ApiConstants.getBookingDetails: {
              this.setState({
                  truck_booking_details : data.cml_booking_list,
                  load_category : JSON.stringify(data.cml_booking_list[0].load_category[0].category_name),
                  other_services :data.cml_booking_list[0].other_services
                })
              this.setState({ truck_booking_details : this.state.truck_booking_details[0] })
                console.log("other =====> "+JSON.stringify(this.state.other_services))
                console.log("Date ===>"+ moment(this.state.truck_booking_details.booking_date_time).toDate().format("DD/MM/YYY hh:mm a"));
            break;
        }

        }
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
        
        let { navigation } = this.props
        return (
            <View style={{ flex: 1, }}>

                <HeaderBar isBack={true} title="my bookings" isNotification={true} navigation={navigation} />
                
                <MainPresenter ref={(ref) => { this.presenter = ref }} onResponse={this.onResponse.bind(this)} />
                
                <ScrollView bounces={false} style={{ width: '100%', paddingTop: 15, paddingBottom: 15, }}>

                    <View style={StyleMyBookingDetails.detailsRow}>
                        <View style={{ flex: 1 }}>
                            <Text style={StyleMyBookingDetails.detailsKey}>{Constants.BOOKING_ID}</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text style={StyleMyBookingDetails.detailsValue}>{this.state.truck_booking_details.booking_id}</Text>
                        </View>
                    </View>

                    <View style={ this.state.truck_booking_details.booking_date_time==undefined?{display:'none'}:StyleMyBookingDetails.detailsRow}>
                        <View style={{ flex: 1 }}>
                            <Text style={StyleMyBookingDetails.detailsKey}>{Constants.BOOKING_DATE_TIME}</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text style={StyleMyBookingDetails.detailsValue}>{this.state.truck_booking_details.booking_date_time==undefined?"":moment(this.state.truck_booking_details.booking_date_time).format("DD/MM/YYYY  hh:mm a") } </Text>
                  
                        </View>
                    </View>

                    <View style={StyleMyBookingDetails.detailsRow}>
                        <View style={{ flex: 1 }}>
                            <Text style={StyleMyBookingDetails.detailsKey}>{Constants.EXPECTED_PICKUP}</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text style={StyleMyBookingDetails.detailsValue}>{ this.state.truck_booking_details.pickup_date_time?moment(this.state.truck_booking_details.pickup_date_time).format("DD/MM/YYYY hh:mm a"):""} </Text>
                        </View>
                    </View>

                    <View style={StyleMyBookingDetails.detailsRow}>
                        <View style={{ flex: 1 }}>
                            <Text style={StyleMyBookingDetails.detailsKey}>{Constants.PICKUP_ADDRESS}</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text style={StyleMyBookingDetails.detailsValue}>{this.state.truck_booking_details.pickup_location}</Text>
                        </View>
                    </View>

                    <View style={StyleMyBookingDetails.detailsRow}>
                        <View style={{ flex: 1 }}>
                            <Text style={StyleMyBookingDetails.detailsKey}>{Constants.PICKUP_INSTRUCTIONS}</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text style={StyleMyBookingDetails.detailsValue}>{this.state.truck_booking_details.pickup_instr}</Text>
                        </View>
                    </View>

                    <View style={StyleMyBookingDetails.detailsRow}>
                        <View style={{ flex: 1 }}>
                            <Text style={StyleMyBookingDetails.detailsKey}>{Constants.DROP_OF_ADDRESS} 1</Text>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row', paddingLeft: 10 }}>
                            <Text style={
                                this.state.truck_booking_details.booking_status == "in_process"
                                    ?
                                    [StyleMyBookingDetails.detailsValue, { width: '90%', }]
                                    :
                                    this.state.truck_booking_details.booking_status == "delivered"
                                    ?
                                    [StyleMyBookingDetails.detailsValue, { width: '90%', }]
                                    :
                                    StyleMyBookingDetails.detailsValue}>{this.state.truck_booking_details.drop1_location}
                            </Text>
                            <TouchableWithoutFeedback
                                onPress={() => {
                                    this.setState({ isInfoViewVisible1: true })
                                    let timer = setInterval(() => {
                                        this.setState({ isInfoViewVisible1: false })
                                        clearInterval(timer)
                                    }, 3000)
                                }}
                                style={
                                    this.state.truck_booking_details.booking_status == "in_process"
                                        ?
                                        { display: 'flex' }
                                        :
                                        this.state.truck_booking_details.booking_status == "delivered"
                                            ?
                                            { display: 'flex' }
                                            :
                                            { display: 'none' }}
                            >
                                <Image
                                    source={require('../images/info.png')}
                                    style={
                                        this.state.truck_booking_details.booking_status == "in_process"
                                            ?
                                            { width: 22, height: 22, resizeMode: 'stretch' }
                                            :
                                            this.state.truck_booking_details.booking_status == "delivered"
                                            ?
                                            { width: 22, height: 22, resizeMode: 'stretch' }
                                            :
                                            { display: 'none' }}
                                />
                            </TouchableWithoutFeedback>
                            <View style={this.state.isInfoViewVisible1 ? StyleMyBookingDetails.infoView : { display: 'none' }}>
                                <Card style={{ borderRadius: 4, backgroundColor: Constants.COLOR_WHITE }}>
                                    <CardItem style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', borderRadius: 4, backgroundColor: Constants.COLOR_WHITE }}>
                                        <View style={StyleMyBookingDetails.infoViewShape}>
                                        </View>
                                        <Text style={StyleMyBookingDetails.infoViewTitle}>Delivered at</Text>
                                        <Text style={StyleMyBookingDetails.infoViewDesc}>{}</Text>
                                    </CardItem>
                                </Card>
                            </View>
                        </View>
                    </View>

                    <View style={StyleMyBookingDetails.detailsRow}>
                        <View style={{ flex: 1 }}>
                            <Text style={StyleMyBookingDetails.detailsKey}>{Constants.DROP_OF_ADDRESS} 2</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <View style={{ flex: 1, flexDirection: 'row', paddingLeft: 10 }}>
                                <Text style={this.state.truck_booking_details.booking_status == "delivered" ? [StyleMyBookingDetails.detailsValue, { width: '90%', }] : StyleMyBookingDetails.detailsValue}>
                                    {this.state.truck_booking_details.drop2_location}
                                </Text>
                                <TouchableWithoutFeedback
                                    onPress={() => {
                                        this.setState({ isInfoViewVisible2: true })
                                        let timer = setInterval(() => {
                                            this.setState({ isInfoViewVisible2: false })
                                            clearInterval(timer)
                                        }, 3000)
                                    }}
                                    style={this.state.truck_booking_details.booking_status == "delivered" ? { display: 'flex' } : { display: 'none' }}
                                >
                                    <Image
                                        source={require('../images/info.png')}
                                        style={this.state.truck_booking_details.booking_status == "delivered" ? { width: 22, height: 22, resizeMode: 'stretch' } : { display: 'none' }}
                                    />
                                </TouchableWithoutFeedback>
                                <View style={this.state.isInfoViewVisible2 ? StyleMyBookingDetails.infoView : { display: 'none' }}>
                                    <Card style={{ borderRadius: 4, backgroundColor: Constants.COLOR_WHITE }}>
                                        <CardItem style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', borderRadius: 4, backgroundColor: Constants.COLOR_WHITE }}>
                                            <View style={StyleMyBookingDetails.infoViewShape}>
                                            </View>
                                            <Text style={StyleMyBookingDetails.infoViewTitle}>Delivered at</Text>
                                            <Text style={StyleMyBookingDetails.infoViewDesc}>{}</Text>
                                        </CardItem>
                                    </Card>
                                </View>
                            </View>

                        </View>
                    </View>

                    <View style={StyleMyBookingDetails.detailsRow}>
                        <View style={{ flex: 1 }}>
                            <Text style={StyleMyBookingDetails.detailsKey}>{Constants.TRUCK_TYPE}</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text style={StyleMyBookingDetails.detailsValue}>{this.state.truck_booking_details.truck_type}</Text>
                        </View>
                    </View>

                    <View style={StyleMyBookingDetails.detailsRow}>
                        <View style={{ flex: 1 }}>
                            <Text style={StyleMyBookingDetails.detailsKey}>{Constants.LOAD_CATEGORY}</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                           
                                { this.state.truck_booking_details.load_category==undefined?null:
                                    this.state.truck_booking_details.load_category.map((item,index)=>{
                                        return(
                                        <Text style={StyleMyBookingDetails.detailsValue}>{index+1})   { item.category_name} </Text>
                                    )})
                                }
                           
                        </View>
                    </View>

                    <View style={StyleMyBookingDetails.detailsRow}>
                        <View style={{ flex: 1 }}>
                            <Text style={StyleMyBookingDetails.detailsKey}>{Constants.OTHER_SERVICES}</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <FlatList
                                data={this.state.other_services}
                                numColumns={1}
                                keyExtractor={index => index.toString()}
                                extraData={this.state}
                                renderItem={
                                    ({ index, item }) =>
                                        <View>
                                            <Text style={[StyleMyBookingDetails.detailsValue,{marginBottom:5}]}>
                                                {index + 1}. {item.service_name} - {item.no_of_workers}
                                            </Text>
                                        </View>
                                }
                            />
                        </View>
                    </View>
                 
                    {
                        this.state.truck_booking_details.driver_allocate
                        ?
                            <View>
                        <View style={StyleMyBookingDetails.detailsRow}>
                            <View style={{ flex: 1 }}>
                                <Text style={StyleMyBookingDetails.detailsKey}>{Constants.TruckName}</Text>
                            </View>
                            <View style={{ flex: 1 }}>
                                <Text style={StyleMyBookingDetails.detailsValue}>{ this.state.truck_booking_details.truck_name }</Text>
                            </View>
                        </View>

                        <View style={StyleMyBookingDetails.detailsRow}>
                            <View style={{ flex: 1 }}>
                                <Text style={StyleMyBookingDetails.detailsKey}>{Constants.TruckRegistrationNo}</Text>
                            </View>
                            <View style={{ flex: 1 }}>
                                <Text style={StyleMyBookingDetails.detailsValue}>{this.state.truck_booking_details.truck_registration_number}</Text>
                            </View>
                        </View>

                        <View style={StyleMyBookingDetails.detailsRow}>
                            <View style={{ flex: 1 }}>
                                <Text style={StyleMyBookingDetails.detailsKey}>{Constants.TruckInsurance}</Text>
                            </View>
                            <View style={{ flex: 1 }}>
                                <Text style={StyleMyBookingDetails.detailsValue}>{this.state.truck_booking_details.truck_insurance}</Text>
                            </View>
                        </View>

                        <View style={StyleMyBookingDetails.detailsRow}>
                            <View style={{ flex: 1 }}>
                                <Text style={StyleMyBookingDetails.detailsKey}>{Constants.TruckColor}</Text>
                            </View>
                            <View style={{ flex: 1 }}>
                                <Text style={StyleMyBookingDetails.detailsValue}>{this.state.truck_booking_details.truck_color}</Text>
                            </View>
                        </View>
                        </View>
                       :
                        null
                    }

                    <View style={StyleMyBookingDetails.detailsRow}>
                        <View style={{ flex: 1 }}>
                            <Text style={StyleMyBookingDetails.detailsKey}>{Constants.TOTAL_PRICE}</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text numberOfLines={1} style={[StyleMyBookingDetails.detailsValue, { color: Constants.COLOR_GREEN }]}>R {this.state.truck_booking_details.grand_total}</Text>
                        </View>
                    </View>

                    <View style={[StyleMyBookingDetails.detailsRow,{display:this.state.truck_booking_details['driver_allocate']?'flex':'none'}]}>
                        <View style={{ flex: 1 }}>
                            <Text style={StyleMyBookingDetails.detailsKey}>{Constants.DRIVER_NAME}</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text style={StyleMyBookingDetails.detailsValue}>{this.state.truck_booking_details.driver_name}</Text>
                        </View>
                    </View>

                    <View style={[StyleMyBookingDetails.detailsRow,{display:this.state.truck_booking_details['driver_allocate']?'flex':'none'}]}>
                        <View style={{ flex: 1 }}>
                            <Text style={StyleMyBookingDetails.detailsKey}>{Constants.DRIVER_NUMBER}</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text style={StyleMyBookingDetails.detailsValue}>{this.state.truck_booking_details.driver_contact}</Text>
                        </View>
                    </View>

                    <View style={ 
                        this.state.truck_booking_details.driver_alternative_no==""?{display:'none'}:
                        [StyleMyBookingDetails.detailsRow,{display:this.state.truck_booking_details['driver_allocate']?'flex':'none'}]}>
                        <View style={{ flex: 1 }}>
                            <Text style={StyleMyBookingDetails.detailsKey}>{Constants.DRIVER_ALTERNATE_NUMBER}</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text style={StyleMyBookingDetails.detailsValue}>{this.state.truck_booking_details.driver_alternative_no}</Text>
                        </View>
                    </View>

                    <View style={StyleMyBookingDetails.detailsRow}>
                        <View style={{ flex: 1 }}>
                            <Text style={StyleMyBookingDetails.detailsKey}>{Constants.CURRENT_STATUS}</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text style={this.state.truck_booking_details['booking_status'] == Constants.BOOKING_STATUS_CANCELLED ? [StyleMyBookingDetails.detailsValue, { color: Constants.COLOR_RED }] : [StyleMyBookingDetails.detailsValue, { color: Constants.COLOR_GREEN }]}>
                                {  
                              this.state.truck_booking_details.current_status== Constants.BOOKING_CURRENT_STATUS_PICKUP ? "Trip Started" 
                                    :
                                    this.state.truck_booking_details['booking_status'] == Constants.BOOKING_STATUS_NEW ? "New"
                                        :
                                            this.state.truck_booking_details['booking_status'] == Constants.BOOKING_STATUS_PICKED_UP ? "Driver Assigned"
                                                :
                                                    this.state.truck_booking_details['booking_status'] ==Constants.BOOKING_STATUS_DELIVERED ? "Delivered"
                                                        :
                                                        this.state.truck_booking_details['booking_status'] == Constants.BOOKING_STATUS_CANCELLED ? "Cancelled"
                                                   
                                                        : null
                                }
                            </Text>
                        </View>
                    </View>

                    {/* <View style={this.state.truck_booking_details['booking_status'] == Constants.BOOKING_STATUS_NEW ? StyleMyBookingDetails.detailsRow : { display: "none" }}>
                        <View style={{ flex: 1 }}>
                            <Text style={[StyleMyBookingDetails.detailsKey, { textTransform: 'none', }]}>{Constants.Resend_OTP}</Text>
                        </View>
                        <TouchableOpacity style={{ flex: 1 }}
                         disabled={this.state.truck_booking_details['booking_status'] == Constants.BOOKING_STATUS_NEW?true:false}
                            onPress={()=>{
                                console.log("Booking status"+this.state.truck_booking_details.booking_status);
                                this.generateOTP();
                            }}
                        >
                            <Text style={
                                this.state.truck_booking_details.booking_status==1?
                                [StyleMyBookingDetails.detailsValue, { color: Constants.COLOR_GREEN, textDecorationLine: 'underline' }]
                                :
                                [StyleMyBookingDetails.detailsValue, { color: Constants.COLOR_GREY_DARK, textDecorationLine: 'underline' }]

                            } >Generate OTP</Text>
                        </TouchableOpacity>
                    </View> */}



                     <View style={   this.state.truck_booking_details.current_status==Constants.BOOKING_CURRENT_STATUS_UPCOMING?
                                {display:'none'}
                                :
                           this.state.truck_booking_details.booking_status== Constants.BOOKING_STATUS_PICKED_UP?StyleMyBookingDetails.detailsRow:{display:'none'} }>
                        <View style={{ flex: 1 }}>
                            <Text style={[StyleMyBookingDetails.detailsKey, { textTransform: 'none', }]}>{Constants.Resend_OTP}</Text>
                        </View>
                        <TouchableOpacity style={{ flex: 1 }}
                        //  disabled={this.state.truck_booking_details['booking_status'] == Constants.BOOKING_STATUS_NEW?true:false}
                            onPress={()=>{
                                console.log("Booking status"+this.state.truck_booking_details.booking_status);
                                this.generateOTP();
                            }}
                        >
                            <Text style={ [StyleMyBookingDetails.detailsValue, { color: Constants.COLOR_GREEN, textDecorationLine: 'underline' }]

                            } >Generate OTP</Text>
                        </TouchableOpacity>
                    </View> 

                    <View style={this.state.truck_booking_details['booking_status'] == Constants.BOOKING_STATUS_NEW ? StyleMyBookingDetails.detailsRow : { display: "none" }}>
                        <View style={{ flex: 1 }}>
                            <TouchableOpacity style={{width:120, justifyContent:'center', alignItems:'center', backgroundColor:Constants.COLOR_GREEN, padding:10}}
                                onPress={()=>{ this.setState({isShareMyRideModalVisible:true}) }}>
                                <Text style={{color:Constants.COLOR_WHITE, textAlign:'center'}}>Share my Ride</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 1,}}>
                            <TouchableOpacity style={{width:120, justifyContent:'center', alignItems:'center', backgroundColor:Constants.COLOR_RED, padding:10}}
                                onPress={()=>{ this.setState({isReasonModalvisible:true}) }}>
                                <Text style={{color:Constants.COLOR_WHITE, textAlign:'center'}}>Cancel Order</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={StyleMyBookingDetails.detailsRow}>
                        <View style={{ flex: 1 }}>
                            <Text style={[StyleMyBookingDetails.detailsKey, { textTransform: 'none', }]}>Invoice</Text>
                        </View>
                        <View style={{ flex: 1,}}>
                            <TouchableOpacity style={{justifyContent:'center', alignItems:'center',}}
                                onPress={()=>{            
                                    this.state.truck_booking_details.invoice_url!=""
                                    ?
                                        Platform.OS=="android" ? this.requestFilePermission(this.state.truck_booking_details.invoice_url) : this.getDownloadFile(this.state.truck_booking_details.invoice_url)
                                    : null
                                    }}
                            >
                                <Image source={require('../images/Download_file.png')}
                                    style={{width:30, height:30, resizeMode:'stretch'}} />
                            </TouchableOpacity>
                        </View>
                    </View>

{/*
                    <View style={book_item['status'] == "cancelled" ? [StyleMyBookingDetails.detailsRow, { marginBottom: 25 }] : { display: 'none' }}>
                        <View style={{ flex: 1 }}>
                            <Text style={StyleMyBookingDetails.detailsKey}>{Constants.REASON}</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text style={StyleMyBookingDetails.detailsValue}>{book_item['reason']}</Text>
                        </View>
                    </View>


                    <View style={book_item['status'] == "cancelled"
                        ? { display: 'none' }
                        : book_item['status'] == "delivered"
                            ? { display: 'none' }
                            : { flexDirection: 'row', marginVertical: 20, justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity style={book_item['status'] == "order_placed"
                            ? [StyleMyBookingDetails.buttionView, { marginRight: 15 }] : [StyleMyBookingDetails.buttionView, { marginRight: 15, width: '90%' }]}>
                            <Text style={StyleMyBookingDetails.buttonText}>{Constants.SHARE_MY_RIDE}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={book_item['status'] == "order_placed" ? StyleMyBookingDetails.buttionView : { display: 'none' }}
                            onPress={() => { this.setState({ isReasonModalvisible: true }) }}
                        >
                            <Text style={StyleMyBookingDetails.buttonText}>{Constants.CANCEL_ORDER}</Text>
                        </TouchableOpacity>
                    </View> */}

                </ScrollView>

                <FooterBar navigation={navigation} />

                <Modal
                    isVisible={this.state.isReasonModalvisible}
                    animationIn={"fadeIn"}
                    animationOut={"fadeOut"}
                    transparent={true}
                >
                    {
                        this.state.reasonSubmit
                            ?
                            this.showReasonSubmitSuccess()
                            :
                            this.showReasonView()
                    }
                </Modal>

                <Modal
                    isVisible={this.state.isShareMyRideModalVisible}
                    animationIn={"fadeIn"}
                    animationOut={"fadeOut"}
                    transparent={true}
                >
                <View style={{justifyContent:'center', alignItems:'center', backgroundColor:'rgba(0,0,0,0.2)'}}>
                    <View style={{width:'100%', backgroundColor:Constants.COLOR_WHITE, paddingVertical:20}}>
                        
                        <TouchableOpacity style={{justifyContent:'flex-end', alignItems:'flex-end', marginRight:15}}
                            onPress={()=>{
                                this.setState({isShareMyRideModalVisible:false})
                            }}
                        >
                            <Image
                                source={require('../images/close.png')}
                                style={{width:15, height:15, resizeMode:'stretch'}}
                            />
                        </TouchableOpacity>
                        
                        <Text style={{color:Constants.COLOR_GREY_DARK, fontSize:16, textAlign:'center',}}> Share My Ride </Text>

                        <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center', marginTop:10}}>
                            
                            <TouchableOpacity style={{marginRight:40}}
                                onPress={()=>{ this.setState({ shareMyRideType:"1", }) }}
                            >
                                <Image
                                    source={require('../images/email_id.png')}
                                    style={{width:40, height:40, resizeMode:'stretch'}}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={()=>{ this.setState({ shareMyRideType:"2", }) }}
                            >
                                <Image
                                    source={require('../images/chat-icon.png')}
                                    style={{width:40, height:40, resizeMode:'stretch', marginTop:3}}
                                />
                            </TouchableOpacity>
                        </View>

                        <View style={{ display: this.state.shareMyRideType=="1"? 'flex' : 'none', flexDirection:'row', justifyContent:'center', alignItems:'center', marginTop:10}}>
                            <TextInput
                                value={this.state.shareByEmail}
                                onChangeText={(value)=>{ this.setState({shareByEmail:value}) }}
                                keyboardType="email-address"
                                autoCapitalize="none"
                                placeholder="Enter email id"
                                style={{width:'60%', borderBottomWidth:0.5, borderBottomColor:Constants.COLOR_GREY_DARK}}
                            />
                            <TouchableOpacity
                                onPress={()=>{ this.shareMyRide() }}
                            >
                                <Image
                                    source={require('../images/send.png')}
                                    style={{width:40, height:40, resizeMode:'stretch', marginTop:10}}
                                />
                            </TouchableOpacity>
                        </View>

                        <View style={{ display: this.state.shareMyRideType=="2"? 'flex' : 'none', flexDirection:'row', justifyContent:'center', alignItems:'center', marginTop:10}}>
                            <TextInput
                                value={this.state.shareByMobile}
                                onChangeText={(value)=>{ this.setState({shareByMobile:value}) }}
                                keyboardType="number-pad"
                                autoCapitalize="none"
                                placeholder="Enter mobile number"
                                style={{width:'60%', borderBottomWidth:0.5, borderBottomColor:Constants.COLOR_GREY_DARK}}
                            />
                            <TouchableOpacity
                                onPress={()=>{ this.shareMyRide() }}
                            >
                                <Image
                                    source={require('../images/send.png')}
                                    style={{width:40, height:40, resizeMode:'stretch', marginTop:10}}
                                />
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>
                </Modal>

                <Modal
                    isVisible={this.state.isgenerateOTPSuccessModalVisisble}
                    // isVisible={true}

                    animationIn={"fadeIn"}
                    animationOut={"fadeOut"}
                    transparent={true}
                >
                <View style={{justifyContent:'center', alignItems:'center', backgroundColor:'rgba(0,0,0,0.2)'}}>
                    <View style={{width:'90%', height:150,borderRadius:10,justifyContent:'center',backgroundColor:Constants.COLOR_WHITE, paddingVertical:20}}>
                    <TouchableOpacity style={{ alignSelf:'flex-end',top:15,position: "absolute",right:15}}
                            onPress={()=>{
                                this.setState({isgenerateOTPSuccessModalVisisble:false})
                            }}
                        >
                            <Image
                                source={require('../images/close.png')}
                                style={{width:15, height:15, resizeMode:'stretch'}}
                            />
                        </TouchableOpacity>   
                        <Text style={{alignSelf:'center',fontSize:22}}>{Constants.OTPSentSuccessfully}</Text>
                    </View>
                </View>
                </Modal>

            </View>
        )
    }
}