/*
    screen no :- MANAPPCUS0 80,82,83,84,85,86,88,89
    design by :  Udayraj
 */
import React from 'react'
import {View,Text,Image,TouchableOpacity,TouchableWithoutFeedback,ScrollView,FlatList,TextInput,} from 'react-native'
import Constants from '../config/Constants'
import HeaderBar from '../config/HeaderBar'
import FooterBar from '../config/FooterBar'
import {StyleMyBookingDetails} from '../config/CommonStyles'
import {Card,CardItem} from 'native-base'
import Modal from "react-native-modal";

export default class MyBookingDetails extends React.Component{
    constructor(props){
        super(props)
        this.state={
            isInfoViewVisible1:false,
            isInfoViewVisible2:false,
            isReasonModalvisible:false,
            reasonText:"",
            reasonSubmit:false,
        }
    }
    cancelOrder(){
        this.setState({reasonText:"", reasonSubmit:true})
    }
    showReasonView(){
        return(
            <View style={StyleMyBookingDetails.reasonView}>
                <TouchableWithoutFeedback
                    style={{position:'absolute', right:5, top:3,}}
                    onPress={()=>{this.setState({isReasonModalvisible:false})}}
                >
                    <Image source={require('../images/close.png')} style={StyleMyBookingDetails.reasonCloser}/>
                </TouchableWithoutFeedback>
                <Text style={StyleMyBookingDetails.reasonTitle}>{Constants.CANCEL_REASON}</Text>
                <View style={StyleMyBookingDetails.reasonTextView}>
                    <TextInput
                        style={StyleMyBookingDetails.reasonText}
                        placeholder="Enter Cancel Reason"
                        placeholderTextColor="rgba(64,64,64,0.5)"
                        multiline={true}
                        value={this.state.reasonText}
                        onChangeText={(value)=>{this.setState({reasonText:value})}}
                    />
                </View>
                <Text style={StyleMyBookingDetails.reasonNote}>Note: Cancecellation charges will be levied based on the time prior to pick-up</Text>
                <TouchableOpacity style={StyleMyBookingDetails.reasonButtonView}
                    onPress={()=>{this.cancelOrder()}}
                >
                    <Text style={StyleMyBookingDetails.reasonButtonText}>{Constants.CANCEL_ORDER}</Text>
                </TouchableOpacity>
            </View>
        )
    }
    showReasonSubmitSuccess(){
        return(
            <View style={StyleMyBookingDetails.reasonView}>
                <TouchableWithoutFeedback
                    style={{position:'absolute', right:5, top:3,}}
                    onPress={()=>{this.setState({isReasonModalvisible:false})}}
                >
                    <Image source={require('../images/close.png')} style={StyleMyBookingDetails.reasonCloser}/>
                </TouchableWithoutFeedback>
                <Text style={{marginVertical:8,color:Constants.COLOR_GREEN_DARK, fontSize:Constants.FONT_SIZE_LARGE, textAlign:'center'}}>
                    Your request for cancellation has{'\n'}been processed.
                </Text>
                <TouchableOpacity style={StyleMyBookingDetails.reasonButtonView}
                    onPress={()=>{
                        this.setState({isReasonModalvisible:false,reasonSubmit:false})
                    }}
                >
                    <Text style={StyleMyBookingDetails.reasonButtonText}>{Constants.OK}</Text>
                </TouchableOpacity>
            </View>
 
        )
    }
    render(){
        let {navigation} = this.props
        let book_item = this.props.navigation.getParam('book_item')
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
                        <View style={{flex:1, flexDirection:'row', paddingLeft:10}}>
                            <Text style={
                                book_item['status']=="in_process"
                                ?
                                    [StyleMyBookingDetails.detailsValue,{width:'90%',}]
                                :
                                book_item['status']=="delivered"
                                ?
                                    [StyleMyBookingDetails.detailsValue,{width:'90%',}]
                                :
                                    StyleMyBookingDetails.detailsValue}>{book_item['drop_address_1']}
                            </Text>
                            <TouchableWithoutFeedback
                                onPress={()=>{
                                    this.setState({isInfoViewVisible1:true})
                                    let timer = setInterval(()=>{
                                        this.setState({isInfoViewVisible1:false})
                                        clearInterval(timer)
                                      },3000)
                                }}
                                style={
                                    book_item['status']=="in_process"
                                    ?
                                        {display:'flex'}
                                    :
                                        book_item['status']=="delivered"
                                    ?
                                        {display:'flex'}
                                    :
                                        {display:'none'}}
                            >
                                <Image
                                    source={require('../images/info.png')}
                                    style={
                                        book_item['status']=="in_process"
                                        ?
                                            {width:22, height:22, resizeMode:'stretch'}
                                        :
                                        book_item['status']=="delivered"
                                        ?
                                            {width:22, height:22, resizeMode:'stretch'}
                                        :
                                            {display:'none'}}
                                />
                            </TouchableWithoutFeedback>
                            <View style={ this.state.isInfoViewVisible1?StyleMyBookingDetails.infoView:{display:'none'}}>
                                <Card style={{borderRadius:4, backgroundColor:Constants.COLOR_WHITE}}>
                                    <CardItem style={{flexDirection :'column',justifyContent:'center', alignItems:'center', borderRadius:4, backgroundColor:Constants.COLOR_WHITE}}>
                                        <View style={StyleMyBookingDetails.infoViewShape}>
                                        </View>
                                        <Text style={StyleMyBookingDetails.infoViewTitle}>Delivered at</Text>
                                        <Text style={StyleMyBookingDetails.infoViewDesc}>{book_item.expected_pickup}</Text>
                                    </CardItem>
                                </Card>
                            </View>
                        </View>
                    </View>

                    <View style={StyleMyBookingDetails.detailsRow}>
                        <View style={{flex:1}}>
                            <Text style={StyleMyBookingDetails.detailsKey}>{Constants.DROP_OF_ADDRESS} 2</Text>
                        </View>
                        <View style={{flex:1}}>
                            <View style={{flex:1, flexDirection:'row', paddingLeft:10}}>
                            <Text style={book_item['status']=="delivered"?[StyleMyBookingDetails.detailsValue,{width:'90%',}]:StyleMyBookingDetails.detailsValue}>{book_item['drop_address_2']}
                            </Text>
                            <TouchableWithoutFeedback
                                onPress={()=>{
                                    this.setState({isInfoViewVisible2:true})
                                    let timer = setInterval(()=>{
                                        this.setState({isInfoViewVisible2:false})
                                        clearInterval(timer)
                                      },3000)
                                }}
                                style={book_item['status']=="delivered"?{display:'flex'}:{display:'none'}}
                            >
                                <Image
                                    source={require('../images/info.png')}
                                    style={ book_item['status']=="delivered"?{width:22, height:22, resizeMode:'stretch'}:{display:'none'}}
                                />
                            </TouchableWithoutFeedback>
                            <View style={ this.state.isInfoViewVisible2?StyleMyBookingDetails.infoView:{display:'none'}}>
                                <Card style={{borderRadius:4, backgroundColor:Constants.COLOR_WHITE}}>
                                    <CardItem style={{flexDirection :'column',justifyContent:'center', alignItems:'center', borderRadius:4, backgroundColor:Constants.COLOR_WHITE}}>
                                        <View style={StyleMyBookingDetails.infoViewShape}>
                                        </View>
                                        <Text style={StyleMyBookingDetails.infoViewTitle}>Delivered at</Text>
                                        <Text style={StyleMyBookingDetails.infoViewDesc}>{book_item.expected_pickup}</Text>
                                    </CardItem>
                                </Card>
                            </View>
                        </View>
 
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
                            <Text style={[StyleMyBookingDetails.detailsValue,{color:Constants.COLOR_GREEN}]}>R {book_item['price']}</Text>
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
                            <Text style={book_item['status']=="cancelled"?[StyleMyBookingDetails.detailsValue,{color:Constants.COLOR_RED}]:[StyleMyBookingDetails.detailsValue,{color:Constants.COLOR_GREEN}]}>
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

                    <View style={book_item['status']=="cancelled"?StyleMyBookingDetails.detailsRow:{display:'none'}}>
                        <View style={{flex:1}}>
                            <Text style={StyleMyBookingDetails.detailsKey}>{Constants.REASON}</Text>
                        </View>
                        <View style={{flex:1}}>
                            <Text style={StyleMyBookingDetails.detailsValue}>{book_item['reason']}</Text>
                        </View>
                    </View>

                    <View style={{flexDirection:'row', marginVertical:20, justifyContent:'center', alignItems:'center'}}>
                        <TouchableOpacity style={book_item['status']=="order_placed"?[StyleMyBookingDetails.buttionView,{marginRight:15}]:[StyleMyBookingDetails.buttionView,{marginRight:15, width:'90%'}]}>
                            <Text style={StyleMyBookingDetails.buttonText}>{Constants.SHARE_MY_RIDE}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={book_item['status']=="order_placed"?StyleMyBookingDetails.buttionView:{display:'none'}}
                            onPress={()=>{this.setState({isReasonModalvisible:true})}}
                        >
                            <Text style={StyleMyBookingDetails.buttonText}>{Constants.CANCEL_ORDER}</Text>
                        </TouchableOpacity>
                    </View>

                </ScrollView>

                <FooterBar navigation={navigation}/>

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
 
            </View>
        )
    }
}