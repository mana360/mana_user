/*
    screen no :- MANAPPCUS080, 82,83,84,85,86
    design by :  Udayraj
 */
import React,{Component} from 'react'
import {View,Text,Image,TouchableOpacity,ScrollView,FlatList} from 'react-native'
import Constants from '../config/Constants'
import HeaderBar from '../config/HeaderBar'
import FooterBar from '../config/FooterBar'
import {StyleMyBookingDetails} from '../config/CommonStyles'

export default class MyBookingDetails extends React.Component{
    render(){
        let {navigation} = this.props
        let book_item = this.props.navigation.getParam('book_item')
        console.log("RESP  ==> "+JSON.stringify(this.props.navigation.getParam('book_item')))
        return(
            <View style={{flex:1,}}>
                
                <HeaderBar isBack={true} title="my bookings" isNotification={true} navigation={navigation}/>

                <ScrollView bounces={false} style={{width:'100%', paddingTop:15, paddingBottom:15,}}>
                    
                    <View style={StyleMyBookingDetails.detailsRow}>
                        <View style={{flex:1}}>
                            <Text style={StyleMyBookingDetails.detailsKey}>{Constants.BOOKING_ID}</Text>
                        </View>
                        <View style={{flex:1}}>
                            <Text style={StyleMyBookingDetails.detailsValue}>{book_item['booking_id']}</Text>
                        </View>
                    </View>

                    <View style={StyleMyBookingDetails.detailsRow}>
                        <View style={{flex:1}}>
                            <Text style={StyleMyBookingDetails.detailsKey}>{Constants.BOOKING_DATE_TIME}</Text>
                        </View>
                        <View style={{flex:1}}>
                            <Text style={StyleMyBookingDetails.detailsValue}>{book_item['booking_date_time']}</Text>
                        </View>
                    </View>

                    <View style={StyleMyBookingDetails.detailsRow}>
                        <View style={{flex:1}}>
                            <Text style={StyleMyBookingDetails.detailsKey}>{Constants.EXPECTED_PICKUP}</Text>
                        </View>
                        <View style={{flex:1}}>
                            <Text style={StyleMyBookingDetails.detailsValue}>{book_item['expected_pickup']}</Text>
                        </View>
                    </View>

                    <View style={StyleMyBookingDetails.detailsRow}>
                        <View style={{flex:1}}>
                            <Text style={StyleMyBookingDetails.detailsKey}>{Constants.PICKUP_ADDRESS}</Text>
                        </View>
                        <View style={{flex:1}}>
                            <Text style={StyleMyBookingDetails.detailsValue}>{book_item['pickup_address']}</Text>
                        </View>
                    </View>

                    <View style={StyleMyBookingDetails.detailsRow}>
                        <View style={{flex:1}}>
                            <Text style={StyleMyBookingDetails.detailsKey}>{Constants.PICKUP_INSTRUCTIONS}</Text>
                        </View>
                        <View style={{flex:1}}>
                            <Text style={StyleMyBookingDetails.detailsValue}>{book_item['picked_up_instructions']}</Text>
                        </View>
                    </View>

                    <View style={StyleMyBookingDetails.detailsRow}>
                        <View style={{flex:1}}>
                            <Text style={StyleMyBookingDetails.detailsKey}>{Constants.DROP_OF_ADDRESS} 1</Text>
                        </View>
                        <View style={{flex:1}}>
                            <Text style={StyleMyBookingDetails.detailsValue}>{book_item['drop_address_1']}</Text>
                        </View>
                    </View>

                    <View style={StyleMyBookingDetails.detailsRow}>
                        <View style={{flex:1}}>
                            <Text style={StyleMyBookingDetails.detailsKey}>{Constants.DROP_OF_ADDRESS} 2</Text>
                        </View>
                        <View style={{flex:1}}>
                            <Text style={StyleMyBookingDetails.detailsValue}>{book_item['drop_address_2']}</Text>
                        </View>
                    </View>

                    <View style={StyleMyBookingDetails.detailsRow}>
                        <View style={{flex:1}}>
                            <Text style={StyleMyBookingDetails.detailsKey}>{Constants.TRUCK_TYPE}</Text>
                        </View>
                        <View style={{flex:1}}>
                            <Text style={StyleMyBookingDetails.detailsValue}>{book_item['truck_type']}</Text>
                        </View>
                    </View>

                    <View style={StyleMyBookingDetails.detailsRow}>
                        <View style={{flex:1}}>
                            <Text style={StyleMyBookingDetails.detailsKey}>{Constants.LOAD_CATEGORY}</Text>
                        </View>
                        <View style={{flex:1}}>
                            <Text style={StyleMyBookingDetails.detailsValue}>{book_item['load_category']}</Text>
                        </View>
                    </View>

                    <View style={StyleMyBookingDetails.detailsRow}>
                        <View style={{flex:1}}>
                            <Text style={StyleMyBookingDetails.detailsKey}>{Constants.OTHER_SERVICES}</Text>
                        </View>
                        <View style={{flex:1}}>
                            <FlatList
                                data={book_item.other_services}
                                numColumns={1}
                                keyExtractor={(index)=>index.toString()}
                                renderItem={
                                    ({index,item})=>
                                       <View>
                                            <Text style={StyleMyBookingDetails.detailsValue}>
                                                {index+1}. {item.service_name} - {item.qnt}
                                            </Text>
                                        </View>
                                }
                            />
                        </View>
                    </View>

                    <View style={StyleMyBookingDetails.detailsRow}>
                        <View style={{flex:1}}>
                            <Text style={StyleMyBookingDetails.detailsKey}>{Constants.TOTAL_PRICE}</Text>
                        </View>
                        <View style={{flex:1}}>
                            <Text style={[StyleMyBookingDetails.detailsValue,{color:Constants.COLOR_GREEN}]}>{book_item['price']}</Text>
                        </View>
                    </View>

                    <View style={book_item['status']=="picked_up"?StyleMyBookingDetails.detailsRow:{display:'none'}}>
                        <View style={{flex:1}}>
                            <Text style={StyleMyBookingDetails.detailsKey}>{Constants.DRIVER_NAME}</Text>
                        </View>
                        <View style={{flex:1}}>
                            <Text style={StyleMyBookingDetails.detailsValue}>{book_item['driver_name']}</Text>
                        </View>
                    </View>

                    <View style={book_item['status']=="picked_up"?StyleMyBookingDetails.detailsRow:{display:'none'}}>
                        <View style={{flex:1}}>
                            <Text style={StyleMyBookingDetails.detailsKey}>{Constants.DRIVER_NAME}</Text>
                        </View>
                        <View style={{flex:1}}>
                            <Text style={StyleMyBookingDetails.detailsValue}>{book_item['driver_number']}</Text>
                        </View>
                    </View>

                    <View style={book_item['status']=="picked_up"?StyleMyBookingDetails.detailsRow:{display:'none'}}>
                        <View style={{flex:1}}>
                            <Text style={StyleMyBookingDetails.detailsKey}>{Constants.VEHICLE_REG_NUMBER}</Text>
                        </View>
                        <View style={{flex:1}}>
                            <Text style={StyleMyBookingDetails.detailsValue}>{book_item['vehicle_reg_numbere']}</Text>
                        </View>
                    </View>

                    <View style={StyleMyBookingDetails.detailsRow}>
                        <View style={{flex:1}}>
                            <Text style={StyleMyBookingDetails.detailsKey}>{Constants.CURRENT_STATUS}</Text>
                        </View>
                        <View style={{flex:1}}>
                            <Text style={[StyleMyBookingDetails.detailsValue,{color:Constants.COLOR_GREEN}]}>
                                {
                                    book_item['status']=="order_placed"?"Order Placed"
                                    :
                                    book_item['status']=="driver_assigned"?"Driver Assigned"
                                    :
                                    book_item['status']=="picked_up"?"Picked Up"
                                    :
                                    book_item['status']=="in_process"?"In Process"
                                    :
                                    book_item['status']=="delivered"?"Delivered"
                                    :
                                    book_item['status']=="cancelled"?"Cancelled"
                                    :null
                                }
                            </Text>
                        </View>
                    </View>

                    <View style={{flexDirection:'row', marginVertical:20, justifyContent:'center', alignItems:'center'}}>
                        <TouchableOpacity style={book_item['status']=="order_placed"?[StyleMyBookingDetails.buttionView,{marginRight:15}]:[StyleMyBookingDetails.buttionView,{marginRight:15, width:'90%'}]}>
                            <Text style={StyleMyBookingDetails.buttonText}>{Constants.SHARE_MY_RIDE}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={book_item['status']=="order_placed"?StyleMyBookingDetails.buttionView:{display:'none'}}>
                            <Text style={StyleMyBookingDetails.buttonText}>{Constants.CANCEL_ORDER}</Text>
                        </TouchableOpacity>
                    </View>

                </ScrollView>

                <FooterBar navigation={navigation}/>

            </View>
        )
    }
}