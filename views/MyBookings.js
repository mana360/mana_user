/*
    screen no :- MANAPPCUS080,80-1
    design by :  Udayraj
    dev + api :  Udayraj
 */
import React,{Component} from 'react'
import {View,Text,Image,TouchableOpacity,FlatList} from 'react-native'
import Constants from '../config/Constants'
import HeaderBar from '../config/HeaderBar'
import FooterBar from '../config/FooterBar'
import {StyleMyBooking} from '../config/CommonStyles'
import {Tab, Tabs, Card, CardItem,} from 'native-base'
import { MainPresenter } from '../config/MainPresenter'
import ApiConstants from '../config/ApiConstants';
import moment from 'moment'

export default class MyBookings extends React.Component{

    constructor(props){
        super(props)
        this.state={
            current_booking_data:[],
            upcoming_booking_data:[],
            past_booking_data:[],
            resp_handler:"1",           // 1 ongoing    2 upcoming      3 past
        }
    }

   async componentDidMount(){

            this.getCurrentBookingList()

        
    }
    async _isNetworkAvailable() {
        let returnValue = false
        await NetInfo.fetch().then(isConnected => {
            if (isConnected) {
                console.log("NetWork available")
                returnValue = true
            } else {
                console.log("NetWork Not Available")
                returnValue = false
            }
        }).catch(e => console.log(e))

        return returnValue

    }

    getCurrentBookingList(){
        this.setState({resp_handler:"1"})
        let param = {
            'service_type_id':4,
            'flag':1,   // ongoing
            'start_index':0,
            'total_count':10
        }
        this.presenter.callPostApi(ApiConstants.getMyBookings, param, true)
    }

    getOngoingBookingList(){
        this.setState({resp_handler:"2"})
        let param = {
            'service_type_id':4,
            'flag':2,   // ongoing
            'start_index':0,
            'total_count':10
        }
        this.presenter.callPostApi(ApiConstants.getMyBookings, param, true)
    }

    getPastBookingList(){
        this.setState({resp_handler:"3"})
        let param = {
            'service_type_id':4,
            'flag':3,   // past
            'start_index':0,
            'total_count':10
        }
        this.presenter.callPostApi(ApiConstants.getMyBookings, param, true)
    }

    async onResponse(apiConstant, data) {
        switch (apiConstant) {

            case ApiConstants.getMyBookings: {
                if(data.status){
                    this.state.resp_handler=="1"
                    ? 
                    this.setState({ current_booking_data : data.cml_booking_list, })
                    : 
                    this.state.resp_handler=="3"
                    ? 
                    this.setState({ past_booking_data : data.cml_booking_list, })
                    :
                     this.state.resp_handler=="2"
                    ?
                    data.cml_booking_list==""
                    ?
                    null
                    :
                     this.setState({ current_booking_data : data.cml_booking_list, })
                    :
                    null
                    console.log("past ale ikde==>"+JSON.stringify(this.state.past_booking_data))
                }else{
                    // alert(data.message)
            this.presenter.getCommonAlertBox(data.message);

                }
                this.state.resp_handler=="1"
                ? this.getOngoingBookingList()
                : this.state.resp_handler=="2"
                ? this.getPastBookingList()
                :null
                break;
            }
        }
    }

    getNewBookingView(){
        return(
            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                <Image
                    source={require('../images/NewBooking.jpg')}
                    style={StyleMyBooking.newBookingIcom}
                />
                <Text style={StyleMyBooking.newBookingInstructionText}>
                    You can place new order{'\n'}by clicking on "New Booking" below
                </Text>
                <TouchableOpacity style={StyleMyBooking.newBookingButtonView} onPress={()=>{ 
                
                this.props.navigation.state.params.callback(true);
                    this.props.navigation.navigate('Dashboard',);
                    }}>
                    <Text style={StyleMyBooking.newBookingButtonText}>{Constants.NewBooking}</Text>
                </TouchableOpacity>
            </View>
        )
    }

