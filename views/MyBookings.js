/*
    screen no :- MANAPPCUS080,80-1
    design by :  Udayraj
 */
import React,{Component} from 'react'
import {View,Text,Image,TouchableOpacity,FlatList} from 'react-native'
import Constants from '../config/Constants'
import HeaderBar from '../config/HeaderBar'
import FooterBar from '../config/FooterBar'
import {StyleMyBooking} from '../config/CommonStyles'
import {Tab, Tabs, Card, CardItem,} from 'native-base'

export default class MyBookings extends React.Component{
    
constructor(props){
    super(props)
    this.state={
        current_booking_data:[
            {booking_id:"1002", status:"order_placed",    price:445, driver_name:"Greg Thomson", driver_number:275747332129, vehicle_reg_numbere:"CAF-567-AS", truck_type:"1.5 Ton", booking_date_time:"20th Aug, 2019 112:30 PM", other_services:[{service_name:"Extra helper to pick up load", qnt:1},{service_name:"Number of floors", qnt:3}], reason:"", expected_pickup:"Sep. 15, 2019 11:30AM",  payment_type:"cash",     customer_name:"Luis Greg",   customer_number:"+27248451009", pickup_address:"Lorem ipsum dolor sit amet, consectetur", drop_address_1:"Lorem ipsum dolor sit amet, consectetur", drop_address_2:"Lorem ipsum dolor sit amet, consectetur", picked_up_instructions:"Lorem ipsum dolor sit amet, consectetur", load_category:"Consumables, Household",},
            {booking_id:"4527", status:"driver_assigned", price:374, driver_name:"Greg Thomson", driver_number:275747332129, vehicle_reg_numbere:"CAF-567-AS", truck_type:"1.5 Ton", booking_date_time:"20th Aug, 2019 112:30 PM", other_services:[{service_name:"Extra helper to pick up load", qnt:1},{service_name:"Number of floors", qnt:3}], reason:"Lorem ipsum is the reason.", expected_pickup:"Sep. 20, 2019 05:15AM", payment_type:"online",       customer_name:"Greg Thomas", customer_number:"+27248451001", pickup_address:"Lorem ipsum dolor sit amet, consectetur", drop_address_1:"Lorem ipsum dolor sit amet, consectetur", drop_address_2:"Lorem ipsum dolor sit amet, consectetur", picked_up_instructions:"Lorem ipsum dolor sit amet, consectetur", load_category:"Consumables"},
            {booking_id:"4512", status:"picked_up",       price:825, driver_name:"Greg Thomson", driver_number:275747332129, vehicle_reg_numbere:"CAF-567-AS", truck_type:"1.5 Ton", booking_date_time:"20th Aug, 2019 112:30 PM", other_services:[{service_name:"Extra helper to pick up load", qnt:1},{service_name:"Number of floors", qnt:3}], reason:"", expected_pickup:"Sep. 29, 2019 05:15AM", payment_type:"online",   customer_name:"Greg Thomas", customer_number:"+27754721980", pickup_address:"Lorem ipsum dolor sit amet, consectetur", drop_address_1:"Lorem ipsum dolor sit amet, consectetur", drop_address_2:"Lorem ipsum dolor sit amet, consectetur", picked_up_instructions:"Lorem ipsum dolor sit amet, consectetur", load_category:"Consumables",},
            {booking_id:"4125", status:"in_process",      price:930, driver_name:"Greg Thomson", driver_number:275747332129, vehicle_reg_numbere:"CAF-567-AS", truck_type:"1.5 Ton", booking_date_time:"20th Aug, 2019 112:30 PM", other_services:[{service_name:"Extra helper to pick up load", qnt:1},{service_name:"Number of floors", qnt:3}], reason:"", expected_pickup:"Sep. 19, 2019 06:00PM", payment_type:"cash",     customer_name:"Christpher",  customer_number:"+27248451007", pickup_address:"Lorem ipsum dolor sit amet, consectetur", drop_address_1:"Lorem ipsum dolor sit amet, consectetur", drop_address_2:"Lorem ipsum dolor sit amet, consectetur", picked_up_instructions:"Lorem ipsum dolor sit amet, consectetur", load_category:"Consumables",},
        ],
        past_booking_data:[
            {booking_id:"1002", status:"delivered",    price:445, driver_name:"Greg Thomson", driver_number:275747332129, vehicle_reg_numbere:"CAF-567-AS", truck_type:"1.5 Ton", booking_date_time:"20th Aug, 2019 112:30 PM", other_services:[{service_name:"Extra helper to pick up load", qnt:1},{service_name:"Number of floors", qnt:3}], reason:"", expected_pickup:"Sep. 15, 2019 11:30AM",  payment_type:"cash",     customer_name:"Luis Greg",   customer_number:"+27248451009", pickup_address:"Lorem ipsum dolor sit amet, consectetur", drop_address_1:"Lorem ipsum dolor sit amet, consectetur", drop_address_2:"Lorem ipsum dolor sit amet, consectetur", picked_up_instructions:"Lorem ipsum dolor sit amet, consectetur", load_category:"Consumables, Household",},
            {booking_id:"4527", status:"cancelled", price:374, driver_name:"Greg Thomson", driver_number:275747332129, vehicle_reg_numbere:"CAF-567-AS", truck_type:"1.5 Ton", booking_date_time:"20th Aug, 2019 112:30 PM", other_services:[{service_name:"Extra helper to pick up load", qnt:1},{service_name:"Number of floors", qnt:3}], reason:"Lorem ipsum is the reason.", expected_pickup:"Sep. 20, 2019 05:15AM", payment_type:"online",       customer_name:"Greg Thomas", customer_number:"+27248451001", pickup_address:"Lorem ipsum dolor sit amet, consectetur", drop_address_1:"Lorem ipsum dolor sit amet, consectetur", drop_address_2:"Lorem ipsum dolor sit amet, consectetur", picked_up_instructions:"Lorem ipsum dolor sit amet, consectetur", load_category:"Consumables"},
            {booking_id:"4512", status:"delivered",       price:825, driver_name:"Greg Thomson", driver_number:275747332129, vehicle_reg_numbere:"CAF-567-AS", truck_type:"1.5 Ton", booking_date_time:"20th Aug, 2019 112:30 PM", other_services:[{service_name:"Extra helper to pick up load", qnt:1},{service_name:"Number of floors", qnt:3}], reason:"", expected_pickup:"Sep. 29, 2019 05:15AM", payment_type:"online",   customer_name:"Greg Thomas", customer_number:"+27754721980", pickup_address:"Lorem ipsum dolor sit amet, consectetur", drop_address_1:"Lorem ipsum dolor sit amet, consectetur", drop_address_2:"Lorem ipsum dolor sit amet, consectetur", picked_up_instructions:"Lorem ipsum dolor sit amet, consectetur", load_category:"Consumables",},
            {booking_id:"4125", status:"cancelled",      price:930, driver_name:"Greg Thomson", driver_number:275747332129, vehicle_reg_numbere:"CAF-567-AS", truck_type:"1.5 Ton", booking_date_time:"20th Aug, 2019 112:30 PM", other_services:[{service_name:"Extra helper to pick up load", qnt:1},{service_name:"Number of floors", qnt:3}], reason:"", expected_pickup:"Sep. 19, 2019 06:00PM", payment_type:"cash",     customer_name:"Christpher",  customer_number:"+27248451007", pickup_address:"Lorem ipsum dolor sit amet, consectetur", drop_address_1:"Lorem ipsum dolor sit amet, consectetur", drop_address_2:"Lorem ipsum dolor sit amet, consectetur", picked_up_instructions:"Lorem ipsum dolor sit amet, consectetur", load_category:"Consumables",},
        ],        
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
            <TouchableOpacity style={StyleMyBooking.newBookingButtonView}>
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
                                        <Text style={StyleMyBooking.labelText}>{Constants.EXPECTED_PICKUP}</Text>
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
                        onPress={()=>{}}
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

render(){
    let {navigation} = this.props
    return(
        <View style={{flex:1,}}>
            <HeaderBar isMenu={true} title="my bookings" isNotification={true} navigation={navigation}/>
            {
                this.state.current_booking_data.length==0
                ?
                    this.getNewBookingView()
                :
                <View style={{flex:1, justifyContent:'center', alignContent:'center'}}>
                    <Tabs tabBarUnderlineStyle={{backgroundColor:Constants.COLOR_GREEN,}}>
                        <Tab
                            heading="Current"
                            tabStyle={StyleMyBooking.tab}
                            activeTabStyle={StyleMyBooking.tab_active}
                            textStyle={StyleMyBooking.tab_text}
                            activeTextStyle={StyleMyBooking.tab_active_text}    
                        >
                            {this.getCurrentBookingView()}
                        </Tab>
                        <Tab
                            heading="Past"
                            tabStyle={StyleMyBooking.tab}
                            activeTabStyle={StyleMyBooking.tab_active}
                            textStyle={StyleMyBooking.tab_text}
                            activeTextStyle={StyleMyBooking.tab_active_text}    
                        >
                            {this.getPastBookingView()}
                        </Tab>
                    </Tabs>
                </View>
            }
            <FooterBar navigation={navigation}/>
        </View>
    )
}
}