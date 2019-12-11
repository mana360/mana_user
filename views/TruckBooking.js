/* screen -MANAPPCUS002
    design by -mayur
 */
import React, { Component } from 'react';
import { View, Text, Image, TextInput, ScrollView, Modal,TouchableOpacity } from 'react-native';
import {  Card,CardItem} from "native-base";
import  LinearGradient from "react-native-linear-gradient";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StyleTruckBooking } from '../config/CommonStyles';
import FooterBar from '../config/FooterBar';
import Constants from '../config/Constants';
import HeaderBar from '../config/HeaderBar';
import StarRating from "react-native-star-rating";
export default class TruckBooking extends React.Component {
    constructor() {
        super();
        this.state = {
            starCount: null,
            inputLabelTrip: '',
            reviewTrip: '',
            modal_Visible:false,
            booking_status:1
        }
    }
    onStarRatingPress(rating) {
        this.setState({ starCount: rating })
     
    }
    render() {
        let { navigation } = this.props
        return (
            <View style={{ flex: 1,backgroundColor:Constants.COLOR_GREY }}>
           <HeaderBar title="TRUCK BOOKING"  isLogout={true} navigation={navigation} />
                <View style={{ flex: 1 }}>
                    <ScrollView  bounces={false}>
                            <View style={StyleTruckBooking.topCircle}>
                            </View>
                            <Card style={{width:'90%',alignSelf:'center',maxHeight:100,marginTop:'-27%',borderRadius:5}}>
                                    <CardItem style={StyleTruckBooking.cardView} >
                                        <View style={StyleTruckBooking.ImageView}> 
                                            <Image source={this.state.booking_status>=1?require('../images/Truck_Bookings_copy.png'):require('../images/Truck_Bookings.png')}
                                                style={StyleTruckBooking.imageD}
                                                />
                                            <Text style={StyleTruckBooking.textD}>{Constants.TruckBooking}</Text>
                                        </View>

                                        <View style={StyleTruckBooking.ImageView}> 
                                        <Image source={this.state.booking_status>=2?require('../images/warehouse_services_selected.png'):require('../images/Trucking+Warehouse.png')}
                                                style={StyleTruckBooking.imageD}
                                                />
                                            <Text style={StyleTruckBooking.textD}>{Constants.WarehouseService}</Text>
                                        </View>

                                        <View style={StyleTruckBooking.ImageView}> 
                                        <Image source={this.state.booking_status>=3?require('../images/trucking_warehouse_selected.png'):require('../images/Truck_Bookings.png')}
                                                style={StyleTruckBooking.imageD}
                                                />
                                            <Text style={StyleTruckBooking.textD}>{Constants.truckingwarehouse}</Text>
                                        </View>

                                        <View style={[StyleTruckBooking.ImageView,{borderRightWidth:0}]}> 
                                        <Image source={this.state.booking_status>=4?require('../images/Collect_My_Load_active.png'):require('../images/Collect_My_Load.png')}
                                                style={StyleTruckBooking.imageD}
                                                />
                                            <Text style={StyleTruckBooking.textD}>{Constants.CollectMyLoad}</Text>
                                        </View>
                                 </CardItem>
                            </Card>
                            <Text style={StyleTruckBooking.labelText}>{Constants.TotalBookings}</Text>
                            <View style={StyleTruckBooking.bottomLine}>
                            </View>

                            <View style={StyleTruckBooking.row}>
                                 <View style={StyleTruckBooking.col1}>
                                 <Image source={require('../images/Warehouse_Services.png')}
                                 style={StyleTruckBooking.image}/>
                                </View>
                                <View style={StyleTruckBooking.col2}>
                                     <Text style={[StyleTruckBooking.labelText2]}>{Constants.CurrentTrip}</Text>
                                     <Text style={StyleTruckBooking.descText}>fnsldfn fnsldfn fnsldfn fnsldfn fnsldfn lorempipsom</Text>
                                     <TouchableOpacity style={StyleTruckBooking.button}>
                                           <Text style={StyleTruckBooking.buttonLabel}>{Constants.ViewAll}</Text>
                                     </TouchableOpacity>
                                </View>
                            </View>

                            <View style={StyleTruckBooking.row}>
                                 <View style={StyleTruckBooking.col1}>
                                 <Image source={require('../images/Warehouse_Services.png')}
                                 style={StyleTruckBooking.image}/>
                                </View>
                                <View style={StyleTruckBooking.col2}>
                                <Text style={[StyleTruckBooking.labelText2]}>{Constants.UpcomingTrip}</Text>
                                     <Text style={StyleTruckBooking.descText}>fnsldfn fnsldfn fnsldfnfnsldfnfnsldfnfnsldfn fnsldfn fnsldfn lorempipsom</Text>
                                     <TouchableOpacity style={StyleTruckBooking.button}>
                                           <Text style={StyleTruckBooking.buttonLabel}>{Constants.ViewAll}</Text>
                                     </TouchableOpacity>
                                </View>
                            </View>

                    </ScrollView>
                </View>

                <FooterBar navigation={navigation} />
            </View>
        )
    }
}