    getCurrentBookingView(){
    return(
        <View style={{margin:15,}}>
            <FlatList
                data={this.state.current_booking_data}
                extraData={this.state}
                keyExtractor={(index)=>index.toString()}
                bounces={false}
                numColumns={1}
                renderItem={
                    ({item})=>
                    <TouchableOpacity style={StyleMyBooking.bookingRow}
                        onPress={()=>{this.props.navigation.navigate('MyBookingDetails',{'book_item':item, cancelTripCallback: ()=>{
                            console.log("callback for cancell trip")
                            this.getCurrentBookingList();
                            this.getPastBookingList();
                        }
                        })}}
                    >
                        <Card>
                            <CardItem>
                                <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>

                                    <View style={{flex:2, flexDirection:'row', paddingBottom:10, marginBottom:7, borderBottomWidth:0.5, borderBottomColor:"rgba(64,64,64,0.5)"}}>
                                        <View style={{flex:1}}>
                                            <Text style={StyleMyBooking.bookingId}>Booking id #{item.booking_id}</Text>
                                        </View>
                                        <View style={{flex:1}}>
                                            <Text style={
                                                item.booking_status== Constants.BOOKING_STATUS_NEW ?[StyleMyBooking.bookingStatus,{color:Constants.COLOR_ORANGE}]
                                                :
                                                item.booking_status==Constants.BOOKING_STATUS_PICKED_UP?[StyleMyBooking.bookingStatus,{color:Constants.COLOR_ORANGE}]
                                                :
                                                item.booking_status==Constants.BOOKING_STATUS_DELIVERED?[StyleMyBooking.bookingStatus,{color:Constants.COLOR_GREEN}]
                                                :
                                                item.booking_status==Constants.BOOKING_STATUS_CANCELLED?[StyleMyBooking.bookingStatus,{color:Constants.COLOR_RED}]
                                                :
                                                null
                                            }>
                                                {
                                                    item.booking_status==Constants.BOOKING_STATUS_NEW?"New"
                                                    :
                                                    item.booking_status==Constants.BOOKING_STATUS_PICKED_UP?"Driver Assigned"
                                                    :   
                                                    item.booking_status==Constants.BOOKING_STATUS_DELIVERED?"Delivered"
                                                    :
                                                    item.booking_status==Constants.BOOKING_STATUS_CANCELLED?"Cancelled"
                                                    :null
                                                }
                                                </Text>
                                        </View>
                                    </View>

                                    <View style={{flex:2, flexDirection:'row', marginVertical:4}}>
                                        <View style={{flex:1}}>
                                            <Text style={StyleMyBooking.labelText}>{item.status=='order_placed'?Constants.EXPECTED_PICKUP:Constants.PICKUP_DATE_TIME}</Text>
                                        </View>
                                        <View style={{flex:1}}>
                                            <Text style={StyleMyBooking.valueText}>
                                                { moment(item.pickup_date,"YYYY-MM-DD").format("DD MMM. YYYY")} { moment(item.pickup_time,"h:m:s").format("h:m A")}
                                            </Text>
                                        </View>
                                    </View>

                                    <View style={{flex:2, flexDirection:'row',  marginVertical:4}}>
                                        <View style={{flex:1}}>
                                            <Text style={StyleMyBooking.labelText}>{Constants.TOTAL_PRICE}</Text>
                                        </View>
                                        <View style={{flex:1}}>
                                            <Text style={[StyleMyBooking.valueText,{color:Constants.COLOR_GREEN, fontWeight:'bold'}]}>R {item.grand_total}</Text>
                                        </View>
                                    </View>

                                    <View style={item.status=="order_placed"?{display:'none'}:{flex:2, flexDirection:'row',  marginVertical:4}}>
                                        <View style={{flex:1}}>
                                            <Text style={StyleMyBooking.labelText}>{Constants.DRIVER_NAME}</Text>
                                        </View>
                                        <View style={{flex:1}}>
                                            <Text style={StyleMyBooking.valueText}>{item.driver_name}</Text>
                                        </View>
                                    </View>

                                    <View style={item.status=="order_placed"?{display:'none'}:{flex:2, flexDirection:'row',  marginVertical:4}}>
                                        <View style={{flex:1}}>
                                            <Text style={StyleMyBooking.labelText}>{Constants.DRIVER_NUMBER}</Text>
                                        </View>
                                        <View style={{flex:1}}>
                                            <Text style={StyleMyBooking.valueText}>{item.driver_contact}</Text>
                                        </View>
                                    </View>

                                </View>
                            </CardItem>
                        </Card>
                    </TouchableOpacity>
                }
            />
        </View>
    )    
    }

