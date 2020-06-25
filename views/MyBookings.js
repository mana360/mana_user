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

    componentDidMount(){
        this.getCurrentBookingList()
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
                    ? this.setState({ current_booking_data : data.cml_booking_list, })
                    : this.state.resp_handler=="3"
                    ? this.setState({ past_booking_data : data.cml_booking_list, })
                    : null
                }else{
                    alert(data.message)
                }
                this.state.resp_handler=="1" ? this.getPastBookingList() : null
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
                <TouchableOpacity style={StyleMyBooking.newBookingButtonView} onPress={()=>{ this.props.navigation.navigate('Dashboard') }}>
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
                        onPress={()=>{this.props.navigation.navigate('MyBookingDetails',{'book_item':item})}}
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
                                                item.status=="order_placed"?[StyleMyBooking.bookingStatus,{color:Constants.COLOR_ORANGE}]
                                                :
                                                item.status=="driver_assigned"?[StyleMyBooking.bookingStatus,{color:Constants.COLOR_GREEN}]
                                                :
                                                item.status=="picked_up"?[StyleMyBooking.bookingStatus,{color:Constants.COLOR_ORANGE}]
                                                :
                                                item.status=="in_process"?[StyleMyBooking.bookingStatus,{color:Constants.COLOR_RED}]
                                                :
                                                null
                                            }>
                                                {
                                                    item.status=="order_placed"?"Order Placed"
                                                    :
                                                    item.status=="driver_assigned"?"Driver Assigned"
                                                    :
                                                    item.status=="picked_up"?"Picked Up"
                                                    :
                                                    item.status=="in_process"?"In Process"
                                                    :   
                                                    item.status=="delivered"?"Delivered"
                                                    :
                                                    item.status=="cancelled"?"Cancelled"
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
                                            <Text style={StyleMyBooking.valueText}>{item.expected_pickup}</Text>
                                        </View>
                                    </View>

                                    <View style={{flex:2, flexDirection:'row',  marginVertical:4}}>
                                        <View style={{flex:1}}>
                                            <Text style={StyleMyBooking.labelText}>{Constants.TOTAL_PRICE}</Text>
                                        </View>
                                        <View style={{flex:1}}>
                                            <Text style={[StyleMyBooking.valueText,{color:Constants.COLOR_GREEN, fontWeight:'bold'}]}>R {item.price}</Text>
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
                                            <Text style={StyleMyBooking.valueText}>{item.driver_number}</Text>
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
                            onPress={()=>{this.props.navigation.navigate('MyBookingDetails',{'book_item':item})}}
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
                                                    item.status=="delivered"?[StyleMyBooking.bookingStatus,{color:Constants.COLOR_GREEN}]
                                                    :
                                                    item.status=="cancelled"?[StyleMyBooking.bookingStatus,{color:Constants.COLOR_RED}]
                                                    :
                                                    null
                                                }>{item.status}</Text>
                                            </View>
                                        </View>
        
                                        <View style={{flex:2, flexDirection:'row', marginVertical:4}}>
                                            <View style={{flex:1}}>
                                                <Text style={StyleMyBooking.labelText}>{Constants.EXPECTED_PICKUP}</Text>
                                            </View>
                                            <View style={{flex:1}}>
                                                <Text style={StyleMyBooking.valueText}>{item.pickup_date} {item.pickup_time}</Text>
                                            </View>
                                        </View>
        
                                        <View style={{flex:2, flexDirection:'row',  marginVertical:4}}>
                                            <View style={{flex:1}}>
                                                <Text style={StyleMyBooking.labelText}>{Constants.TOTAL_PRICE}</Text>
                                            </View>
                                            <View style={{flex:1}}>
                                                <Text numberOfLines={1} style={[StyleMyBooking.valueText,{color:Constants.COLOR_GREEN, fontWeight:'bold'}]}>R {item.grand_total}</Text>
                                            </View>
                                        </View>
        
                                        <View style={{flex:2, flexDirection:'row',  marginVertical:4}}>
                                            <View style={{flex:1}}>
                                                <Text style={StyleMyBooking.labelText}>{Constants.DRIVER_NAME}</Text>
                                            </View>
                                            <View style={{flex:1}}>
                                                <Text style={StyleMyBooking.valueText}>{item.driver_name}</Text>
                                            </View>
                                        </View>
        
                                        <View style={{flex:2, flexDirection:'row',  marginVertical:4}}>
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