    getPastBookingView(){
        return(
            <View style={{margin:15,}}>
                <FlatList
                    data={this.state.past_booking_data}
                    extraData={this.state}
                    keyExtractor={(index)=>index.toString()}
                    bounces={false}
                    numColumns={1}
                    renderItem={
                        ({item})=>
                        <TouchableOpacity style={StyleMyBooking.bookingRow}
                            onPress={()=>{this.props.navigation.navigate('MyBookingDetails',{'book_item':item,cancelTripCallback: ()=>{
                                console.log("callback for cancell trip");
                                this.getPastBookingList();
                            }
                        })}}
                        >
                            <Card>
                                <CardItem>
                                    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
    
                                        <View style={{flex:2, flexDirection:'row', paddingBottom:10, marginBottom:7, borderBottomWidth:0.5, borderBottomColor:"rgba(64,64,64,0.5)"}}>
                                            <View style={{flex:1}}>
                                                <Text style={StyleMyBooking.bookingId}>Booking id #{item.booking_id}</Text>
                                            </View>
                                            <View style={{flex:1}}>
                                                <Text style={
                                                    item.booking_status== Constants.BOOKING_STATUS_NEW ?[StyleMyBooking.bookingStatus,{color:Constants.COLOR_ORANGE}]
                                                    :
                                                    item.booking_status==Constants.BOOKING_STATUS_PICKED_UP?[StyleMyBooking.bookingStatus,{color:Constants.COLOR_ORANGE}]
                                                    :
                                                    item.booking_status==Constants.BOOKING_STATUS_DELIVERED?[StyleMyBooking.bookingStatus,{color:Constants.COLOR_GREEN}]
                                                    :
                                                    item.booking_status==Constants.BOOKING_STATUS_CANCELLED?[StyleMyBooking.bookingStatus,{color:Constants.COLOR_RED}]
                                                    :
                                                    null
                                                }>
                                                    {
                                                        item.booking_status==Constants.BOOKING_STATUS_NEW?"Order Placed"
                                                        :
                                                        item.booking_status==Constants.BOOKING_STATUS_PICKED_UP?"Driver Assigned"
                                                        :   
                                                        item.booking_status==Constants.BOOKING_STATUS_DELIVERED?"Delivered"
                                                        :
                                                        item.booking_status==Constants.BOOKING_STATUS_CANCELLED?"Cancelled"
                                                        :null
                                                    }
                                                    </Text>
                                            </View>
                                        </View>
    
                                        <View style={{flex:2, flexDirection:'row', marginVertical:4}}>
                                            <View style={{flex:1}}>
                                                <Text style={StyleMyBooking.labelText}>{item.status=='order_placed'?Constants.EXPECTED_PICKUP:Constants.PICKUP_DATE_TIME}</Text>
                                            </View>
                                            <View style={{flex:1}}>
                                                <Text style={StyleMyBooking.valueText}>
                                                    { moment(item.pickup_date,"YYYY-MM-DD").format("DD MMM. YYYY")} { moment(item.pickup_time,"h:m:s").format("h:m A")}
                                                </Text>
                                            </View>
                                        </View>
    
                                        <View style={{flex:2, flexDirection:'row',  marginVertical:4}}>
                                            <View style={{flex:1}}>
                                                <Text style={StyleMyBooking.labelText}>{Constants.TOTAL_PRICE}</Text>
                                            </View>
                                            <View style={{flex:1}}>
                                                <Text style={[StyleMyBooking.valueText,{color:Constants.COLOR_GREEN, fontWeight:'bold'}]}>R {item.grand_total}</Text>
                                            </View>
                                        </View>
    
                                        <View style={item.status=="order_placed"?{display:'none'}:{flex:2, flexDirection:'row',  marginVertical:4}}>
                                            <View style={{flex:1}}>
                                                <Text style={StyleMyBooking.labelText}>{Constants.DRIVER_NAME}</Text>
                                            </View>
                                            <View style={{flex:1}}>
                                                <Text style={StyleMyBooking.valueText}>{item.driver_name}</Text>
                                            </View>
                                        </View>
    
                                        <View style={item.status=="order_placed"?{display:'none'}:{flex:2, flexDirection:'row',  marginVertical:4}}>
                                            <View style={{flex:1}}>
                                                <Text style={StyleMyBooking.labelText}>{Constants.DRIVER_NUMBER}</Text>
                                            </View>
                                            <View style={{flex:1}}>
                                                <Text style={StyleMyBooking.valueText}>{item.driver_contact}</Text>
                                            </View>
                                        </View>
    
                                    </View>
                                </CardItem>
                            </Card>
                        </TouchableOpacity>
                    }
                />
            </View>
        )    
    }

    render(){
        let {navigation} = this.props
        return(
            <View style={{flex:1,}}>
                
                <MainPresenter ref={(ref) => { this.presenter = ref }} onResponse={this.onResponse.bind(this)} navigation={this.props.navigation} />
                
                <HeaderBar title="my bookings" isBack={true} isNotification={true} navigation={navigation}/>
                    
                <View style={{flex:1, justifyContent:'center', alignContent:'center'}}>

                        <Tabs tabBarUnderlineStyle={{backgroundColor:Constants.COLOR_GREEN,}}>
                            
                            <Tab
                                heading="Current"
                                tabStyle={StyleMyBooking.tab}
                                activeTabStyle={StyleMyBooking.tab_active}
                                textStyle={StyleMyBooking.tab_text}
                                activeTextStyle={StyleMyBooking.tab_active_text}    
                            >
                                {
                                    this.state.current_booking_data=="" ? this.getNewBookingView() : this.getCurrentBookingView()
                                }
                            </Tab>
                            
                            <Tab
                                heading="Past"
                                tabStyle={StyleMyBooking.tab}
                                activeTabStyle={StyleMyBooking.tab_active}
                                textStyle={StyleMyBooking.tab_text}
                                activeTextStyle={StyleMyBooking.tab_active_text}    
                            >
                                {
                                    this.state.past_booking_data=="" ? this.getNewBookingView() : this.getPastBookingView()
                                }

                            </Tab>
                        
                        </Tabs>
                    
                    </View>
                
                <FooterBar navigation={navigation}/>

            </View>
        )
    }
}